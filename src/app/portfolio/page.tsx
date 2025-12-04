import { StandardLayout } from '@/components/layout'
import PortfolioContent from '@/components/sections/Portfolio/PortfolioContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Proyectos de Marketing Digital y Diseño Web',
  description: 'Descubre nuestros proyectos de marketing digital, diseño web y branding. +50 proyectos exitosos para empresas en Murcia y toda España.',
  keywords: [
    'portfolio marketing digital',
    'proyectos diseño web murcia',
    'casos exito marketing',
    'trabajos agencia marketing',
  ],
  openGraph: {
    title: 'Portfolio | ESCALA Marketing Murcia',
    description: '+50 proyectos exitosos de marketing digital, diseño web y branding.',
    url: 'https://escalamarketing.es/portfolio',
    siteName: 'ESCALA Marketing',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio ESCALA Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | ESCALA Marketing Murcia',
    description: '+50 proyectos exitosos de marketing digital, diseño web y branding.',
    images: ['/og-portfolio.jpg'],
  },
  alternates: {
    canonical: 'https://escalamarketing.es/portfolio',
  },
}

export default function Portfolio() {
  return (
    <StandardLayout>
      <PortfolioContent />
    </StandardLayout>
  )
}
