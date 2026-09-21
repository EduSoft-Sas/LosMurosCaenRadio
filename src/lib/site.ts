export const SITIO = {
  nombre: "Los Muros Caen Radio",
  tagline: "Transmitimos esperanza, fe y restauración las 24 horas.",
  ciudad: "Santa Rosa de Cabal",
  region: "Risaralda, Colombia",
  direccion: "Cl. 17 #16-25, Santa Rosa de Cabal",
  whatsapp: "+57 300 123 4567",
  whatsappUrl: "https://wa.link/gbk5d6",
  url: "https://radio.losmuroscaenradio.com",
  logo: "https://losmuroscaenradio.com/wp-content/uploads/2026/08/logomuros.jpg",
  estudio:
    "https://losmuroscaenradio.com/wp-content/uploads/2026/08/IMG_0849-scaled.jpg",
  streamUrl: process.env.NEXT_PUBLIC_STREAM_URL ?? "",
  zonaHoraria: "America/Bogota",
} as const;

export const ENLACES = {
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.losmuroscaen.radio",
  appStore: "https://apps.apple.com/app/los-muros-caen-radio/id1615705644",
  facebook: "https://www.facebook.com/losmuroscaenradio",
  instagram: "https://www.instagram.com/LosMurosCaenRadio/",
  youtube: "https://www.youtube.com/@fundacionlosmuroscaenminis1737",
  fundacion: "https://losmuroscaenradio.com/fundacion/",
  iglesia: "https://losmuroscaenradio.com/iglesia/",
  liceo: "https://losmuroscaenradio.com/liceo/",
} as const;

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/programacion", label: "Programación" },
  { href: "/locutores", label: "Locutores" },
  { href: "/pide-tu-cancion", label: "Pide tu canción" },
  { href: "/oracion", label: "Oración" },
] as const;
