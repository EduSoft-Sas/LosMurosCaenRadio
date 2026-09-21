import Image from "next/image";

import { SITIO } from "@/lib/site";

export function Cabina() {
  return (
    <section className="lmc-contenedor pb-[72px]">
      <div className="relative h-[clamp(320px,42vw,480px)] overflow-hidden rounded-cabina">
        <Image
          src={SITIO.estudio}
          alt="Cabina de Los Muros Caen Radio"
          fill
          sizes="(max-width: 1280px) 100vw, 1232px"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,14,28,0.93) 0%, rgba(6,14,28,0.7) 48%, rgba(6,14,28,0.15) 100%)",
          }}
        />
        <div className="relative flex h-full flex-col justify-center px-[clamp(24px,5vw,60px)]">
          <div className="inline-flex self-start rounded-pill bg-white/12 px-4 py-2 text-[11px] font-semibold tracking-[0.16em] text-white">
            LA CABINA
          </div>
          <h2 className="mt-4 max-w-[17ch] text-[clamp(30px,4.6vw,56px)] leading-[1.08] font-extrabold tracking-[-0.02em] text-white">
            Una señal encendida desde Santa Rosa de Cabal
          </h2>
          <p className="mt-4 mb-0 max-w-[42ch] text-[16px] leading-[1.7] font-light text-white/80">
            Aquí se graban los programas, se leen las peticiones y se ora por quienes
            escriben cada día.
          </p>
        </div>
      </div>
    </section>
  );
}
