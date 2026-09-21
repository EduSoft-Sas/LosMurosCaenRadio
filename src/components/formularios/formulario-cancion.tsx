"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Music } from "lucide-react";

import { esquemaCancion, type DatosCancion } from "@/lib/esquemas";

export function FormularioCancion() {
  const [enviada, setEnviada] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DatosCancion>({ resolver: zodResolver(esquemaCancion) });

  const onSubmit = handleSubmit(async (datos) => {
    setError("");
    try {
      const res = await fetch("/api/peticiones/cancion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      if (!res.ok) throw new Error();
      reset();
      setEnviada(true);
    } catch {
      setError("No pudimos enviar tu petición. Intenta de nuevo.");
    }
  });

  if (enviada) {
    return (
      <div className="py-9 text-center">
        <div
          className="mx-auto grid h-16 w-16 place-items-center rounded-pill text-azul"
          style={{ background: "rgba(47,125,246,0.14)" }}
        >
          <Music size={26} />
        </div>
        <h2 className="mt-4 text-[28px] font-bold">¡Recibimos tu petición!</h2>
        <p className="leading-[1.7] font-light text-texto2">
          Te escribimos por WhatsApp cuando tu canción entre a la programación.
        </p>
        <button
          type="button"
          onClick={() => setEnviada(false)}
          className="mt-2 rounded-pill border border-linea px-[26px] py-[13px] text-[14px] font-medium transition-colors hover:border-azul hover:text-azul"
        >
          Pedir otra
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
        <div className="lmc-etiqueta">CANCIÓN</div>
        <input
          {...register("cancion")}
          placeholder="Nombre de la canción"
          aria-invalid={!!errors.cancion}
          className="lmc-input focus:border-azul"
        />
        {errors.cancion && (
          <p className="mt-2 mb-0 text-[13px] text-rojo">{errors.cancion.message}</p>
        )}
      </label>

      <label className="block">
        <div className="lmc-etiqueta">ARTISTA</div>
        <input
          {...register("artista")}
          placeholder="Opcional"
          className="lmc-input focus:border-azul"
        />
      </label>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[18px]">
        <label className="block">
          <div className="lmc-etiqueta">TU NOMBRE</div>
          <input
            {...register("nombre")}
            aria-invalid={!!errors.nombre}
            className="lmc-input focus:border-azul"
          />
          {errors.nombre && (
            <p className="mt-2 mb-0 text-[13px] text-rojo">{errors.nombre.message}</p>
          )}
        </label>
        <label className="block">
          <div className="lmc-etiqueta">CIUDAD</div>
          <input {...register("ciudad")} className="lmc-input focus:border-azul" />
        </label>
      </div>

      <label className="block">
        <div className="lmc-etiqueta">DEDICATORIA</div>
        <textarea
          {...register("dedicatoria")}
          rows={3}
          placeholder="¿Para quién es y por qué?"
          className="lmc-textarea focus:border-azul"
        />
      </label>

      {error && <p className="m-0 text-[13px] text-rojo">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-pill bg-azul py-[17px] text-[15px] font-semibold text-white shadow-azul transition-colors hover:bg-azul2 disabled:opacity-60"
      >
        {isSubmitting ? "Enviando…" : "Enviar petición"}
      </button>
    </form>
  );
}
