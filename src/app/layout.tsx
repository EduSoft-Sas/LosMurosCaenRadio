import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Encabezado } from "@/components/layout/encabezado";
import { PieDePagina } from "@/components/layout/pie-de-pagina";
import { TransicionPagina } from "@/components/layout/transicion-pagina";
import { Proveedores } from "@/components/proveedores";
import { Reproductor } from "@/components/reproductor/reproductor";
import { enAire } from "@/lib/horario";
import { SITIO } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITIO.url),
  title: {
    default: `${SITIO.nombre} · En vivo 24/7 desde ${SITIO.ciudad}`,
    template: `%s · ${SITIO.nombre}`,
  },
  description: SITIO.tagline,
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: SITIO.nombre,
    title: `${SITIO.nombre} · En vivo 24/7`,
    description: SITIO.tagline,
    images: [SITIO.estudio],
  },
  alternates: { canonical: "/" },
};

export const revalidate = 300;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Proveedores>
          <div className="min-h-screen pt-[71px] pb-[120px]">
            <Encabezado />
            <TransicionPagina>{children}</TransicionPagina>
            <PieDePagina />
          </div>
          <Reproductor inicial={enAire()} />
        </Proveedores>
      </body>
    </html>
  );
}
