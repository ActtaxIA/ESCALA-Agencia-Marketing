'use client'

import { useEffect } from 'react'
import styles from './Process.module.css'

const steps = [
  {
    number: '01',
    title: 'Análisis',
    desc: 'Estudiamos tu negocio, competencia y audiencia para entender tu situación actual y objetivos.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Estrategia',
    desc: 'Diseñamos un plan personalizado con KPIs claros y acciones concretas para alcanzar tus metas.',
    icon: '🎯',
  },
  {
    number: '03',
    title: 'Ejecución',
    desc: 'Implementamos la estrategia con agilidad, creatividad y las mejores herramientas del mercado.',
    icon: '⚡',
  },
  {
    number: '04',
    title: 'Medición',
    desc: 'Monitorizamos resultados en tiempo real y optimizamos continuamente para maximizar el ROI.',
    icon: '📊',
  },
  {
    number: '05',
    title: 'Escalado',
    desc: 'Identificamos oportunidades de crecimiento y escalamos las acciones que más funcionan.',
    icon: '🚀',
  },
  {
    number: '06',
    title: 'Mejora',
    desc: 'Iteramos constantemente basándonos en datos para seguir mejorando tus resultados.',
    icon: '🔄',
  },
]

export default function Process() {
  useEffect(() => {
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
    <section className={styles.process}>
      <div className={`${styles.sectionHeader} fade-up`}>
        <span className={styles.sectionLabel}>Cómo trabajamos</span>
        <h2 className={styles.sectionTitle}>6 pasos hacia el éxito</h2>
      </div>
      <div className={styles.processGrid}>
        {steps.map((step, index) => (
          <div key={index} className={`${styles.stepCard} fade-up`}>
            <div className={styles.stepIcon}>{step.icon}</div>
            <div className={styles.stepNumber}>{step.number}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
