const VENTANA_MS = 10 * 60 * 1000;
const MAXIMO = 5;

const registros = new Map<string, number[]>();

export function excedeLimite(clave: string) {
  const ahora = Date.now();
  const previos = (registros.get(clave) ?? []).filter((t) => ahora - t < VENTANA_MS);
  if (previos.length >= MAXIMO) {
    registros.set(clave, previos);
    return true;
  }
  previos.push(ahora);
  registros.set(clave, previos);
  return false;
}

export function ipDePeticion(req: Request) {
  const reenviada = req.headers.get("x-forwarded-for");
  return reenviada?.split(",")[0]?.trim() || "desconocida";
}
