import type { Metadata } from "next";

import { FormularioCancion } from "@/components/formularios/formulario-cancion";
import { EncabezadoPagina } from "@/components/ui/pildora";
import { ULTIMAS_CANCIONES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pide tu canción",
  description:
    "Pide tu canción en Los Muros Caen Radio y dedícasela a quien amas. La leemos al aire en el bloque de las 4:00 p.m.",
  alternates: { canonical: "/pide-tu-cancion" },
};

export default function PideTuCancion() {
  return (
    <main className="lmc-contenedor grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-12 pt-14 pb-20">
      <div>
        <EncabezadoPagina
          etiqueta="PETICIÓN MUSICAL"
          titulo={
            <>
              Pide tu <span className="text-azul">canción</span>
            </>
          }
        >
          <p className="max-w-[46ch] leading-[1.7] font-light text-texto2">
            Escribe la canción y a quién se la dedicas. La leemos al aire en el
            bloque de las 4:00 p.m. y te escribimos cuando esté programada.
          </p>
        </EncabezadoPagina>

        <section className="mt-8 rounded-card border border-linea bg-card p-7 shadow-lmc">
          <h2 className="text-[12px] font-semibold tracking-[0.12em] text-texto3">
            ÚLTIMAS AL AIRE
          </h2>
          {ULTIMAS_CANCIONES.map((c) => (
            <div
              key={c.titulo}
              className="flex items-center justify-between gap-4 border-b border-linea py-3.5 text-[14px]"
            >
              <span className="font-medium">
                {c.titulo}{" "}
                <span className="font-light text-texto3">— {c.artista}</span>
              </span>
              <span className="rounded-pill bg-card2 px-3.5 py-1.5 text-[12px] whitespace-nowrap text-texto2">
                {c.para}
              </span>
            </div>
          ))}
        </section>
      </div>

      <div className="rounded-big border border-linea bg-card p-[34px] shadow-lmc">
        <FormularioCancion />
      </div>
    </main>
  );
}
