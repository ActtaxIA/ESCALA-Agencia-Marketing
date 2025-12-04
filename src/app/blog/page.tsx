import { StandardLayout } from '@/components/layout'
import BlogHero from '@/components/sections/Blog/BlogHero'
import FeaturedPost from '@/components/sections/Blog/FeaturedPost'
import BlogGrid from '@/components/sections/Blog/BlogGrid'
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
    title: 'Blog | ESCALA Marketing Murcia',
    description: 'Artículos, guías y recursos sobre marketing digital, SEO y diseño web.',
    url: 'https://escalamarketing.es/blog',
    siteName: 'ESCALA Marketing',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog ESCALA Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | ESCALA Marketing Murcia',
    description: 'Artículos, guías y recursos sobre marketing digital, SEO y diseño web.',
    images: ['/og-blog.jpg'],
  },
  alternates: {
    canonical: 'https://escalamarketing.es/blog',
  },
}

export default function BlogPage() {
  return (
    <StandardLayout>
      <BlogHero />
      <FeaturedPost />
      <BlogGrid />
    </StandardLayout>
  )
}
