import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { StandardLayout } from '@/components/layout'
import styles from './article.module.css'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const supabase = createClient()
  
  const { data: article } = await supabase
    .from('articles')
    .select('title, excerpt, meta_title, meta_description, keywords, featured_image, slug')
    .eq('slug', params.slug)
    .eq('published', true)
    .single()

  if (!article) {
    return {
      title: 'Artículo no encontrado',
    }
  }

  // URL base para las imágenes OpenGraph
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.eskaladigital.com'
  const ogImage = article.featured_image 
    ? `${baseUrl}/blog/${article.featured_image}`
    : `${baseUrl}/eskala_digital_opengraph.png`

  return {
    title: article.meta_title || article.title,
    description: article.meta_description || article.excerpt,
    keywords: article.keywords?.join(', '),
    openGraph: {
      title: article.meta_title || article.title,
      description: article.meta_description || article.excerpt,
      type: 'article',
      url: `${baseUrl}/blog/${article.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.meta_title || article.title,
      description: article.meta_description || article.excerpt,
      images: [ogImage],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const supabase = createClient()

  // Fetch el artículo con su categoría
  const { data: article, error } = await supabase
    .from('articles')
    .select(`
      *,
      category:categories(name)
    `)
    .eq('slug', params.slug)
    .eq('published', true)
    .single()

  if (error || !article) {
    notFound()
  }

  // Incrementar contador de vistas
  await supabase
    .from('articles')
    .update({ views: (article.views || 0) + 1 })
    .eq('id', article.id)

  // Manejar categoría (puede venir como array o objeto)
  const categoryData = Array.isArray(article.category) ? article.category[0] : article.category
  const categoryName = categoryData?.name || 'General'

  // Formatear fecha
  const date = new Date(article.published_at)
  const formattedDate = date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Calcular tiempo de lectura
  const wordsPerMinute = 200
  const wordCount = article.content.split(/\s+/).length
  const readTime = Math.ceil(wordCount / wordsPerMinute)

  // Obtener artículos relacionados
  const { data: relatedArticles } = await supabase
    .from('articles')
    .select('slug, title, excerpt')
    .eq('published', true)
    .neq('id', article.id)
    .eq('category_id', article.category_id)
    .limit(3)

  return (
    <StandardLayout>
      <article className={styles.article}>
        {/* Header del artículo */}
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.meta}>
              <span className={styles.category}>{categoryName}</span>
              <span className={styles.separator}>•</span>
              <time className={styles.date}>{formattedDate}</time>
              <span className={styles.separator}>•</span>
              <span className={styles.readTime}>{readTime} min de lectura</span>
            </div>

            <h1 className={styles.title}>{article.title}</h1>

            {article.excerpt && (
              <p className={styles.excerpt}>{article.excerpt}</p>
            )}

            <div className={styles.authorInfo}>
              <div className={styles.avatar}>EM</div>
              <div>
                <p className={styles.authorName}>{article.author || 'ESCALA Marketing'}</p>
                <p className={styles.views}>{article.views} lecturas</p>
              </div>
            </div>
          </div>

          {/* Imagen de portada */}
          {article.featured_image && (
            <div className={styles.featuredImageContainer}>
              <img 
                src={`/blog/${article.featured_image}`}
                alt={article.title}
                className={styles.featuredImage}
              />
            </div>
          )}
        </header>

        {/* Contenido del artículo */}
        <div className={styles.container}>
          <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ 
              __html: article.content
                .replace(/^# /gm, '<h1>')
                .replace(/\n$/gm, '</h1>\n')
                .replace(/^## /gm, '<h2>')
                .replace(/\n$/gm, '</h2>\n')
                .replace(/^### /gm, '<h3>')
                .replace(/\n$/gm, '</h3>\n')
                .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                .replace(/\*([^*]+)\*/g, '<em>$1</em>')
                .replace(/^- /gm, '<li>')
                .replace(/\n/g, '<br />')
            }}
          />
        </div>

        {/* Artículos relacionados */}
        {relatedArticles && relatedArticles.length > 0 && (
          <div className={styles.related}>
            <div className={styles.container}>
              <h2 className={styles.relatedTitle}>Artículos Relacionados</h2>
              <div className={styles.relatedGrid}>
                {relatedArticles.map((related) => (
                  <a
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className={styles.relatedCard}
                  >
                    <h3>{related.title}</h3>
                    <p>{related.excerpt}</p>
                    <span className={styles.readMoreLink}>Leer más →</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </StandardLayout>
  )
}

