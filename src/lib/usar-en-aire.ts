"use client";

import { useEffect, useState } from "react";

import { enAire, type EnAire } from "@/lib/horario";

export function useEnAire(inicial: EnAire) {
  const [valor, setValor] = useState(inicial);

  useEffect(() => {
    const refrescar = () => setValor(enAire());
    refrescar();
    const id = setInterval(refrescar, 30_000);
    return () => clearInterval(id);
  }, []);

  return valor;
}
