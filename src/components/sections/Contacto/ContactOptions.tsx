/**
 * Opciones de Contacto
 * Reemplaza el formulario tradicional con métodos directos de contacto
 */

'use client'

import { useState, useEffect } from 'react'
import styles from './ContactOptions.module.css'
import EmailContactButton from '@/components/ui/EmailContactButton'

const contactOptions = [
  {
    icon: '📧',
    title: 'Email Directo',
    description: 'Escríbenos un email y te respondemos en menos de 24h',
    action: 'email',
    email: 'hola@eskaladigital.com',
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    description: 'Chatea con nosotros de forma rápida y directa',
    action: 'whatsapp',
    link: 'https://wa.me/34626823404?text=Hola,%20me%20gustaría%20información%20sobre...',
  },
  {
    icon: '📞',
    title: 'Teléfono',
    description: 'Llámanos de Lun-Vie de 9:00 a 18:00',
    action: 'phone',
    link: 'tel:+34626823404',
    info: '+34 626 82 34 04',
  },
]

const socialLinks = [
  {
    name: 'Instagram',
    icon: '📸',
    url: 'https://instagram.com/eskalamarketing',
    color: '#E1306C',
  },
  {
    name: 'Facebook',
    icon: '👍',
    url: 'https://facebook.com/eskalamarketing',
    color: '#1877F2',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://linkedin.com/company/eskala-marketing',
    color: '#0A66C2',
  },
  {
    name: 'Twitter',
    icon: '🐦',
    url: 'https://twitter.com/eskalamarketing',
    color: '#1DA1F2',
  },
]

export default function ContactOptions() {
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
    <section className={styles.contactOptions} id="contacto">
      {/* Header */}
      <div className={`${styles.header} fade-up`}>
        <span className={styles.label}>Elige tu método favorito</span>
        <h2 className={styles.title}>
          ¿Cómo prefieres <span>contactarnos</span>?
        </h2>
        <p className={styles.subtitle}>
          Sin formularios complicados. Elige la forma que más cómoda te resulte.
        </p>
      </div>

      {/* Opciones de contacto principales */}
      <div className={styles.optionsGrid}>
        {contactOptions.map((option, index) => (
          <div key={index} className={`${styles.optionCard} fade-up`}>
            <div className={styles.optionIcon}>{option.icon}</div>
            <h3 className={styles.optionTitle}>{option.title}</h3>
            <p className={styles.optionDescription}>{option.description}</p>
            
            {option.action === 'email' && (
              <>
                <div className={styles.optionInfo}>{option.email}</div>
                <EmailContactButton 
                  variant="primary"
                  subject="Consulta desde la página de contacto"
                  email={option.email}
                  className={styles.optionButton}
                >
                  Enviar Email
                </EmailContactButton>
              </>
            )}

            {option.action === 'whatsapp' && (
              <>
                <div className={styles.optionInfo}>Chat directo</div>
                <a 
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.optionButton} ${styles.whatsapp}`}
                >
                  Abrir WhatsApp
                </a>
              </>
            )}

            {option.action === 'phone' && (
              <>
                <div className={styles.optionInfo}>{option.info}</div>
                <a 
                  href={option.link}
                  className={`${styles.optionButton} ${styles.phone}`}
                >
                  Llamar Ahora
                </a>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Redes Sociales */}
      <div className={`${styles.socialSection} fade-up`}>
        <h3 className={styles.socialTitle}>También estamos en redes sociales</h3>
        <div className={styles.socialGrid}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
              style={{ '--social-color': social.color } as React.CSSProperties}
            >
              <span className={styles.socialIcon}>{social.icon}</span>
              <span className={styles.socialName}>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Info adicional */}
      <div className={`${styles.infoBox} fade-up`}>
        <div className={styles.infoIcon}>⚡</div>
        <div className={styles.infoContent}>
          <h4>Respuesta rápida garantizada</h4>
          <p>
            Normalmente respondemos en <strong>menos de 2 horas</strong> en horario laboral.
            Los fines de semana, el lunes a primera hora. ¡Prometido!
          </p>
        </div>
      </div>
    </section>
  )
}

