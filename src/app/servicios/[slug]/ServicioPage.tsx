'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { StripeDivider } from '@/components/layout/StripeDivider'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'
import { STRIPE_COLORS } from '@/types'
import styles from './servicio.module.css'

// Definición local de servicios para este componente
const SERVICES = [
  { slug: 'diseno-web', title: 'Diseño Web', icon: '🌐', stripeNumber: 1, shortDesc: 'Webs que convierten' },
  { slug: 'seo-local', title: 'SEO Local', icon: '📈', stripeNumber: 2, shortDesc: 'Aparece en Google' },
  { slug: 'redes-sociales', title: 'Redes Sociales', icon: '📱', stripeNumber: 3, shortDesc: 'Conecta con tu audiencia' },
  { slug: 'google-ads', title: 'Google Ads', icon: '🎯', stripeNumber: 4, shortDesc: 'Publicidad efectiva' },
  { slug: 'apps-ia', title: 'Apps con IA', icon: '🤖', stripeNumber: 5, shortDesc: 'Automatiza tu negocio' },
  { slug: 'fotografia', title: 'Fotografía', icon: '📸', stripeNumber: 6, shortDesc: 'Imágenes que venden' },
  { slug: 'branding', title: 'Branding', icon: '✏️', stripeNumber: 7, shortDesc: 'Marca memorable' },
  { slug: 'email-marketing', title: 'Email Marketing', icon: '📧', stripeNumber: 8, shortDesc: 'El mejor ROI' },
]

interface ServiceData {
  fullDescription: string
  benefits: string[]
  features: string[]
  process: { title: string; desc: string }[]
}

interface ServiceType {
  slug: string
  title: string
  icon: string
  stripeNumber: number
  shortDesc: string
}

interface Props {
  service: ServiceType
  data: ServiceData
}

export function ServicioPage({ service, data }: Props) {
  const stripeColor = STRIPE_COLORS[service.stripeNumber as keyof typeof STRIPE_COLORS]
  const isLightStripe = [4, 5, 6].includes(service.stripeNumber)
  const textColor = isLightStripe ? 'var(--stripe-1)' : 'white'
  
  const otherServices = SERVICES.filter(s => s.slug !== service.slug).slice(0, 4)

  return (
    <>
      {/* HERO */}
      <section className={styles.hero} style={{ background: stripeColor }}>
        <div className={styles.heroContent}>
          <motion.div 
            className={styles.heroBadge}
            style={{ 
              background: isLightStripe ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
              color: textColor 
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {service.icon} Servicio
          </motion.div>
          
          <motion.h1 
            className={styles.heroTitle}
            style={{ color: textColor }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {service.title}
          </motion.h1>
          
          <motion.p 
            className={styles.heroDesc}
            style={{ color: isLightStripe ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.8)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {data.fullDescription}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/contacto" className="btn btn-primary">
              Solicitar presupuesto →
            </Link>
          </motion.div>
        </div>
      </section>

      <StripeDivider />

      {/* BENEFICIOS Y CARACTERÍSTICAS */}
      <section className="section">
        <div className={styles.featuresGrid}>
          <motion.div 
            className={styles.benefitsCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Beneficios</h2>
            <ul>
              {data.benefits.map((benefit, index) => (
                <li key={index}>
                  <span className={styles.checkIcon} style={{ color: stripeColor }}>✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className={styles.featuresCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Qué incluye</h2>
            <ul>
              {data.features.map((feature, index) => (
                <li key={index}>
                  <span className={styles.bulletIcon} style={{ background: stripeColor }} />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <StripeDivider />

      {/* PROCESO */}
      <section className={`section ${styles.procesoSection}`}>
        <div className="section-header">
          <motion.span 
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Cómo lo hacemos
          </motion.span>
          <motion.h2 
            className="section-title section-title-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Nuestro proceso
          </motion.h2>
        </div>
        
        <div className={styles.procesoGrid}>
          {data.process.map((step, index) => (
            <motion.div 
              key={index}
              className={styles.procesoStep}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className={styles.procesoNum} style={{ color: stripeColor }}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <StripeDivider />

      {/* OTROS SERVICIOS */}
      <section className="section">
        <div className="section-header">
          <motion.span 
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Explora más
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Otros servicios
          </motion.h2>
        </div>
        
        <div className={styles.otherServicesGrid}>
          {otherServices.map((s, index) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/servicios/${s.slug}`} className={styles.otherServiceCard}>
                <div 
                  className={styles.otherServiceIcon}
                  style={{ backgroundColor: STRIPE_COLORS[s.stripeNumber as keyof typeof STRIPE_COLORS] }}
                >
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <ServiceCTA 
        title="¿Listo para empezar?"
        subtitle="Cuéntanos tu proyecto y te enviamos presupuesto en 24h"
      />
    </>
  )
}











