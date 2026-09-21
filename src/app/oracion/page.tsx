import type { Metadata } from "next";

import { FormularioOracion } from "@/components/formularios/formulario-oracion";
import { EncabezadoPagina } from "@/components/ui/pildora";
import { TESTIMONIOS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Oración",
  description:
    "Envía tu petición de oración a Los Muros Caen Radio. Cada noche a las 8:00 p.m. el equipo intercede al aire.",
  alternates: { canonical: "/oracion" },
};

const CIFRAS = [
  { valor: "1.482", texto: "Peticiones este año" },
  { valor: "24/7", texto: "Cadena de oración" },
];

export default function Oracion() {
  return (
    <main className="lmc-contenedor grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-12 pt-14 pb-20">
      <div>
        <EncabezadoPagina
          etiqueta="MURO DE ORACIÓN"
          tono="rojo"
          titulo={
            <>
              Oramos <span className="text-rojo">por ti</span>
            </>
          }
        >
          <p className="max-w-[46ch] leading-[1.7] font-light text-texto2">
            Cada noche a las 8:00 p.m. el equipo intercede al aire por las peticiones
            recibidas. Puedes enviarla de forma anónima.
          </p>
        </EncabezadoPagina>

        <div className="mt-[30px] flex flex-wrap gap-4">
          {CIFRAS.map((c) => (
            <div
              key={c.valor}
              className="flex-1 basis-[150px] rounded-voz border border-linea bg-card px-7 py-[22px]"
            >
              <div className="text-[42px] leading-none font-extrabold text-azul">
                {c.valor}
              </div>
              <div className="mt-1 text-[12px] font-medium text-texto3">
                {c.texto}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-[26px] rounded-card border border-linea bg-card p-7 shadow-lmc">
          <h2 className="mb-1.5 text-[12px] font-semibold tracking-[0.12em] text-texto3">
            TESTIMONIOS RECIENTES
          </h2>
          {TESTIMONIOS.map((t) => (
            <figure key={t.autor} className="m-0 border-b border-linea py-4">
              <blockquote className="m-0 text-[16px] leading-[1.6]">
                “{t.texto}”
              </blockquote>
              <figcaption className="mt-2 text-[12px] text-texto3">
                {t.autor}
              </figcaption>
            </figure>
          ))}
        </section>
      </div>

      <div className="rounded-big border border-linea bg-card p-[34px] shadow-lmc">
        <FormularioOracion />
      </div>
    </main>
  );
}
