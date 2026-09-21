"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function Proveedores({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-tema"
      defaultTheme="system"
      enableSystem
      themes={["claro", "oscuro"]}
      value={{ light: "claro", dark: "oscuro" }}
      storageKey="lmc-tema"
    >
      {children}
    </ThemeProvider>
  );
}
