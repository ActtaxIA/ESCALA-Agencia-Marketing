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
    <section className={styles.hero} id="nosotros">
      {/* Franjas interactivas como en home */}
      <div className={styles.heroStripes}>
        {stripes.map((stripe, index) => (
          <Link key={index} href={stripe.href}>
            <span className={styles.heroStripeLabel}>{stripe.label}</span>
          </Link>
        ))}
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>📍 Agencia de Marketing en Murcia</div>
        <h1 className={styles.heroTitle}>
          Llevamos tu negocio al <span>siguiente nivel</span>
        </h1>
        <p className={styles.heroDesc}>
          Marketing digital, desarrollo web y estrategias que generan resultados reales. 
          Escalamos tu presencia online con soluciones a medida.
        </p>
        <div className={styles.heroButtons}>
          <Link href="/contacto" className={`${styles.btn} ${styles.btnPrimary}`}>
            Empezar ahora →
          </Link>
          <Link href="/servicios" className={`${styles.btn} ${styles.btnSecondary}`}>
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  )
}






