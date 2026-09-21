import type { Metadata } from "next";
import Image from "next/image";

import { EncabezadoPagina } from "@/components/ui/pildora";
import { LOCUTORES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Locutores",
  description:
    "Pastores, jóvenes del liceo y voluntarios que cada día abren el micrófono en Los Muros Caen Radio.",
  alternates: { canonical: "/locutores" },
};

export default function Locutores() {
  return (
    <main className="lmc-contenedor pt-14 pb-20">
      <EncabezadoPagina etiqueta="EQUIPO" titulo="Las voces detrás del micrófono">
        <p className="mt-0 mb-10 max-w-[54ch] leading-[1.7] font-light text-texto2">
          Pastores, jóvenes del liceo y voluntarios que cada día abren el micrófono
          para acompañarte.
        </p>
      </EncabezadoPagina>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6">
        {LOCUTORES.map((locutor) => (
          <article
            key={locutor.nombre}
            className="rounded-locutor border border-linea bg-card p-[30px] text-center shadow-lmc transition-colors hover:border-azul"
          >
            <div className="relative mx-auto h-[140px] w-[140px] overflow-hidden rounded-pill border-[3px] border-linea bg-card2">
              <Image
                src={locutor.foto}
                alt={locutor.nombre}
                fill
                sizes="140px"
                className="object-cover"
              />
            </div>
            <h2 className="mt-5 text-[22px] font-bold">{locutor.nombre}</h2>
            <div
              className="mt-2.5 inline-block rounded-pill px-4 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-azul"
              style={{ background: "rgba(47,125,246,0.12)" }}
            >
              {locutor.rol}
            </div>
            <p className="mt-4 mb-0 text-[14px] leading-[1.7] font-light text-texto2">
              {locutor.bio}
            </p>
            <div className="mt-4 text-[13px] font-medium text-texto3">
              {locutor.programa}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
