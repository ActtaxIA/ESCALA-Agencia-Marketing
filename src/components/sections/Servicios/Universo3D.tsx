'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Sora } from 'next/font/google'
import { initUniversoScene } from './universoScene'
import styles from './Universo3D.module.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

type ServiceStat = { value: string; label: string }

type ServiceWorld = {
  id: string
  num: number
  title: string
  metafora: string
  color: string
  slug: string
  text: string
  stats: ServiceStat[]
}

const WORLDS: ServiceWorld[] = [
  {
    id: 'mundo-1',
    num: 1,
    title: 'Diseño Web',
    metafora: '— el planeta estructura',
    color: '#FF6B35',
    slug: 'diseno-web',
    text: 'Todo empieza aquí: una web rápida, moderna y construida para convertir. La malla que ves girando es tu arquitectura — cada nodo, una página; cada línea, un camino que lleva al cliente justo donde quieres.',
    stats: [
      { value: '<2 s', label: 'de carga' },
      { value: '100%', label: 'responsive' },
      { value: '1', label: 'objetivo: convertir' },
    ],
  },
  {
    id: 'mundo-2',
    num: 2,
    title: 'SEO Local',
    metafora: '— el planeta visible',
    color: '#FFB23E',
    slug: 'seo-local',
    text: 'Los satélites que lo orbitan son búsquedas: "cerrajero murcia", "clínica dental cerca", "abogado laboral". Cada una es un cliente buscándote ahora mismo. El SEO local decide si te encuentra a ti o a tu competencia.',
    stats: [
      { value: '76%', label: 'busca antes de comprar' },
      { value: 'Top 3', label: 'se lleva los clics' },
      { value: '24/7', label: 'trabajando' },
    ],
  },
  {
    id: 'mundo-3',
    num: 3,
    title: 'Redes Sociales',
    metafora: '— la constelación',
    color: '#00BBF9',
    slug: 'redes-sociales',
    text: 'Cada punto de luz es una persona; cada línea, una conversación. Las marcas que brillan en redes no publican más: publican mejor. Contenido con estrategia que convierte seguidores en comunidad, y comunidad en clientes.',
    stats: [
      { value: '+5 h', label: 'al día en redes' },
      { value: '1ª', label: 'impresión de tu marca' },
      { value: '∞', label: 'alcance orgánico bien hecho' },
    ],
  },
  {
    id: 'mundo-4',
    num: 4,
    title: 'Google Ads',
    metafora: '— la diana orbital',
    color: '#F7444E',
    slug: 'google-ads',
    text: 'Mientras el SEO construye, los anuncios disparan. Campañas con segmentación quirúrgica que ponen tu negocio delante de quien ya está buscando comprar — y cada euro se mide, se optimiza y vuelve multiplicado.',
    stats: [
      { value: 'Día 1', label: 'primeros clientes' },
      { value: '100%', label: 'medible' },
      { value: '0', label: 'permanencias' },
    ],
  },
  {
    id: 'mundo-5',
    num: 5,
    title: 'Apps con IA',
    metafora: '— la nube que piensa',
    color: '#9B5DE5',
    slug: 'apps-ia',
    text: 'Esta nebulosa de partículas procesa mientras duermes: aplicaciones a medida que automatizan presupuestos, citas, seguimiento e informes. La IA no sustituye a tu equipo — le quita lo aburrido para que decida en vez de copiar y pegar.',
    stats: [
      { value: '−80%', label: 'tareas repetitivas' },
      { value: 'A medida', label: 'no genérico' },
      { value: 'Integra', label: 'tus herramientas' },
    ],
  },
  {
    id: 'mundo-6',
    num: 6,
    title: 'Chatbots',
    metafora: '— el satélite que conversa',
    color: '#00F5D4',
    slug: 'chatbots',
    text: 'Las ondas que emite no se apagan nunca: tu chatbot responde dudas, agenda citas y capta datos de contacto a cualquier hora, en tu web, WhatsApp e Instagram. Cada burbuja que orbita es una conversación que tú no tuviste que atender.',
    stats: [
      { value: '24/7', label: 'sin descansos' },
      { value: '3', label: 'canales: web, WA, IG' },
      { value: '0 s', label: 'de espera' },
    ],
  },
  {
    id: 'mundo-7',
    num: 7,
    title: 'Branding',
    metafora: '— la gema',
    color: '#FFD166',
    slug: 'branding',
    text: 'En todo el universo no hay dos iguales: eso es una marca bien hecha. Logo, colores, voz y materiales tallados como facetas de una misma pieza, para que tu negocio se reconozca a un año luz de distancia.',
    stats: [
      { value: '1', label: 'sistema visual completo' },
      { value: 'Manual', label: 'de marca incluido' },
      { value: '100%', label: 'reconocible' },
    ],
  },
  {
    id: 'mundo-8',
    num: 8,
    title: 'Email Marketing',
    metafora: '— el cometa mensajero',
    color: '#FF8C5A',
    slug: 'email-marketing',
    text: 'El cometa lleva una carta dentro y siempre llega: tu lista de correo es el único canal que ningún algoritmo te puede quitar. Secuencias automáticas que dan la bienvenida, recuperan carritos y reactivan clientes mientras el cometa sigue su órbita.',
    stats: [
      { value: '36:1', label: 'ROI medio del email' },
      { value: '100%', label: 'canal propio' },
      { value: 'Auto', label: 'secuencias que venden' },
    ],
  },
]

export default function Universo3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mainRef = useRef<HTMLElement>(null)
  const shipRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const main = mainRef.current
    if (!canvas || !main) return

    const scene = initUniversoScene(canvas, main, (value) => {
      setProgress(value)
      if (shipRef.current) shipRef.current.style.top = `${value * 100}%`
    })

    return () => scene.dispose()
  }, [])

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return
    const el = document.getElementById(hash)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 400)
  }, [])

  const pctLabel = String(Math.round(progress * 100)).padStart(3, '0') + '%'

  return (
    <div className={`${styles.root} ${sora.variable}`}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      <div className={styles.top}>
        <Link href="/" className={styles.logo}>
          ESKA<span>LA</span>
        </Link>
        <div className={styles.tag}>explora · descubre · escala</div>
      </div>

      <div className={styles.route} aria-hidden="true">
        <div className={styles.routeLine}>
          <div ref={shipRef} className={styles.ship} />
        </div>
        <div className={styles.pct}>{pctLabel}</div>
      </div>

      <main ref={mainRef} className={styles.main}>
        <section className={`${styles.section} ${styles.hero}`}>
          <div className={styles.card}>
            <span className={styles.eyebrow} style={{ color: 'var(--orange)' }}>
              Agencia de marketing digital · Murcia
            </span>
            <h1 className={styles.title1}>
              El universo
              <br />
              <span className={styles.grad}>ESKALA</span>
            </h1>
            <p className={`${styles.cardText} ${styles.heroLead}`}>
              Tu negocio es una nave. Internet, el espacio. Haz scroll y atraviesa los ocho mundos que
              hacen crecer una marca: cada planeta que ves es un servicio real, renderizado en 3D en tu
              pantalla ahora mismo. Al final del viaje sabrás exactamente qué órbita le falta a tu negocio.
            </p>
          </div>
          <span className={styles.scroll}>▼ Scroll para despegar</span>
        </section>

        {WORLDS.map((world) => (
          <section key={world.id} id={world.id} className={styles.section}>
            <div className={styles.card}>
              <span className={styles.eyebrow} style={{ color: world.color }}>
                Mundo {world.num} / 8 · Servicio
              </span>
              <h2 className={styles.title2} style={{ color: world.color }}>
                {world.title}
              </h2>
              <span className={styles.metafora}>{world.metafora}</span>
              <p className={styles.cardText}>{world.text}</p>
              <div className={styles.data} style={{ color: world.color }}>
                {world.stats.map((stat) => (
                  <span key={stat.label}>
                    <b>{stat.value}</b>
                    {stat.label}
                  </span>
                ))}
              </div>
              <Link
                className={styles.cta2}
                style={{ color: world.color }}
                href={`/servicios/${world.slug}`}
              >
                Explorar este servicio →
              </Link>
            </div>
          </section>
        ))}

        <section className={`${styles.section} ${styles.final}`} id="destino">
          <div className={styles.card}>
            <span className={styles.eyebrow} style={{ color: 'var(--orange)' }}>
              Destino · Tu marca
            </span>
            <h2 className={`${styles.title2} ${styles.finalTitle}`}>
              Has llegado
              <br />a la estrella.
            </h2>
            <p className={styles.cardText}>
              La estrella eres tú: branding, email y todo lo anterior orbitando alrededor de un negocio
              que crece. Cuéntanos el tuyo y te decimos, sin compromiso, qué mundo te dará más resultados
              primero.
            </p>
            <div className={styles.ctaGroup}>
              <Link className={styles.btn} href="/contacto">
                Pedir propuesta
              </Link>
              <Link className={`${styles.btn} ${styles.btnGhost}`} href="/">
                Ver la agencia
              </Link>
              <Link className={`${styles.btn} ${styles.btnGhost}`} href="#mundo-1">
                Los 8 servicios →
              </Link>
            </div>
          </div>
        </section>

        <div className={styles.endHold} aria-hidden="true" />
      </main>
    </div>
  )
}
