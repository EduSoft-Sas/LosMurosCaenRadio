import { NextResponse } from "next/server";

import { esquemaCancion } from "@/lib/esquemas";
import { excedeLimite, ipDePeticion } from "@/lib/limite-peticiones";
import { notificarEquipo } from "@/lib/notificar";

export async function POST(req: Request) {
  if (excedeLimite(`cancion:${ipDePeticion(req)}`)) {
    return NextResponse.json(
      { error: "Demasiadas peticiones. Intenta más tarde." },
      { status: 429 },
    );
  }

  const cuerpo = await req.json().catch(() => null);
  const resultado = esquemaCancion.safeParse(cuerpo);

  if (!resultado.success) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }

  if (resultado.data.sitioWeb) {
    return NextResponse.json({ ok: true });
  }

  await notificarEquipo("Nueva petición musical", resultado.data);

  return NextResponse.json({ ok: true });
}
