import { PROGRAMACION, type Programa } from "@/lib/data";
import { SITIO } from "@/lib/site";

const DIAS_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const formato = new Intl.DateTimeFormat("en-US", {
  timeZone: SITIO.zonaHoraria,
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

export type AhoraBogota = { dia: number; hora: number; minuto: number };

export function ahoraBogota(fecha = new Date()): AhoraBogota {
  const partes = formato.formatToParts(fecha);
  const valor = (tipo: Intl.DateTimeFormatPartTypes) =>
    partes.find((p) => p.type === tipo)?.value ?? "";
  return {
    dia: Math.max(0, DIAS_EN.indexOf(valor("weekday"))),
    hora: Number(valor("hour")),
    minuto: Number(valor("minute")),
  };
}

export function formatearHora(h: number) {
  const doce = h % 12 === 0 ? 12 : h % 12;
  return `${doce < 10 ? "0" : ""}${doce}:00 ${h < 12 ? "a.m." : "p.m."}`;
}

export function agendaDe(dia: number): Programa[] {
  return PROGRAMACION.filter((p) => !p.dias || p.dias.includes(dia));
}

export type EnAire = {
  actual: Programa;
  siguiente: Programa;
  lista: Programa[];
  indice: number;
  dia: number;
};

export function enAire(ahora: AhoraBogota = ahoraBogota()): EnAire {
  const lista = agendaDe(ahora.dia);
  let indice = 0;
  lista.forEach((p, i) => {
    if (ahora.hora >= p.h) indice = i;
  });
  if (ahora.hora < lista[0].h) indice = lista.length - 1;
  return {
    actual: lista[indice],
    siguiente: lista[(indice + 1) % lista.length],
    lista,
    indice,
    dia: ahora.dia,
  };
}
