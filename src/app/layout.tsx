import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://escalamarketing.es'),
  title: {
    default: 'ESCALA | Agencia de Marketing Digital en Murcia',
    template: '%s | ESCALA Marketing',
  },
  description: 'Agencia de marketing digital en Murcia. Diseño web, SEO, redes sociales, Google Ads y aplicaciones con IA. Llevamos tu negocio al siguiente nivel.',
  keywords: ['agencia marketing murcia', 'marketing digital murcia', 'diseño web murcia', 'seo murcia', 'redes sociales murcia', 'google ads murcia', 'community manager murcia'],
  authors: [{ name: 'ESCALA Marketing', url: 'https://escalamarketing.es' }],
  creator: 'ESCALA Marketing',
  publisher: 'ESCALA Marketing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://escalamarketing.es',
    siteName: 'ESCALA Marketing',
    title: 'ESCALA | Agencia de Marketing Digital en Murcia',
    description: 'Agencia de marketing digital en Murcia. Llevamos tu negocio al siguiente nivel.',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'ESCALA - Agencia de Marketing Digital en Murcia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESCALA | Agencia de Marketing Digital en Murcia',
    description: 'Agencia de marketing digital en Murcia. Llevamos tu negocio al siguiente nivel.',
    site: '@escalamarketing',
    creator: '@escalamarketing',
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
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/logo.png',
      },
    ],
  },
}

// Schema JSON-LD para datos estructurados
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  name: 'ESCALA Marketing',
  description: 'Agencia de marketing digital en Murcia especializada en diseño web, SEO, redes sociales, Google Ads y aplicaciones con inteligencia artificial.',
  url: 'https://escalamarketing.es',
  logo: 'https://escalamarketing.es/logo.png',
  image: 'https://escalamarketing.es/og-default.jpg',
  telephone: '+34626823404',
  email: 'hola@escalamarketing.es',
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
    'https://www.instagram.com/escalamarketing',
    'https://www.linkedin.com/company/escalamarketing',
    'https://www.facebook.com/escalamarketing',
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
        {children}
      </body>
    </html>
  )
}
