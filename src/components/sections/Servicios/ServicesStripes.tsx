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

// 8 servicios = 8 franjas (atardecer → noche → amanecer)
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
    // ... (código existente) ...
  }, [isLoading])

  const handleStripeClick = (route: string, slug: string) => {
    // En móvil: Primer click activa, segundo click navega
    if (window.innerWidth <= 768) {
      if (activeStripe !== slug) {
        setActiveStripe(slug)
        return
      }
    }

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
      {/* ... (loader y header igual) ... */}

        {/* Contenedor de franjas */}
        <div className={styles.container}>
          {services.map((service, index) => (
            <div
              key={service.slug}
              className={`${styles.stripe} ${activeStripe === service.slug ? styles.active : ''}`}
              data-service={service.slug}
              onClick={() => handleStripeClick(service.route, service.slug)}
            >
              {/* ... (contenido igual) ... */}
              {/* Estrellas en franjas nocturnas (3, 4, 5) */}
              {[3, 4, 5].includes(index) && (
                <div className={styles.stars} id={`stars-${index}`}></div>
              )}

              {/* Luna en la franja central de noche (índice 4 - Apps IA) */}
              {index === 4 && <div className={styles.moon}></div>}

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
