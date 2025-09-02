'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatIcon, GlobeIcon, SearchIcon, ShareIcon, ImageIcon, AudioIcon, PrayerIcon, PlanIcon, CommunityIcon } from '../components/icons';

const translations = {
  es: {
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
  },
  en: {
    title: "ChatBiblia.ai - Your AI-Powered Bible Study Companion | Launching in the Coming Days",
    metaDescription: "Join the ChatBiblia.ai waitlist, your AI-powered Bible study companion. Generate verse images, explore the Bible with chat, audio, and more. Launching in the coming days!",
    nav: { brand: "ChatBiblia.ai", features: "Features", joinWaitlist: "Join Waitlist" },
    hero: {
      title: "Discover the Word of God with ChatBiblia.ai",
      subtitle: "Launching in the coming days. Join the waitlist to generate verse images, explore the Bible with AI, and connect with the community.",
      cta: "Join Now",
    },
    features: {
      title: "Explore Our Features",
      chat: { title: "Chat with the Word", desc: "Engage in AI-driven conversations about biblical teachings and insights." },
      multiLanguage: { title: "Multi-Language Bibles", desc: "Access the Bible in various languages and versions for global study." },
      search: { title: "Verse Search", desc: "Quickly find verses by book, chapter, or keyword." },
      shareSave: { title: "Share & Save", desc: "Share verses, add notes, mark favorites, and create devotionals." },
      aiInsights: { title: "AI-Generated Images & Insights", desc: "Generate unique verse images and get detailed AI-powered explanations." },
      audioSummaries: { title: "Audio & Summaries", desc: "Listen to chapters and read clear summaries of each section." },
      prayers: { title: "Daily Prayers", desc: "Create and share prayers to inspire your spiritual growth." },
      plans: { title: "Bible Plans", desc: "Follow structured reading plans for consistent study." },
      community: { title: "Community", desc: "Connect with others to discuss and grow in faith together." },
      cta: "Join to Discover These Features",
    },
    versePreview: {
      title: "Verse Preview with AI-Generated Image",
      verse: "In the beginning, God created the heavens and the earth.",
      reference: "Genesis 1:1",
      interpretation: "This verse establishes God as the creator, setting the foundation for the biblical narrative.",
      share: "Share verse",
      favorite: "Favorite",
      note: "Note",
      generateImage: "Generate image",
    },
    waitlist: {
      title: "Join the Waitlist",
      subtitle: "Be the first to experience ChatBiblia.ai in the coming days! Complete the form below.",
    },
    footer: {
      copyright: "© 2025 ChatBiblia.ai. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      about: "About Us",
    },
    language: "Español",
  },
};

const featureIcons = [
  ChatIcon,
  GlobeIcon,
  SearchIcon,
  ShareIcon,
  ImageIcon,
  AudioIcon,
  PrayerIcon,
  PlanIcon,
  CommunityIcon,
];

const buttonIcons = {
  share: ShareIcon,
  favorite: PrayerIcon, // Placeholder for favorite (heart)
  note: PlanIcon, // Placeholder for note (book)
  generateImage: ImageIcon,
};

export default function Home() {
  const [language, setLanguage] = useState('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="AI Bible study, ChatBiblia.ai, Bible study app, Christian app, AI verse images" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:url" content="https://chatbiblia.ai" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'es' ? 'es_ES' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.metaDescription} />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://chatbiblia.ai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'ChatBiblia.ai',
              url: 'https://chatbiblia.ai',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://chatbiblia.ai/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo-icon.png"
              alt="ChatBiblia.ai Logo"
              width={40}
              height={40}
              className="cursor-pointer"
              aria-label="ChatBiblia.ai Home"
            />
            <span className="text-gray-900 font-semibold text-lg">ChatBiblia.ai</span>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#features" className="text-gray-600 hover:text-yellow-600 transition">{t.nav.features}</a>
            <a
              href="#waitlist"
              className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition transform hover:scale-105"
              aria-label={t.nav.joinWaitlist}
            >
              {t.nav.joinWaitlist}
            </a>
              <a href="/chat" className="text-gray-600 hover:text-yellow-600 transition">Chat</a>
            
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="text-gray-600 hover:text-yellow-600 transition"
              aria-label={`Switch to ${t.language}`}
            >
              {t.language}
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-yellow-600 transition focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full z-40"
            >
              <div className="flex flex-col items-center space-y-4 py-6">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-yellow-600 transition text-lg"
                  onClick={toggleMenu}
                >
                  {t.nav.features}
                </a>
                <a
                  href="#waitlist"
                  className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition transform hover:scale-105 text-lg"
                  onClick={toggleMenu}
                  aria-label={t.nav.joinWaitlist}
                >
                  {t.nav.joinWaitlist}
                </a>
                <button
                  onClick={() => {
                    setLanguage(language === 'es' ? 'en' : 'es');
                    toggleMenu();
                  }}
                  className="text-gray-600 hover:text-yellow-600 transition text-lg"
                  aria-label={`Switch to ${t.language}`}
                >
                  {t.language}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-yellow-50 relative">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Fondo de estudio bíblico"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-20"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <a
            href="#waitlist"
            className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition transform hover:scale-105 text-lg font-semibold"
            aria-label={t.hero.cta}
          >
            {t.hero.cta}
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.features.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(t.features)
              .filter(f => f.title && f.desc)
              .map((feature, index) => {
                const Icon = featureIcons[index];
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-600 hover:shadow-xl transition transform hover:-translate-y-1"
                  >
                    <div className="flex items-center mb-4">
                      <Icon className="w-10 h-10 fill-yellow-600 mr-4" aria-hidden="true" />
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                );
              })}
          </div>
          <div className="text-center mt-12">
            <a
              href="#waitlist"
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition transform hover:scale-105 text-lg font-semibold"
              aria-label={t.features.cta}
            >
              {t.features.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Verse Preview Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            {t.versePreview.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center gap-8 p-8"
          >
            {/* Image */}
            <motion.div
              className="w-full md:w-1/2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/versiculo.png"
                alt="Imagen generada por IA del versículo"
                width={500}
                height={375}
                className="rounded-xl object-cover w-full shadow-md"
              />
            </motion.div>
            {/* Verse Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start"
              >
                <div className="w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-semibold text-lg">1:1</span>
                </div>
                <div>
                  <p className="text-xl text-gray-900 font-medium leading-7">
                    {t.versePreview.verse}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{t.versePreview.reference}</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-50 p-6 rounded-xl border-l-4 border-yellow-600"
              >
                <p className="text-gray-700 text-base leading-relaxed">
                  {t.versePreview.interpretation}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-end gap-2"
              >
                {['share', 'favorite', 'note', 'generateImage'].map((action) => {
                  const Icon = buttonIcons[action];
                  return (
                    <motion.button
                      key={action}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                      aria-label={t.versePreview[action]}
                      title={t.versePreview[action]}
                    >
                      <Icon className="w-5 h-5 fill-white" aria-hidden="true" />
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t.waitlist.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.waitlist.subtitle}
          </p>
          <div className="max-w-2xl mx-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdmNneqwYNlhTuK3Tf-1RW0oU76DwSMlwpoKtZ2fYYFUtdHrw/viewform?usp=header"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="ChatBiblia.ai Waitlist Form"
              className="rounded-lg shadow-md"
            >
              Cargando…
            </iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>{t.footer.copyright}</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">
              {t.footer.terms}
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition">
              {t.footer.about}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}