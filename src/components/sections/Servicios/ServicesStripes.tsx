'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './ServicesStripes.module.css'

interface ServiceStripe {
  slug: string
  icon: string
  title: string
  route: string
}

const services: ServiceStripe[] = [
  { slug: 'diseno-web', icon: '□', title: 'Diseño Web', route: '/servicios/diseno-web' },
  { slug: 'seo-local', icon: '⚲', title: 'SEO Local', route: '/servicios/seo-local' },
  { slug: 'redes-sociales', icon: '∞', title: 'Redes Sociales', route: '/servicios/redes-sociales' },
  { slug: 'google-ads', icon: '◎', title: 'Google Ads', route: '/servicios/google-ads' },
  { slug: 'apps-ia', icon: '❖', title: 'Apps con IA', route: '/servicios/apps-ia' },
  { slug: 'fotografia', icon: '▫', title: 'Fotografía', route: '/servicios/fotografia' },
  { slug: 'branding', icon: '✎', title: 'Branding', route: '/servicios/branding' },
  { slug: 'email-marketing', icon: '✉', title: 'Email Marketing', route: '/servicios/email-marketing' },
]

export default function ServicesStripes() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeStripe, setActiveStripe] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isLoading) return

    // Generar estrellas en franjas nocturnas (3, 4, 5)
    const nightStripes = [3, 4, 5]
    nightStripes.forEach((index) => {
      const starsContainer = document.getElementById(`stars-${index}`)
      if (starsContainer && starsContainer.childElementCount === 0) {
        for (let i = 0; i < 25; i++) {
          const star = document.createElement('div')
          star.className = styles.star
          star.style.left = Math.random() * 100 + '%'
          star.style.top = Math.random() * 100 + '%'
          star.style.animationDelay = Math.random() * 3 + 's'
          const size = Math.random() * 2 + 1 + 'px'
          star.style.width = size
          star.style.height = size
          starsContainer.appendChild(star)
        }
      }
    })

    // Efecto parallax (solo desktop)
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
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

  const handleStripeClick = (route: string, slug: string) => {
    // En móvil: Primer click activa, segundo click navega
    if (window.innerWidth <= 768) {
      if (activeStripe !== slug) {
        setActiveStripe(slug)
        return
      }
    }

    // Animación y navegación
    const stripe = document.querySelector(`[data-service="${slug}"]`) as HTMLElement
    if (stripe) {
      stripe.style.transform = 'scale(1.02)'
      setTimeout(() => {
        stripe.style.transform = ''
      }, 200)
    }

    setTimeout(() => {
      router.push(route)
    }, 300)
  }

  return (
    <>
      {/* Loader inicial */}
      <div className={`${styles.loader} ${!isLoading ? styles.hidden : ''}`}>
        <span className={styles.loaderText}>ESCALA</span>
      </div>

      {/* Contenedor principal */}
      <div className={styles.servicesWrapper} style={{ opacity: isLoading ? 0 : 1 }}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMain}>ESCALA</span>
          <span className={styles.logoSub}>Nuestros Servicios</span>
        </Link>

        {/* Hint */}
        <div className={styles.hint}>8 servicios · un objetivo · tu éxito</div>

        {/* Contenedor de franjas */}
        <div className={styles.container}>
          {services.map((service, index) => (
            <div
              key={service.slug}
              className={`${styles.stripe} ${activeStripe === service.slug ? styles.active : ''}`}
              data-service={service.slug}
              onClick={() => handleStripeClick(service.route, service.slug)}
            >
              {/* Luna en la franja central de noche (índice 4 - Apps IA) */}
              {index === 4 && <div className={styles.moon}></div>}

              {/* Estrellas en franjas nocturnas (3, 4, 5) */}
              {[3, 4, 5].includes(index) && (
                <div className={styles.stars} id={`stars-${index}`}></div>
              )}

              {/* Contenido de la franja */}
              <div className={styles.stripeContent}>
                <div className={styles.stripeIcon}>{service.icon}</div>
                <div className={styles.stripeLine}></div>
                <h2>{service.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
