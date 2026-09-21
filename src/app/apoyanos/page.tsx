import type { Metadata } from "next";
import Link from "next/link";

import { EncabezadoPagina } from "@/components/ui/pildora";
import { APORTES, MEDIOS_PAGO } from "@/lib/data";
import { SITIO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apóyanos",
  description:
    "Tu aporte mantiene encendida la señal de Los Muros Caen Radio: transmisor, internet, equipos y becas del semillero de radio.",
  alternates: { canonical: "/apoyanos" },
};

export default function Apoyanos() {
  return (
    <main className="lmc-contenedor pt-14 pb-20">
      <EncabezadoPagina
        etiqueta="SIEMBRA"
        titulo={
          <span className="block max-w-[17ch]">
            Tu aporte mantiene la señal encendida
          </span>
        }
      >
        <p className="mt-0 mb-10 max-w-[56ch] leading-[1.7] font-light text-texto2">
          La emisora se sostiene con ofrendas voluntarias. Cada peso paga transmisor,
          internet, equipos y las becas de los jóvenes del liceo que aprenden radio.
        </p>
      </EncabezadoPagina>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {APORTES.map((aporte) => (
          <article
            key={aporte.monto + aporte.periodo}
            className="rounded-locutor border border-linea bg-card px-[30px] py-[34px] shadow-lmc transition-colors hover:border-azul"
          >
            <div className="text-[40px] leading-none font-extrabold tracking-[-0.02em] text-azul">
              {aporte.monto}
            </div>
            <div className="mt-2.5 inline-block rounded-pill bg-card2 px-4 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-texto3">
              {aporte.periodo}
            </div>
            <p className="mt-[18px] mb-[22px] text-[15px] leading-[1.7] font-light text-texto2">
              {aporte.impacto}
            </p>
            <Link
              href={SITIO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-pill border border-azul py-[13px] text-center text-[14px] font-semibold text-azul transition-colors hover:bg-azul hover:text-white"
            >
              Aportar
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-[26px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {MEDIOS_PAGO.map((medio) => (
          <div
            key={medio.titulo}
            className="rounded-post border border-linea bg-card2 p-7"
          >
            <div className="text-[11px] font-semibold tracking-[0.12em] text-azul">
              {medio.etiqueta}
            </div>
            <div className="mt-2.5 text-[22px] font-bold">{medio.titulo}</div>
            <div className="mt-1.5 text-[14px] font-light text-texto2">
              {medio.detalle}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
