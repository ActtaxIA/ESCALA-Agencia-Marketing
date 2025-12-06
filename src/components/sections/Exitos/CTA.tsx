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
        ¿Listo para <span>tu historia de éxito</span>?
      </h2>
      <p className={`${styles.ctaEmail} fade-up`}>Empieza hoy mismo</p>
      <Link href="/contacto" className={`${styles.ctaBtn} fade-up`}>
        Contáctanos →
      </Link>
    </section>
  )
}






