'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './FeaturedPost.module.css'
import { StripeDivider } from '@/components/layout'
import { supabase } from '@/lib/supabase/client'

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

export default function FeaturedPost() {
  const [featuredPost, setFeaturedPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFeaturedPost() {
      try {
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
            category:categories(name)
          `)
          .eq('published', true)
          .eq('featured', true)
          .order('published_at', { ascending: false })
          .limit(1)
          .single()

        if (error) throw error

        if (data) {
          // category puede venir como array o como objeto
          const categoryData = Array.isArray(data.category) ? data.category[0] : data.category
          const categoryName = categoryData?.name || 'General'
          const date = new Date(data.published_at)
          const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
          const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
          
          // Calcular tiempo de lectura
          const wordsPerMinute = 200
          const wordCount = data.content.split(/\s+/).length
          const minutes = Math.ceil(wordCount / wordsPerMinute)

          setFeaturedPost({
            ...data,
            category: categoryName,
            categoryColor: categoryColors[categoryName] || '#4a7c9b',
            icon: categoryIcons[categoryName] || '📄',
            date: formattedDate,
            readTime: `${minutes} min`,
            author: {
              name: data.author || 'ESCALA Marketing',
              avatar: 'EM'
            }
          })
        }
      } catch (error) {
        console.error('Error cargando artículo destacado:', error)
      } finally {
        setLoading(false)
      }
    }

    loadFeaturedPost()
  }, [])

  if (loading || !featuredPost) {
    return null
  }

  return (
    <>
      <StripeDivider />

      <section className={styles.featured}>
        <div className={styles.container}>
          <div className={styles.label}>
            <span className={styles.labelIcon}>⭐</span>
            Artículo Destacado
          </div>

          <Link href={`/blog/${featuredPost.slug}`} className={styles.card}>
            {/* Imagen placeholder con gradiente */}
            <div className={styles.cardImage}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.imageIcon}>{featuredPost.icon}</div>
                <span>{featuredPost.category}</span>
              </div>
              <div 
                className={styles.categoryTag}
                style={{ background: featuredPost.categoryColor }}
              >
                {featuredPost.category}
              </div>
            </div>

            {/* Contenido */}
            <div className={styles.cardContent}>
              <div className={styles.meta}>
                <span className={styles.date}>📅 {featuredPost.date}</span>
                <span className={styles.readTime}>🕐 {featuredPost.readTime} lectura</span>
              </div>

              <h2 className={styles.title}>{featuredPost.title}</h2>
              <p className={styles.excerpt}>{featuredPost.excerpt}</p>

              <div className={styles.footer}>
                <div className={styles.author}>
                  <div className={styles.authorAvatar}>{featuredPost.author.avatar}</div>
                  <span>{featuredPost.author.name}</span>
                </div>
                <span className={styles.readMore}>Leer artículo →</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}


