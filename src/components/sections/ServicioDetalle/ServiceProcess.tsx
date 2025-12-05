'use client'

import styles from './ServiceProcess.module.css'
import { StripeDivider } from '@/components/layout'

interface Step {
  step: string
  title: string
  description: string
}

interface ServiceProcessProps {
  steps: Step[]
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <>
      <StripeDivider />

      <section className={styles.process}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Metodología</span>
          <h2 className={styles.sectionTitle}>Cómo trabajamos</h2>
        </div>
        <div className={styles.processSteps}>
          {steps.map((item, index) => (
            <div key={index} className={`${styles.processStep} fade-up`}>
              <div className={styles.stepNumber}>{item.step}</div>
              <div className={styles.stepContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {index < steps.length - 1 && <div className={styles.stepConnector}></div>}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}


