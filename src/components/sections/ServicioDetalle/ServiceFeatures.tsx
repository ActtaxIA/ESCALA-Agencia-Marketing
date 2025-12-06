'use client'

import { useEffect } from 'react'
import styles from './ServiceFeatures.module.css'
import { StripeDivider } from '@/components/layout'

interface Feature {
  icon: string
  title: string
  description: string
}

interface ServiceFeaturesProps {
  features: Feature[]
  title: string
}

export default function ServiceFeatures({ features, title }: ServiceFeaturesProps) {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-up')
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    fadeElements.forEach((el) => fadeObserver.observe(el))
    return () => fadeObserver.disconnect()
  }, [])

  return (
    <>
      <StripeDivider />
      
      <section className={styles.features}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Características</span>
          <h2 className={styles.sectionTitle}>{title}</h2>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={`${styles.featureCard} fade-up`}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}





