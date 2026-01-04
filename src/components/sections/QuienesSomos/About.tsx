'use client'

import { useEffect } from 'react'
import styles from './About.module.css'
import Link from 'next/link'

const stripes = [
  { label: 'Nosotros', href: '/quienes-somos' },
  { label: 'Método', href: '/metodologia' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Éxitos', href: '/exitos' },
  { label: 'Contacto', href: '/contacto' },
]

export default function About() {
  useEffect(() => {
    // Intersection Observer para animaciones fade-up
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
    <section className={styles.about} id="about">
        <div className={styles.aboutGrid}>
          {/* Visual con franjas interactivas */}
          <div className={styles.aboutVisual}>
            {stripes.map((stripe, index) => (
              <Link key={index} href={stripe.href}>
                <span>{stripe.label}</span>
              </Link>
            ))}
          </div>

          <div className={`${styles.aboutContent} fade-up`}>
            <h2>
              Agencia de Marketing Digital <span>nacida en Murcia</span>
            </h2>
            
            <p>
              <strong>ESKALA</strong> es una <strong>agencia de marketing digital con sede en Murcia</strong> especializada 
              en ayudar a empresas locales y nacionales a crecer en el entorno digital. Desde nuestra oficina en el corazón 
              de la <strong>Región de Murcia</strong>, trabajamos con negocios de todos los sectores: abogados, asesorías, 
              clínicas, comercios, restaurantes, inmobiliarias y empresas de servicios.
            </p>

            <h3>¿Por qué elegir una agencia local en Murcia?</h3>
            <p>
              Conocemos el mercado murciano. Entendemos las necesidades de los negocios de <strong>Murcia capital</strong>, 
              <strong>Cartagena</strong>, <strong>Lorca</strong>, <strong>Molina de Segura</strong> y toda la región. 
              Esta cercanía nos permite crear estrategias de <strong>marketing digital personalizadas</strong> que conectan 
              con tu audiencia local y te ayudan a destacar frente a tu competencia.
            </p>

            <h3>Nuestro enfoque: Resultados reales</h3>
            <p>
              No vendemos humo. En ESKALA combinamos <strong>creatividad, tecnología y estrategia</strong> para impulsar 
              tu negocio. Aplicamos las últimas tendencias en <strong>marketing digital e inteligencia artificial</strong> 
              para maximizar cada euro invertido. Cada proyecto es único, cada estrategia es personalizada, y cada resultado 
              es medible.
            </p>

            <p>
              Ya sea que necesites <strong>posicionarte en Google</strong> con SEO local, crear una <strong>web profesional</strong>, 
              gestionar tus <strong>redes sociales</strong> o lanzar campañas de <strong>Google Ads</strong>, estamos aquí para 
              acompañarte en cada paso del camino. Somos más que una agencia: somos tu <strong>partner estratégico digital</strong>.
            </p>

            <div className={styles.aboutStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Proyectos</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Satisfacción</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>3x</div>
                <div className={styles.statLabel}>ROI Medio</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

