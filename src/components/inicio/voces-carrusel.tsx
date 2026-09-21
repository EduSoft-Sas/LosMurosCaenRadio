"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Pildora } from "@/components/ui/pildora";
import { LOCUTORES } from "@/lib/data";

export function VocesCarrusel() {
  const pista = useRef<HTMLDivElement>(null);

  const desplazar = (delta: number) =>
    pista.current?.scrollBy({ left: delta, behavior: "smooth" });

  return (
    <section className="lmc-contenedor py-[72px]">
      <Pildora tono="azul2">NUESTRO EQUIPO</Pildora>

      <div className="mt-[18px] mb-[30px] flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="m-0 text-[clamp(30px,4.4vw,50px)] font-extrabold tracking-[-0.025em]">
            Las voces detrás de Los Muros Caen
          </h2>
          <p className="mt-3 mb-0 max-w-[52ch] text-[16px] leading-[1.7] font-light text-texto2">
            Conoce a quienes hacen posible que cada día la esperanza llegue a través
            de nuestra emisora.
          </p>
        </div>

        <div className="hidden shrink-0 gap-2.5 sm:flex">
          {[
            { etiqueta: "Anterior", delta: -290, Icono: ChevronLeft },
            { etiqueta: "Siguiente", delta: 290, Icono: ChevronRight },
          ].map(({ etiqueta, delta, Icono }) => (
            <button
              key={etiqueta}
              type="button"
              aria-label={etiqueta}
              onClick={() => desplazar(delta)}
              className="grid h-10 w-10 place-items-center rounded-pill border border-linea bg-card2 text-texto2 transition-colors duration-200 hover:border-azul2 hover:text-azul2"
            >
              <Icono size={15} />
            </button>
          ))}
        </div>
      </div>

      <div
        ref={pista}
        className="lmc-sin-scrollbar flex gap-[22px] overflow-x-auto scroll-smooth px-1 pt-1 pb-4"
      >
        {LOCUTORES.map((locutor) => (
          <article
            key={locutor.nombre}
            className="lmc-voz-card shrink-0 basis-[268px] overflow-hidden rounded-voz bg-card shadow-lmc"
          >
            <div className="lmc-voz-foto relative aspect-[4/5] overflow-hidden bg-card2">
              <Image
                src={locutor.foto}
                alt={locutor.nombre}
                fill
                sizes="268px"
                className="object-cover transition-transform duration-500 ease-out"
              />
            </div>
            <div className="px-[22px] pt-5 pb-6">
              <div className="text-[18px] font-bold tracking-[-0.01em]">
                {locutor.nombre}
              </div>
              <div className="mt-1.5 text-[14px] font-medium text-azul2">
                {locutor.cargo}
              </div>
              <div className="mt-1.5 text-[13px] font-light text-texto3">
                {locutor.programa}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
