import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/Metodologia/Hero'
import Process from '@/components/sections/Metodologia/Process'
import Benefits from '@/components/sections/Metodologia/Benefits'
import CTA from '@/components/sections/Metodologia/CTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Metodología de Trabajo | Proceso de Marketing Digital',
  description: 'Descubre nuestra metodología probada de marketing digital. 4 fases claras: análisis, estrategia, ejecución y optimización. Resultados garantizados.',
  keywords: [
    'metodologia marketing digital',
    'proceso marketing',
    'estrategia digital murcia',
    'consultoria marketing',
  ],
  openGraph: {
    title: 'Metodología | ESCALA Marketing Murcia',
    description: 'Proceso de trabajo transparente y orientado a resultados. Conoce cómo trabajamos.',
    url: 'https://escalamarketing.es/metodologia',
    siteName: 'ESCALA Marketing',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-metodologia.jpg',
        width: 1200,
        height: 630,
        alt: 'Metodología ESCALA Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metodología | ESCALA Marketing Murcia',
    description: 'Proceso de trabajo transparente y orientado a resultados.',
    images: ['/og-metodologia.jpg'],
  },
  alternates: {
    canonical: 'https://escalamarketing.es/metodologia',
  },
}

export default function MetodologiaPage() {
  return (
    <StandardLayout>
      <Hero />
      <Process />
      <Benefits />
      <CTA />
    </StandardLayout>
  )
}

