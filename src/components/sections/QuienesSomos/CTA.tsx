'use client'

import styles from './CTA.module.css'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className={styles.cta} id="contacto">
      <div className={styles.ctaStripes}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2 className="fade-up">
        ¿Listo para <span>escalar</span>?
      </h2>
      <p className={`${styles.ctaEmail} fade-up`}>hola@escalamarketing.es</p>
      <Link href="mailto:hola@escalamarketing.es" className={`${styles.ctaBtn} fade-up`}>
        Hablemos →
      </Link>
    </section>
  )
}


