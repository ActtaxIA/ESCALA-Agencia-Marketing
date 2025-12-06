import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { StandardLayout } from '@/components/layout'
import styles from './project.module.css'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const supabase = createClient()
  
  const { data: project } = await supabase
    .from('portfolio_projects')
    .select('title, short_description, meta_title, meta_description, keywords')
    .eq('slug', params.slug)
    .eq('published', true)
    .single()

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    }
  }

  return {
    title: project.meta_title || project.title,
    description: project.meta_description || project.short_description,
    keywords: project.keywords?.join(', '),
    openGraph: {
      title: project.title,
      description: project.short_description,
      type: 'website',
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const supabase = createClient()

  // Fetch el proyecto
  const { data: project, error } = await supabase
    .from('portfolio_projects')
    .select('*')
    .eq('slug', params.slug)
    .eq('published', true)
    .single()

  if (error || !project) {
    notFound()
  }

  // Formatear fecha
  const date = project.project_date ? new Date(project.project_date) : new Date()
  const year = date.getFullYear()

  // Parsear services si es string
  let services = project.services
  if (typeof services === 'string') {
    try {
      services = JSON.parse(services)
    } catch (e) {
      services = ['diseño-web']
    }
  }

  // Obtener proyectos relacionados de la misma industria
  const { data: relatedProjects } = await supabase
    .from('portfolio_projects')
    .select('slug, title, client, short_description')
    .eq('published', true)
    .neq('id', project.id)
    .eq('industry', project.industry)
    .limit(3)

  // Mapeo de servicios a colores
  const serviceColors: Record<string, string> = {
    'diseño-web': '#4a7c9b',
    'diseno-web': '#4a7c9b',
    'seo-local': '#1e3a5f',
    'seo': '#1e3a5f',
    'redes-sociales': '#ffb366',
    'google-ads': '#ff6b35',
    'branding': '#e84a23',
    'apps-ia': '#0f1729',
    'fotografia': '#87ceeb',
    'email-marketing': '#9b59b6',
  }

  const primaryColor = serviceColors[services?.[0] || 'diseño-web'] || '#4a7c9b'

  return (
    <StandardLayout>
      <article className={styles.project}>
        {/* Hero del proyecto */}
        <header 
          className={styles.hero}
          style={{ 
            background: `linear-gradient(135deg, ${primaryColor}11 0%, ${primaryColor}33 100%)` 
          }}
        >
          <div className={styles.container}>
            <Link href="/portfolio" className={styles.backLink}>
              ← Volver al Portfolio
            </Link>

            <div className={styles.heroContent}>
              <span className={styles.client}>{project.client}</span>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.description}>{project.short_description}</p>

              <div className={styles.meta}>
                <span className={styles.metaItem}>
                  📅 <strong>Año:</strong> {year}
                </span>
                <span className={styles.metaItem}>
                  🏢 <strong>Industria:</strong> {project.industry}
                </span>
                {project.project_url && (
                  <a 
                    href={project.project_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    style={{ color: primaryColor }}
                  >
                    🔗 Ver sitio web →
                  </a>
                )}
              </div>

              {/* Servicios */}
              <div className={styles.services}>
                {services?.map((service: string, i: number) => (
                  <span 
                    key={i} 
                    className={styles.serviceTag}
                    style={{ background: serviceColors[service] || '#4a7c9b' }}
                  >
                    {service.replace('-', ' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Métricas destacadas */}
        {project.metrics && Object.keys(project.metrics).length > 0 && (
          <section className={styles.metrics}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>📊 Resultados Conseguidos</h2>
              <div className={styles.metricsGrid}>
                {Object.entries(project.metrics).map(([key, value]: [string, any], i) => (
                  <div key={i} className={styles.metric}>
                    <span className={styles.metricValue} style={{ color: primaryColor }}>
                      {value}
                    </span>
                    <span className={styles.metricLabel}>{key}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contenido del proyecto */}
        <div className={styles.container}>
          <div className={styles.content}>
            {/* Desafío */}
            {project.challenge && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>🎯 El Desafío</h2>
                <div className={styles.sectionContent}>
                  <p>{project.challenge}</p>
                </div>
              </section>
            )}

            {/* Solución */}
            {project.solution && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>💡 Nuestra Solución</h2>
                <div className={styles.sectionContent}>
                  <p>{project.solution}</p>
                </div>
              </section>
            )}

            {/* Resultados */}
            {project.results && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>✨ Resultados</h2>
                <div className={styles.sectionContent}>
                  <p>{project.results}</p>
                </div>
              </section>
            )}

            {/* Tecnologías */}
            {project.technologies && project.technologies.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>🛠️ Tecnologías Utilizadas</h2>
                <div className={styles.technologies}>
                  {project.technologies.map((tech: string, i: number) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Proyectos relacionados */}
        {relatedProjects && relatedProjects.length > 0 && (
          <section className={styles.related}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Proyectos Relacionados</h2>
              <div className={styles.relatedGrid}>
                {relatedProjects.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/portfolio/${related.slug}`}
                    className={styles.relatedCard}
                  >
                    <h3>{related.client}</h3>
                    <p className={styles.relatedTitle}>{related.title}</p>
                    <p className={styles.relatedDesc}>{related.short_description}</p>
                    <span className={styles.relatedLink}>Ver proyecto →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>¿Quieres resultados como estos?</h2>
            <p>Cuéntanos tu proyecto y te mostramos cómo podemos ayudarte</p>
            <Link href="/contacto" className={styles.ctaBtn}>
              Empezar mi proyecto →
            </Link>
          </div>
        </section>
      </article>
    </StandardLayout>
  )
}





