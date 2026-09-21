"use client";

import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

export function TransicionPagina({ children }: { children: ReactNode }) {
  const ruta = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ruta]);

  return (
    <div key={ruta} className="lmc-rise">
      {children}
    </div>
  );
}
