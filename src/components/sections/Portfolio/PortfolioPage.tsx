'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './PortfolioPage.module.css'

interface Project {
  id: number
  title: string
  client: string
  category: string
  categoryLabel: string
  description: string
  results: string[]
  color: string
  icon: string
  year: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce de Moda',
    client: 'Boutique Mía',
    category: 'web',
    categoryLabel: 'Diseño Web',
    description: 'Tienda online completa con catálogo de +500 productos, pasarela de pago y gestión de inventario.',
    results: ['+340% ventas online', '12K visitas/mes', '4.2% conversión'],
    color: '#4a7c9b',
    icon: '🛍️',
    year: '2024',
  },
  {
    id: 2,
    title: 'Posicionamiento Local',
    client: 'Clínica Dental García',
    category: 'seo',
    categoryLabel: 'SEO Local',
    description: 'Estrategia SEO local completa con optimización de Google My Business y contenido localizado.',
    results: ['#1 en Google Maps', '+180% llamadas', '45 reseñas 5⭐'],
    color: '#1e3a5f',
    icon: '📍',
    year: '2024',
  },
  {
    id: 3,
    title: 'Campaña Redes Sociales',
    client: 'Restaurante La Huerta',
    category: 'social',
    categoryLabel: 'Redes Sociales',
    description: 'Gestión integral de Instagram y Facebook con contenido gastronómico y gestión de comunidad.',
    results: ['8K seguidores', '+250% engagement', '3-4 reservas/día'],
    color: '#ffb366',
    icon: '📱',
    year: '2024',
  },
  {
    id: 4,
    title: 'Google Ads Leads',
    client: 'Reformas Integrales Murcia',
    category: 'ads',
    categoryLabel: 'Google Ads',
    description: 'Campañas de búsqueda y display optimizadas para captación de presupuestos cualificados.',
    results: ['3x más leads', '-40% coste/lead', 'ROAS 8:1'],
    color: '#ff6b35',
    icon: '🎯',
    year: '2024',
  },
  {
    id: 5,
    title: 'Branding Completo',
    client: 'Construcciones Hernández',
    category: 'branding',
    categoryLabel: 'Branding',
    description: 'Rediseño de marca completo: logotipo, identidad visual, papelería y aplicaciones.',
    results: ['Nueva identidad', 'Manual de marca', '+60% reconocimiento'],
    color: '#e84a23',
    icon: '✏️',
    year: '2023',
  },
  {
    id: 6,
    title: 'Chatbot IA Atención',
    client: 'Seguros del Sureste',
    category: 'ia',
    categoryLabel: 'Apps IA',
    description: 'Desarrollo de chatbot inteligente para atención al cliente y captación de leads 24/7.',
    results: ['70% consultas auto', '-50% tiempo resp.', '24/7 disponible'],
    color: '#0f1729',
    icon: '🤖',
    year: '2024',
  },
  {
    id: 7,
    title: 'Fotografía de Producto',
    client: 'Artesanía Murciana',
    category: 'foto',
    categoryLabel: 'Fotografía',
    description: 'Sesión fotográfica completa de catálogo con más de 200 productos artesanales.',
    results: ['+40% ventas', '200 productos', 'Catálogo premium'],
    color: '#87ceeb',
    icon: '📸',
    year: '2023',
  },
  {
    id: 8,
    title: 'Email Marketing',
    client: 'Moda Mediterránea',
    category: 'email',
    categoryLabel: 'Email Marketing',
    description: 'Estrategia de email marketing con automatizaciones, segmentación y campañas semanales.',
    results: ['15K€/mes ventas', '42% apertura', '8% conversión'],
    color: '#9b59b6',
    icon: '📧',
    year: '2024',
  },
]

const categories = [
  { id: 'all', label: 'Todos', icon: '✦' },
  { id: 'web', label: 'Web', icon: '🌐' },
  { id: 'seo', label: 'SEO', icon: '📈' },
  { id: 'social', label: 'Social', icon: '📱' },
  { id: 'ads', label: 'Ads', icon: '🎯' },
  { id: 'branding', label: 'Branding', icon: '✏️' },
  { id: 'ia', label: 'IA', icon: '🤖' },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className={styles.portfolioWrapper}>
      {/* Header compacto */}
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <span>ESCALA</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/">Inicio</Link>
          <Link href="/quienes-somos">Nosotros</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto" className={styles.navCta}>Contactar</Link>
        </nav>
      </header>

      {/* Hero compacto */}
      <section className={styles.heroCompact}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            <span className={styles.titleSmall}>Nuestro</span>
            Portfolio
          </h1>
          <p className={styles.subtitle}>Proyectos reales · Resultados medibles</p>
        </div>

        {/* Filtros */}
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              <span className={styles.filterIcon}>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de proyectos */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`${styles.projectCard} ${isLoaded ? styles.loaded : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--project-color': project.color 
              } as React.CSSProperties}
              onClick={() => setSelectedProject(project)}
            >
              <div className={styles.projectVisual}>
                <div 
                  className={styles.projectBg}
                  style={{ background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}66 100%)` }}
                >
                  <span className={styles.projectIcon}>{project.icon}</span>
                </div>
                <span 
                  className={styles.projectCategory}
                  style={{ background: project.color }}
                >
                  {project.categoryLabel}
                </span>
                <span className={styles.projectYear}>{project.year}</span>
              </div>

              <div className={styles.projectInfo}>
                <span className={styles.projectClient}>{project.client}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                
                <div className={styles.projectResults}>
                  {project.results.slice(0, 2).map((result, i) => (
                    <span key={i} className={styles.resultTag}>{result}</span>
                  ))}
                </div>

                <span className={styles.projectCta}>Ver proyecto →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section className={styles.statsBar}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>+50</span>
          <span className={styles.statLabel}>Proyectos</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>+40</span>
          <span className={styles.statLabel}>Clientes</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>98%</span>
          <span className={styles.statLabel}>Satisfacción</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>5</span>
          <span className={styles.statLabel}>Años</span>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>¿Quieres ser nuestro próximo caso de éxito?</h2>
        <p>Cuéntanos tu proyecto y te mostramos cómo podemos ayudarte</p>
        <Link href="/contacto" className={styles.ctaBtn}>
          Empezar proyecto →
        </Link>
      </section>

      {/* Modal de proyecto */}
      {selectedProject && (
        <div className={styles.modal} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedProject(null)}>×</button>
            
            <div 
              className={styles.modalHeader}
              style={{ background: `linear-gradient(135deg, ${selectedProject.color} 0%, ${selectedProject.color}cc 100%)` }}
            >
              <span className={styles.modalIcon}>{selectedProject.icon}</span>
              <span className={styles.modalCategory}>{selectedProject.categoryLabel}</span>
            </div>

            <div className={styles.modalBody}>
              <span className={styles.modalClient}>{selectedProject.client}</span>
              <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
              <p className={styles.modalDesc}>{selectedProject.description}</p>

              <div className={styles.modalResults}>
                <h4>Resultados conseguidos</h4>
                <div className={styles.modalResultsGrid}>
                  {selectedProject.results.map((result, i) => (
                    <div key={i} className={styles.modalResult}>
                      <span className={styles.modalResultValue}>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contacto" className={styles.modalCta}>
                Quiero resultados similares →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

