'use client'

import styles from './ServiceBenefits.module.css'
import { StripeDivider } from '@/components/layout'

interface Benefit {
  title: string
  description: string
}

interface ServiceBenefitsProps {
  benefits: Benefit[]
}

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <>
      <StripeDivider />

      <section className={styles.benefits}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Ventajas</span>
          <h2 className={styles.sectionTitle}>Por qué lo necesitas</h2>
        </div>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={`${styles.benefitCard} fade-up`}>
              <div className={styles.benefitNumber}>{String(index + 1).padStart(2, '0')}</div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDesc}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}








