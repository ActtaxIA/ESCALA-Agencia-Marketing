'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './PortfolioContent.module.css'
import { StripeDivider } from '@/components/layout'
import { createClient } from '@/lib/supabase/client'

interface Project {
  id: string
  title: string
  client: string
  category: string
  categoryLabel: string
  description: string
  results: string[]
  color: string
  icon: string
  year: string
  slug: string
  metrics: any
  featured_image?: string
  website_url?: string
}

// Mapeo de servicios a categorías de filtro
const serviceToCategory: Record<string, string> = {
  'diseño-web': 'web',
  'diseno-web': 'web',
  'seo-local': 'seo',
  'seo': 'seo',
  'redes-sociales': 'social',
  'google-ads': 'ads',
  'branding': 'branding',
  'apps-ia': 'ia',
  'fotografia': 'foto',
  'email-marketing': 'email',
}

// Colores por categoría
const categoryColors: Record<string, string> = {
  'web': '#4a7c9b',
  'seo': '#1e3a5f',
  'social': '#ffb366',
  'ads': '#ff6b35',
  'branding': '#e84a23',
  'ia': '#0f1729',
  'foto': '#87ceeb',
  'email': '#9b59b6',
}

// Iconos por categoría
const categoryIcons: Record<string, string> = {
  'web': '🌐',
  'seo': '📈',
  'social': '📱',
  'ads': '🎯',
  'branding': '✏️',
  'ia': '🤖',
  'foto': '📸',
  'email': '📧',
}

// Labels por categoría
const categoryLabels: Record<string, string> = {
  'web': 'Diseño Web',
  'seo': 'SEO Local',
  'social': 'Redes Sociales',
  'ads': 'Google Ads',
  'branding': 'Branding',
  'ia': 'Apps IA',
  'foto': 'Fotografía',
  'email': 'Email Marketing',
}

const categories = [
  { id: 'all', label: 'Todos', icon: '✦' },
  { id: 'web', label: 'Web', icon: '🌐' },
  { id: 'seo', label: 'SEO', icon: '📈' },
  { id: 'social', label: 'Social', icon: '📱' },
  { id: 'ads', label: 'Ads', icon: '🎯' },
  { id: 'branding', label: 'Branding', icon: '✏️' },
  { id: 'ia', label: 'IA', icon: '🤖' },
]

export default function PortfolioContent() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('all')

  // Cargar proyectos desde Supabase
  useEffect(() => {
    async function loadProjects() {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('portfolio_projects')
          .select('*')
          .eq('published', true)
          .order('project_date', { ascending: false }) // Más recientes primero

        if (error) {
          console.error('Error de Supabase:', error)
          throw error
        }

        console.log('✅ Proyectos cargados desde Supabase:', data?.length || 0)
        console.log('📄 Primer proyecto raw:', data?.[0])

        // Procesar proyectos
        const processedProjects = data?.map((project: any) => {
          console.log('🔄 Procesando proyecto:', project.client, project.services)
          
          // Determinar categoría principal del primer servicio
          // services puede ser array o string, manejarlo correctamente
          let servicesArray = project.services
          if (typeof servicesArray === 'string') {
            try {
              servicesArray = JSON.parse(servicesArray)
            } catch (e) {
              servicesArray = ['diseño-web']
            }
          }
          
          const mainService = servicesArray?.[0] || 'diseño-web'
          const category = serviceToCategory[mainService] || 'web'
          
          // Extraer año del project_date
          const year = project.project_date ? new Date(project.project_date).getFullYear().toString() : '2024'
          
          // Convertir métricas JSONB a array de resultados
          const metricsArray = project.metrics ? Object.entries(project.metrics).map(
            ([key, value]) => `${value}`
          ).slice(0, 3) : []

          const processed = {
            id: project.id,
            slug: project.slug,
            title: project.title,
            client: project.client,
            category,
            categoryLabel: categoryLabels[category] || 'Diseño Web',
            description: project.short_description || 'Proyecto de marketing digital',
            results: metricsArray,
            color: categoryColors[category] || '#4a7c9b',
            icon: categoryIcons[category] || '🌐',
            year,
            metrics: project.metrics,
            featured_image: project.featured_image,
            website_url: project.website_url,
          }
          
          console.log('✅ Proyecto procesado:', processed.client, processed.category)
          return processed
        }) || []

        console.log('📊 Total proyectos procesados:', processedProjects.length)
        console.log('📄 Primer proyecto procesado:', processedProjects[0])
        
        setProjects(processedProjects)
        console.log('✅ setProjects ejecutado con', processedProjects.length, 'proyectos')
      } catch (error) {
        console.error('❌ ERROR cargando proyectos:', error)
        setProjects([]) // Asegurar que está vacío en caso de error
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  useEffect(() => {
    if (loading || projects.length === 0) return
    
    console.log('🎯 Configurando IntersectionObserver para', projects.length, 'proyectos')
    
    const fadeElements = document.querySelectorAll('.fade-up')
    console.log('🎯 Elementos .fade-up encontrados:', fadeElements.length)
    
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            console.log('✨ Proyecto visible añadido')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    fadeElements.forEach((el) => fadeObserver.observe(el))
    return () => fadeObserver.disconnect()
  }, [projects, loading, activeFilter])

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  console.log('🔄 PortfolioContent render - projects length:', projects.length, 'filteredProjects:', filteredProjects.length, 'loading:', loading)

  if (loading) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#666' }}>Cargando proyectos...</p>
      </div>
    )
  }

  return (
    <>
      {/* Hero compacto */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>◈ Portfolio</div>
          <h1 className={styles.heroTitle}>
            Nuestros <span>Proyectos</span>
          </h1>
          <p className={styles.heroDesc}>
            Casos reales con resultados medibles. Cada proyecto es una historia de éxito.
          </p>
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

      <StripeDivider />

      {/* Grid de proyectos */}
      <section className={styles.projectsSection}>
        {filteredProjects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#666' }}>
            <p>No hay proyectos disponibles para esta categoría.</p>
          </div>
        ) : (
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project, index) => {
              console.log('🎨 Renderizando proyecto:', project.client, project)
              return (
            <Link
              href={`/portfolio/${project.slug}`}
              key={project.id}
              className={styles.projectCard}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--project-color': project.color 
              } as React.CSSProperties}
            >
              <div className={styles.projectVisual}>
                {project.featured_image ? (
                  <img 
                    src={project.featured_image} 
                    alt={project.title}
                    className={styles.projectImage}
                  />
                ) : (
                  <div 
                    className={styles.projectBg}
                    style={{ background: `linear-gradient(135deg, ${project.color}33 0%, ${project.color}77 100%)` }}
                  >
                    <span className={styles.projectIcon}>{project.icon}</span>
                  </div>
                )}
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
            </Link>
            )
            })}
          </div>
        )}
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

      <StripeDivider />

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>¿Quieres ser nuestro próximo caso de éxito?</h2>
          <p>Cuéntanos tu proyecto y te mostramos cómo podemos ayudarte</p>
          <Link href="/contacto" className={styles.ctaBtn}>
            Empezar proyecto →
          </Link>
        </div>
      </section>
    </>
  )
}

