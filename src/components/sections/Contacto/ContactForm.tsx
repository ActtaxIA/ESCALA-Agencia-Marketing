'use client'

import { useState, useEffect } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Simulamos el envío
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('¡Mensaje enviado! Te contactaremos pronto.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className={styles.contactForm} id="formulario">
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Formulario de contacto</span>
          <h2 className={styles.sectionTitle}>Envíanos un mensaje</h2>
        </div>

        <form onSubmit={handleSubmit} className={`${styles.form} fade-up`}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+34 XXX XXX XXX"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company">Empresa</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nombre de tu empresa"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="service">Servicio de interés</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Selecciona un servicio</option>
              <option value="diseno-web">Diseño Web</option>
              <option value="seo-local">SEO Local</option>
              <option value="redes-sociales">Redes Sociales</option>
              <option value="google-ads">Google Ads</option>
              <option value="apps-ia">Apps con IA</option>
              <option value="fotografia">Fotografía</option>
              <option value="branding">Branding</option>
              <option value="email-marketing">Email Marketing</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Cuéntanos sobre tu proyecto..."
            />
          </div>

          {submitMessage && (
            <div className={styles.successMessage}>{submitMessage}</div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.submitBtn}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje →'}
          </button>
        </form>
      </section>
  )
}

