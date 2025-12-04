import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'SEO Local en Murcia | Posicionamiento Web Local',
  description: 'Servicio de SEO local en Murcia. Aparece en Google cuando buscan negocios como el tuyo en tu zona. Más visibilidad, más clientes. Consulta gratis.',
  keywords: ['seo local murcia', 'posicionamiento web murcia', 'google my business murcia', 'seo murcia'],
  openGraph: {
    title: 'SEO Local en Murcia | ESCALA Marketing',
    description: 'Aparece en Google Maps y búsquedas locales. SEO local profesional en Murcia.',
    url: 'https://escalamarketing.es/servicios/seo-local',
    siteName: 'ESCALA Marketing',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-seo-local.jpg', width: 1200, height: 630, alt: 'SEO Local ESCALA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Local en Murcia | ESCALA Marketing',
    description: 'Aparece en Google Maps cuando te buscan en tu zona.',
    images: ['/og-seo-local.jpg'],
  },
  alternates: { canonical: 'https://escalamarketing.es/servicios/seo-local' },
}

const heroData = {
  badge: '📈 SEO Local',
  title: 'Que te encuentren en Google',
  titleHighlight: 'cuando te buscan en tu zona',
  description: 'El 46% de las búsquedas en Google tienen intención local. Si no apareces cuando buscan "tu servicio + Murcia", estás perdiendo clientes cada día.',
  stripeColor: 2,
}

const features = [
  {
    icon: '📍',
    title: 'Google My Business',
    description: 'Optimizamos tu ficha de Google para aparecer en el mapa y en búsquedas locales con fotos, reseñas y datos completos.',
  },
  {
    icon: '🎯',
    title: 'Keywords Locales',
    description: 'Identificamos las palabras clave que usan tus clientes cuando buscan servicios como el tuyo en Murcia y alrededores.',
  },
  {
    icon: '📝',
    title: 'Contenido Localizado',
    description: 'Creamos contenido optimizado para tu zona: páginas por barrios, ciudades cercanas y servicios específicos.',
  },
  {
    icon: '⭐',
    title: 'Gestión de Reseñas',
    description: 'Estrategia para conseguir más reseñas positivas y responder profesionalmente a todas las opiniones.',
  },
  {
    icon: '🔗',
    title: 'Citaciones Locales',
    description: 'Tu negocio en directorios locales relevantes: páginas amarillas, TripAdvisor, Yelp y directorios del sector.',
  },
  {
    icon: '📊',
    title: 'Informes Mensuales',
    description: 'Seguimiento de posiciones, visitas, llamadas y rutas solicitadas. Sabrás exactamente qué retorno obtienes.',
  },
]

const benefits = [
  {
    title: 'Clientes que buscan HOY',
    description: 'El SEO local atrae personas que buscan activamente tu servicio en este momento. No publicidad invasiva, sino demanda real.',
  },
  {
    title: 'Ventaja Competitiva',
    description: 'Muchos negocios locales no tienen SEO. Adelántate a tu competencia y captura el mercado antes que ellos.',
  },
  {
    title: 'ROI Medible',
    description: 'Cada llamada, cada solicitud de ruta, cada visita a la web desde Google es medible. Inversión con retorno claro.',
  },
]

const process = [
  { step: '01', title: 'Auditoría', description: 'Analizamos tu visibilidad actual, competencia y oportunidades de mejora.' },
  { step: '02', title: 'Optimización', description: 'Configuramos Google My Business, web y perfiles para máxima visibilidad.' },
  { step: '03', title: 'Posicionamiento', description: 'Trabajamos keywords, contenido y autoridad local mes a mes.' },
  { step: '04', title: 'Crecimiento', description: 'Reportes mensuales y ajustes continuos para seguir mejorando.' },
]

const testimonial = {
  quote: 'Antes no aparecíamos en Google Maps. Ahora somos el primer resultado cuando buscan "clínica dental Murcia". Las primeras visitas desde Google empezaron a las 2 semanas.',
  author: 'Dr. Antonio García',
  position: 'Director',
  company: 'Clínica Dental García',
}

export default function SeoLocalPage() {
  return (
    <StandardLayout>
      <ServiceHero {...heroData} />
      <ServiceFeatures features={features} title="Qué incluye el SEO Local" />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTestimonial {...testimonial} />
      <ServiceCTA 
        title="¿Quieres aparecer en Google?"
        subtitle="Auditoría SEO gratuita. Te decimos exactamente qué mejorar."
      />
    </StandardLayout>
  )
}

