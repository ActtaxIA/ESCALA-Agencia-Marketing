'use client'

import { useEffect } from 'react'
import styles from './WhyMurcia.module.css'

export default function WhyMurcia() {
  useEffect(() => {
    // Intersection Observer para animaciones fade-up
    const fadeElements = document.querySelectorAll('.fade-up')
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    fadeElements.forEach((el) => fadeObserver.observe(el))

    return () => fadeObserver.disconnect()
  }, [])

  return (
    <section className={styles.whyMurcia}>
      <div className={styles.container}>
        <div className={`${styles.content} fade-up`}>
          <h2 className={styles.title}>
            ¿Por qué elegir una <span>agencia local en Murcia?</span>
          </h2>
          
          <div className={styles.reasons}>
            <div className={`${styles.reason} fade-up`}>
              <div className={styles.reasonIcon}>📍</div>
              <h3>Conocimiento del mercado local</h3>
              <p>
                Trabajar con una <strong>agencia de marketing en Murcia</strong> significa trabajar con profesionales 
                que conocen el tejido empresarial local, las particularidades del mercado murciano y las oportunidades 
                de crecimiento en la región. Sabemos qué funciona en <strong>Murcia capital</strong>, 
                <strong> Cartagena</strong>, <strong>Lorca</strong> y el resto de municipios.
              </p>
            </div>

            <div className={`${styles.reason} fade-up`}>
              <div className={styles.reasonIcon}>🤝</div>
              <h3>Cercanía y disponibilidad</h3>
              <p>
                Al ser una <strong>agencia local</strong>, estamos disponibles para reuniones presenciales cuando lo necesites. 
                Podemos visitar tu negocio, entender tu operativa y conocer a tu equipo. Esta cercanía nos permite crear 
                estrategias más efectivas y mantener una comunicación fluida y constante.
              </p>
            </div>

            <div className={`${styles.reason} fade-up`}>
              <div className={styles.reasonIcon}>🎯</div>
              <h3>Especialistas en SEO local</h3>
              <p>
                Si tu negocio atiende clientes en Murcia, necesitas aparecer en <strong>búsquedas locales</strong> como 
                "abogado en Murcia", "restaurante Murcia" o "fontanero cerca de mí". Nuestra experiencia en 
                <strong> SEO local y Google My Business</strong> ha ayudado a decenas de negocios murcianos a dominar 
                su área geográfica y captar más clientes locales.
              </p>
            </div>

            <div className={`${styles.reason} fade-up`}>
              <div className={styles.reasonIcon}>💰</div>
              <h3>Mejor relación calidad-precio</h3>
              <p>
                Las grandes agencias de <strong>Madrid o Barcelona</strong> tienen costes operativos muy elevados que 
                repercuten en sus tarifas. En ESKALA ofrecemos el mismo nivel de profesionalidad y resultados, pero con 
                precios más competitivos. Además, al entender el mercado local, optimizamos mejor tu inversión en 
                <strong> Google Ads</strong>, <strong>Facebook Ads</strong> y otras plataformas.
              </p>
            </div>

            <div className={`${styles.reason} fade-up`}>
              <div className={styles.reasonIcon}>🚀</div>
              <h3>Compromiso con el tejido empresarial murciano</h3>
              <p>
                Creemos en el potencial de las <strong>empresas murcianas</strong>. Nuestro objetivo es ayudar a que 
                los negocios locales compitan en igualdad de condiciones en el entorno digital, sin importar su tamaño. 
                Desde autónomos hasta PYMEs, todos nuestros clientes reciben el mismo nivel de atención y dedicación.
              </p>
            </div>

            <div className={`${styles.reason} fade-up`}>
              <div className={styles.reasonIcon}>🌐</div>
              <h3>Visión local con alcance global</h3>
              <p>
                Aunque estamos en Murcia, trabajamos con clientes de toda España y aplicamos estrategias de 
                <strong> marketing digital</strong> de nivel internacional. Combinamos lo mejor de ambos mundos: 
                la cercanía y conocimiento local con las últimas tendencias y tecnologías del marketing global, 
                incluyendo <strong>inteligencia artificial</strong> y <strong>automatización</strong>.
              </p>
            </div>
          </div>

          <div className={`${styles.cta} fade-up`}>
            <h3>¿Tienes un negocio en Murcia?</h3>
            <p>
              Hablemos de cómo podemos ayudarte a crecer. Ya sea que necesites mejorar tu posicionamiento en Google, 
              crear una web profesional, gestionar tus redes sociales o lanzar campañas publicitarias, tenemos la 
              experiencia y las herramientas para llevar tu negocio al siguiente nivel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

