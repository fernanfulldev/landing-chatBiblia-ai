'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const translations = {
  es: {
    title: "Términos de Servicio | ChatBiblia.ai",
    metaDescription: "Revisa los Términos de Servicio de ChatBiblia.ai para conocer las condiciones de uso de nuestro sitio web y servicios.",
    nav: { brand: "ChatBiblia.ai", features: "Características", joinWaitlist: "Únete a la Lista" },
    content: {
      title: "Términos de Servicio",
      lastUpdated: "Última actualización: 28 de abril de 2025",
      intro: "Bienvenido a ChatBiblia.ai. Estos Términos de Servicio ('Términos') rigen tu uso de nuestro sitio web y servicios. Al acceder o usar nuestro sitio, aceptas cumplir con estos Términos. Si no estás de acuerdo, por favor no uses nuestro sitio.",
      sections: [
        {
          title: "1. Uso del Sitio",
          content: "Puedes usar ChatBiblia.ai para fines personales y no comerciales. No debes: (a) modificar o copiar el contenido del sitio, (b) usar el sitio para fines ilegales, (c) intentar obtener acceso no autorizado a nuestros sistemas, o (d) interferir con el funcionamiento del sitio.",
        },
        {
          title: "2. Propiedad Intelectual",
          content: "Todo el contenido de ChatBiblia.ai, incluidos textos, imágenes, logotipos y software, es propiedad de ChatBiblia.ai o sus licenciantes y está protegido por leyes de derechos de autor. No puedes reproducir, distribuir o crear trabajos derivados sin nuestro permiso expreso.",
        },
        {
          title: "3. Cuentas de Usuario",
          content: "Para unirte a la lista de espera, debes proporcionar una dirección de correo electrónico válida. Eres responsable de mantener la confidencialidad de cualquier información de cuenta y de todas las actividades realizadas bajo tu cuenta.",
        },
        {
          title: "4. Limitación de Responsabilidad",
          content: "ChatBiblia.ai se proporciona 'tal cual' sin garantías de ningún tipo. No somos responsables de ningún daño directo, indirecto, incidental o consecuente derivado del uso de nuestro sitio o servicios.",
        },
        {
          title: "5. Cambios en los Términos",
          content: "Podemos actualizar estos Términos periódicamente. Publicaremos cualquier cambio en esta página y, si los cambios son significativos, te notificaremos por correo electrónico.",
        },
        {
          title: "6. Terminación",
          content: "Podemos suspender o terminar tu acceso al sitio si violas estos Términos o por cualquier otra razón a nuestra discreción. Puedes dejar de usar el sitio en cualquier momento.",
        },
        {
          title: "7. Ley Aplicable",
          content: "Estos Términos se rigen por las leyes de [Inserta Jurisdicción, ej. Delaware, EE.UU.]. Cualquier disputa será resuelta en los tribunales de [Inserta Jurisdicción].",
        },
        {
          title: "8. Contáctanos",
          content: "Si tienes preguntas sobre estos Términos, contáctanos en terms@chatbiblia.ai.",
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
    title: "Terms of Service | ChatBiblia.ai",
    metaDescription: "Review ChatBiblia.ai's Terms of Service to understand the conditions for using our website and services.",
    nav: { brand: "ChatBiblia.ai", features: "Features", joinWaitlist: "Join Waitlist" },
    content: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: April 28, 2025",
      intro: "Welcome to ChatBiblia.ai. These Terms of Service ('Terms') govern your use of our website and services. By accessing or using our site, you agree to comply with these Terms. If you do not agree, please do not use our site.",
      sections: [
        {
          title: "1. Use of the Site",
          content: "You may use ChatBiblia.ai for personal, non-commercial purposes. You must not: (a) modify or copy the site's content, (b) use the site for illegal purposes, (c) attempt unauthorized access to our systems, or (d) interfere with the site's operation.",
        },
        {
          title: "2. Intellectual Property",
          content: "All content on ChatBiblia.ai, including text, images, logos, and software, is owned by ChatBiblia.ai or its licensors and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express permission.",
        },
        {
          title: "3. User Accounts",
          content: "To join the waitlist, you must provide a valid email address. You are responsible for maintaining the confidentiality of any account information and for all activities conducted under your account.",
        },
        {
          title: "4. Limitation of Liability",
          content: "ChatBiblia.ai is provided 'as is' without warranties of any kind. We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our site or services.",
        },
        {
          title: "5. Changes to the Terms",
          content: "We may update these Terms periodically. We will post any changes on this page and, if the changes are significant, notify you by email.",
        },
        {
          title: "6. Termination",
          content: "We may suspend or terminate your access to the site if you violate these Terms or for any other reason at our discretion. You may stop using the site at any time.",
        },
        {
          title: "7. Governing Law",
          content: "These Terms are governed by the laws of [Insert Jurisdiction, e.g., Delaware, USA]. Any disputes will be resolved in the courts of [Insert Jurisdiction].",
        },
        {
          title: "8. Contact Us",
          content: "If you have questions about these Terms, contact us at terms@chatbiblia.ai.",
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

export default function TermsOfService() {
  const [language, setLanguage] = useState('es');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="ChatBiblia.ai, terms of service, AI Bible study" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:url" content="https://chatbiblia.ai/terms" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'es' ? 'es_ES' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.metaDescription} />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://chatbiblia.ai/terms" />
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
          <p className="text-gray-600 mb-8">{t.content.lastUpdated}</p>
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