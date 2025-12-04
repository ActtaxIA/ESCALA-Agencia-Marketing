import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/QuienesSomos/Hero'
import About from '@/components/sections/QuienesSomos/About'
import Services from '@/components/sections/QuienesSomos/Services'
import Values from '@/components/sections/QuienesSomos/Values'
import CTA from '@/components/sections/QuienesSomos/CTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quiénes Somos | Equipo de Marketing Digital en Murcia',
  description: 'Conoce al equipo de ESCALA Marketing. Expertos en marketing digital, diseño web y estrategias de crecimiento para empresas en Murcia y toda España.',
  keywords: [
    'agencia marketing murcia',
    'equipo marketing digital',
    'expertos seo murcia',
    'consultora marketing murcia',
  ],
  openGraph: {
    title: 'Quiénes Somos | ESCALA Marketing Murcia',
    description: 'Conoce al equipo de expertos en marketing digital que hará crecer tu negocio.',
    url: 'https://escalamarketing.es/quienes-somos',
    siteName: 'ESCALA Marketing',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-quienes-somos.jpg',
        width: 1200,
        height: 630,
        alt: 'Equipo ESCALA Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiénes Somos | ESCALA Marketing Murcia',
    description: 'Conoce al equipo de expertos en marketing digital que hará crecer tu negocio.',
    images: ['/og-quienes-somos.jpg'],
  },
  alternates: {
    canonical: 'https://escalamarketing.es/quienes-somos',
  },
}

export default function QuienesSomosPage() {
  return (
    <StandardLayout>
      <Hero />
      <About />
      <Services />
      <Values />
      <CTA />
    </StandardLayout>
  )
}
