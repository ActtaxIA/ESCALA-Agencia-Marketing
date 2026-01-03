'use client'

import { useState } from 'react'
import styles from './ArticleCTA.module.css'

export default function ArticleCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Aquí puedes integrar con tu servicio de email marketing
    // Por ahora solo simulamos el envío
    console.log('Email capturado:', email)
    
    setSubmitted(true)
    setEmail('')
    
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaContent}>
        <div className={styles.ctaIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <div className={styles.ctaText}>
          <h3 className={styles.ctaTitle}>¿Te ha gustado este artículo?</h3>
          <p className={styles.ctaDescription}>
            Suscríbete a nuestro newsletter y recibe contenido exclusivo sobre marketing digital, 
            SEO y estrategias para hacer crecer tu negocio online.
          </p>
        </div>
        {!submitted ? (
          <form onSubmit={handleSubmit} className={styles.ctaForm}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className={styles.ctaInput}
            />
            <button type="submit" className={styles.ctaButton}>
              Suscribirme
            </button>
          </form>
        ) : (
          <div className={styles.ctaSuccess}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
            <span>¡Gracias por suscribirte!</span>
          </div>
        )}
      </div>
      <div className={styles.ctaAlternative}>
        <p className={styles.ctaAlternativeText}>¿Necesitas ayuda con tu estrategia digital?</p>
        <a href="/contacto" className={styles.ctaAlternativeLink}>
          Hablemos →
        </a>
      </div>
    </div>
  )
}

