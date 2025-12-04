import ServicesStripes from '@/components/sections/Servicios/ServicesStripes'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios de Marketing Digital en Murcia | ESCALA',
  description: '8 servicios de marketing digital para hacer crecer tu negocio: diseño web, SEO local, redes sociales, Google Ads, apps con IA, fotografía, branding y email marketing.',
  keywords: [
    'servicios marketing digital murcia',
    'diseño web murcia',
    'seo murcia',
    'redes sociales murcia',
    'google ads murcia',
    'branding murcia',
  ],
  openGraph: {
    title: 'Servicios de Marketing Digital | ESCALA Murcia',
    description: '8 servicios profesionales para impulsar tu presencia digital y conseguir más clientes.',
    url: 'https://escalamarketing.es/servicios',
    siteName: 'ESCALA Marketing',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-servicios.jpg',
        width: 1200,
        height: 630,
        alt: 'Servicios ESCALA Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de Marketing Digital | ESCALA Murcia',
    description: '8 servicios profesionales para impulsar tu presencia digital.',
    images: ['/og-servicios.jpg'],
  },
  alternates: {
    canonical: 'https://escalamarketing.es/servicios',
  },
}

export default function ServiciosPage() {
  return <ServicesStripes />
}
