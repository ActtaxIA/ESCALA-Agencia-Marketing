import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/Exitos/Hero'
import Testimonials from '@/components/sections/Exitos/Testimonials'
import Results from '@/components/sections/Exitos/Results'
import CTA from '@/components/sections/Exitos/CTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casos de Éxito | Resultados Reales de Marketing Digital',
  description: 'Testimonios y casos de éxito de nuestros clientes. Resultados reales: +300% ventas, +200% tráfico web. Descubre cómo podemos ayudarte.',
  keywords: [
    'casos exito marketing digital',
    'testimonios agencia marketing',
    'resultados marketing murcia',
    'opiniones escala marketing',
  ],
  openGraph: {
    title: 'Casos de Éxito | ESCALA Marketing Murcia',
    description: 'Resultados reales de nuestros clientes. Testimonios y métricas que demuestran nuestro trabajo.',
    url: 'https://escalamarketing.es/exitos',
    siteName: 'ESCALA Marketing',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-exitos.jpg',
        width: 1200,
        height: 630,
        alt: 'Casos de Éxito ESCALA Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casos de Éxito | ESCALA Marketing Murcia',
    description: 'Resultados reales de nuestros clientes. Testimonios y métricas que demuestran nuestro trabajo.',
    images: ['/og-exitos.jpg'],
  },
  alternates: {
    canonical: 'https://escalamarketing.es/exitos',
  },
}

export default function ExitosPage() {
  return (
    <StandardLayout>
      <Hero />
      <Testimonials />
      <Results />
      <CTA />
    </StandardLayout>
  )
}

