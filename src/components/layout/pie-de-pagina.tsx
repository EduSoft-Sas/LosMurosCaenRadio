import Image from "next/image";
import Link from "next/link";
import {
  IconoFacebook,
  IconoInstagram,
  IconoYoutube,
} from "@/components/ui/iconos-sociales";
import { ENLACES, SITIO } from "@/lib/site";

const INTERNOS = [
  { href: "/", label: "Inicio" },
  { href: "/programacion", label: "Programación" },
  { href: "/locutores", label: "Locutores" },
  { href: "/apoyanos", label: "Apóyanos" },
];

const EXTERNOS = [
  { href: ENLACES.fundacion, label: "Fundación" },
  { href: ENLACES.iglesia, label: "Iglesia" },
  { href: ENLACES.liceo, label: "Liceo" },
];

const SOCIALES = [
  { href: ENLACES.facebook, label: "Facebook", Icono: IconoFacebook },
  { href: ENLACES.instagram, label: "Instagram", Icono: IconoInstagram },
  { href: ENLACES.youtube, label: "YouTube", Icono: IconoYoutube },
];

const TITULO = "mb-4 text-[12px] font-semibold tracking-[0.12em] text-texto3";

export function PieDePagina() {
  return (
    <footer className="border-t border-linea bg-bg2">
      <div className="lmc-contenedor grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 pt-[60px] pb-9">
        <div>
          <Image
            src={SITIO.logo}
            alt={SITIO.nombre}
            width={130}
            height={38}
            className="mb-4 h-[38px] w-auto rounded-[10px] object-contain"
          />
          <p className="m-0 max-w-[30ch] text-[14px] leading-[1.7] font-light text-texto2">
            {SITIO.tagline}
          </p>
        </div>

        <div>
          <div className={TITULO}>LA RADIO</div>
          <div className="grid gap-2.5 text-[14px]">
            {INTERNOS.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="text-texto2 transition-colors hover:text-azul"
              >
                {e.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className={TITULO}>LA FUNDACIÓN</div>
          <div className="grid gap-2.5 text-[14px]">
            {EXTERNOS.map((e) => (
              <a
                key={e.href}
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-texto2 transition-colors hover:text-azul"
              >
                {e.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className={TITULO}>LÍNEA DIRECTA</div>
          <div className="grid gap-2.5 text-[14px] text-texto2">
            <a
              href={SITIO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-texto2 transition-colors hover:text-azul"
            >
              WhatsApp {SITIO.whatsapp}
            </a>
            <div>{SITIO.direccion}</div>
            <div>{SITIO.region}</div>
          </div>
          <div className="mt-[18px] flex gap-2.5">
            {SOCIALES.map(({ href, label, Icono }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-pill border border-linea text-texto2 transition-colors hover:border-azul hover:text-azul"
              >
                <Icono size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="lmc-contenedor pb-9 text-[12px] font-light text-texto3">
        © {new Date().getFullYear()} Fundación Los Muros Caen · Todos los derechos
        reservados
      </div>
    </footer>
  );
}
