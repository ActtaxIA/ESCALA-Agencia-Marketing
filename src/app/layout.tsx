import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eskaladigital.com'),
  title: {
    default: 'ESKALA | Agencia de Marketing Digital en Murcia',
    template: '%s | ESKALA Marketing Digital',
  },
  description: 'Agencia de marketing digital en Murcia. Diseño web, SEO, redes sociales, Google Ads y aplicaciones con IA. Llevamos tu negocio al siguiente nivel.',
  keywords: ['agencia marketing murcia', 'marketing digital murcia', 'diseño web murcia', 'seo murcia', 'redes sociales murcia', 'google ads murcia', 'community manager murcia'],
  authors: [{ name: 'ESKALA Marketing Digital', url: 'https://www.eskaladigital.com' }],
  creator: 'ESKALA Marketing Digital',
  publisher: 'ESKALA Marketing Digital',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.eskaladigital.com',
    siteName: 'ESKALA Marketing Digital',
    title: 'ESKALA | Agencia de Marketing Digital en Murcia',
    description: 'Agencia de marketing digital en Murcia. Llevamos tu negocio al siguiente nivel.',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'ESKALA - Agencia de Marketing Digital en Murcia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESKALA | Agencia de Marketing Digital en Murcia',
    description: 'Agencia de marketing digital en Murcia. Llevamos tu negocio al siguiente nivel.',
    site: '@eskaladigital',
    creator: '@eskaladigital',
    images: ['/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'tu-codigo-verificacion-google',
    // yandex: 'tu-codigo-yandex',
  },
  category: 'marketing',
  // Next.js detecta automáticamente icon.png y apple-icon.png en /app
}

// Schema JSON-LD para datos estructurados
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  name: 'ESKALA Marketing Digital',
  description: 'Agencia de marketing digital en Murcia especializada en diseño web, SEO, redes sociales, Google Ads y aplicaciones con inteligencia artificial.',
  url: 'https://www.eskaladigital.com',
  logo: 'https://www.eskaladigital.com/logo.png',
  image: 'https://www.eskaladigital.com/og-default.jpg',
  telephone: '+34626823404',
  email: 'contacto@eskaladigital.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Murcia',
    addressRegion: 'Región de Murcia',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.9922,
    longitude: -1.1307,
  },
  areaServed: [
    { '@type': 'City', name: 'Murcia' },
    { '@type': 'State', name: 'Región de Murcia' },
    { '@type': 'Country', name: 'España' },
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
    name: 'Servicios de Marketing Digital',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño Web' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Local' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestión de Redes Sociales' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aplicaciones con IA' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fotografía Profesional' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Email Marketing' } },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XFXHM9KC3H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XFXHM9KC3H');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
