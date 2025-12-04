'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './BlogGrid.module.css'
import { StripeDivider } from '@/components/layout'

const allPosts = [
  {
    slug: 'como-mejorar-seo-local',
    title: 'Cómo mejorar el SEO local de tu negocio en 2024',
    excerpt: 'Guía completa para aparecer en las búsquedas locales de Google y atraer más clientes de tu zona.',
    category: 'SEO',
    categoryColor: '#4a7c9b',
    date: '15 Nov 2024',
    readTime: '8 min',
    icon: '📈',
  },
  {
    slug: 'tendencias-diseno-web-2025',
    title: '10 tendencias de diseño web para 2025',
    excerpt: 'Las últimas tendencias en diseño web que debes conocer para mantener tu sitio actualizado.',
    category: 'Diseño Web',
    categoryColor: '#87ceeb',
    date: '10 Nov 2024',
    readTime: '6 min',
    icon: '🎨',
  },
  {
    slug: 'google-ads-vs-facebook-ads',
    title: 'Google Ads vs Facebook Ads: ¿Cuál elegir?',
    excerpt: 'Comparativa detallada para saber qué plataforma de publicidad se adapta mejor a tu negocio.',
    category: 'Publicidad',
    categoryColor: '#ff6b35',
    date: '5 Nov 2024',
    readTime: '10 min',
    icon: '🎯',
  },
  {
    slug: 'ia-en-marketing',
    title: 'IA en marketing: Cómo aprovecharla para tu negocio',
    excerpt: 'Herramientas de inteligencia artificial que pueden transformar tu estrategia de marketing.',
    category: 'IA',
    categoryColor: '#1e3a5f',
    date: '1 Nov 2024',
    readTime: '12 min',
    icon: '🤖',
  },
  {
    slug: 'redes-sociales-empresas-locales',
    title: 'Redes sociales para empresas locales: Guía práctica',
    excerpt: 'Estrategia práctica para pequeñas y medianas empresas que quieren crecer en redes sociales.',
    category: 'Redes Sociales',
    categoryColor: '#ffb366',
    date: '28 Oct 2024',
    readTime: '7 min',
    icon: '📱',
  },
  {
    slug: 'email-marketing-que-convierte',
    title: 'Email marketing que convierte: Secretos revelados',
    excerpt: 'Cómo crear campañas de email que tu audiencia realmente quiera abrir y leer.',
    category: 'Email',
    categoryColor: '#e84a23',
    date: '25 Oct 2024',
    readTime: '9 min',
    icon: '📧',
  },
  {
    slug: 'optimizar-google-my-business',
    title: 'Optimiza tu Google My Business en 30 minutos',
    excerpt: 'Checklist rápido para sacar el máximo partido a tu ficha de Google My Business.',
    category: 'SEO',
    categoryColor: '#4a7c9b',
    date: '20 Oct 2024',
    readTime: '5 min',
    icon: '📍',
  },
  {
    slug: 'errores-web-pymes',
    title: '7 errores de diseño web que ahuyentan clientes',
    excerpt: 'Errores comunes en webs de PYMEs que hacen que los visitantes se vayan sin contactar.',
    category: 'Diseño Web',
    categoryColor: '#87ceeb',
    date: '15 Oct 2024',
    readTime: '8 min',
    icon: '⚠️',
  },
  {
    slug: 'copywriting-landing-pages',
    title: 'Copywriting para landing pages que convierten',
    excerpt: 'Cómo escribir textos persuasivos que conviertan visitantes en leads cualificados.',
    category: 'Copywriting',
    categoryColor: '#9b59b6',
    date: '10 Oct 2024',
    readTime: '11 min',
    icon: '✍️',
  },
]

const categories = [
  { name: 'SEO', count: 12, icon: '📈' },
  { name: 'Diseño Web', count: 8, icon: '🎨' },
  { name: 'Redes Sociales', count: 10, icon: '📱' },
  { name: 'Publicidad', count: 6, icon: '🎯' },
  { name: 'IA', count: 4, icon: '🤖' },
  { name: 'Email', count: 5, icon: '📧' },
]

const popularPosts = [
  { title: 'Cómo mejorar el SEO local', slug: 'como-mejorar-seo-local' },
  { title: 'Google Ads vs Facebook Ads', slug: 'google-ads-vs-facebook-ads' },
  { title: 'IA en marketing digital', slug: 'ia-en-marketing' },
]

export default function BlogGrid() {
  const [visiblePosts, setVisiblePosts] = useState(6)

  useEffect(() => {
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

  return (
    <>
      <StripeDivider />

      <section className={styles.blogSection}>
        <div className={styles.container}>
          {/* Main Content */}
          <main className={styles.mainContent}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Últimos Artículos</h2>
              <p className={styles.sectionSubtitle}>
                Explora nuestro contenido sobre marketing digital
              </p>
            </div>

            <div className={styles.postsGrid}>
              {allPosts.slice(0, visiblePosts).map((post, index) => (
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
              ))}
            </div>

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
        </div>
      </section>
    </>
  )
}

