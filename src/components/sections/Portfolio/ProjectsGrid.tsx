'use client'

import { useEffect } from 'react'
import styles from './ProjectsGrid.module.css'

const projects = [
  {
    title: 'Restaurante La Huerta',
    category: 'Diseño Web + SEO',
    desc: 'Web moderna con reservas online. +150% visitas orgánicas en 6 meses.',
    image: '🍽️',
  },
  {
    title: 'Clínica Dental Sonrisa',
    category: 'Marketing Digital',
    desc: 'Campaña completa de Google Ads y redes sociales. +80 pacientes nuevos.',
    image: '🦷',
  },
  {
    title: 'Inmobiliaria Costa Cálida',
    category: 'Branding + Web',
    desc: 'Identidad visual completa y portal inmobiliario con buscador avanzado.',
    image: '🏠',
  },
  {
    title: 'Tienda de Moda Urban Style',
    category: 'E-commerce',
    desc: 'Tienda online con Shopify. +€50k en ventas el primer trimestre.',
    image: '👕',
  },
  {
    title: 'Academia de Idiomas Connect',
    category: 'Redes Sociales',
    desc: 'Estrategia de contenido en Instagram y TikTok. +5k seguidores en 4 meses.',
    image: '🌍',
  },
  {
    title: 'Asesoría Fiscal Martínez',
    category: 'SEO Local',
    desc: 'Posicionamiento #1 en "asesoría fiscal Murcia". +200% consultas.',
    image: '📊',
  },
]

export default function ProjectsGrid() {
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
      
      <section className={styles.projects}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Proyectos destacados</span>
          <h2 className={styles.sectionTitle}>Trabajos que nos enorgullecen</h2>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={`${styles.projectCard} fade-up`}>
              <div className={styles.projectImage}>{project.image}</div>
              <div className={styles.projectContent}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}











