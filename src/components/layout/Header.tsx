'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from './Header.module.css'

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/quienes-somos', label: 'Nosotros' },
  { href: '/metodologia', label: 'Metodología' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/exitos', label: 'Éxitos' },
  { href: '/blog', label: 'Blog' },
]

const SERVICES = [
  { href: '/servicios/diseno-web', label: 'Diseño Web', icon: '🌐' },
  { href: '/servicios/seo-local', label: 'SEO Local', icon: '📈' },
  { href: '/servicios/redes-sociales', label: 'Redes Sociales', icon: '📱' },
  { href: '/servicios/google-ads', label: 'Google Ads', icon: '🎯' },
  { href: '/servicios/apps-ia', label: 'Apps con IA', icon: '🤖' },
  { href: '/servicios/fotografia', label: 'Fotografía', icon: '📸' },
  { href: '/servicios/branding', label: 'Branding', icon: '✏️' },
  { href: '/servicios/email-marketing', label: 'Email Marketing', icon: '📧' },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <Image 
          src="/images/logo.png" 
          alt="ESCALA" 
          width={40} 
          height={40}
          className={styles.logoImage}
        />
        <div className={styles.logoText}>
          <span className={styles.logoMain}>ESCALA</span>
          <span className={styles.logoSub}>Agencia de Marketing</span>
        </div>
      </Link>

      <nav className={styles.nav}>
        {NAV_LINKS.slice(0, 3).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
          >
            {link.label}
          </Link>
        ))}

        {/* Dropdown de Servicios */}
        <div 
          className={styles.dropdown}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <Link
            href="/servicios"
            className={`${styles.navLink} ${isActive('/servicios') ? styles.active : ''}`}
          >
            Servicios
            <span className={styles.dropdownArrow}>▾</span>
          </Link>
          
          <div className={`${styles.dropdownMenu} ${servicesOpen ? styles.dropdownOpen : ''}`}>
            <div className={styles.dropdownHeader}>
              <span>Nuestros Servicios</span>
            </div>
            {SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={styles.dropdownItem}
              >
                <span className={styles.dropdownIcon}>{service.icon}</span>
                {service.label}
              </Link>
            ))}
            <div className={styles.dropdownFooter}>
              <Link href="/servicios" className={styles.dropdownViewAll}>
                Ver todos los servicios →
              </Link>
            </div>
          </div>
        </div>

        {NAV_LINKS.slice(3).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
          >
            {link.label}
          </Link>
        ))}

        <Link href="/contacto" className={styles.navCta}>
          Contactar
        </Link>
      </nav>

      <button 
        className={styles.mobileMenuBtn}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Servicios en móvil */}
          <div className={styles.mobileDropdown}>
            <button 
              className={styles.mobileDropdownBtn}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Servicios
              <span className={`${styles.mobileArrow} ${mobileServicesOpen ? styles.arrowOpen : ''}`}>▾</span>
            </button>
            {mobileServicesOpen && (
              <div className={styles.mobileDropdownContent}>
                {SERVICES.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={styles.mobileSubLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{service.icon}</span>
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link 
            href="/contacto" 
            className={styles.mobileCta}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contactar
          </Link>
        </div>
      )}
    </header>
  )
}
