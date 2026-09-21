import type { Metadata } from "next";

import { Parrilla } from "@/components/programacion/parrilla";
import { EncabezadoPagina } from "@/components/ui/pildora";
import { enAire } from "@/lib/horario";

export const metadata: Metadata = {
  title: "Programación",
  description:
    "Nuestra semana al aire: horarios de todos los programas de Los Muros Caen Radio, hora de Colombia (GMT-5).",
  alternates: { canonical: "/programacion" },
};

export const revalidate = 300;

export default function Programacion() {
  return (
    <main className="lmc-contenedor pt-14 pb-20">
      <EncabezadoPagina etiqueta="PROGRAMACIÓN" titulo="Nuestra semana al aire">
        <p className="mt-0 mb-8 max-w-[54ch] leading-[1.7] font-light text-texto2">
          Hora de Colombia (GMT-5). La señal nunca se apaga: fuera de los bloques en
          vivo suena música de alabanza continua.
        </p>
      </EncabezadoPagina>

      <Parrilla inicial={enAire()} />
    </main>
  );
}
