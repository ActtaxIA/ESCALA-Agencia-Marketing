'use client'

import styles from './Benefits.module.css'
import { StripeDivider } from '@/components/layout'

const benefits = [
  {
    title: 'Transparencia Total',
    desc: 'Reportes claros, acceso a todas las herramientas y comunicación constante. Sin sorpresas.',
    icon: '💎',
  },
  {
    title: 'Resultados Medibles',
    desc: 'KPIs definidos desde el día 1. Medimos todo y optimizamos basándonos en datos reales.',
    icon: '📈',
  },
  {
    title: 'Tecnología Punta',
    desc: 'Usamos IA y las mejores herramientas del mercado para maximizar tu inversión.',
    icon: '🤖',
  },
]

export default function Benefits() {
  return (
    <>
      <StripeDivider />

      <section className={styles.benefits}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Ventajas</span>
          <h2 className={styles.sectionTitle}>Por qué nuestra metodología funciona</h2>
        </div>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={`${styles.benefitCard} fade-up`}>
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDesc}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}











