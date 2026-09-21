const ACORDES = [
  [146.83, 220, 293.66],
  [110, 164.81, 261.63],
  [123.47, 185.0, 246.94],
  [98.0, 146.83, 196.0],
];

/**
 * Sin URL de stream, sintetiza un pad de acordes para que la demo suene.
 * Con stream real solo enruta el <audio> por el AnalyserNode.
 */
export class MotorAudio {
  analizador: AnalyserNode | null = null;

  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private filtro: BiquadFilterNode | null = null;
  private voces: { o: OscillatorNode; g: GainNode }[] = [];
  private fuente: MediaElementAudioSourceNode | null = null;
  private acordeTimer: ReturnType<typeof setInterval> | null = null;
  private paso = 0;
  private demo = false;

  private crearContexto() {
    if (this.ctx) return this.ctx;
    const Ctx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctx) return null;
    this.ctx = new Ctx();
    this.analizador = this.ctx.createAnalyser();
    this.analizador.fftSize = 64;
    this.analizador.connect(this.ctx.destination);
    return this.ctx;
  }

  conectarElemento(audio: HTMLAudioElement) {
    const ctx = this.crearContexto();
    if (!ctx || this.fuente || !this.analizador) return;
    try {
      this.fuente = ctx.createMediaElementSource(audio);
      this.fuente.connect(this.analizador);
    } catch {
      this.fuente = null;
    }
  }

  reanudar() {
    void this.ctx?.resume();
  }

  iniciarDemo(volumen: number) {
    const ctx = this.crearContexto();
    if (!ctx || !this.analizador) return;
    void ctx.resume();
    this.demo = true;

    if (!this.master) {
      this.master = ctx.createGain();
      this.master.gain.value = 0.0001;
      this.master.connect(this.analizador);

      this.filtro = ctx.createBiquadFilter();
      this.filtro.type = "lowpass";
      this.filtro.frequency.value = 900;
      this.filtro.connect(this.master);

      this.voces = [0, 1, 2].map((i) => {
        const o = ctx.createOscillator();
        o.type = i === 2 ? "sine" : "triangle";
        o.detune.value = (i - 1) * 6;
        const g = ctx.createGain();
        g.gain.value = i === 2 ? 0.07 : 0.11;
        o.connect(g);
        g.connect(this.filtro!);
        o.start();
        return { o, g };
      });

      this.aplicarAcorde();
      this.acordeTimer = setInterval(() => this.aplicarAcorde(), 5200);
    }

    this.master.gain.setTargetAtTime(this.ganancia(volumen), ctx.currentTime, 0.9);
  }

  pararDemo() {
    if (this.ctx && this.master) {
      this.master.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.4);
    }
  }

  ajustarVolumen(volumen: number) {
    if (this.demo && this.ctx && this.master) {
      this.master.gain.setTargetAtTime(
        this.ganancia(volumen),
        this.ctx.currentTime,
        0.15,
      );
    }
  }

  destruir() {
    if (this.acordeTimer) clearInterval(this.acordeTimer);
    this.voces.forEach(({ o }) => o.stop());
    void this.ctx?.close();
    this.ctx = null;
    this.analizador = null;
  }

  private ganancia(volumen: number) {
    return (volumen / 100) * 0.4;
  }

  private aplicarAcorde() {
    if (!this.ctx || !this.filtro) return;
    const acorde = ACORDES[this.paso % ACORDES.length];
    this.paso++;
    const t = this.ctx.currentTime;
    this.voces.forEach((v, i) => v.o.frequency.setTargetAtTime(acorde[i], t, 1.1));
    this.filtro.frequency.setTargetAtTime(620 + Math.random() * 700, t, 1.8);
  }
}
