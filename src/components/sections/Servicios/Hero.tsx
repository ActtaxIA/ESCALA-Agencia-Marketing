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
        <div className={styles.heroBadge}>☀ Nuestros Servicios</div>
        <h1 className={styles.heroTitle}>
          Todo lo que necesitas <span>en un solo lugar</span>
        </h1>
        <p className={styles.heroDesc}>
          Desde diseño web hasta inteligencia artificial. Servicios completos de marketing 
          digital para hacer crecer tu negocio.
        </p>
        <div className={styles.heroButtons}>
          <Link href="/contacto" className={`${styles.btn} ${styles.btnPrimary}`}>
            Solicitar presupuesto →
          </Link>
          <Link href="/portfolio" className={`${styles.btn} ${styles.btnSecondary}`}>
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}

