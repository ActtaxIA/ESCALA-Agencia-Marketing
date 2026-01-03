'use client'

import styles from './Services.module.css'

const services = [
  { icon: '🌐', title: 'Diseño Web', desc: 'Webs modernas que convierten visitantes en clientes.' },
  { icon: '📈', title: 'SEO Local', desc: 'Domina las búsquedas en Murcia y alrededores.' },
  { icon: '📱', title: 'Redes Sociales', desc: 'Contenido que conecta con tu audiencia.' },
  { icon: '🎯', title: 'Google Ads', desc: 'Campañas optimizadas para máximo ROI.' },
  { icon: '🤖', title: 'Apps con IA', desc: 'Automatización inteligente para tu negocio.' },
  { icon: '🤖', title: 'Chatbots', desc: 'Atención al cliente 24/7 con inteligencia artificial.' },
  { icon: '✏️', title: 'Branding', desc: 'Identidades de marca memorables.' },
  { icon: '📧', title: 'Email Marketing', desc: 'Emails que se abren y convierten.' },
]

export default function Services() {
  return (
    <section className={styles.services} id="servicios">
      <div className={`${styles.sectionHeader} fade-up`}>
        <span className={styles.sectionLabel}>Nuestros servicios</span>
        <h2 className={styles.sectionTitle}>Todo lo que necesitas para crecer</h2>
      </div>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={`${styles.serviceCard} fade-up`}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDesc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
