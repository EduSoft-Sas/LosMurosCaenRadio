# Los Muros Caen Radio

Sitio de la emisora **Los Muros Caen Radio** (Santa Rosa de Cabal, Risaralda): escucha
en vivo 24/7, programación, equipo, petición de canciones, peticiones de oración y
donaciones.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- `zustand` para el estado del reproductor (persiste el volumen en localStorage)
- `next-themes` para tema claro/oscuro (atributo `data-tema`, respeta `prefers-color-scheme`)
- `react-hook-form` + `zod` para los formularios
- `lucide-react` para iconos (los de marca están en `src/components/ui/iconos-sociales.tsx`)

## Arranque

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Variables de entorno

| Variable | Para qué |
|---|---|
| `NEXT_PUBLIC_STREAM_URL` | URL del stream en vivo. **Sin ella el reproductor sintetiza un pad de acordes con Web Audio API** (solo demo). |
| `RESEND_API_KEY`, `EMAIL_EQUIPO`, `EMAIL_REMITENTE` | Notificación por correo de las peticiones. Sin ellas las peticiones se escriben en el log del servidor. |

## Decisiones

- **El reproductor vive en `src/app/layout.tsx`, fuera de `children`**: no se remonta al
  navegar. El `<audio>` se monta una sola vez.
- **El programa al aire se calcula en `America/Bogota`**, no en la zona del visitante
  (`src/lib/horario.ts`). El servidor entrega el valor inicial y el cliente lo refresca
  cada 30 s, así no hay desajuste de hidratación.
- Las páginas que dependen de la hora usan `revalidate = 300`.
- El visualizador lee un `AnalyserNode` (`fftSize: 64`); si el stream no expone CORS y
  los datos llegan en cero, las barras vuelven a la animación CSS.
- Las rutas de API validan con zod, tienen honeypot (`sitioWeb`) y límite de 5 peticiones
  por IP cada 10 minutos (en memoria — en producción con varias instancias conviene
  moverlo a Redis/Upstash).

## Pendientes con el cliente

1. **URL del stream de audio** — bloqueante principal.
2. Logo en SVG/PNG con transparencia y fotos reales del equipo y del estudio (hoy:
   `i.pravatar.cc` como placeholder).
3. Datos bancarios, Nequi, correo de PayPal y WhatsApp verdaderos
   (`src/lib/data.ts` y `src/lib/site.ts`).
4. Programación real (la actual viene del prototipo y es inventada).
5. Textos legales: política de privacidad y tratamiento de datos (Ley 1581 de 2012).
6. Integrar la API real de Instagram y el contador real de oyentes de la API de streaming.
7. CMS (Sanity o Payload) para programación, locutores y posts.

## Referencia de diseño

`docs/handoff/` contiene el prototipo HTML original y su README de handoff.
`support.js` es solo el runtime del prototipo y no forma parte del sitio.
