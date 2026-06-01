'use client'

import { useEffect } from 'react'
import styles from './ServicesGrid.module.css'
import Link from 'next/link'
import { Monitor, Search, Share2, Target, Cpu, Bot, Palette, Mail, type LucideIcon } from 'lucide-react'

const services: { Icon: LucideIcon; title: string; desc: string; slug: string }[] = [
  {
    Icon: Monitor,
    title: 'Diseño Web',
    desc: 'Webs modernas, rápidas y optimizadas que convierten visitantes en clientes.',
    slug: 'diseno-web',
  },
  {
    Icon: Search,
    title: 'SEO Local',
    desc: 'Posicionamiento en Google para dominar las búsquedas en Murcia y alrededores.',
    slug: 'seo-local',
  },
  {
    Icon: Share2,
    title: 'Redes Sociales',
    desc: 'Gestión completa de redes: contenido, community management y publicidad.',
    slug: 'redes-sociales',
  },
  {
    Icon: Target,
    title: 'Google Ads',
    desc: 'Campañas de publicidad optimizadas para máximo ROI y conversiones.',
    slug: 'google-ads',
  },
  {
    Icon: Cpu,
    title: 'Apps con IA',
    desc: 'Desarrollo de aplicaciones inteligentes y automatizaciones con IA.',
    slug: 'apps-ia',
  },
  {
    Icon: Bot,
    title: 'Chatbots',
    desc: 'Chatbots inteligentes para WhatsApp, web y voz. Atención 24/7 automatizada.',
    slug: 'chatbots',
  },
  {
    Icon: Palette,
    title: 'Branding',
    desc: 'Identidad visual completa: logo, paleta de colores, tipografía y más.',
    slug: 'branding',
  },
  {
    Icon: Mail,
    title: 'Email Marketing',
    desc: 'Campañas de email automatizadas que generan ventas recurrentes.',
    slug: 'email-marketing',
  },
]

export default function ServicesGrid() {
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
      
      <section className={styles.services}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Qué hacemos</span>
          <h2 className={styles.sectionTitle}>Servicios completos de marketing digital</h2>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/servicios/${service.slug}`}
              className={`${styles.serviceCard} fade-up`}
            >
              <div className={styles.serviceIcon}>
                <service.Icon size={24} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
              <span className={styles.serviceLink}>Ver más →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}











