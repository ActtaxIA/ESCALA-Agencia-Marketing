import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'Google Ads en Murcia | Campañas SEM Profesionales',
  description: 'Gestión de Google Ads en Murcia. Campañas de búsqueda, display y shopping optimizadas para máximo ROI. Partner de Google. Consulta gratuita.',
  keywords: ['google ads murcia', 'sem murcia', 'publicidad google murcia', 'adwords murcia'],
  openGraph: {
    title: 'Google Ads en Murcia | ESCALA Marketing',
    description: 'Campañas de Google Ads optimizadas para máximo ROI. Gestión SEM profesional.',
    url: 'https://escalamarketing.es/servicios/google-ads',
    siteName: 'ESCALA Marketing',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-google-ads.jpg', width: 1200, height: 630, alt: 'Google Ads ESCALA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads en Murcia | ESCALA Marketing',
    description: 'Campañas de Google Ads optimizadas para máximo ROI.',
    images: ['/og-google-ads.jpg'],
  },
  alternates: { canonical: 'https://escalamarketing.es/servicios/google-ads' },
}

const heroData = {
  badge: '🎯 Google Ads',
  title: 'Aparece primero en Google',
  titleHighlight: 'cuando te buscan',
  description: 'Llega a clientes que buscan activamente lo que ofreces. Campañas de Google Ads optimizadas para conseguir el máximo retorno de tu inversión publicitaria.',
  stripeColor: 4,
}

const features = [
  {
    icon: '🔍',
    title: 'Campañas de Búsqueda',
    description: 'Anuncios de texto en los resultados de Google. Apareces cuando buscan exactamente lo que ofreces.',
  },
  {
    icon: '🖼️',
    title: 'Display y Remarketing',
    description: 'Banners en millones de webs. Recuerda a los visitantes de tu web que vuelvan y conviertan.',
  },
  {
    icon: '🛒',
    title: 'Google Shopping',
    description: 'Para e-commerce: tus productos con foto y precio directamente en los resultados de búsqueda.',
  },
  {
    icon: '📱',
    title: 'YouTube Ads',
    description: 'Vídeo publicitario en YouTube. Alcanza audiencias masivas con contenido audiovisual.',
  },
  {
    icon: '📈',
    title: 'Optimización Continua',
    description: 'Ajustamos pujas, palabras clave y anuncios a diario para mejorar el rendimiento.',
  },
  {
    icon: '📊',
    title: 'Reporting Detallado',
    description: 'Informes claros con métricas que importan: coste por lead, conversiones, ROI real.',
  },
]

const benefits = [
  {
    title: 'Resultados Inmediatos',
    description: 'A diferencia del SEO, los anuncios aparecen desde el primer día. Tráfico y leads desde la primera semana.',
  },
  {
    title: 'Control Total del Presupuesto',
    description: 'Tú decides cuánto invertir. Puedes pausar, aumentar o reducir en cualquier momento sin penalización.',
  },
  {
    title: 'Audiencia Cualificada',
    description: 'Solo pagas cuando alguien hace clic. Y ese clic viene de alguien que buscaba activamente tu servicio.',
  },
]

const process = [
  { step: '01', title: 'Análisis', description: 'Estudiamos tu negocio, competencia, keywords y presupuesto óptimo.' },
  { step: '02', title: 'Configuración', description: 'Estructuramos campañas, grupos de anuncios y creamos los textos.' },
  { step: '03', title: 'Lanzamiento', description: 'Activamos las campañas con tracking de conversiones configurado.' },
  { step: '04', title: 'Optimización', description: 'Mejoramos a diario: ajustes de pujas, negativización, tests A/B.' },
]

const testimonial = {
  quote: 'Invertíamos 2.000€/mes en Google Ads sin saber si funcionaba. ESCALA reorganizó todo: ahora invertimos lo mismo pero conseguimos el triple de leads cualificados.',
  author: 'Carlos Ruiz',
  position: 'Director Comercial',
  company: 'Reformas Integrales Murcia',
}

export default function GoogleAdsPage() {
  return (
    <StandardLayout>
      <ServiceHero {...heroData} />
      <ServiceFeatures features={features} title="Tipos de campañas" />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTestimonial {...testimonial} />
      <ServiceCTA 
        title="¿Quieres más clientes desde Google?"
        subtitle="Auditoría gratuita de tu cuenta de Google Ads"
      />
    </StandardLayout>
  )
}

