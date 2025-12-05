'use client'

import styles from './Hero.module.css'
import Link from 'next/link'

const stripes = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/quienes-somos' },
  { label: 'Método', href: '/metodologia' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Éxitos', href: '/exitos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroStripes}>
        {stripes.map((stripe, index) => (
          <Link key={index} href={stripe.href}>
            <span className={styles.heroStripeLabel}>{stripe.label}</span>
          </Link>
        ))}
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>◆ Blog</div>
        <h1 className={styles.heroTitle}>
          Aprende <span>marketing digital</span>
        </h1>
        <p className={styles.heroDesc}>
          Guías, tutoriales y novedades sobre marketing digital, SEO, diseño web 
          y tendencias del sector. Conocimiento práctico y aplicable.
        </p>
        <div className={styles.heroButtons}>
          <Link href="#posts" className={`${styles.btn} ${styles.btnPrimary}`}>
            Ver artículos ↓
          </Link>
          <Link href="/contacto" className={`${styles.btn} ${styles.btnSecondary}`}>
            Trabajar con nosotros
          </Link>
        </div>
      </div>
    </section>
  )
}


