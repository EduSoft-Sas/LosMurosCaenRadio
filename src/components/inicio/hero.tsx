"use client";

import Image from "next/image";
import Link from "next/link";
import { Pause, Play } from "lucide-react";

import { formatearHora, type EnAire } from "@/lib/horario";
import { SITIO } from "@/lib/site";
import { useReproductor } from "@/lib/store/reproductor";
import { useEnAire } from "@/lib/usar-en-aire";

export function Hero({ inicial }: { inicial: EnAire }) {
  const { actual, siguiente } = useEnAire(inicial);
  const { sonando, alternar } = useReproductor();

  return (
    <section className="lmc-contenedor grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-12 pt-14 pb-11">
      <div className="lmc-rise-hero">
        <div className="mb-[26px] inline-flex items-center gap-[9px] rounded-pill border border-linea bg-card2 px-4 py-2 text-[12px] font-semibold tracking-[0.06em] text-rojo">
          <span className="lmc-blink h-2 w-2 rounded-full bg-rojo" />
          EN VIVO · 24/7 · SANTA ROSA DE CABAL
        </div>

        <h1 className="m-0 text-[clamp(40px,6vw,80px)] leading-[1.02] font-extrabold tracking-[-0.03em] text-balance">
          Los muros caen cuando <span className="text-azul">suena la fe</span>
        </h1>

        <p className="my-6 mb-8 max-w-[46ch] text-[17px] leading-[1.7] font-light text-pretty text-texto2">
          Transmitimos esperanza, fe y restauración las 24 horas. Alabanza, palabra y
          las voces de nuestra comunidad — desde Risaralda para el mundo.
        </p>

        <div className="flex flex-wrap gap-3.5">
          <button
            type="button"
            onClick={alternar}
            className="flex cursor-pointer items-center gap-3 rounded-pill bg-azul px-8 py-4 text-[15px] font-semibold text-white shadow-azul transition-colors hover:bg-azul2"
          >
            {sonando ? (
              <Pause size={15} fill="currentColor" />
            ) : (
              <Play size={15} fill="currentColor" />
            )}
            {sonando ? "Al aire ahora" : "Escuchar en vivo"}
          </button>
          <Link
            href="/programacion"
            className="rounded-pill border border-linea bg-card2 px-8 py-4 text-[15px] font-medium text-texto transition-colors hover:border-azul hover:text-azul"
          >
            Ver programación
          </Link>
        </div>
      </div>

      <div
        className="rounded-big border border-linea bg-card p-5 shadow-lmc"
        style={{
          animation:
            "lmcRise 0.7s cubic-bezier(.2,.7,.2,1) 0.12s both",
        }}
      >
        <div className="relative aspect-[16/11] overflow-hidden rounded-voz bg-card2">
          <Image
            src={SITIO.estudio}
            alt="Estudio de Los Muros Caen Radio"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 600px"
            className="lmc-zoom object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(6,14,28,0.82), rgba(6,14,28,0) 58%)",
            }}
          />
          <div className="absolute top-4 left-4 flex items-center gap-[7px] rounded-pill bg-rojo px-3.5 py-[7px] text-[11px] font-bold tracking-[0.08em] text-white">
            <span className="lmc-blink h-[7px] w-[7px] rounded-full bg-white" />
            EN VIVO
          </div>
          <div className="absolute right-5 bottom-[18px] left-5">
            <div className="text-[11px] font-semibold tracking-[0.16em] text-white/70">
              AHORA SUENA
            </div>
            <div className="mt-1 text-[26px] leading-[1.2] font-bold text-white">
              {actual.nombre}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 px-2 pt-[18px] pb-1.5">
          <div className="text-[14px] text-texto2">
            {actual.locutor} · {formatearHora(actual.h)}
          </div>
          <div className="rounded-pill bg-card2 px-4 py-2 text-[12px] font-medium text-texto2">
            Sigue: {siguiente.nombre} · {formatearHora(siguiente.h)}
          </div>
        </div>
      </div>
    </section>
  );
}
