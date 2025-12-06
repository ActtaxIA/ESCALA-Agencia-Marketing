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
        <div className={styles.heroBadge}>★ Hablemos</div>
        <h1 className={styles.heroTitle}>
          Cuéntanos <span>tu proyecto</span>
        </h1>
        <p className={styles.heroDesc}>
          Estamos aquí para ayudarte a hacer crecer tu negocio. Cuéntanos qué necesitas 
          y te preparamos una propuesta personalizada sin compromiso.
        </p>
        <div className={styles.heroButtons}>
          <Link href="#formulario" className={`${styles.btn} ${styles.btnPrimary}`}>
            Enviar mensaje ↓
          </Link>
          <a href="mailto:hola@escalamarketing.es" className={`${styles.btn} ${styles.btnSecondary}`}>
            Email directo
          </a>
        </div>
      </div>
    </section>
  )
}






