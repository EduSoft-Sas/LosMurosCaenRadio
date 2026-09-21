"use client";

import { useEffect, useRef } from "react";

const BARRAS = [
  { duracion: "0.9s", retardo: "0s" },
  { duracion: "1.3s", retardo: "-0.2s" },
  { duracion: "0.7s", retardo: "-0.5s" },
  { duracion: "1.1s", retardo: "-0.8s" },
  { duracion: "0.8s", retardo: "-0.3s" },
  { duracion: "1.5s", retardo: "-1s" },
];

type Props = {
  sonando: boolean;
  obtenerAnalizador: () => AnalyserNode | null;
};

export function Visualizador({ sonando, obtenerAnalizador }: Props) {
  const contenedor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const paso = () => {
      raf = requestAnimationFrame(paso);
      const barras = contenedor.current?.children;
      if (!barras) return;
      const analizador = obtenerAnalizador();

      if (!analizador || !sonando) {
        for (const barra of barras) {
          (barra as HTMLElement).style.animationPlayState = "running";
          (barra as HTMLElement).style.transform = "";
        }
        return;
      }

      const datos = new Uint8Array(analizador.frequencyBinCount);
      analizador.getByteFrequencyData(datos);
      const silencio = datos.every((v) => v === 0);

      for (let i = 0; i < barras.length; i++) {
        const barra = barras[i] as HTMLElement;
        if (silencio) {
          barra.style.animationPlayState = "running";
          barra.style.transform = "";
          continue;
        }
        const v = datos[(i * 3) % datos.length] / 255;
        barra.style.animationPlayState = "paused";
        barra.style.transform = `scaleY(${Math.max(0.14, Math.min(1, v * 2.2))})`;
        barra.style.transition = "transform 90ms linear";
      }
    };
    paso();
    return () => cancelAnimationFrame(raf);
  }, [sonando, obtenerAnalizador]);

  return (
    <div
      ref={contenedor}
      aria-hidden
      className="hidden h-[26px] w-[44px] shrink-0 items-end gap-[3px] transition-opacity sm:flex"
      style={{ opacity: sonando ? 1 : 0.35 }}
    >
      {BARRAS.map((b, i) => (
        <div
          key={i}
          className="h-full flex-1 origin-bottom rounded-[2px] bg-azul2"
          style={{
            animation: `lmcBar ${b.duracion} ease-in-out infinite`,
            animationDelay: b.retardo,
          }}
        />
      ))}
    </div>
  );
}
