import { StandardLayout } from '@/components/layout'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './sitemap.module.css'

export const metadata: Metadata = {
  title: 'Mapa del Sitio | ESKALA Marketing Digital',
  description: 'Mapa completo del sitio web de ESKALA Marketing Digital. Encuentra todas nuestras páginas de servicios, blog, portfolio y más.',
  robots: {
    index: true,
    follow: true,
  },
}

const SERVICES = [
  { href: '/servicios/diseno-web', label: 'Diseño Web' },
  { href: '/servicios/seo-local', label: 'SEO Local' },
  { href: '/servicios/redes-sociales', label: 'Gestión de Redes Sociales' },
  { href: '/servicios/google-ads', label: 'Google Ads' },
  { href: '/servicios/apps-ia', label: 'Aplicaciones con IA' },
  { href: '/servicios/fotografia', label: 'Fotografía Profesional' },
  { href: '/servicios/branding', label: 'Branding' },
  { href: '/servicios/email-marketing', label: 'Email Marketing' },
]

const PAGES = [
  { href: '/', label: 'Inicio' },
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  { href: '/metodologia', label: 'Metodología' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/exitos', label: 'Casos de Éxito' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

export default function SitemapPage() {
  return (
    <StandardLayout>
      <section className={styles.sitemap}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Mapa del Sitio</h1>
            <p>Encuentra fácilmente todas las páginas de nuestro sitio web</p>
          </div>

          <div className={styles.grid}>
            <div className={styles.section}>
              <h2>Páginas Principales</h2>
              <ul>
                {PAGES.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href}>{page.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Servicios</h2>
              <ul>
                {SERVICES.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href}>{service.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Recursos</h2>
              <ul>
                <li>
                  <Link href="/blog">Blog de Marketing Digital</Link>
                </li>
                <li>
                  <Link href="/portfolio">Casos de Éxito y Proyectos</Link>
                </li>
                <li>
                  <Link href="/exitos">Testimonios de Clientes</Link>
                </li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Legal y Contacto</h2>
              <ul>
                <li>
                  <Link href="/contacto">Formulario de Contacto</Link>
                </li>
                <li>
                  <a href="mailto:contacto@eskaladigital.com">Email: contacto@eskaladigital.com</a>
                </li>
                <li>
                  <a href="tel:+34626823404">Teléfono: +34 626 82 34 04</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </StandardLayout>
  )
}

