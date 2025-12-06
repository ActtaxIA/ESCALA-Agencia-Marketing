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
    title: 'Nuestros Servicios | ESKALA Marketing',
    description: '8 servicios de marketing digital para impulsar tu negocio: diseño web, SEO, redes sociales, publicidad, IA y más.',
    url: 'https://www.eskaladigital.com/servicios',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/eskala_digital_opengraph.png',
        width: 1200,
        height: 630,
        alt: 'ESKALA - Servicios de Marketing Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuestros Servicios | ESKALA Marketing',
    description: '8 servicios de marketing digital para impulsar tu negocio.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: {
    canonical: 'https://www.eskaladigital.com/servicios',
  },
}

export default function ServiciosPage() {
  return <ServicesStripes />
}
