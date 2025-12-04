import { StandardLayout } from '@/components/layout'
import BlogHero from '@/components/sections/Blog/BlogHero'
import FeaturedPost from '@/components/sections/Blog/FeaturedPost'
import BlogGrid from '@/components/sections/Blog/BlogGrid'

export const metadata = {
  title: 'Blog | Marketing Digital, SEO y Diseño Web',
  description: 'Blog de marketing digital en Murcia. Guías prácticas sobre SEO, diseño web, redes sociales, Google Ads y tendencias digitales.',
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
