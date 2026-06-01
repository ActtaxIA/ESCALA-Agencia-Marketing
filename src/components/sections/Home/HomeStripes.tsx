'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './HomeStripes.module.css'

interface StripeData {
  section: string
  icon: string
  title: string
  route: string
}

const stripes: StripeData[] = [
  { section: 'inicio', icon: '◐', title: 'Inicio', route: '/' },
  { section: 'quienes-somos', icon: '◆', title: 'Quiénes Somos', route: '/quienes-somos' },
  { section: 'metodologia', icon: '◈', title: 'Metodología', route: '/metodologia' },
  { section: 'servicios', icon: '◯', title: 'Servicios', route: '/servicios' },
  { section: 'portfolio', icon: '▣', title: 'Portfolio', route: '/portfolio' },
  { section: 'casos-exito', icon: '▲', title: 'Éxitos', route: '/exitos' },
  { section: 'blog', icon: '◼', title: 'Blog', route: '/blog' },
  { section: 'contacto', icon: '★', title: 'Contacto', route: '/contacto' },
]

const services = [
  { slug: 'diseno-web', icon: '▦', title: 'Diseño Web', desc: 'Webs rápidas, modernas y optimizadas para convertir visitas en clientes.' },
  { slug: 'seo-local', icon: '◉', title: 'SEO Local', desc: 'Aparece en Google cuando buscan tu negocio en Murcia y alrededores.' },
  { slug: 'redes-sociales', icon: '◈', title: 'Redes Sociales', desc: 'Contenido y gestión que conecta con tu audiencia y construye marca.' },
  { slug: 'google-ads', icon: '◎', title: 'Google Ads', desc: 'Campañas rentables que atraen clientes desde el primer día.' },
  { slug: 'apps-ia', icon: '◆', title: 'Apps con IA', desc: 'Aplicaciones a medida que automatizan y potencian tu negocio.' },
  { slug: 'chatbots', icon: '▣', title: 'Chatbots', desc: 'Atención 24/7 que responde y capta clientes de forma automática.' },
  { slug: 'branding', icon: '✦', title: 'Branding', desc: 'Identidad de marca memorable que te diferencia de la competencia.' },
  { slug: 'email-marketing', icon: '▤', title: 'Email Marketing', desc: 'Campañas de email que fidelizan y aumentan tus ventas.' },
]

const reasons = [
  { num: '01', title: 'Estrategia a medida', desc: 'Analizamos tu negocio y tu mercado para diseñar un plan de marketing digital con objetivos claros y medibles.' },
  { num: '02', title: 'SEO local que posiciona', desc: 'Optimizamos tu presencia para que te encuentren cuando buscan tus servicios en Murcia y la Región.' },
  { num: '03', title: 'Tecnología e IA', desc: 'Aplicamos automatización, apps y chatbots con inteligencia artificial para que vendas más con menos esfuerzo.' },
  { num: '04', title: 'Cercanía murciana', desc: 'Somos una agencia local: trabajamos contigo de tú a tú, con resultados reales y reportes transparentes.' },
]

export default function HomeStripes() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeStripe, setActiveStripe] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Ocultar loader después de cargar
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Generar estrellas en la última franja
    const starsContainer = document.getElementById('stars')
    if (starsContainer) {
      for (let i = 0; i < 30; i++) {
        const star = document.createElement('div')
        star.className = styles.star
        star.style.left = Math.random() * 100 + '%'
        star.style.top = Math.random() * 100 + '%'
        star.style.animationDelay = Math.random() * 2 + 's'
        const size = Math.random() * 2 + 1 + 'px'
        star.style.width = size
        star.style.height = size
        starsContainer.appendChild(star)
      }
    }

    // Efecto parallax sutil con el mouse (solo desktop)
    if (window.innerWidth > 768) {
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10
        const logo = document.querySelector(`.${styles.logo}`) as HTMLElement
        if (logo) {
          logo.style.transform = `translateX(calc(-50% + ${x}px))`
        }
      }

      document.addEventListener('mousemove', handleMouseMove)
      return () => document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isLoading])

  const handleStripeClick = (route: string, section: string) => {
    // En móvil: Primer click activa, segundo click navega
    if (window.innerWidth <= 768) {
      if (activeStripe !== section) {
        setActiveStripe(section)
        return
      }
    }

    // Animación y navegación
    const stripe = document.querySelector(`[data-section="${section}"]`) as HTMLElement
    if (stripe) {
      stripe.style.transform = 'scale(1.02)'
      setTimeout(() => {
        stripe.style.transform = ''
      }, 200)
    }

    // Navegación real
    if (route !== '/') {
      setTimeout(() => {
        router.push(route)
      }, 300)
    }
  }

  return (
    <>
      {/* Loader inicial */}
      <div className={`${styles.loader} ${!isLoading ? styles.hidden : ''}`} id="loader">
        <span className={styles.loaderText}>ESKALA</span>
      </div>

      {/* Contenedor principal - ocultar hasta que termine de cargar */}
      <div className={styles.homeWrapper} style={{ opacity: isLoading ? 0 : 1 }}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoMain}>ESKALA</span>
          <span className={styles.logoSub}>Marketing Digital</span>
        </div>

        {/* Hint */}
        <div className={styles.hint}>explora · descubre · escala</div>

        {/* Contenedor de franjas */}
        <div className={styles.container}>
          {stripes.map((stripe, index) => (
            <div
              key={stripe.section}
              className={`${styles.stripe} ${activeStripe === stripe.section ? styles.active : ''}`}
              data-section={stripe.section}
              onClick={() => handleStripeClick(stripe.route, stripe.section)}
            >
              {/* Sol en la franja naranja (índice 5) */}
              {index === 5 && <div className={styles.sun}></div>}

              {/* Estrellas en la última franja (índice 7) */}
              {index === 7 && <div className={styles.stars} id="stars"></div>}

              {/* Contenido de la franja */}
              <div className={styles.stripeContent}>
                <div className={styles.stripeIcon}>{stripe.icon}</div>
                <div className={styles.stripeLine}></div>
                <span className={styles.stripeTitle}>{stripe.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CONTENIDO SEO (debajo del hero) ===== */}
      <main className={styles.content}>
        {/* Intro + H1 */}
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <span className={styles.kicker}>Agencia de Marketing Digital en Murcia</span>
            <h1 className={styles.h1}>
              Hacemos crecer tu negocio con{' '}
              <span>marketing digital que funciona</span>
            </h1>
            <p className={styles.lead}>
              Somos <strong>ESKALA</strong>, la agencia de marketing digital en Murcia que ayuda
              a negocios locales a vender más online. Desde 2020 combinamos diseño web, SEO local,
              redes sociales, Google Ads y aplicaciones con IA para conseguir resultados reales y
              medibles.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/contacto" className={`${styles.btn} ${styles.btnPrimary}`}>
                Hablemos de tu proyecto →
              </Link>
              <Link href="/servicios" className={`${styles.btn} ${styles.btnGhost}`}>
                Ver servicios
              </Link>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className={styles.servicesSeo}>
          <div className={styles.sectionInner}>
            <header className={styles.sectionHead}>
              <span className={styles.sectionLabel}>Qué hacemos</span>
              <h2 className={styles.h2}>Servicios de marketing digital en Murcia</h2>
              <p className={styles.sectionDesc}>
                Todo lo que tu negocio necesita para crecer en internet, bajo un mismo equipo.
              </p>
            </header>
            <div className={styles.serviceGrid}>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/servicios/${service.slug}`}
                  className={styles.serviceCard}
                >
                  <span className={styles.serviceIcon}>{service.icon}</span>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué ESKALA */}
        <section className={styles.why}>
          <div className={styles.sectionInner}>
            <header className={styles.sectionHead}>
              <span className={styles.sectionLabel}>Por qué ESKALA</span>
              <h2 className={`${styles.h2} ${styles.h2White}`}>
                Una agencia cercana, con resultados medibles
              </h2>
            </header>
            <div className={styles.whyGrid}>
              {reasons.map((reason) => (
                <article key={reason.num} className={styles.whyCard}>
                  <span className={styles.whyNum}>{reason.num}</span>
                  <h3 className={styles.whyTitle}>{reason.title}</h3>
                  <p className={styles.whyDesc}>{reason.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className={styles.finalCta}>
          <h2 className={styles.ctaTitle}>
            ¿Listo para <span>escalar</span> tu negocio?
          </h2>
          <p className={styles.ctaText}>
            Cuéntanos tu proyecto y diseñamos una estrategia de marketing digital a tu medida.
          </p>
          <Link href="/contacto" className={styles.ctaBtn}>
            Empezar ahora →
          </Link>
        </section>
      </main>
    </>
  )
}
