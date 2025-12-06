'use client'

import styles from './CTA.module.css'
import EmailContactButton from '@/components/ui/EmailContactButton'

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
      <p className={`${styles.ctaEmail} fade-up`}>contacto@eskaladigital.com</p>
      <EmailContactButton 
        variant="primary"
        subject="Consulta desde Quiénes Somos"
        className={`${styles.ctaBtn} fade-up`}
      >
        Hablemos →
      </EmailContactButton>
    </section>
  )
}






