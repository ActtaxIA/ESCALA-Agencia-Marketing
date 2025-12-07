'use client'

import styles from './WhyUs.module.css'
import { StripeDivider } from '@/components/layout'

const reasons = [
  {
    title: 'Expertos en cada área',
    desc: 'Equipo especializado en diseño, desarrollo, marketing y estrategia digital.',
  },
  {
    title: 'Tecnología de vanguardia',
    desc: 'Herramientas profesionales e IA para resultados superiores.',
  },
  {
    title: 'Soporte continuo',
    desc: 'Acompañamiento permanente, informes mensuales y optimización constante.',
  },
]

export default function WhyUs() {
  return (
    <>
      <StripeDivider />

      <section className={styles.whyUs}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Ventajas</span>
          <h2 className={styles.sectionTitle}>Por qué elegirnos</h2>
        </div>
        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={`${styles.reasonCard} fade-up`}>
              <div className={styles.reasonNumber}>{String(index + 1).padStart(2, '0')}</div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDesc}>{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}










