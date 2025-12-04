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
        ¿Qué servicio <span>necesitas</span>?
      </h2>
      <p className={`${styles.ctaEmail} fade-up`}>Cuéntanos y te asesoramos sin compromiso</p>
      <Link href="/contacto" className={`${styles.ctaBtn} fade-up`}>
        Solicitar presupuesto →
      </Link>
    </section>
  )
}

