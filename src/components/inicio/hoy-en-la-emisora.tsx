"use client";

import Link from "next/link";

import { formatearHora, type EnAire } from "@/lib/horario";
import { useEnAire } from "@/lib/usar-en-aire";

export function HoyEnLaEmisora({ inicial }: { inicial: EnAire }) {
  const { lista, indice } = useEnAire(inicial);
  const destacados = [0, 1, 2].map((k) => lista[(indice + k) % lista.length]);

  return (
    <section className="lmc-contenedor py-[72px]">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-5">
        <h2 className="m-0 text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.02em]">
          Hoy en la emisora
        </h2>
        <Link
          href="/programacion"
          className="rounded-pill border border-linea px-[22px] py-[11px] text-[14px] font-medium text-azul transition-colors hover:border-azul hover:bg-azul hover:text-white"
        >
          Parrilla completa →
        </Link>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6">
        {destacados.map((programa, k) => (
          <article
            key={`${programa.nombre}-${k}`}
            className="flex min-h-[230px] flex-col rounded-card border border-linea bg-card px-7 py-[30px] shadow-lmc transition-colors hover:border-azul"
          >
            <div
              className={`inline-flex self-start items-center gap-2 rounded-pill px-[15px] py-[7px] text-[11px] font-bold tracking-[0.08em] ${
                k === 0 ? "bg-rojo text-white" : "bg-card2 text-texto2"
              }`}
            >
              {formatearHora(programa.h)} · {k === 0 ? "AL AIRE" : "PRÓXIMO"}
            </div>
            <h3 className="mt-4 text-[25px] leading-[1.2] font-bold tracking-[-0.01em]">
              {programa.nombre}
            </h3>
            <p className="mt-2.5 text-[14px] leading-[1.65] font-light text-texto2">
              {programa.desc}
            </p>
            <div className="mt-auto pt-[18px] text-[13px] font-medium text-texto3">
              {programa.locutor}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
