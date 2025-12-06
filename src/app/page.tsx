import HomeStripes from '@/components/sections/Home/HomeStripes'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ESKALA | Agencia de Marketing Digital en Murcia',
  description: 'Agencia de marketing digital en Murcia especializada en diseño web, SEO local, redes sociales, Google Ads y apps con IA. Hacemos crecer tu negocio.',
  keywords: [
    'agencia marketing digital murcia',
    'marketing digital murcia',
    'agencia publicidad murcia',
    'diseño web murcia',
    'seo murcia',
  ],
  openGraph: {
    title: 'ESKALA | Agencia de Marketing Digital en Murcia',
    description: 'Hacemos crecer tu negocio con estrategias de marketing digital que funcionan. Diseño web, SEO, redes sociales y más.',
    url: 'https://www.eskaladigital.com',
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
    title: 'ESKALA | Agencia de Marketing Digital en Murcia',
    description: 'Hacemos crecer tu negocio con estrategias de marketing digital que funcionan.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: {
    canonical: 'https://www.eskaladigital.com',
  },
}

export default function HomePage() {
  return <HomeStripes />
}

