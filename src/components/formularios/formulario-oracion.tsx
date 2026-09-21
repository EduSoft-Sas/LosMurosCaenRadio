"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Plus } from "lucide-react";

import { MOTIVOS } from "@/lib/data";
import { esquemaOracion, type DatosOracion } from "@/lib/esquemas";

export function FormularioOracion() {
  const [enviada, setEnviada] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DatosOracion>({
    resolver: zodResolver(esquemaOracion),
    defaultValues: { motivo: "Salud", privado: false },
  });

  const onSubmit = handleSubmit(async (datos) => {
    setError("");
    try {
      const res = await fetch("/api/peticiones/oracion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      if (!res.ok) throw new Error();
      reset({ motivo: "Salud", privado: false });
      setEnviada(true);
    } catch {
      setError("No pudimos enviar tu petición. Intenta de nuevo.");
    }
  });

  if (enviada) {
    return (
      <div className="py-9 text-center">
        <div
          className="mx-auto grid h-16 w-16 place-items-center rounded-pill text-rojo"
          style={{ background: "rgba(239,66,86,0.14)" }}
        >
          <Plus size={26} />
        </div>
        <h2 className="mt-4 text-[28px] font-bold">Estamos orando contigo</h2>
        <p className="leading-[1.7] font-light text-texto2">
          Tu petición llegó al equipo de intercesión. No estás solo.
        </p>
        <button
          type="button"
          onClick={() => setEnviada(false)}
          className="mt-2 rounded-pill border border-linea px-[26px] py-[13px] text-[14px] font-medium transition-colors hover:border-rojo hover:text-rojo"
        >
          Enviar otra
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-[18px]">
      <label className="hidden">
        Sitio web
        <input type="text" tabIndex={-1} autoComplete="off" {...register("sitioWeb")} />
      </label>

      <label className="block">
        <div className="lmc-etiqueta">NOMBRE (O ANÓNIMO)</div>
        <input
          {...register("nombre")}
          placeholder="Como quieras aparecer"
          className="lmc-input focus:border-rojo"
        />
      </label>

      <div>
        <div className="lmc-etiqueta mb-2.5">MOTIVO</div>
        <Controller
          control={control}
          name="motivo"
          render={({ field }) => (
            <div className="flex flex-wrap gap-2">
              {MOTIVOS.map((motivo) => {
                const activo = field.value === motivo;
                return (
                  <button
                    key={motivo}
                    type="button"
                    aria-pressed={activo}
                    onClick={() => field.onChange(motivo)}
                    className={`rounded-pill border px-5 py-2.5 text-[14px] font-medium transition-colors ${
                      activo
                        ? "border-rojo text-rojo"
                        : "border-linea bg-card2 text-texto2"
                    }`}
                    style={
                      activo ? { background: "rgba(239,66,86,0.12)" } : undefined
                    }
                  >
                    {motivo}
                  </button>
                );
              })}
            </div>
          )}
        />
      </div>

      <label className="block">
        <div className="lmc-etiqueta">TU PETICIÓN</div>
        <textarea
          {...register("peticion")}
          rows={5}
          placeholder="Cuéntanos por qué oramos"
          aria-invalid={!!errors.peticion}
          className="lmc-textarea focus:border-rojo"
        />
        {errors.peticion && (
          <p className="mt-2 mb-0 text-[13px] text-rojo">{errors.peticion.message}</p>
        )}
      </label>

      <label className="flex cursor-pointer items-center gap-2.5 text-[14px] font-light text-texto2">
        <input
          type="checkbox"
          {...register("privado")}
          className="h-[18px] w-[18px]"
          style={{ accentColor: "var(--rojo)" }}
        />
        Mantener mi petición privada (no se lee al aire)
      </label>

      {error && <p className="m-0 text-[13px] text-rojo">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-pill bg-rojo py-[17px] text-[15px] font-semibold text-white shadow-rojo transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {isSubmitting ? "Enviando…" : "Enviar petición"}
      </button>
    </form>
  );
}
