'use client'

import styles from './Benefits.module.css'
import { Gem, TrendingUp, Bot, type LucideIcon } from 'lucide-react'

const benefits: { title: string; desc: string; Icon: LucideIcon }[] = [
  {
    title: 'Transparencia Total',
    desc: 'Reportes claros, acceso a todas las herramientas y comunicación constante. Sin sorpresas.',
    Icon: Gem,
  },
  {
    title: 'Resultados Medibles',
    desc: 'KPIs definidos desde el día 1. Medimos todo y optimizamos basándonos en datos reales.',
    Icon: TrendingUp,
  },
  {
    title: 'Tecnología Punta',
    desc: 'Usamos IA y las mejores herramientas del mercado para maximizar tu inversión.',
    Icon: Bot,
  },
]

export default function Benefits() {
  return (
    <>

      <section className={styles.benefits}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Ventajas</span>
          <h2 className={styles.sectionTitle}>Por qué nuestra metodología funciona</h2>
        </div>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={`${styles.benefitCard} fade-up`}>
              <div className={styles.benefitIcon}>
                <benefit.Icon size={32} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDesc}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}











