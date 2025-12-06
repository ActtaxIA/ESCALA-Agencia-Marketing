'use client'

import styles from './Results.module.css'
import { StripeDivider } from '@/components/layout'

const results = [
  { metric: '+250%', label: 'Crecimiento medio en tráfico web' },
  { metric: '+180%', label: 'Aumento en conversiones' },
  { metric: '3.2x', label: 'ROI medio para nuestros clientes' },
  { metric: '98%', label: 'Clientes que nos recomiendan' },
]

export default function Results() {
  return (
    <>
      <StripeDivider />

      <section className={styles.results}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Resultados</span>
          <h2 className={styles.sectionTitle}>Impacto medible en tu negocio</h2>
        </div>
        <div className={styles.resultsGrid}>
          {results.map((result, index) => (
            <div key={index} className={`${styles.resultCard} fade-up`}>
              <div className={styles.resultMetric}>{result.metric}</div>
              <div className={styles.resultLabel}>{result.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}





