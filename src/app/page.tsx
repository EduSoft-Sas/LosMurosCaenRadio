import { Accesos } from "@/components/inicio/accesos";
import { AppMovil } from "@/components/inicio/app-movil";
import { Cabina } from "@/components/inicio/cabina";
import { Hero } from "@/components/inicio/hero";
import { HoyEnLaEmisora } from "@/components/inicio/hoy-en-la-emisora";
import { Instagram } from "@/components/inicio/instagram";
import { Ticker } from "@/components/inicio/ticker";
import { VocesCarrusel } from "@/components/inicio/voces-carrusel";
import { enAire } from "@/lib/horario";

export const revalidate = 300;

export default function Inicio() {
  const aire = enAire();

  return (
    <main className="lmc-fade">
      <Hero inicial={aire} />
      <Ticker />
      <HoyEnLaEmisora inicial={aire} />
      <Accesos />
      <VocesCarrusel />
      <Cabina />
      <Instagram />
      <AppMovil />
    </main>
  );
}
