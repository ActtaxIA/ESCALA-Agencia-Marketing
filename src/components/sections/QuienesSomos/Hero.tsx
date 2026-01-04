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
        <div className={styles.heroBadge}>📍 Agencia de Marketing Digital en Murcia</div>
        <h1 className={styles.heroTitle}>
          Tu <span>Agencia de Marketing Digital</span> en Murcia
        </h1>
        <p className={styles.heroDesc}>
          Somos ESKALA, la <strong>agencia de marketing digital en Murcia</strong> que impulsa 
          negocios locales con estrategias digitales que funcionan. Desde 2020 ayudamos a empresas 
          murcianas a crecer online con <strong>SEO local</strong>, <strong>diseño web</strong>, 
          <strong>redes sociales</strong> y <strong>publicidad en Google</strong>. Trabajamos codo a codo 
          contigo para conseguir resultados reales y medibles.
        </p>
        <div className={styles.heroButtons}>
          <Link href="/contacto" className={`${styles.btn} ${styles.btnPrimary}`}>
            Hablemos de tu proyecto →
          </Link>
          <Link href="/servicios" className={`${styles.btn} ${styles.btnSecondary}`}>
            Nuestros servicios
          </Link>
        </div>
      </div>
    </section>
  )
}











