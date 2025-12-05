'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './BlogGrid.module.css'
import { StripeDivider } from '@/components/layout'
import { createClient } from '@/lib/supabase/client'

// Mapeo de categorías a colores e iconos
const categoryStyles: Record<string, { color: string; icon: string }> = {
  'SEO y Posicionamiento': { color: '#4a7c9b', icon: '📈' },
  'SEO': { color: '#4a7c9b', icon: '📈' },
  'Diseño Web': { color: '#87ceeb', icon: '🎨' },
  'Redes Sociales': { color: '#ffb366', icon: '📱' },
  'Publicidad Digital': { color: '#ff6b35', icon: '🎯' },
  'Estrategia Digital': { color: '#1e3a5f', icon: '🤖' },
  'IA': { color: '#1e3a5f', icon: '🤖' },
  'Email': { color: '#e84a23', icon: '📧' },
  'Copywriting': { color: '#9b59b6', icon: '✍️' },
}

interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  category: { name: string } | null
  published_at: string
  views: number
  content: string
}

export default function BlogGrid() {
  const [allPosts, setAllPosts] = useState<any[]>([])
  const [categories, setCategories] = useState<{ name: string; count: number; icon: string }[]>([])
  const [popularPosts, setPopularPosts] = useState<{ title: string; slug: string }[]>([])
  const [loading, setLoading] = useState(true)
  const [visiblePosts, setVisiblePosts] = useState(6)

  // Calcular tiempo de lectura basado en palabras
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    const minutes = Math.ceil(wordCount / wordsPerMinute)
    return `${minutes} min`
  }

  // Formatear fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  }

  // Cargar artículos desde Supabase
  useEffect(() => {
    async function loadArticles() {
      try {
        const supabase = createClient()
        // Fetch artículos publicados con su categoría
        const { data: articles, error } = await supabase
          .from('articles')
          .select(`
            id,
            slug,
            title,
            excerpt,
            content,
            published_at,
            views,
            category:categories(name)
          `)
          .eq('published', true)
          .order('published_at', { ascending: false })

        if (error) {
          console.error('Error al cargar artículos:', error)
          throw error
        }

        console.log('✅ Artículos cargados:', articles?.length || 0)
        console.log('📄 Primer artículo:', articles?.[0])

        // Procesar artículos para añadir campos calculados
        const processedArticles = articles?.map((article: any) => {
          // category puede venir como array o como objeto
          const categoryData = Array.isArray(article.category) ? article.category[0] : article.category
          const categoryName = categoryData?.name || 'General'
          const style = categoryStyles[categoryName] || { color: '#4a7c9b', icon: '📄' }
          
          return {
            ...article,
            category: categoryName,
            categoryColor: style.color,
            icon: style.icon,
            date: formatDate(article.published_at),
            readTime: calculateReadTime(article.content)
          }
        }) || []

        console.log('✅ Artículos procesados:', processedArticles.length)
        console.log('📄 Primer artículo procesado:', processedArticles[0])
        
        setAllPosts(processedArticles)
        console.log('✅ setAllPosts ejecutado con', processedArticles.length, 'artículos')

        // Calcular categorías con conteo
        const categoryCount: Record<string, number> = {}
        processedArticles.forEach((article: any) => {
          const cat = article.category
          categoryCount[cat] = (categoryCount[cat] || 0) + 1
        })

        const categoriesData = Object.entries(categoryCount).map(([name, count]) => {
          const style = categoryStyles[name] || { color: '#4a7c9b', icon: '📄' }
          return {
            name,
            count: count as number,
            icon: style.icon
          }
        })
        setCategories(categoriesData)

        // Posts más populares (por views)
        const popular = processedArticles
          .sort((a: any, b: any) => b.views - a.views)
          .slice(0, 3)
          .map((p: any) => ({ title: p.title, slug: p.slug }))
        setPopularPosts(popular)

      } catch (error) {
        console.error('❌ ERROR cargando artículos:', error)
        setAllPosts([]) // Asegurar que está vacío en caso de error
      } finally {
        setLoading(false)
      }
    }

    loadArticles()
  }, [])

  useEffect(() => {
    if (loading) return
    
    const fadeElements = document.querySelectorAll('.fade-up')
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    fadeElements.forEach((el) => fadeObserver.observe(el))
    return () => fadeObserver.disconnect()
  }, [visiblePosts])

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 3)
  }

  console.log('🔄 BlogGrid render - allPosts length:', allPosts.length, 'loading:', loading)

  return (
    <>
      <StripeDivider />

      <section className={styles.blogSection}>
        <div className={styles.container}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#666' }}>
              <p>Cargando artículos...</p>
            </div>
          ) : (
            <>
              {/* Main Content */}
              <main className={styles.mainContent}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>Últimos Artículos</h2>
                  <p className={styles.sectionSubtitle}>
                    Explora nuestro contenido sobre marketing digital
                  </p>
                </div>

                {allPosts.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#666' }}>
                    <p>No hay artículos disponibles.</p>
                  </div>
                ) : (
                  <div className={styles.postsGrid}>
                    {allPosts.slice(0, visiblePosts).map((post, index) => {
                      console.log('🎨 Renderizando post:', post.title, post)
                      return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`${styles.postCard} fade-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.postImage}>
                    <div 
                      className={styles.postImageBg}
                      style={{ 
                        background: `linear-gradient(135deg, ${post.categoryColor}22 0%, ${post.categoryColor}44 100%)` 
                      }}
                    >
                      <span className={styles.postIcon}>{post.icon}</span>
                    </div>
                    <span 
                      className={styles.postCategory}
                      style={{ background: post.categoryColor }}
                    >
                      {post.category}
                    </span>
                  </div>

                  <div className={styles.postContent}>
                    <div className={styles.postMeta}>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>
                    <span className={styles.postLink}>Leer más →</span>
                  </div>
                </Link>
                      )
                    })}
                  </div>
                )}

            {visiblePosts < allPosts.length && (
              <button className={styles.loadMore} onClick={loadMore}>
                Cargar más artículos
              </button>
            )}
          </main>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Categorías */}
            <div className={styles.sidebarWidget}>
              <h3 className={styles.widgetTitle}>📚 Categorías</h3>
              <div className={styles.categoriesList}>
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/blog?categoria=${cat.name.toLowerCase()}`}
                    className={styles.categoryItem}
                  >
                    <span className={styles.categoryIcon}>{cat.icon}</span>
                    <span className={styles.categoryName}>{cat.name}</span>
                    <span className={styles.categoryCount}>{cat.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Posts populares */}
            <div className={styles.sidebarWidget}>
              <h3 className={styles.widgetTitle}>🔥 Más Leídos</h3>
              <div className={styles.popularList}>
                {popularPosts.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={styles.popularItem}
                  >
                    <span className={styles.popularNumber}>{index + 1}</span>
                    <span className={styles.popularTitle}>{post.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className={styles.sidebarWidget + ' ' + styles.newsletterWidget}>
              <h3 className={styles.widgetTitle}>✉️ Newsletter</h3>
              <p className={styles.newsletterText}>
                Recibe los mejores artículos en tu email cada semana.
              </p>
              <form className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className={styles.newsletterInput}
                />
                <button type="submit" className={styles.newsletterBtn}>
                  Suscribirse
                </button>
              </form>
            </div>
          </aside>
            </>
          )}
        </div>
      </section>
    </>
  )
}


