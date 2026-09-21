"use client";

import { useState } from "react";

import { DIAS } from "@/lib/data";
import { agendaDe, formatearHora, type EnAire } from "@/lib/horario";
import { useEnAire } from "@/lib/usar-en-aire";

export function Parrilla({ inicial }: { inicial: EnAire }) {
  const aire = useEnAire(inicial);
  const [dia, setDia] = useState(inicial.dia);

  const agenda = agendaDe(dia);

  return (
    <>
      <div className="mb-[26px] flex flex-wrap gap-2">
        {DIAS.map((nombre, i) => (
          <button
            key={nombre}
            type="button"
            onClick={() => setDia(i)}
            aria-pressed={i === dia}
            className={`rounded-pill border px-[22px] py-[11px] text-[14px] font-medium transition-colors ${
              i === dia
                ? "border-azul bg-azul text-white"
                : "border-linea bg-card2 text-texto2 hover:border-azul"
            }`}
          >
            {nombre}
          </button>
        ))}
      </div>

      <div className="grid gap-3.5">
        {agenda.map((programa) => {
          const enVivo = dia === aire.dia && programa.nombre === aire.actual.nombre;
          return (
            <article
              key={programa.nombre}
              className={`grid items-center gap-6 rounded-voz border bg-card px-[30px] py-6 shadow-lmc transition-colors hover:border-azul md:grid-cols-[minmax(100px,140px)_minmax(0,1fr)_minmax(0,190px)] ${
                enVivo ? "border-azul" : "border-linea"
              }`}
            >
              <div
                className={`text-[16px] font-semibold ${
                  enVivo ? "text-azul" : "text-texto3"
                }`}
              >
                {formatearHora(programa.h)}
              </div>
              <div>
                <h2 className="text-[21px] leading-[1.3] font-semibold">
                  {programa.nombre}{" "}
                  {enVivo && (
                    <span className="text-[11px] font-bold tracking-[0.08em] text-rojo">
                      ● AL AIRE
                    </span>
                  )}
                </h2>
                <p className="mt-1.5 mb-0 max-w-[62ch] text-[14px] leading-[1.6] font-light text-texto2">
                  {programa.desc}
                </p>
              </div>
              <div className="text-[13px] text-texto3 md:text-right">
                {programa.locutor}
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
