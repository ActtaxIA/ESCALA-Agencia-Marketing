import Link from 'next/link'
import styles from './Footer.module.css'

const SERVICES = [
  { href: '/servicios/diseno-web', label: 'Diseño Web' },
  { href: '/servicios/seo-local', label: 'SEO Local' },
  { href: '/servicios/redes-sociales', label: 'Redes Sociales' },
  { href: '/servicios/apps-ia', label: 'Apps con IA' },
]

const COMPANY = [
  { href: '/quienes-somos', label: 'Nosotros' },
  { href: '/metodologia', label: 'Metodología' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/exitos', label: 'Éxitos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.stripes}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={styles.grid}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMain}>ESCALA</span>
            <span className={styles.logoSub}>Agencia de Marketing</span>
          </Link>
          <p>
            Agencia de marketing digital en Murcia. Llevamos tu negocio al 
            siguiente nivel con estrategia, creatividad y tecnología.
          </p>
        </div>

        <div>
          <h4 className={styles.title}>Servicios</h4>
          <ul className={styles.links}>
            {SERVICES.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={styles.title}>Empresa</h4>
          <ul className={styles.links}>
            {COMPANY.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={styles.title}>Contacto</h4>
          <ul className={styles.links}>
            <li>📍 Murcia, España</li>
            <li>✉️ hola@escalamarketing.es</li>
            <li>📱 +34 XXX XXX XXX</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} ESCALA Marketing. Todos los derechos reservados.</span>
        <span>Hecho con 🧡 en Murcia</span>
      </div>
    </footer>
  )
}
