import type { ReactNode } from "react";

export function Pildora({
  children,
  tono = "azul",
  className = "",
}: {
  children: ReactNode;
  tono?: "azul" | "azul2" | "rojo";
  className?: string;
}) {
  const color =
    tono === "rojo" ? "text-rojo" : tono === "azul2" ? "text-azul2" : "text-azul";
  return (
    <div
      className={`inline-flex items-center gap-[9px] rounded-pill border border-linea bg-card2 px-[18px] py-2 text-[12px] font-semibold tracking-[0.12em] ${color} ${className}`}
    >
      {children}
    </div>
  );
}

export function EncabezadoPagina({
  etiqueta,
  tono = "azul",
  titulo,
  children,
}: {
  etiqueta: string;
  tono?: "azul" | "rojo";
  titulo: ReactNode;
  children?: ReactNode;
}) {
  return (
    <>
      <Pildora tono={tono}>{etiqueta}</Pildora>
      <h1 className="mt-[18px] mb-2.5 text-[clamp(34px,5.4vw,66px)] leading-[1.05] font-extrabold tracking-[-0.03em]">
        {titulo}
      </h1>
      {children}
    </>
  );
}
