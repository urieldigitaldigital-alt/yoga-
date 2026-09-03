// ---------------------------------------------------------------------------
// CONTENIDO EDITABLE DEL SITIO
// ---------------------------------------------------------------------------
// Este es el único archivo que hace falta tocar para actualizar textos,
// fotos, fechas, retiros, talleres, WhatsApp e Instagram. Los campos de
// texto que todavía no tienen dato real quedan como string vacío ("") en
// vez de un placeholder inventado; los componentes los ocultan cuando
// están vacíos.
// ---------------------------------------------------------------------------

export const site = {
  brandName: "Sol Naciente",
  instructorName: "Alejandra Lorena Barnet",
  eyebrow: "YOGA · BIENESTAR · EXPERIENCIAS",
  metaDescription:
    "Yoga, retiros holísticos, talleres y formaciones para acompañar tu camino de bienestar, dentro y fuera del país.",
};

// Dejar vacío hasta tener el dato real. Formato: código de país + área + número, sin "+".
// Ejemplo: "5491122334455"
export const WHATSAPP_NUMBER = "5493764204573";

// Dejar vacío hasta tener el dato real. Solo el nombre de usuario, sin @.
export const INSTAGRAM_USERNAME = "instituto_sol_naciente";

export function whatsappHref(message: string): string | undefined {
  if (!WHATSAPP_NUMBER) return undefined;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_JOIN_MESSAGE =
  "Hola! Quiero sumarme y conocer más sobre las clases, retiros y talleres.";

export const instagramHref = INSTAGRAM_USERNAME
  ? `https://instagram.com/${INSTAGRAM_USERNAME}`
  : undefined;

export const nav = {
  left: [
    { label: "Yoga", href: "#yoga" },
    { label: "Retiros", href: "#retiros" },
  ],
  right: [
    { label: "Talleres", href: "#talleres" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ],
  mobile: [
    { label: "Inicio", href: "#inicio" },
    { label: "Yoga", href: "#yoga" },
    { label: "Retiros", href: "#retiros" },
    { label: "Talleres y formación", href: "#talleres" },
    { label: "El lugar", href: "#lugar" },
    { label: "Galería", href: "#galeria" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ],
  cta: { label: "Consultar", href: "#contacto" },
};

export const hero = {
  eyebrow: "YOGA · BIENESTAR · EXPERIENCIAS",
  title: "Volver a vos.",
  subtitle: "Yoga, retiros, talleres y experiencias para cultivar tu bienestar.",
  ctaPrimary: { label: "Descubrir experiencias", href: "#retiros" },
  ctaSecondary: { label: "Ver el lugar", href: "#lugar" },
  media: {
    // Imagen animada (WebP), no video: así se reproduce siempre sola, en
    // cualquier plataforma, sin depender de políticas de autoplay del
    // navegador (por ejemplo, "Reducir movimiento" activado en iOS).
    src: "/media/hero.webp",
    mobileSrc: "/media/hero-mobile.webp",
    label: "Práctica de yoga o instante de un retiro, tomado con luz natural",
  },
};

// Galería simple de fotos reales de la práctica, sin categorías ni texto encima.
export const practicePhotos = [
  { src: "/media/yoga/estilo-04.jpg", label: "Práctica de yoga" },
  { src: "/media/yoga/estilo-01.jpg", label: "Práctica de yoga" },
  { src: "/media/yoga/estilo-03.jpg", label: "Práctica de yoga en grupo" },
  { src: "/media/yoga/estilo-02.jpg", label: "Práctica de yoga" },
];

export const purpose = {
  eyebrow: "SOBRE EL ESPACIO",
  title: "Más que una práctica. Una forma de habitar el bienestar.",
  highlight: "Crear espacios reales para conectar, aprender y sentir.",
  cta: { label: "Conocer mi historia", href: "#sobre-mi" },
  media: { src: "/media/espacio-01.jpg", label: "Foto real: el espacio de práctica o una clase en curso" },
};

export const yogaStyles = [
  {
    id: "01",
    name: "Estilo de yoga 01",
    description: "",
    media: { src: "/media/yoga/estilo-01.jpg", label: "Foto real: estilo de yoga 01" },
  },
  {
    id: "02",
    name: "Estilo de yoga 02",
    description: "",
    media: { src: "/media/yoga/estilo-02.jpg", label: "Foto real: estilo de yoga 02" },
  },
  {
    id: "03",
    name: "Estilo de yoga 03",
    description: "",
    media: { src: "/media/yoga/estilo-03.jpg", label: "Foto real: estilo de yoga 03" },
  },
  {
    id: "04",
    name: "Estilo de yoga 04",
    description: "",
    media: { src: "/media/yoga/estilo-04.jpg", label: "Foto real: estilo de yoga 04" },
  },
];

export const retreats = {
  eyebrow: "RETIROS HOLÍSTICOS",
  title: "Vivir la experiencia.",
  reach: "Dentro y fuera de la provincia · Dentro y fuera del país",
  tag: "Próximos: octubre y noviembre",
  description:
    "Empezaron como un espacio para quienes cursaban el profesorado, y hoy están abiertos a todo público. Recorrimos distintos puntos de la provincia, otras provincias como Córdoba y Catamarca, y cruzamos la frontera hacia Paraguay y Brasil, siempre buscando lugares con energía y naturaleza. Hacemos entre dos y tres retiros por año.",
  cta: { label: "Quiero sumarme", href: "#contacto" },
  media: { src: "/media/retiros-01.jpg", label: "Foto real grande: retiro en curso o el lugar donde se realiza" },
};

export const workshops = {
  eyebrow: "FORMACIÓN",
  title: "Aprender también es parte del camino.",
  body: "Formaciones con aval nacional e internacional, afiliadas a una federación internacional de bienestar holístico. Presencial y online.",
  cta: { label: "Ver formaciones", href: "#contacto" },
  media: { src: "/media/talleres-01.jpg", label: "Foto real: instancia de taller o formación" },
  items: [
    { name: "Profesorado de Yoga Terapéutico", detail: "Presencial y online" },
    { name: "Profesorado de Yoga Integral Deportivo", detail: "Presencial y online" },
    { name: "Instructorado", detail: "Presencial y online" },
    { name: "Talleres temáticos", detail: "Bioneuromoción, fascia, Tai Chi, meditación, Ayurveda" },
  ],
};

export const faq = {
  eyebrow: "PREGUNTAS FRECUENTES",
  title: "Antes de anotarte, resolvamos tus dudas.",
  items: [
    {
      question: "¿Qué es el Profesorado de Yoga Terapéutico?",
      answer:
        "Es la formación para quienes quieren usar el yoga como herramienta de acompañamiento en procesos de dolor, lesión o rehabilitación: aprendés a adaptar la práctica a cada cuerpo y cada historia, en vez de enseñar una única secuencia para todos.",
    },
    {
      question: "¿Qué es el Profesorado de Yoga Integral Deportivo?",
      answer:
        "Está pensado para quienes entrenan o acompañan a deportistas. Combina yoga con nociones de movimiento y recuperación física, para sumarlo como complemento del entrenamiento y la prevención de lesiones.",
    },
    {
      question: "¿En qué se diferencia el Instructorado de un profesorado?",
      answer:
        "El Instructorado te da las bases para empezar a dar clases; los profesorados profundizan mucho más en cada especialidad y tienen aval nacional e internacional.",
    },
    {
      question: "¿Y los talleres temáticos, de qué se tratan?",
      answer:
        "Son espacios puntuales para profundizar en una técnica específica —bioneuromoción, fascia, Tai Chi, meditación o Ayurveda— sin el compromiso de cursar un profesorado completo.",
    },
    {
      question: "¿Para qué me sirve hacer una formación en Sol Naciente?",
      answer:
        "Depende de qué estés buscando: para dar tus propias clases, para profundizar tu práctica personal, para sumar una herramienta de trabajo si ya sos profe o entrenador, o para acompañar mejor a personas con dolores o lesiones puntuales.",
    },
    {
      question: "¿Necesito experiencia previa en yoga para empezar?",
      answer:
        "No hace falta ser avanzado para arrancar. Escribinos por WhatsApp contándonos tu nivel y te orientamos sobre la formación que mejor te queda.",
    },
    {
      question: "¿Es presencial u online?",
      answer:
        "Todas las formaciones tienen modalidad presencial y online, para que puedas cursar estés donde estés.",
    },
    {
      question: "¿Qué validez tienen los títulos?",
      answer:
        "Están avaladas a nivel nacional e internacional, afiliadas a una federación internacional de bienestar holístico.",
    },
  ],
};

export const aboutMe = {
  eyebrow: "SOBRE MÍ",
  greeting: `Hola, soy ${site.instructorName}.`,
  body: "Hace más de 30 años, una lesión en la columna me alejó de la danza clásica que estudiaba y me acercó al yoga. Empecé buscando calmar el dolor; con el tiempo se convirtió en mi camino. Me especialicé en yoga terapéutico y yoga integral deportivo, y hoy formo profesores e instructores con aval nacional e internacional.",
  highlight: "Comparto lo que practico, lo que aprendo y lo que sigo descubriendo.",
  nameOrigin: {
    eyebrow: "EL ORIGEN DEL NOMBRE",
    text: "El nombre nació en una clase de chicos: una alumna dijo que cada postura se sentía como abrir una ventana para dejar entrar el sol. Así nació Sol Naciente.",
  },
  cta: { label: "Empezá tu camino", href: "#contacto" },
  media: { src: "", label: "Foto real y grande de la profesional" },
};

export const place = {
  eyebrow: "EL LUGAR",
  title: "Un espacio pensado para respirar.",
  body: "",
  media: { src: "/media/lugar/instituto.mp4", label: "Video real: el espacio del instituto" },
  address: "Instituto Sol Naciente",
  mapQuery: "-27.369286,-55.922581",
  mapsUrl: "https://maps.google.com/?q=-27.369286,-55.922581",
  cta: { label: "Cómo llegar", href: "https://maps.google.com/?q=-27.369286,-55.922581" },
};

// Carrusel de momentos de retiro: estos clips son de un restaurante y un
// living con fogón durante un retiro (no del estudio en sí), por eso van
// en Retiros y no en "El lugar".
export const retreatVideos = [
  { src: "/media/lugar/lugar-01.mp4", label: "Detalle floral durante un retiro" },
  { src: "/media/lugar/lugar-02.mp4", label: "Jazmines en la mesa de un retiro" },
  { src: "/media/lugar/lugar-03.mp4", label: "Ambientación de un retiro" },
  { src: "/media/lugar/lugar-04.mp4", label: "Fogón de leña en un retiro" },
  { src: "/media/lugar/lugar-05.mp4", label: "Salón donde se compartieron las comidas" },
  { src: "/media/lugar/lugar-06.mp4", label: "Mesa servida durante un retiro" },
  { src: "/media/lugar/lugar-07.mp4", label: "Momento junto al fuego en un retiro" },
  { src: "/media/lugar/lugar-08.mp4", label: "Detalle de la mesa en un retiro I" },
  { src: "/media/lugar/lugar-09.mp4", label: "Detalle de la mesa en un retiro II" },
];

export const gallery = [
  { src: "/media/galeria/galeria-01.jpg", orientation: "portrait", label: "Postura invertida en el estudio" },
  { src: "/media/galeria/galeria-02.jpg", orientation: "portrait", label: "Práctica en pareja, apertura de espalda" },
  { src: "/media/galeria/galeria-03.jpg", orientation: "portrait", label: "Estiramiento con banda elástica" },
  { src: "/media/galeria/galeria-04.jpg", orientation: "portrait", label: "Equilibrio invertido contra la pared" },
  { src: "/media/galeria/galeria-05.jpg", orientation: "portrait", label: "Práctica de equilibrio en clase grupal" },
  { src: "/media/galeria/galeria-06.jpg", orientation: "portrait", label: "Postura de torsión, vista cenital" },
  { src: "/media/galeria/galeria-07.jpg", orientation: "portrait", label: "Flexión de espalda con bloque" },
  { src: "/media/galeria/galeria-08.jpg", orientation: "portrait", label: "Clase grupal, postura del guerrero" },
] as const;

export const closing = {
  title: "Tu próximo espacio de bienestar puede empezar acá.",
  subtitle: "Sumate a las clases, retiros y talleres de Sol Naciente.",
  socialTitle: "Compartimos el camino.",
  socialSubtitle: "Seguinos en Instagram y conocé el día a día del espacio.",
  ctaPrimary: { label: "Ver experiencias", href: "#retiros" },
  ctaSecondary: { label: "Contactar", href: "#contacto" },
  media: { src: "", label: "Foto real de fondo: retiro, naturaleza o práctica al aire libre" },
};

export const contact = {
  eyebrow: "CONTACTO",
  title: "Conversemos.",
  body: "Escribime para resolver una consulta o coordinar un retiro grupal.",
  cta: { label: "Quiero saber más", href: "#contacto" },
};

export const footer = {
  links: [
    { label: "Inicio", href: "#inicio" },
    { label: "Yoga", href: "#yoga" },
    { label: "Retiros", href: "#retiros" },
    { label: "Formaciones", href: "#talleres" },
    { label: "El lugar", href: "#lugar" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ],
};
