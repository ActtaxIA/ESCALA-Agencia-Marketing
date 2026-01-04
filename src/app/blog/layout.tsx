import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog de Marketing Digital | Guías SEO, Web y Redes Sociales',
  description: 'Blog de marketing digital con guías prácticas sobre SEO, diseño web, redes sociales, Google Ads e IA. Aprende estrategias que funcionan.',
  keywords: [
    'blog marketing digital',
    'guias seo',
    'tutoriales marketing',
    'tendencias marketing 2024',
    'consejos redes sociales',
  ],
  openGraph: {
    title: 'Blog | ESKALA Marketing Digital Murcia',
    description: 'Artículos, guías y recursos sobre marketing digital, SEO y diseño web.',
    url: 'https://www.eskaladigital.com/blog',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/eskala_digital_opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Blog ESKALA Marketing Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | ESKALA Marketing Digital Murcia',
    description: 'Artículos, guías y recursos sobre marketing digital, SEO y diseño web.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: {
    canonical: 'https://www.eskaladigital.com/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

