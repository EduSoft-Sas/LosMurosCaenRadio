# Handoff: Los Muros Caen Radio — nuevo sitio web

## Overview
Rediseño completo del sitio de **Los Muros Caen Radio** (Santa Rosa de Cabal, Risaralda, Colombia), separándolo del sitio institucional actual (`losmuroscaenradio.com`) que mezcla Fundación, Iglesia, Liceo y Radio. Este sitio es **solo la emisora**: escucha en vivo 24/7, programación, equipo, petición de canciones, peticiones de oración y donaciones.

Referencia de estilo: [esperanzacolombia.com](https://esperanzacolombia.com) — azul sobre navy oscuro, tipografía geométrica, todo con esquinas muy redondeadas y píldoras.

## About the Design Files
Los archivos de este paquete son **referencias de diseño hechas en HTML** — un prototipo que muestra el aspecto y el comportamiento buscados, **no código de producción para copiar**. La tarea es **recrear estos diseños en un framework web real**, con los patrones y librerías del stack elegido.

`Radio Los Muros Caen.dc.html` es un prototipo de un solo archivo con estilos en línea y una clase de lógica al final del documento (busca `class Component extends DCLogic`). Ahí están los datos de ejemplo (programación, locutores, testimonios, posts) y toda la lógica de estado. `support.js` es solo el runtime del prototipo — **no lo portes**.

### Stack recomendado (no hay codebase previo)
- **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4** — SSR/SEO para una emisora que necesita indexarse, rutas por archivo que calzan 1:1 con las páginas de abajo, y despliegue barato en Vercel.
- **Reproductor persistente**: el requisito duro. Ponlo en el `layout.tsx` raíz, **fuera** del `children`, con su estado en un `zustand` store (o Context). Nunca debe remontarse al navegar.
- **Tema claro/oscuro**: `next-themes` con estrategia `class` y variables CSS (ver Design Tokens).
- **Animaciones**: CSS puro es suficiente; `framer-motion` solo si quieren transiciones de página más ricas.
- **Formularios**: `react-hook-form` + `zod`. Los tres formularios (canción, oración) hoy son simulados.
- **CMS sugerido** (la emisora edita sola): Sanity o Payload para programación, locutores y posts.

## Fidelity
**Alta fidelidad (hifi).** Colores, tipografía, radios, espaciados y estados hover son definitivos. Recrear con precisión de píxel.

Excepciones marcadas como placeholder, a reemplazar con material real del cliente:
- Retratos de locutores → `i.pravatar.cc` (stock temporal).
- Posts de Instagram → mezcla de foto del estudio y avatares stock.
- Datos bancarios, teléfono y WhatsApp → de ejemplo.
- Stream de audio → **no hay URL**; el prototipo sintetiza un pad de acordes con Web Audio API para que la demo "suene en vivo". En producción va un `<audio>` apuntando al stream real (Icecast/Shoutcast/reproductorweb.com).

---

## Design Tokens

Variables CSS en `:root`, sobreescritas en `:root[data-tema="claro"]`.

### Colores

| Token | Oscuro (default) | Claro |
|---|---|---|
| `--bg` | `#060E1C` | `#FFFFFF` |
| `--bg2` | `#0A1526` | `#F4F7FB` |
| `--card` | `#0E1B30` | `#FFFFFF` |
| `--card2` | `#122340` | `#F4F7FB` |
| `--linea` | `#1C2B45` | `#E3EAF3` |
| `--texto` | `#FFFFFF` | `#0B1628` |
| `--texto2` | `#94A6C2` | `#5B6C86` |
| `--texto3` | `#637693` | `#8494AB` |
| `--azul` | `#2F7DF6` | `#1C63D8` |
| `--azul2` | `#5B9CFF` | `#2F7DF6` |
| `--rojo` | `#EF4256` | `#DE2E43` |
| `--sombra` | `0 18px 44px rgba(0,0,0,0.38)` | `0 14px 40px rgba(18,40,80,0.10)` |

Sombras de botón primario: `0 10px 26px rgba(47,125,246,0.32)`. Botón rojo: `0 10px 26px rgba(239,66,86,0.28)`.
Fondos suaves de icono: `rgba(47,125,246,0.14)` (azul), `rgba(239,66,86,0.14)` (rojo).

**El reproductor inferior NO cambia con el tema**: siempre `#0A1526` con borde `#16243C`, texto `#fff`, secundario `#8FA2BE`, terciario `#6F83A0`.

### Tipografía
**Poppins** (Google Fonts, pesos 300/400/500/600/700/800). Sin fuente secundaria.

| Uso | Tamaño | Peso | Extra |
|---|---|---|---|
| H1 hero | `clamp(40px,6vw,80px)` | 800 | `line-height:1.02; letter-spacing:-0.03em` |
| H1 páginas internas | `clamp(34px,5.4vw,66px)` | 800 | `line-height:1.05; letter-spacing:-0.03em` |
| H2 sección | `clamp(28px,4vw,44px)` | 700 | `letter-spacing:-0.02em` |
| H2 Instagram / Voces | `clamp(30px,4.6vw,52px)` | 800 | `letter-spacing:-0.025em` |
| Título de card | 25-28px | 700 | `letter-spacing:-0.01em` |
| Nombre locutor (carrusel) | 18px | 700 | |
| Párrafo | 15-17px | **300** | `line-height:1.7` |
| Nav | 15px | 500 | |
| Botón | 14-15px | 600 | |
| Etiqueta / píldora | 11-12px | 600-700 | `letter-spacing:0.08em–0.12em`, MAYÚSCULAS |

Los párrafos van en **300** — es parte del look; no usar 400.

### Radios
| Uso | Valor |
|---|---|
| Botones, píldoras, inputs de una línea, chips, avatares, iconos redondos | `999px` |
| Textarea | `24px` |
| Cards de contenido | `28px` |
| Cards de locutor / aporte | `30px` |
| Card grande (hero, formularios) | `32px` |
| Card del carrusel de voces | `24px` |
| Imagen dentro del hero | `24px` |
| Franja "La cabina" | `36px` |
| Card de post de Instagram | `26px` |
| Logo | `10px` |

### Espaciado
Contenedor: `max-width:1280px; margin:0 auto; padding:0 24px` (el reproductor usa 1400px).
Padding vertical de sección: `72px`. Padding de página interna: `56px` arriba, `80px` abajo.
Gaps de grilla: 22-26px. Padding de card: 28-36px.
Bordes: `1px solid var(--linea)`; **excepción**: la card del carrusel de voces usa `0.5px` (pedido explícito).

### Transiciones
- Hover de borde: `border-color 0.35s ease` (cards de voces), `0.2s` (botones/nav).
- Zoom de imagen en card de voz: `transform 0.5s ease`, escala `1.08`.
- Entrada de página: `lmcRise 0.55s cubic-bezier(.2,.7,.2,1) both`.
- Hero: `lmcRise 0.7s`, la card lateral con `0.12s` de retardo.
- Imagen del hero: `lmcZoom 1s cubic-bezier(.2,.7,.2,1) both`.

### Keyframes
```css
@keyframes lmcBar    { 0%,100% { transform:scaleY(0.2); } 50% { transform:scaleY(1); } }
@keyframes lmcTicker { from { transform:translateX(0); } to { transform:translateX(-50%); } }
@keyframes lmcBlink  { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
@keyframes lmcRise   { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:none; } }
@keyframes lmcFade   { from { opacity:0; } to { opacity:1; } }
@keyframes lmcZoom   { from { opacity:0; transform:scale(1.06); } to { opacity:1; transform:scale(1); } }
@keyframes lmcHalo   { 0% { transform:scale(0.8); opacity:0.55; } 100% { transform:scale(1.7); opacity:0; } }
```

---

## Layout global

```
┌──────────────────────────────────────────────┐
│ HEADER — position:fixed, top:0, z-index:40   │  ~71px
│ backdrop-filter:blur(16px)                    │
│ background: var(--bg) al 72% de opacidad      │
├──────────────────────────────────────────────┤
│                                              │
│ CONTENIDO (padding-top:71px)                 │
│                                              │
├──────────────────────────────────────────────┤
│ FOOTER                                        │
├──────────────────────────────────────────────┤
│ REPRODUCTOR — position:fixed, bottom:0,      │  ~72px
│ z-index:60 — NUNCA se desmonta               │
└──────────────────────────────────────────────┘
```
El wrapper lleva `padding-top:71px; padding-bottom:120px`.

### Header
`display:flex; align-items:center; gap:24px; padding:14px 24px; flex-wrap:wrap`, borde inferior `1px solid var(--linea)`.

1. **Logo** (izq): `<img>` 34px de alto, `border-radius:10px`, `object-fit:contain`, clic → Inicio.
2. **Nav** (`margin-left:auto`, `gap:28px`): enlaces de texto plano, 15px/500, `padding:6px 0`. Activo `var(--azul2)`, inactivo `var(--texto2)`, hover `var(--azul2)`. **Sin píldora ni subrayado.** Items: Inicio · Programación · Locutores · Pide tu canción · Oración.
3. **Toggle de tema**: círculo 42px, borde `var(--linea)`, fondo `var(--card2)`, glifo `☀` en oscuro / `☾` en claro. Hover: borde azul.
4. **CTA "Apóyanos"**: píldora `var(--azul)`, texto blanco, `padding:12px 24px`, 14px/600.

### Reproductor persistente (fijo abajo)
Fondo `#0A1526`, borde superior `1px solid #16243C`. **Sin barra de progreso** (se quitó a propósito). Fila flex, `gap:18px; padding:12px 24px; flex-wrap:wrap`:

1. **Play/pausa** — círculo 48px, `var(--azul)`, glifo `▶` / `❚❚`, sombra `0 8px 20px rgba(47,125,246,0.34)`.
2. **Miniatura** — logo 36px circular.
3. **Píldora EN VIVO** — fondo `var(--rojo)`, texto blanco 11px/700, punto blanco de 7px con `lmcBlink 1.4s infinite`, `padding:5px 13px`.
4. **Título** — `{programa} · 24/7` 15px/600 blanco; debajo `{locutor} · {hora}` 12px/300 en `#8FA2BE`.
5. **Chevron `▾`** — 30px, clic → página de Programación.
6. **Espaciador** `flex:1 1 40px`.
7. **Visualizador** — 44×26px. Dos variantes: `barras` (6 barras de 2-3px, radio 2px, `var(--azul2)`, `transform-origin:bottom`, `lmcBar` con delays escalonados) o `pulso` (dos aros con `lmcHalo` + punto central). Opacidad `1` sonando / `0.35` en pausa. Cuando suena, un `requestAnimationFrame` toma el `AnalyserNode` y fija `transform: scaleY()` por barra (`animation-play-state:paused`).
8. **Volumen** — icono `🔊` + `<input type="range">` de 110px, `accent-color: var(--azul)`.
9. **Contador** — `{n} oyentes`, 12px/300, `#6F83A0`.

---

## Pantallas

### 1. Inicio (`/`)

**a. Hero** — grilla `repeat(auto-fit,minmax(320px,1fr))`, gap 48px, `align-items:center`, padding `56px 24px 44px`.
- Izquierda: píldora "EN VIVO · 24/7 · SANTA ROSA DE CABAL" (borde `--linea`, fondo `--card2`, texto `--rojo`, punto parpadeante) → H1 `Los muros caen cuando **suena la fe**` (el fragmento final en `--azul`) → párrafo de 46ch → dos botones: primario "Escuchar en vivo" (cambia a "Al aire ahora" al reproducir, con glifo play/pausa) y secundario "Ver programación".
- Derecha: card `border-radius:32px`, padding 20px, sombra. Dentro: imagen 16:11 con radio 24px, degradado `to top, rgba(6,14,28,0.82) → transparente 58%`, píldora EN VIVO arriba-izq, y sobreimpreso abajo "AHORA SUENA" + nombre del programa 26px/700. Bajo la imagen: locutor · hora y una píldora "Sigue: {programa} · {hora}".

**b. Ticker** — franja `var(--card2)` con bordes arriba/abajo, `overflow:hidden`, padding 18px 0. Fila de ancho `max-content` con `lmcTicker 44s linear infinite`, 22px/600 en `--texto3`, separadores `●` en `--azul`. Las frases se repiten **dos veces** para que el bucle al -50% sea continuo: Pide tu canción · Comparte tu testimonio · Oramos por ti · Escúchanos donde estés. Se puede ocultar (prop `mostrarTicker`).

**c. Hoy en la emisora** — cabecera con H2 + botón píldora "Parrilla completa →" (hover: se rellena de azul). Grilla `minmax(270px,1fr)`, gap 24px, 3 cards de `min-height:230px`, radio 28px: píldora hora+estado (roja con texto blanco si está AL AIRE, `--card2` si es PRÓXIMO), título 25px/700, descripción, y locutor pegado abajo (`margin-top:auto`).

**d. Tres accesos** — fondo `var(--bg2)` con bordes arriba/abajo. Grilla `minmax(290px,1fr)`, gap 26px. Cada card: icono circular de 54px con fondo tintado (`♪` azul, `✚` rojo, `♥` azul), título 28px/700, descripción. Hover: borde azul (rojo en la de oración). Navegan a Canción / Oración / Apoya.

**e. Las voces (carrusel)** — píldora "NUESTRO EQUIPO" (texto `--azul2`) → fila con H2 "Las voces detrás de Los Muros Caen" + subtítulo a la izquierda y **dos flechas circulares de 40px** a la derecha (ambas iguales: borde `--linea`, fondo `--card2`, texto `--texto2`, hover borde y texto `--azul2` — ninguna va rellena de azul).
- Pista: `display:flex; gap:22px; overflow-x:auto; scroll-behavior:smooth; padding:4px 4px 16px; scrollbar-width:none`.
- Card: `flex:0 0 268px`, radio 24px, **borde `0.5px`**, `overflow:hidden`. Imagen 4:5 arriba; debajo, bloque `padding:20px 22px 24px` con nombre 18px/700, cargo 14px/500 en `--azul2`, programa 13px/300 en `--texto3`.
- **Hover (toda la card, no solo la imagen)**: el borde pasa a `--azul2` en 0.35s y la imagen escala a `1.08` en 0.5s. **Sin sombra añadida** — solo el borde.
- Flechas: `scrollBy({ left: ±290, behavior:'smooth' })`. ⚠️ `scrollLeft += n` **no funciona** con `scroll-behavior:smooth`.

**f. La cabina** — bloque de `clamp(320px,42vw,480px)` de alto, radio 36px, foto a sangre con degradado `90deg, rgba(6,14,28,0.93) → 0.7 al 48% → 0.15`. Encima: píldora blanca translúcida "LA CABINA", titular `clamp(30px,4.6vw,56px)`/800 de 17ch, y párrafo.

**g. Síguenos en Instagram** — fondo `var(--bg2)`. Píldora `@losmuroscaenradio` (texto azul) → fila con H2 "Síguenos en Instagram" y botón píldora azul "Seguir en Instagram" a la derecha → grilla `minmax(230px,1fr)`, gap 22px, 4 cards `aspect-ratio:3/4.4`, radio 26px: foto a sangre + degradado `to top, rgba(4,10,20,0.94) → 0.72 al 26% → 0 al 58%`, con el texto del post (13px/300) y la fecha (12px, 58% blanco) abajo. Toda la card enlaza al perfil.

**h. App** — H2 "Llévanos en el bolsillo" + dos botones píldora outline (Google Play ↗, App Store ↗) con los enlaces reales de sus apps publicadas.

### 2. Programación (`/programacion`)
Píldora "PROGRAMACIÓN" → H1 "Nuestra semana al aire" → párrafo aclarando GMT-5 y que fuera de bloques en vivo suena música continua.
- **Selector de día**: 7 píldoras (Dom…Sáb). Activa: fondo `--azul`, texto blanco. Inactiva: fondo `--card2`, borde `--linea`, texto `--texto2`. Por defecto el día actual.
- **Filas**: `display:grid; gap:14px`. Cada fila es una card de radio 24px, `padding:24px 30px`, grilla `minmax(100px,140px) 1fr minmax(0,190px)`: hora 16px/600, luego nombre 21px/600 (+ etiqueta `● AL AIRE` roja 11px/700 si corresponde) y descripción, y a la derecha el locutor alineado a la derecha. La fila al aire lleva borde `--azul` y hora en `--azul`. Hover: borde azul.
- En móvil la grilla de 3 columnas debe colapsar a una sola.

### 3. Locutores (`/locutores`)
Píldora "EQUIPO" → H1 "Las voces detrás del micrófono" → párrafo. Grilla `minmax(270px,1fr)`, gap 24px. Card radio 30px, `padding:30px`, centrada: avatar **circular de 140px** con borde `3px solid var(--linea)`, nombre 22px/700, píldora de rol (fondo `rgba(47,125,246,0.12)`, texto `--azul`, 11px/600), bio 14px/300 y programa 13px/500 en `--texto3`. Hover: borde azul.

### 4. Pide tu canción (`/pide-tu-cancion`)
Dos columnas `minmax(320px,1fr)`, gap 48px, `align-items:start`.
- **Izquierda**: píldora "PETICIÓN MUSICAL" → H1 `Pide tu **canción**` → párrafo → card "ÚLTIMAS AL AIRE" con filas `título — artista` + píldora de dedicatoria a la derecha, separadas por `1px solid var(--linea)`.
- **Derecha**: card radio 32px, padding 34px. Campos: Canción* · Artista · (Tu nombre* | Ciudad) · Dedicatoria (textarea 3 filas). Inputs de una línea: `border-radius:999px; padding:15px 22px; background:var(--card2); border:1px solid var(--linea)`; focus → borde `--azul`. Botón "Enviar petición" azul, píldora, full width.
- **Éxito**: reemplaza el formulario por icono circular `♪`, "¡Recibimos tu petición!", texto y botón outline "Pedir otra" que vuelve al formulario.

### 5. Oración (`/oracion`)
Misma estructura de dos columnas, en clave roja.
- **Izquierda**: píldora "MURO DE ORACIÓN" (roja) → H1 `Oramos **por ti**` → párrafo → dos cards de cifras (1.482 peticiones este año / 24/7 cadena de oración), número 42px/800 en `--azul` → card de testimonios con comillas tipográficas “ ”.
- **Derecha**: nombre (opcional, admite anónimo) · chips de motivo (Salud, Familia, Trabajo, Gratitud, Otro — activo: borde `--rojo`, fondo `rgba(239,66,86,0.12)`, texto `--rojo`) · textarea de 5 filas* · checkbox "Mantener mi petición privada" con `accent-color: var(--rojo)` · botón rojo.
- **Éxito**: icono `✚`, "Estamos orando contigo", botón "Enviar otra".

### 6. Apóyanos (`/apoyanos`)
Píldora "SIEMBRA" → H1 "Tu aporte mantiene la señal encendida" (17ch) → párrafo.
- **Tres niveles** (`minmax(250px,1fr)`, gap 24px, radio 30px): monto 40px/800 en `--azul`, píldora de periodicidad, descripción del impacto, y botón outline azul "Aportar" que se rellena en hover. $20.000 mensual / $50.000 mensual / $150.000 único.
- **Tres medios de pago** (radio 26px, fondo `--card2`): Transferencia Bancolombia · Nequi/Daviplata · PayPal.

### Footer
Fondo `var(--bg2)`, grilla `minmax(200px,1fr)`, gap 40px, padding `60px 24px 36px`. Cuatro columnas: logo + tagline · La radio (enlaces internos) · La fundación (enlaces externos a Fundación/Iglesia/Liceo, con ↗) · Línea directa (WhatsApp, dirección) + tres iconos sociales circulares de 40px (FB, IG, YT). Copyright 12px/300 abajo.

---

## Interactions & Behavior

### Navegación
El prototipo conmuta secciones con estado local. **En producción son rutas reales** (`/`, `/programacion`, `/locutores`, `/pide-tu-cancion`, `/oracion`, `/apoyanos`) — pero el reproductor debe vivir en el layout raíz y **no** reiniciarse al navegar.

Cada cambio de página: `window.scrollTo(0,0)` + animación `lmcRise 0.55s`. En Next.js, envolver solo el `children` en el wrapper animado.

### Reproductor
- Play/pausa alterna `playing` y controla un único elemento `<audio>` montado una sola vez.
- `volumen` (0-100) → `audio.volume = v/100`.
- Sin `streamUrl` el prototipo usa **Web Audio API** para un pad de acordes (tres osciladores, dos `triangle` + uno `sine`, `detune` ±6, filtro lowpass que barre entre 620-1320 Hz, progresión de 4 acordes cada 5.2 s con `setTargetAtTime`). Esto es **solo para la demo** — en producción bórralo y usa el stream real. Sí conviene conservar el `AnalyserNode` (`fftSize:64`) para que el visualizador reaccione al audio real.
- El contador de oyentes fluctúa cada 6 s (`Math.max(180, n + rand(-3,+4))`) — reemplazar por la cifra real de la API de streaming.

### Tema
Atributo `data-tema="claro"|"oscuro"` en `<html>`; todas las variables cambian. Por defecto oscuro. **Persistir la preferencia** en localStorage (el prototipo no lo hace) y respetar `prefers-color-scheme` en la primera visita.

### Programa al aire
Se calcula con la hora local: se busca el último bloque cuya hora de inicio ya pasó; antes del primer bloque del día se muestra el último de la noche anterior. "Voces del Liceo" (14:00) solo existe lunes, miércoles y viernes. **En producción esto debe correr en zona horaria de Colombia (`America/Bogota`)**, no en la del visitante.

### Formularios
Hoy son simulados (`preventDefault` → estado de éxito). Producción: validación, POST a la API, estados de carga y error, protección anti-spam, y notificación al equipo (correo o WhatsApp Business).

### Responsive
Todas las grillas usan `repeat(auto-fit,minmax(...))`, así que reflúyen solas. Puntos a revisar a mano:
- Nav del header → menú hamburguesa por debajo de ~900px.
- Reproductor → en móvil basta play + título + volumen; ocultar visualizador y contador.
- Filas de programación → apilar las tres columnas.
- Carrusel de voces → ya es scroll táctil; ocultar las flechas en móvil.

## State Management
| Estado | Tipo | Notas |
|---|---|---|
| `playing` | boolean | **Global** — debe sobrevivir a la navegación |
| `volumen` | number 0-100 | **Global**, persistir en localStorage |
| `tema` | `'claro' \| 'oscuro'` | Global, persistir |
| `oyentes` | number | Global, de la API de streaming |
| `dia` | 0-6 | Local de la página de programación |
| `motivo` | string | Local del formulario de oración |
| `cancionEnviada` / `oracionEnviada` | boolean | Local de cada formulario |

Datos que deberían venir de CMS/API: programación semanal, locutores, últimas canciones, testimonios, posts de Instagram, montos de donación.

## Assets
| Asset | Origen | Estado |
|---|---|---|
| Logo | `losmuroscaenradio.com/wp-content/uploads/2026/08/logomuros.jpg` | Real — pedir SVG o PNG con transparencia |
| Foto del estudio | `losmuroscaenradio.com/wp-content/uploads/2026/08/IMG_0849-scaled.jpg` | Real — pedir originales en alta |
| Retratos de locutores | `i.pravatar.cc` | **Placeholder** |
| Fotos de posts de Instagram | mezcla de las anteriores | **Placeholder** — integrar la API real de Instagram |
| Fuente | Poppins (Google Fonts) | En Next.js usar `next/font/google` |
| Iconos | glifos de texto (`▶ ❚❚ ♪ ✚ ♥ ‹ › ▾ ☀ ☾ 🔊 ◙`) | **Sustituir por un set real** (lucide-react) |

Enlaces reales ya en el diseño: [Google Play](https://play.google.com/store/apps/details?id=com.losmuroscaen.radio) · [App Store](https://apps.apple.com/app/los-muros-caen-radio/id1615705644) · [Facebook](https://www.facebook.com/losmuroscaenradio) · [Instagram](https://www.instagram.com/LosMurosCaenRadio/) · [YouTube](https://www.youtube.com/@fundacionlosmuroscaenminis1737) · Fundación / Iglesia / Liceo en `losmuroscaenradio.com`.

## Pendientes con el cliente
1. **URL del stream de audio** — es el bloqueante principal.
2. Fotos reales del equipo y del estudio.
3. Datos bancarios, Nequi, correo de PayPal y WhatsApp verdaderos.
4. Programación real (la del prototipo es plausible pero inventada).
5. Textos legales: política de privacidad y tratamiento de datos (Ley 1581 de 2012, Colombia) para los formularios.

## Files
- `Radio Los Muros Caen.dc.html` — el prototipo completo (plantilla + lógica al final del archivo).
- `support.js` — runtime del prototipo. **No portar.**
