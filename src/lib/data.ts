export type Programa = {
  h: number;
  nombre: string;
  locutor: string;
  desc: string;
  /** Días (0=Dom) en que sale al aire. Vacío = todos los días. */
  dias?: number[];
};

export const PROGRAMACION: Programa[] = [
  {
    h: 5,
    nombre: "Amanecer con Fe",
    locutor: "Pra. Elena Rojas",
    desc: "Devocional y oración para empezar el día con el corazón despierto.",
  },
  {
    h: 7,
    nombre: "La Mañana que Canta",
    locutor: "Andrés Villa",
    desc: "Alabanza, saludos y las peticiones musicales de los oyentes.",
  },
  {
    h: 10,
    nombre: "Palabra Viva",
    locutor: "Pastor Hernán Soto",
    desc: "Enseñanza bíblica verso por verso, en lenguaje sencillo.",
  },
  {
    h: 12,
    nombre: "Mediodía Restaurador",
    locutor: "Música continua",
    desc: "Selección instrumental y adoración suave para la jornada.",
  },
  {
    h: 14,
    nombre: "Voces del Liceo",
    locutor: "Estudiantes del liceo",
    desc: "Los jóvenes toman el micrófono: noticias, música y proyectos.",
    dias: [1, 3, 5],
  },
  {
    h: 16,
    nombre: "Tarde de Alabanza",
    locutor: "Marcela Ruiz",
    desc: "Las canciones más pedidas y dedicatorias al aire.",
  },
  {
    h: 18,
    nombre: "Puertas Abiertas",
    locutor: "Equipo Los Muros Caen",
    desc: "Testimonios en vivo de restauración y familias transformadas.",
  },
  {
    h: 20,
    nombre: "Oración de la Noche",
    locutor: "Pra. Elena Rojas",
    desc: "Intercedemos por cada petición recibida durante el día.",
  },
  {
    h: 22,
    nombre: "Noche Serena",
    locutor: "Música continua",
    desc: "Adoración instrumental hasta el amanecer.",
  },
];

export type Locutor = {
  nombre: string;
  rol: string;
  cargo: string;
  programa: string;
  bio: string;
  foto: string;
};

export const LOCUTORES: Locutor[] = [
  {
    nombre: "Elena Rojas",
    rol: "DIRECTORA / PASTORA",
    cargo: "Directora · Pastora",
    programa: "Amanecer con Fe · Oración de la Noche",
    bio: "Fundadora de la cadena de oración. Lleva doce años abriendo y cerrando el día al aire.",
    foto: "https://i.pravatar.cc/600?img=45",
  },
  {
    nombre: "Andrés Villa",
    rol: "LOCUTOR MAÑANA",
    cargo: "Locutor de la mañana",
    programa: "La Mañana que Canta",
    bio: "La voz que despierta a Santa Rosa. Músico, papá y coleccionista de alabanzas antiguas.",
    foto: "https://i.pravatar.cc/600?img=12",
  },
  {
    nombre: "Hernán Soto",
    rol: "PASTOR / ENSEÑANZA",
    cargo: "Pastor · Enseñanza bíblica",
    programa: "Palabra Viva",
    bio: "Enseña la Biblia verso por verso, sin tecnicismos y con historias del barrio.",
    foto: "https://i.pravatar.cc/600?img=59",
  },
  {
    nombre: "Marcela Ruiz",
    rol: "MUSICALIZACIÓN",
    cargo: "Coordinadora musical",
    programa: "Tarde de Alabanza",
    bio: "Arma la programación musical y lee cada dedicatoria que llega al WhatsApp.",
    foto: "https://i.pravatar.cc/600?img=44",
  },
  {
    nombre: "Voces del Liceo",
    rol: "SEMILLERO JUVENIL",
    cargo: "Semillero juvenil",
    programa: "Voces del Liceo · Mié y Vie",
    bio: "Estudiantes del liceo que aprenden producción, guion y locución al aire.",
    foto: "https://losmuroscaenradio.com/wp-content/uploads/2026/08/IMG_0849-scaled.jpg",
  },
];

export const POSTS = [
  {
    foto: "https://losmuroscaenradio.com/wp-content/uploads/2026/08/IMG_0849-scaled.jpg",
    texto:
      "Así suena la mañana desde nuestra cabina. Gracias por acompañarnos cada día. #LosMurosCaen #RadioCristiana",
    fecha: "14 de sep",
  },
  {
    foto: "https://i.pravatar.cc/800?img=12",
    texto:
      "Andrés abrió el micrófono con las canciones que ustedes pidieron por WhatsApp. ¡Siguen llegando!",
    fecha: "7 de sep",
  },
  {
    foto: "https://i.pravatar.cc/800?img=45",
    texto:
      "Cada noche a las 8:00 p.m. oramos por cada petición que nos escriben. Nadie ora solo.",
    fecha: "2 de sep",
  },
  {
    foto: "https://i.pravatar.cc/800?img=59",
    texto:
      "Los jóvenes del liceo aprendiendo producción radial. El semillero que sostiene el futuro de la emisora.",
    fecha: "28 de ago",
  },
];

export const ULTIMAS_CANCIONES = [
  {
    titulo: "Al que está sentado en el trono",
    artista: "Marcos Witt",
    para: "Para mamá",
  },
  { titulo: "Yo te busco", artista: "Marcos Brunet", para: "Para Camila" },
  { titulo: "Renuévame", artista: "Marcos Vidal", para: "Familia Ospina" },
  {
    titulo: "Tu fidelidad",
    artista: "Marcela Gándara",
    para: "Para los abuelos",
  },
];

export const TESTIMONIOS = [
  {
    texto: "Puse la radio en el taller y mi hijo volvió a casa esa misma semana.",
    autor: "Jairo · Dosquebradas",
  },
  {
    texto: "Los escucho desde Madrid a las 5 a.m. Es como estar en casa otra vez.",
    autor: "Luz Marina · España",
  },
  {
    texto: "Pedí oración por mi cirugía y todo el equipo oró en vivo. Salió bien.",
    autor: "Anónimo",
  },
];

export const MOTIVOS = ["Salud", "Familia", "Trabajo", "Gratitud", "Otro"] as const;

export const APORTES = [
  {
    monto: "$20.000",
    periodo: "MENSUAL",
    impacto: "Cubre un día completo de transmisión por internet.",
  },
  {
    monto: "$50.000",
    periodo: "MENSUAL",
    impacto: "Sostiene el bloque de oración nocturno durante un mes.",
  },
  {
    monto: "$150.000",
    periodo: "ÚNICO",
    impacto: "Financia equipos para un estudiante del semillero de radio.",
  },
];

export const MEDIOS_PAGO = [
  {
    etiqueta: "TRANSFERENCIA",
    titulo: "Bancolombia · Ahorros",
    detalle: "000-000000-00 · Fundación Los Muros Caen",
  },
  {
    etiqueta: "NEQUI / DAVIPLATA",
    titulo: "+57 300 123 4567",
    detalle: "A nombre de la Fundación",
  },
  {
    etiqueta: "DESDE EL EXTERIOR",
    titulo: "PayPal",
    detalle: "donaciones@losmuroscaenradio.com",
  },
];

export const DIAS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"] as const;
