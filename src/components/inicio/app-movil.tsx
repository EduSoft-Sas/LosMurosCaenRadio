import {
  IconoAppStore,
  IconoGooglePlay,
} from "@/components/ui/iconos-sociales";
import { ENLACES } from "@/lib/site";

const TIENDAS = [
  { href: ENLACES.googlePlay, label: "Google Play", Icono: IconoGooglePlay },
  { href: ENLACES.appStore, label: "App Store", Icono: IconoAppStore },
];

export function AppMovil() {
  return (
    <section className="border-t border-linea">
      <div className="lmc-contenedor grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center gap-9 py-16">
        <div>
          <h2 className="mt-0 mb-3 text-[clamp(26px,3.4vw,40px)] font-bold tracking-[-0.02em]">
            Llévanos en el bolsillo
          </h2>
          <p className="m-0 max-w-[46ch] text-[16px] leading-[1.7] font-light text-texto2">
            La app de Los Muros Caen Radio está disponible para Android y iPhone.
            Misma señal, en cualquier lugar del mundo.
          </p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          {TIENDAS.map(({ href, label, Icono }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-pill border border-linea bg-card2 px-[26px] py-[15px] text-[14px] font-medium text-texto transition-colors hover:border-azul hover:text-azul"
            >
              <Icono size={18} />
              {label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
