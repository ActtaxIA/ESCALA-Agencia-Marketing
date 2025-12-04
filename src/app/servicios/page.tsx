import ServicesStripes from '@/components/sections/Servicios/ServicesStripes'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios | ESCALA Marketing Digital',
  description: 'Diseño web, SEO local, redes sociales, Google Ads, apps con IA, fotografía, branding y email marketing. 8 servicios especializados para hacer crecer tu negocio en Murcia.',
  keywords: [
    'servicios marketing digital murcia',
    'diseño web murcia',
    'seo local murcia',
    'redes sociales murcia',
    'google ads murcia',
    'apps ia murcia',
    'fotografía murcia',
    'branding murcia',
    'email marketing murcia',
  ],
  openGraph: {
    title: 'Nuestros Servicios | ESCALA Marketing',
    description: '8 servicios de marketing digital para impulsar tu negocio: diseño web, SEO, redes sociales, publicidad, IA y más.',
    url: 'https://escalamarketing.es/servicios',
    siteName: 'ESCALA Marketing',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-servicios.jpg',
        width: 1200,
        height: 630,
        alt: 'ESCALA - Servicios de Marketing Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuestros Servicios | ESCALA Marketing',
    description: '8 servicios de marketing digital para impulsar tu negocio.',
    images: ['/og-servicios.jpg'],
  },
  alternates: {
    canonical: 'https://escalamarketing.es/servicios',
  },
}

export default function ServiciosPage() {
  return <ServicesStripes />
}
