'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
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
                <h2>{stripe.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
