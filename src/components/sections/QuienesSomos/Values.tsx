'use client'

import styles from './Values.module.css'
import { StripeDivider } from '@/components/layout'

const values = [
  {
    number: '01',
    title: 'Transparencia',
    desc: 'Sin letra pequeña. Sabrás exactamente qué hacemos y qué resultados conseguimos.',
  },
  {
    number: '02',
    title: 'Tecnología',
    desc: 'IA y herramientas punta para maximizar cada acción y tu inversión.',
  },
  {
    number: '03',
    title: 'Resultados',
    desc: 'No vendemos humo. KPIs claros y medibles. Tu éxito es nuestro éxito.',
  },
]

export default function Values() {
  return (
    <>
      <StripeDivider />

      <section className={styles.values} id="valores">
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Por qué elegirnos</span>
          <h2 className={styles.sectionTitle}>Nuestra forma de trabajar</h2>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={`${styles.valueCard} fade-up`}>
              <div className={styles.valueNumber}>{value.number}</div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDesc}>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}






