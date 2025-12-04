'use client'

import Link from 'next/link'
import styles from './FeaturedPost.module.css'
import { StripeDivider } from '@/components/layout'

const featuredPost = {
  slug: 'guia-seo-local-2025',
  title: 'Guía Completa de SEO Local para 2025: Domina las Búsquedas en tu Ciudad',
  excerpt: 'Todo lo que necesitas saber para posicionar tu negocio en las búsquedas locales de Google. Desde Google My Business hasta estrategias avanzadas de link building local.',
  category: 'SEO',
  categoryColor: '#4a7c9b',
  date: '28 Nov 2024',
  readTime: '15 min',
  author: {
    name: 'ESCALA Marketing',
    avatar: 'EM',
  },
  image: '/blog/seo-local.jpg',
}

export default function FeaturedPost() {
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
                <div className={styles.imageIcon}>📈</div>
                <span>SEO Local</span>
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

