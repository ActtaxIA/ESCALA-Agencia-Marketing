'use client'

import styles from './ContactInfo.module.css'
import { StripeDivider } from '@/components/layout'

const contactMethods = [
  {
    icon: '📧',
    title: 'Email',
    info: 'hola@escalamarketing.es',
    desc: 'Respuesta en menos de 24h',
  },
  {
    icon: '📱',
    title: 'Teléfono',
    info: '+34 XXX XXX XXX',
    desc: 'Lun-Vie 9:00-18:00',
  },
  {
    icon: '📍',
    title: 'Ubicación',
    info: 'Murcia, España',
    desc: 'Atención presencial con cita',
  },
]

export default function ContactInfo() {
  return (
    <>
      <StripeDivider />

      <section className={styles.contactInfo}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Otras formas de contactar</span>
          <h2 className={styles.sectionTitle}>Estamos aquí para ti</h2>
        </div>
        <div className={styles.methodsGrid}>
          {contactMethods.map((method, index) => (
            <div key={index} className={`${styles.methodCard} fade-up`}>
              <div className={styles.methodIcon}>{method.icon}</div>
              <h3 className={styles.methodTitle}>{method.title}</h3>
              <p className={styles.methodInfo}>{method.info}</p>
              <p className={styles.methodDesc}>{method.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}






