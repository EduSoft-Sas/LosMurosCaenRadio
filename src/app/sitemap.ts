import type { MetadataRoute } from "next";

import { SITIO } from "@/lib/site";

const RUTAS = [
  "/",
  "/programacion",
  "/locutores",
  "/pide-tu-cancion",
  "/oracion",
  "/apoyanos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return RUTAS.map((ruta) => ({
    url: new URL(ruta, SITIO.url).toString(),
    lastModified: new Date(),
    changeFrequency: ruta === "/" ? "daily" : "weekly",
    priority: ruta === "/" ? 1 : 0.7,
  }));
}
