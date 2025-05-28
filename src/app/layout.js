import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ChatBiblia.ai - Tu Compañero de Estudio Bíblico con IA | Lanzamiento en los Próximos Días",
    metaDescription: "Únete a la lista de espera de ChatBiblia.ai, tu compañero de estudio bíblico impulsado por IA. Genera imágenes de versículos, explora la Biblia con chat, audio y más. ¡Lanzamiento en los próximos días!",
    nav: { brand: "ChatBiblia.ai", features: "Características", joinWaitlist: "Únete a la Lista" },
    hero: {
      title: "Descubre la Palabra de Dios con ChatBiblia.ai",
      subtitle: "Lanzamiento en los próximos días. Únete a la lista de espera para generar imágenes de versículos, explorar la Biblia con IA y conectar con la comunidad.",
      cta: "Únete Ahora",
    },
    features: {
      title: "Explora Nuestras Características",
      chat: { title: "Chat con la Palabra", desc: "Conversa con IA sobre enseñanzas bíblicas y obtén interpretaciones profundas." },
      multiLanguage: { title: "Biblias Multilingües", desc: "Accede a la Biblia en múltiples idiomas y versiones para un estudio global." },
      search: { title: "Búsqueda de Versículos", desc: "Encuentra versículos por libro, capítulo o palabra clave rápidamente." },
      shareSave: { title: "Comparte y Guarda", desc: "Comparte versículos, agrega notas, marca favoritos y crea devocionales." },
      aiInsights: { title: "Imágenes y Perspectivas con IA", desc: "Genera imágenes únicas de versículos y obtén explicaciones detalladas con IA." },
      audioSummaries: { title: "Audio y Resúmenes", desc: "Escucha capítulos y lee resúmenes claros de cada sección." },
      prayers: { title: "Oraciones Diarias", desc: "Crea y comparte oraciones para inspirar tu crecimiento espiritual." },
      plans: { title: "Planes Bíblicos", desc: "Sigue planes de lectura estructurados para un estudio consistente." },
      community: { title: "Comunidad", desc: "Conecta con otros para discutir y crecer en la fe juntos." },
      cta: "Únete para Descubrir Estas Funciones",
    },
    versePreview: {
      title: "Vista Previa de Versículos con Imagen Generada por IA",
      verse: "En el principio, Dios creó los cielos y la tierra.",
      reference: "Génesis 1:1",
      interpretation: "Este versículo establece a Dios como el creador, sentando las bases de la narrativa bíblica.",
      share: "Compartir versículo",
      favorite: "Favorito",
      note: "Nota",
      generateImage: "Generar imagen",
    },
    waitlist: {
      title: "Únete a la Lista de Espera",
      subtitle: "¡Sé el primero en experimentar ChatBiblia.ai en los próximos días! Completa el formulario a continuación.",
    },
    footer: {
      copyright: "© 2025 ChatBiblia.ai. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      about: "Sobre Nosotros",
    },
    language: "English",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
