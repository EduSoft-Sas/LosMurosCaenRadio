"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import { ChevronDown, Pause, Play, Volume2 } from "lucide-react";

import { Visualizador } from "@/components/reproductor/visualizador";
import { MotorAudio } from "@/lib/audio";
import { formatearHora, type EnAire } from "@/lib/horario";
import { SITIO } from "@/lib/site";
import { useReproductor } from "@/lib/store/reproductor";
import { useEnAire } from "@/lib/usar-en-aire";

export function Reproductor({ inicial }: { inicial: EnAire }) {
  const { actual } = useEnAire(inicial);
  const { sonando, volumen, oyentes, alternar, setVolumen, setOyentes } =
    useReproductor();

  const audio = useRef<HTMLAudioElement>(null);
  const motor = useRef<MotorAudio | null>(null);

  const obtenerMotor = useCallback(() => {
    motor.current ??= new MotorAudio();
    return motor.current;
  }, []);

  const obtenerAnalizador = useCallback(
    () => motor.current?.analizador ?? null,
    [],
  );

  useEffect(() => {
    const id = setInterval(() => {
      setOyentes((n) => Math.max(180, n + Math.round((Math.random() - 0.45) * 7)));
    }, 6000);
    return () => clearInterval(id);
  }, [setOyentes]);

  useEffect(() => {
    return () => motor.current?.destruir();
  }, []);

  useEffect(() => {
    const elemento = audio.current;
    if (elemento) elemento.volume = volumen / 100;
    motor.current?.ajustarVolumen(volumen);
  }, [volumen]);

  useEffect(() => {
    const elemento = audio.current;
    const m = obtenerMotor();

    if (!sonando) {
      elemento?.pause();
      m.pararDemo();
      return;
    }

    if (SITIO.streamUrl && elemento) {
      if (elemento.src !== SITIO.streamUrl) elemento.src = SITIO.streamUrl;
      elemento.volume = volumen / 100;
      elemento
        .play()
        .then(() => {
          m.conectarElemento(elemento);
          m.reanudar();
        })
        .catch(() => m.iniciarDemo(volumen));
      return;
    }

    m.iniciarDemo(volumen);
    // El volumen se sincroniza en su propio efecto; aquí solo importa play/pausa.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sonando, obtenerMotor]);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-60"
      style={{ background: "#0A1526", borderTop: "1px solid #16243C" }}
    >
      <audio ref={audio} preload="none" crossOrigin="anonymous" className="hidden" />

      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-[18px] px-6 py-3">
        <button
          type="button"
          onClick={alternar}
          aria-label={sonando ? "Pausar transmisión" : "Escuchar en vivo"}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-pill bg-azul text-white transition-colors hover:bg-azul2"
          style={{ boxShadow: "0 8px 20px rgba(47,125,246,0.34)" }}
        >
          {sonando ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
        </button>

        <Image
          src={SITIO.logo}
          alt=""
          width={36}
          height={36}
          className="hidden h-9 w-9 shrink-0 rounded-pill object-cover sm:block"
        />

        <div
          className="hidden shrink-0 items-center gap-2 rounded-pill px-[13px] py-[5px] text-[11px] font-bold tracking-[0.04em] text-white sm:flex"
          style={{ background: "var(--rojo)" }}
        >
          <span className="lmc-blink h-[7px] w-[7px] rounded-full bg-white" />
          EN VIVO
        </div>

        <div className="min-w-[160px] shrink grow-0 basis-auto">
          <div className="text-[15px] leading-[1.3] font-semibold text-white">
            {actual.nombre} · 24/7
          </div>
          <div className="text-[12px] font-light" style={{ color: "#8FA2BE" }}>
            {actual.locutor} · {formatearHora(actual.h)}
          </div>
        </div>

        <Link
          href="/programacion"
          aria-label="Ver programación"
          className="hidden h-[30px] w-[30px] shrink-0 place-items-center rounded-pill transition-colors sm:grid"
          style={{ color: "#8FA2BE" }}
        >
          <ChevronDown size={16} />
        </Link>

        <div className="flex-1 basis-10" />

        <Visualizador sonando={sonando} obtenerAnalizador={obtenerAnalizador} />

        <div
          className="flex shrink-0 items-center gap-2.5"
          style={{ color: "#8FA2BE" }}
        >
          <Volume2 size={16} />
          <input
            type="range"
            min={0}
            max={100}
            value={volumen}
            aria-label="Volumen"
            onChange={(e) => setVolumen(Number(e.target.value))}
            className="w-[110px]"
          />
        </div>

        <div
          className="hidden shrink-0 text-[12px] font-light sm:block"
          style={{ color: "#6F83A0" }}
        >
          {oyentes} oyentes
        </div>
      </div>
    </div>
  );
}
