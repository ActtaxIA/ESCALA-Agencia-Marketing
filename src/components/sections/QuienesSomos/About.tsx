'use client'

import { useEffect } from 'react'
import styles from './About.module.css'
import Link from 'next/link'

const stripes = [
  { label: 'Nosotros', href: '/quienes-somos' },
  { label: 'Método', href: '/metodologia' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Éxitos', href: '/exitos' },
  { label: 'Contacto', href: '/contacto' },
]

export default function About() {
  useEffect(() => {
    // Intersection Observer para animaciones fade-up
    const fadeElements = document.querySelectorAll('.fade-up')
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    fadeElements.forEach((el) => fadeObserver.observe(el))

    return () => fadeObserver.disconnect()
  }, [])

  return (
    <section className={styles.about} id="about">
        <div className={styles.aboutGrid}>
          {/* Visual con franjas interactivas */}
          <div className={styles.aboutVisual}>
            {stripes.map((stripe, index) => (
              <Link key={index} href={stripe.href}>
                <span>{stripe.label}</span>
              </Link>
            ))}
          </div>

          <div className={`${styles.aboutContent} fade-up`}>
            <h2>
              No somos una agencia más. <span>Somos tu partner.</span>
            </h2>
            <p>
              En ESCALA combinamos creatividad, tecnología y estrategia para impulsar 
              negocios en el entorno digital. Desde Murcia trabajamos con empresas de toda España.
            </p>
            <p>
              Aplicamos las últimas tendencias en marketing digital e inteligencia artificial 
              para maximizar cada euro invertido. Cada proyecto es único, cada estrategia es personalizada.
            </p>
            <div className={styles.aboutStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Proyectos</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Satisfacción</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>3x</div>
                <div className={styles.statLabel}>ROI Medio</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

