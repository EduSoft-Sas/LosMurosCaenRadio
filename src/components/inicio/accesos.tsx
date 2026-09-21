import Link from "next/link";
import { Heart, Music, Plus } from "lucide-react";

const ACCESOS = [
  {
    href: "/pide-tu-cancion",
    Icono: Music,
    titulo: "Pide tu canción",
    texto:
      "Dedícasela a quien amas. La ponemos al aire y te avisamos por WhatsApp.",
    tono: "azul" as const,
  },
  {
    href: "/oracion",
    Icono: Plus,
    titulo: "Pide oración",
    texto: "Nuestro equipo ora por cada petición en el bloque de las 8:00 p.m.",
    tono: "rojo" as const,
  },
  {
    href: "/apoyanos",
    Icono: Heart,
    titulo: "Sostén la señal",
    texto:
      "Cada aporte mantiene el transmisor encendido y los programas al aire.",
    tono: "azul" as const,
  },
];

export function Accesos() {
  return (
    <section className="border-y border-linea bg-bg2">
      <div className="lmc-contenedor grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[26px] py-[72px]">
        {ACCESOS.map(({ href, Icono, titulo, texto, tono }) => (
          <Link
            key={href}
            href={href}
            className={`rounded-card border border-linea bg-card px-8 py-9 shadow-lmc transition-colors ${
              tono === "rojo" ? "hover:border-rojo" : "hover:border-azul"
            }`}
          >
            <div
              className={`grid h-[54px] w-[54px] place-items-center rounded-pill ${
                tono === "rojo" ? "text-rojo" : "text-azul"
              }`}
              style={{
                background:
                  tono === "rojo"
                    ? "rgba(239,66,86,0.14)"
                    : "rgba(47,125,246,0.14)",
              }}
            >
              <Icono size={22} />
            </div>
            <h3 className="mt-5 text-[28px] font-bold tracking-[-0.01em] text-texto">
              {titulo}
            </h3>
            <p className="mt-3 mb-0 text-[15px] leading-[1.7] font-light text-texto2">
              {texto}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
