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
        <div className={styles.heroBadge}>▲ Casos de Éxito</div>
        <h1 className={styles.heroTitle}>
          Clientes felices, <span>resultados reales</span>
        </h1>
        <p className={styles.heroDesc}>
          No vendemos humo. Descubre lo que nuestros clientes dicen sobre trabajar 
          con ESCALA y los resultados que hemos conseguido juntos.
        </p>
        <div className={styles.heroButtons}>
          <Link href="/contacto" className={`${styles.btn} ${styles.btnPrimary}`}>
            Únete a ellos →
          </Link>
          <Link href="/portfolio" className={`${styles.btn} ${styles.btnSecondary}`}>
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}



