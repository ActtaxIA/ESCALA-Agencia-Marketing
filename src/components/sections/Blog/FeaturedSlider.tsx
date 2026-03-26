/**
 * Slider de Artículos Destacados
 * Muestra 3 artículos destacados en un carrusel
 */

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './FeaturedSlider.module.css'
import { createClient } from '@/lib/supabase/client'
import { decodeHtmlEntities } from '@/lib/htmlUtils'

// Mapeo de categorías a colores
const categoryColors: Record<string, string> = {
  'SEO y Posicionamiento': '#4a7c9b',
  'SEO': '#4a7c9b',
  'Diseño Web': '#87ceeb',
  'Redes Sociales': '#ffb366',
  'Publicidad Digital': '#ff6b35',
  'Estrategia Digital': '#1e3a5f',
}

// Íconos por categoría
const categoryIcons: Record<string, string> = {
  'SEO y Posicionamiento': '📈',
  'SEO': '📈',
  'Diseño Web': '🎨',
  'Redes Sociales': '📱',
  'Publicidad Digital': '🎯',
  'Estrategia Digital': '🤖',
}

export default function FeaturedSlider() {
  const [featuredPosts, setFeaturedPosts] = useState<any[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFeaturedPosts() {
      try {
        const supabase = createClient()
        // Solo mostrar artículos destacados con fecha <= ahora (publicaciones programadas)
        const { data, error } = await supabase
          .from('articles')
          .select(`
            id,
            slug,
            title,
            excerpt,
            content,
            author,
            published_at,
            featured_image,
            category:categories(name)
          `)
          .eq('published', true)
          .eq('featured', true)
          .lte('published_at', new Date().toISOString())
          .order('published_at', { ascending: false })
          .limit(6) // Máximo 6 destacados

        if (error) throw error

        if (data) {
          const processedPosts = data.map((article: any) => {
            const categoryData = Array.isArray(article.category) ? article.category[0] : article.category
            const categoryName = categoryData?.name || 'General'
            const date = new Date(article.published_at)
            const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
            const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
            
            const wordsPerMinute = 200
            const wordCount = article.content.split(/\s+/).length
            const minutes = Math.ceil(wordCount / wordsPerMinute)
            
            // Truncar excerpt a máximo 150 caracteres
            let excerpt = article.excerpt || ''
            if (excerpt.length > 150) {
              excerpt = excerpt.substring(0, 147) + '...'
            }

            return {
              ...article,
              excerpt, // Usar el excerpt truncado
              category: categoryName,
              categoryColor: categoryColors[categoryName] || '#4a7c9b',
              icon: categoryIcons[categoryName] || '📄',
              date: formattedDate,
              readTime: `${minutes} min`,
              author: {
                name: article.author || 'ESCALA Marketing',
                avatar: 'EM'
              }
            }
          })
          
          setFeaturedPosts(processedPosts)
        }
      } catch (error) {
        console.error('Error cargando artículos destacados:', error)
      } finally {
        setLoading(false)
      }
    }

    loadFeaturedPosts()
  }, [])

  // Auto-slide cada 5 segundos
  useEffect(() => {
    if (featuredPosts.length === 0) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [featuredPosts.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length)
  }

  if (loading || featuredPosts.length === 0) {
    return null
  }

  return (
    <>

      <section className={styles.featured}>
        <div className={styles.container}>
          <div className={styles.label}>
            <span className={styles.labelIcon}>⭐</span>
            Artículos Destacados
          </div>

          <div className={styles.sliderContainer}>
            {/* Slider */}
            <div className={styles.slider}>
              {featuredPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className={`${styles.card} ${index === currentSlide ? styles.active : ''}`}
                  style={{ 
                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                    opacity: index === currentSlide ? 1 : 0,
                  }}
                >
                  {/* Imagen */}
                  <div className={styles.cardImage}>
                    {post.featured_image ? (
                      <img 
                        src={`/blog/${post.featured_image}`}
                        alt={post.title}
                        className={styles.featuredImage}
                      />
                    ) : (
                      <div className={styles.imagePlaceholder}>
                        <div className={styles.imageIcon}>{post.icon}</div>
                        <span>{post.category}</span>
                      </div>
                    )}
                    <div 
                      className={styles.categoryTag}
                      style={{ background: post.categoryColor }}
                    >
                      {post.category}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className={styles.cardContent}>
                    <div className={styles.meta}>
                      <span className={styles.date}>📅 {post.date}</span>
                      <span className={styles.readTime}>🕐 {post.readTime} lectura</span>
                    </div>

                    <h2 className={styles.title}>{post.title}</h2>
                    <p className={styles.excerpt}>{decodeHtmlEntities(post.excerpt)}</p>

                    <div className={styles.footer}>
                      <div className={styles.author}>
                        <div className={styles.authorAvatar}>{post.author.avatar}</div>
                        <span>{post.author.name}</span>
                      </div>
                      <span className={styles.readMore}>Leer artículo →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Controles */}
            <button 
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={prevSlide}
              aria-label="Anterior"
            >
              ‹
            </button>
            <button 
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={nextSlide}
              aria-label="Siguiente"
            >
              ›
            </button>

            {/* Dots */}
            <div className={styles.dots}>
              {featuredPosts.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir a artículo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}




