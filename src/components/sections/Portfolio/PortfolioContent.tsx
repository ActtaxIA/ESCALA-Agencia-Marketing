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
  categories: string[] // Cambio: ahora múltiples categorías
  categoryLabels: string[] // Cambio: múltiples labels
  description: string
  results: string[]
  colors: string[] // Cambio: múltiples colores
  icons: string[] // Cambio: múltiples iconos
  year: string
  slug: string
  metrics: any
  featured_image?: string
  website_url?: string
  services: string[] // Añadido: servicios originales
}

// Mapeo de servicios a categorías de filtro
const serviceToCategory: Record<string, string> = {
  'diseño-web': 'web',
  'diseno-web': 'web',
  'desarrollo-web': 'dev', // Añadido: desarrollo web como categoría separada
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
  'dev': '#2d5f7f', // Azul más oscuro para desarrollo
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
  'dev': '💻', // Icono laptop para desarrollo
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
  'dev': 'Desarrollo Web', // Label específico para desarrollo
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
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalClients: 0,
  })

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

        // Calcular estadísticas reales
        const totalProjects = data?.length || 0
        // Contar clientes únicos
        const uniqueClients = new Set(data?.map((p: any) => p.client) || [])
        const totalClients = uniqueClients.size

        setStats({
          totalProjects,
          totalClients,
        })

        // Procesar proyectos
        const processedProjects = data?.map((project: any) => {
          console.log('🔄 Procesando proyecto:', project.client, project.services)
          
          // Procesar servicios - puede ser array o string
          let servicesArray = project.services
          if (typeof servicesArray === 'string') {
            try {
              servicesArray = JSON.parse(servicesArray)
            } catch (e) {
              servicesArray = ['diseño-web']
            }
          }
          
          // Convertir TODOS los servicios a categorías
          const categories = (servicesArray || ['diseño-web']).map(
            (service: string) => serviceToCategory[service] || 'web'
          )
          
          // Obtener labels, colores e iconos para TODOS los servicios
          const labels = categories.map((cat: string) => categoryLabels[cat] || 'Diseño Web')
          const colors = categories.map((cat: string) => categoryColors[cat] || '#4a7c9b')
          const icons = categories.map((cat: string) => categoryIcons[cat] || '🌐')
          
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
            categories, // Ahora múltiples
            categoryLabels: labels, // Ahora múltiples
            description: project.short_description || 'Proyecto de marketing digital',
            results: metricsArray,
            colors, // Ahora múltiples
            icons, // Ahora múltiples
            year,
            metrics: project.metrics,
            featured_image: project.featured_image,
            website_url: project.website_url,
            services: servicesArray || [],
          }
          
          console.log('✅ Proyecto procesado:', processed.client, processed.categories)
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
    : projects.filter(p => {
        // Si se filtra por 'web', incluir tanto diseño-web como desarrollo-web
        if (activeFilter === 'web') {
          return p.categories.includes('web') || p.categories.includes('dev')
        }
        // Para otros filtros, comportamiento normal
        return p.categories.includes(activeFilter)
      })

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

        {/* Filtros horizontales (solo mobile) */}
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
                '--project-color': project.colors[0] 
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
                    style={{ background: `linear-gradient(135deg, ${project.colors[0]}33 0%, ${project.colors[0]}77 100%)` }}
                  >
                    <span className={styles.projectIcon}>{project.icons[0]}</span>
                  </div>
                )}
                {/* Múltiples categorías como badges */}
                <div className={styles.projectCategories}>
                  {project.categoryLabels.map((label, idx) => (
                    <span 
                      key={idx}
                      className={styles.projectCategory}
                      style={{ background: project.colors[idx] }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
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
          <span className={styles.statNumber}>{stats.totalProjects}</span>
          <span className={styles.statLabel}>Proyectos</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>{stats.totalClients}</span>
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

