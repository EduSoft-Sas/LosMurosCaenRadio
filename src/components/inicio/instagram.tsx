import Image from "next/image";
import { IconoInstagram } from "@/components/ui/iconos-sociales";
import { POSTS } from "@/lib/data";
import { ENLACES } from "@/lib/site";

export function Instagram() {
  return (
    <section className="border-t border-linea bg-bg2">
      <div className="lmc-contenedor py-[72px]">
        <div className="inline-flex items-center gap-[9px] rounded-pill border border-linea bg-card px-[18px] py-[9px] text-[13px] font-medium text-azul">
          <IconoInstagram size={14} />
          @losmuroscaenradio
        </div>

        <div className="mt-[18px] mb-[30px] flex flex-wrap items-center justify-between gap-5">
          <h2 className="m-0 text-[clamp(30px,4.6vw,52px)] font-extrabold tracking-[-0.025em]">
            Síguenos en Instagram
          </h2>
          <a
            href={ENLACES.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-pill bg-azul px-[26px] py-3.5 text-[15px] font-semibold text-white shadow-azul transition-colors hover:bg-azul2 hover:text-white"
          >
            <IconoInstagram size={16} />
            Seguir en Instagram
          </a>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[22px]">
          {POSTS.map((post) => (
            <a
              key={post.texto}
              href={ENLACES.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[3/4.4] overflow-hidden rounded-post border border-linea bg-card2 text-white hover:text-white"
            >
              <Image
                src={post.foto}
                alt="Publicación de Instagram"
                fill
                sizes="(max-width: 700px) 100vw, 300px"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(4,10,20,0.94) 0%, rgba(4,10,20,0.72) 26%, rgba(4,10,20,0) 58%)",
                }}
              />
              <div className="absolute right-[18px] bottom-4 left-[18px]">
                <p className="m-0 text-[13px] leading-[1.55] font-light text-white/90">
                  {post.texto}
                </p>
                <div className="mt-2.5 text-[12px] text-white/60">{post.fecha}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
