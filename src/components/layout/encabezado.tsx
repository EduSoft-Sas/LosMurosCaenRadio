"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { CambioTema } from "@/components/layout/cambio-tema";
import { NAV, SITIO } from "@/lib/site";

export function Encabezado() {
  const ruta = usePathname();
  const [abierto, setAbierto] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 border-b border-linea backdrop-blur-[16px]"
      style={{ background: "color-mix(in srgb, var(--bg) 72%, transparent)" }}
    >
      <div className="lmc-contenedor flex flex-wrap items-center gap-6 py-[14px]">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Inicio">
          <Image
            src={SITIO.logo}
            alt={SITIO.nombre}
            width={120}
            height={34}
            priority
            className="h-[34px] w-auto rounded-[10px] object-contain"
          />
        </Link>

        <nav className="ml-auto hidden flex-wrap gap-7 text-[15px] font-medium nav:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={ruta === item.href ? "page" : undefined}
              className={`py-1.5 transition-colors hover:text-azul2 ${
                ruta === item.href ? "text-azul2" : "text-texto2"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2.5 nav:ml-0">
          <CambioTema />
          <Link
            href="/apoyanos"
            className="rounded-pill bg-azul px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-azul2 hover:text-white"
          >
            Apóyanos
          </Link>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={abierto}
            onClick={() => setAbierto((v) => !v)}
            className="grid h-[42px] w-[42px] place-items-center rounded-pill border border-linea bg-card2 text-texto2 nav:hidden"
          >
            {abierto ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {abierto && (
        <nav className="border-t border-linea bg-bg px-6 py-4 nav:hidden">
          <div className="lmc-contenedor grid gap-1 px-0">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setAbierto(false)}
                className={`rounded-pill px-4 py-3 text-[15px] font-medium ${
                  ruta === item.href ? "bg-card2 text-azul2" : "text-texto2"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
