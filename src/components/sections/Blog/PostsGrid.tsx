'use client'

import { useEffect } from 'react'
import styles from './PostsGrid.module.css'

const posts = [
  {
    title: 'Cómo mejorar el SEO local de tu negocio',
    excerpt: 'Guía completa para aparecer en las búsquedas locales de Google y atraer más clientes de tu zona.',
    category: 'SEO',
    date: '15 Nov 2024',
    readTime: '8 min',
  },
  {
    title: '10 tendencias de diseño web para 2025',
    excerpt: 'Las últimas tendencias en diseño web que debes conocer para mantener tu sitio actualizado y atractivo.',
    category: 'Diseño Web',
    date: '10 Nov 2024',
    readTime: '6 min',
  },
  {
    title: 'Google Ads vs Facebook Ads: ¿Cuál elegir?',
    excerpt: 'Comparativa detallada para saber qué plataforma de publicidad se adapta mejor a tu negocio.',
    category: 'Publicidad',
    date: '5 Nov 2024',
    readTime: '10 min',
  },
  {
    title: 'IA en marketing: Cómo aprovecharla',
    excerpt: 'Herramientas de inteligencia artificial que pueden transformar tu estrategia de marketing digital.',
    category: 'IA',
    date: '1 Nov 2024',
    readTime: '12 min',
  },
  {
    title: 'Redes sociales para empresas locales',
    excerpt: 'Estrategia práctica para pequeñas y medianas empresas que quieren crecer en redes sociales.',
    category: 'Redes Sociales',
    date: '28 Oct 2024',
    readTime: '7 min',
  },
  {
    title: 'Email marketing que convierte',
    excerpt: 'Cómo crear campañas de email que tu audiencia realmente quiera abrir y leer.',
    category: 'Email',
    date: '25 Oct 2024',
    readTime: '9 min',
  },
]

export default function PostsGrid() {
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
  }, [])

  return (
    <>
      
      <section className={styles.posts} id="posts">
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Últimos artículos</span>
          <h2 className={styles.sectionTitle}>Aprende con nosotros</h2>
        </div>
        <div className={styles.postsGrid}>
          {posts.map((post, index) => (
            <article key={index} className={`${styles.postCard} fade-up`}>
              <div className={styles.postMeta}>
                <span className={styles.postCategory}>{post.category}</span>
                <span className={styles.postDate}>{post.date}</span>
              </div>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <div className={styles.postFooter}>
                <span className={styles.postReadTime}>🕐 {post.readTime} lectura</span>
                <span className={styles.postLink}>Leer más →</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}











