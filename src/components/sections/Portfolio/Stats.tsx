'use client'

import styles from './Stats.module.css'
import { StripeDivider } from '@/components/layout'

const stats = [
  { number: '50+', label: 'Proyectos completados' },
  { number: '35+', label: 'Clientes satisfechos' },
  { number: '98%', label: 'Tasa de éxito' },
  { number: '3x', label: 'ROI promedio' },
]

export default function Stats() {
  return (
    <>
      <StripeDivider />

      <section className={styles.stats}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Números que hablan</span>
          <h2 className={styles.sectionTitle}>Resultados en cifras</h2>
        </div>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={`${styles.statCard} fade-up`}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}








