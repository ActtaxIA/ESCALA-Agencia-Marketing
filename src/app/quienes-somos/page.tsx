import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/QuienesSomos/Hero'
import About from '@/components/sections/QuienesSomos/About'
import WhyMurcia from '@/components/sections/QuienesSomos/WhyMurcia'
import Services from '@/components/sections/QuienesSomos/Services'
import Values from '@/components/sections/QuienesSomos/Values'
import CTA from '@/components/sections/QuienesSomos/CTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agencia de Marketing Digital en Murcia | ESKALA - Expertos Locales',
  description: 'ESKALA es tu agencia de marketing digital en Murcia. Especialistas en SEO local, diseño web, redes sociales y Google Ads. Ayudamos a empresas murcianas a crecer online desde 2020. Resultados reales, estrategias personalizadas.',
  keywords: [
    'agencia marketing digital murcia',
    'marketing digital murcia',
    'agencia marketing murcia',
    'seo murcia',
    'diseño web murcia',
    'agencia publicidad murcia',
    'marketing online murcia',
    'consultora marketing murcia',
    'agencia digital murcia',
    'expertos marketing murcia',
    'community manager murcia',
    'google ads murcia',
    'redes sociales murcia',
    'branding murcia',
  ],
  openGraph: {
    title: 'Agencia de Marketing Digital en Murcia | ESKALA',
    description: 'Agencia de marketing digital en Murcia especializada en hacer crecer negocios locales. SEO, diseño web, redes sociales y más.',
    url: 'https://www.eskaladigital.com/quienes-somos',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/eskala_digital_opengraph.png',
        width: 1200,
        height: 630,
        alt: 'ESKALA - Agencia de Marketing Digital en Murcia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agencia de Marketing Digital en Murcia | ESKALA',
    description: 'Especialistas en marketing digital para empresas murcianas. Hacemos crecer tu negocio online.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: {
    canonical: 'https://www.eskaladigital.com/quienes-somos',
  },
}

export default function QuienesSomosPage() {
  // Schema LocalBusiness para SEO local
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MarketingAgency',
    name: 'ESKALA Marketing Digital',
    alternateName: 'ESKALA Agencia de Marketing Murcia',
    description: 'Agencia de marketing digital en Murcia especializada en SEO local, diseño web, redes sociales, Google Ads y aplicaciones con inteligencia artificial. Ayudamos a empresas murcianas a crecer online.',
    url: 'https://www.eskaladigital.com',
    logo: 'https://www.eskaladigital.com/logo.png',
    image: 'https://www.eskaladigital.com/eskala_digital_opengraph.png',
    telephone: '+34626823404',
    email: 'contacto@eskaladigital.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Murcia',
      addressRegion: 'Región de Murcia',
      addressCountry: 'ES',
      postalCode: '30001',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.9922,
      longitude: -1.1307,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Murcia',
        sameAs: 'https://es.wikipedia.org/wiki/Murcia',
      },
      {
        '@type': 'State',
        name: 'Región de Murcia',
      },
      {
        '@type': 'Country',
        name: 'España',
      },
    ],
    priceRange: '€€',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.instagram.com/eskaladigital',
      'https://www.linkedin.com/company/eskaladigital',
      'https://www.facebook.com/eskaladigital',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Marketing Digital en Murcia',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Diseño Web en Murcia',
            description: 'Diseño y desarrollo de páginas web profesionales para empresas murcianas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Local Murcia',
            description: 'Posicionamiento en Google para negocios locales en Murcia',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gestión de Redes Sociales Murcia',
            description: 'Community management y estrategia de contenidos para empresas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Ads Murcia',
            description: 'Campañas de publicidad en Google optimizadas para negocios locales',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <StandardLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <About />
      <WhyMurcia />
      <Services />
      <Values />
      <CTA />
    </StandardLayout>
  )
}
