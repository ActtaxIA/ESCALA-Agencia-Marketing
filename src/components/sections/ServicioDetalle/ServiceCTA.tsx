'use client'

import Link from 'next/link'
import styles from './ServiceCTA.module.css'
import { StripeDivider } from '@/components/layout'

interface ServiceCTAProps {
  title: string
  subtitle: string
}

export default function ServiceCTA({ title, subtitle }: ServiceCTAProps) {
  return (
    <>
      <StripeDivider />

      <section className={styles.cta}>
        <div className={styles.ctaDecor}></div>
        <div className={`${styles.ctaContent} fade-up`}>
          <h2 className={styles.ctaTitle}>{title}</h2>
          <p className={styles.ctaDesc}>{subtitle}</p>
          <div className={styles.ctaButtons}>
            <Link href="/contacto" className={`${styles.btn} ${styles.btnPrimary}`}>
              Solicitar presupuesto →
            </Link>
            <a href="tel:+34666666666" className={`${styles.btn} ${styles.btnSecondary}`}>
              📞 Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </>
  )
}









