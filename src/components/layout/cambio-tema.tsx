"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function CambioTema() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Cambiar tema"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-pill border border-linea bg-card2 text-texto2 transition-colors hover:border-azul hover:text-azul"
    >
      <Sun size={17} className="claro:hidden" />
      <Moon size={17} className="hidden claro:block" />
    </button>
  );
}
