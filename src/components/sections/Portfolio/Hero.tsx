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
        <div className={styles.heroBadge}>◐ Nuestro Portfolio</div>
        <h1 className={styles.heroTitle}>
          Proyectos que <span>generan resultados</span>
        </h1>
        <p className={styles.heroDesc}>
          Descubre cómo hemos ayudado a empresas como la tuya a crecer en el 
          entorno digital. Casos reales, resultados medibles.
        </p>
        <div className={styles.heroButtons}>
          <Link href="/contacto" className={`${styles.btn} ${styles.btnPrimary}`}>
            Trabajemos juntos →
          </Link>
          <Link href="/exitos" className={`${styles.btn} ${styles.btnSecondary}`}>
            Ver testimonios
          </Link>
        </div>
      </div>
    </section>
  )
}


