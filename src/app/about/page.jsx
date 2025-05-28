'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const translations = {
  es: {
    title: "Sobre Nosotros | ChatBiblia.ai",
    metaDescription: "Conoce más sobre ChatBiblia.ai, nuestra misión de transformar el estudio bíblico con IA y nuestro compromiso con la comunidad cristiana.",
    nav: { brand: "ChatBiblia.ai", features: "Características", joinWaitlist: "Únete a la Lista" },
    content: {
      title: "Sobre Nosotros",
      intro: "ChatBiblia.ai es una plataforma innovadora diseñada para acercar la Palabra de Dios a personas de todo el mundo a través de la inteligencia artificial. Nuestra misión es hacer que el estudio bíblico sea accesible, interactivo y enriquecedor para todos.",
      sections: [
        {
          title: "Nuestra Misión",
          content: "Queremos transformar la forma en que las personas interactúan con la Biblia, utilizando IA para ofrecer herramientas como generación de imágenes de versículos, chats interactivos, resúmenes de audio y planes de lectura personalizados. Creemos que la tecnología puede fortalecer la fe y la comprensión espiritual.",
        },
        {
          title: "Nuestra Visión",
          content: "Imaginamos un mundo donde cada persona, sin importar su idioma o ubicación, pueda explorar la Biblia de manera profunda y significativa. ChatBiblia.ai busca ser un compañero confiable para el crecimiento espiritual, conectando a las comunidades cristianas globales.",
        },
        {
          title: "Nuestro Equipo",
          content: "Somos un equipo de innovadores, desarrolladores y creyentes apasionados por combinar tecnología y fe. Trabajamos para crear una plataforma que respete los valores cristianos mientras abraza los avances modernos.",
        },
        {
          title: "Únete a Nosotros",
          content: "Estamos a punto de lanzar ChatBiblia.ai en 30 días. Únete a nuestra lista de espera para ser parte de esta revolución en el estudio bíblico. ¡Tu viaje espiritual está a punto de volverse más interactivo y visual!",
        },
      ],
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
    title: "About Us | ChatBiblia.ai",
    metaDescription: "Learn more about ChatBiblia.ai, our mission to transform Bible study with AI, and our commitment to the Christian community.",
    nav: { brand: "ChatBiblia.ai", features: "Features", joinWaitlist: "Join Waitlist" },
    content: {
      title: "About Us",
      intro: "ChatBiblia.ai is an innovative platform designed to bring the Word of God closer to people worldwide through artificial intelligence. Our mission is to make Bible study accessible, interactive, and enriching for everyone.",
      sections: [
        {
          title: "Our Mission",
          content: "We aim to transform how people engage with the Bible, using AI to provide tools like verse image generation, interactive chats, audio summaries, and personalized reading plans. We believe technology can strengthen faith and spiritual understanding.",
        },
        {
          title: "Our Vision",
          content: "We envision a world where everyone, regardless of language or location, can explore the Bible deeply and meaningfully. ChatBiblia.ai seeks to be a trusted companion for spiritual growth, connecting global Christian communities.",
        },
        {
          title: "Our Team",
          content: "We are a team of innovators, developers, and believers passionate about blending technology and faith. We work to create a platform that respects Christian values while embracing modern advancements.",
        },
        {
          title: "Join Us",
          content: "We’re launching ChatBiblia.ai in 30 days. Join our waitlist to be part of this revolution in Bible study. Your spiritual journey is about to become more interactive and visual!",
        },
      ],
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

export default function AboutUs() {
  const [language, setLanguage] = useState('es');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="ChatBiblia.ai, about us, AI Bible study, Christian app" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:url" content="https://chatbiblia.ai/about" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'es' ? 'es_ES' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.metaDescription} />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://chatbiblia.ai/about" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo-icon.png"
              alt="ChatBiblia.ai Logo"
              width={40}
              height={40}
              className="cursor-pointer"
              aria-label="ChatBiblia.ai Home"
            />
          </Link>
          <div className="flex items-center space-x-4">
            <a href="/#features" className="text-gray-600 hover:text-yellow-600 transition">{t.nav.features}</a>
            <button
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition transform hover:scale-105"
              aria-label={t.nav.joinWaitlist}
            >
              {t.nav.joinWaitlist}
            </button>
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="text-gray-600 hover:text-yellow-600 transition"
              aria-label={`Switch to ${t.language}`}
            >
              {t.language}
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{t.content.title}</h1>
          <p className="text-lg text-gray-700 mb-12">{t.content.intro}</p>
          {t.content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-600">{section.content}</p>
            </div>
          ))}
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