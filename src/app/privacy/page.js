'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const translations = {
  es: {
    title: "Política de Privacidad | ChatBiblia.ai",
    metaDescription: "Lee la Política de Privacidad de ChatBiblia.ai para entender cómo recopilamos, usamos y protegemos tu información personal.",
    nav: { brand: "ChatBiblia.ai", features: "Características", joinWaitlist: "Únete a la Lista" },
    content: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: 28 de abril de 2025",
      intro: "En ChatBiblia.ai, respetamos tu privacidad y estamos comprometidos a proteger tu información personal. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos tus datos.",
      sections: [
        {
          title: "1. Información que Recopilamos",
          content: "Recopilamos información que nos proporcionas directamente, como tu dirección de correo electrónico cuando te unes a nuestra lista de espera. También podemos recopilar datos automáticamente, como tu dirección IP, tipo de navegador y patrones de uso del sitio, mediante cookies y tecnologías similares.",
        },
        {
          title: "2. Cómo Usamos tu Información",
          content: "Usamos tu información para: gestionar tu suscripción a la lista de espera, enviarte actualizaciones sobre el lanzamiento de ChatBiblia.ai, mejorar nuestro sitio web y personalizar tu experiencia. No vendemos ni alquilamos tu información a terceros.",
        },
        {
          title: "3. Compartir tu Información",
          content: "Compartimos tu correo electrónico con Mailchimp, nuestro proveedor de servicios de marketing por correo electrónico, para gestionar la lista de espera. Mailchimp cumple con las normativas de protección de datos, como el RGPD. No compartimos tus datos con otros terceros, salvo que lo exija la ley.",
        },
        {
          title: "4. Tus Derechos",
          content: "Puedes solicitar acceso, corrección o eliminación de tus datos personales enviándonos un correo a privacy@chatbiblia.ai. También puedes darte de baja de nuestra lista de espera en cualquier momento usando el enlace de cancelación de suscripción en nuestros correos.",
        },
        {
          title: "5. Seguridad de los Datos",
          content: "Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra accesos no autorizados, pérdida o alteración. Sin embargo, ninguna transmisión por internet es completamente segura, y no podemos garantizar la seguridad absoluta.",
        },
        {
          title: "6. Cambios en esta Política",
          content: "Podemos actualizar esta Política de Privacidad periódicamente. Publicaremos cualquier cambio en esta página y, si los cambios son significativos, te notificaremos por correo electrónico.",
        },
        {
          title: "7. Contáctanos",
          content: "Si tienes preguntas sobre esta Política de Privacidad, contáctanos en privacy@chatbiblia.ai.",
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
    title: "Privacy Policy | ChatBiblia.ai",
    metaDescription: "Read ChatBiblia.ai's Privacy Policy to understand how we collect, use, and protect your personal information.",
    nav: { brand: "ChatBiblia.ai", features: "Features", joinWaitlist: "Join Waitlist" },
    content: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: April 28, 2025",
      intro: "At ChatBiblia.ai, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your data.",
      sections: [
        {
          title: "1. Information We Collect",
          content: "We collect information you provide directly, such as your email address when you join our waitlist. We may also collect data automatically, such as your IP address, browser type, and site usage patterns, through cookies and similar technologies.",
        },
        {
          title: "2. How We Use Your Information",
          content: "We use your information to: manage your waitlist subscription, send you updates about ChatBiblia.ai's launch, improve our website, and personalize your experience. We do not sell or rent your information to third parties.",
        },
        {
          title: "3. Sharing Your Information",
          content: "We share your email address with Mailchimp, our email marketing service provider, to manage the waitlist. Mailchimp complies with data protection regulations, such as GDPR. We do not share your data with other third parties unless required by law.",
        },
        {
          title: "4. Your Rights",
          content: "You can request access, correction, or deletion of your personal data by emailing us at privacy@chatbiblia.ai. You can also unsubscribe from our waitlist at any time using the unsubscribe link in our emails.",
        },
        {
          title: "5. Data Security",
          content: "We implement technical and organizational security measures to protect your data against unauthorized access, loss, or alteration. However, no internet transmission is completely secure, and we cannot guarantee absolute security.",
        },
        {
          title: "6. Changes to This Policy",
          content: "We may update this Privacy Policy periodically. We will post any changes on this page and, if the changes are significant, notify you by email.",
        },
        {
          title: "7. Contact Us",
          content: "If you have questions about this Privacy Policy, contact us at privacy@chatbiblia.ai.",
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

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState('es');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="ChatBiblia.ai, privacy policy, data protection, AI Bible study" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:url" content="https://chatbiblia.ai/privacy" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'es' ? 'es_ES' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.metaDescription} />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://chatbiblia.ai/privacy" />
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