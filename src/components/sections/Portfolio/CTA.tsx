'use client'

import styles from './CTA.module.css'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaStripes}>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
      <h2 className="fade-up">
        ¿Quieres ser nuestro <span>próximo caso de éxito</span>?
      </h2>
      <p className={`${styles.ctaEmail} fade-up`}>Hablemos de tu proyecto</p>
      <Link href="/contacto" className={`${styles.ctaBtn} fade-up`}>
        Empezar ahora →
      </Link>
    </section>
  )
}






