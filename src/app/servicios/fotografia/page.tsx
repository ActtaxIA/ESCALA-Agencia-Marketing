import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'Fotografía Profesional en Murcia | Fotos para Empresas',
  description: 'Fotografía profesional para empresas en Murcia. Producto, corporativa, eventos, gastronomía y lifestyle. Imágenes que venden. Presupuesto sin compromiso.',
  keywords: ['fotografia profesional murcia', 'fotografo empresas murcia', 'fotos producto murcia', 'fotografo corporativo murcia'],
  openGraph: {
    title: 'Fotografía Profesional en Murcia | ESCALA Marketing',
    description: 'Fotografía de producto, corporativa y eventos para empresas. Imágenes que venden.',
    url: 'https://escalamarketing.es/servicios/fotografia',
    siteName: 'ESCALA Marketing',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-fotografia.jpg', width: 1200, height: 630, alt: 'Fotografía ESCALA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fotografía Profesional en Murcia | ESCALA Marketing',
    description: 'Fotografía de producto y corporativa para empresas.',
    images: ['/og-fotografia.jpg'],
  },
  alternates: { canonical: 'https://escalamarketing.es/servicios/fotografia' },
}

const heroData = {
  badge: '📸 Fotografía',
  title: 'Imágenes que',
  titleHighlight: 'cuentan tu historia',
  description: 'Una imagen vale más que mil palabras, pero solo si es la imagen correcta. Fotografía profesional que transmite la esencia de tu marca y vende.',
  stripeColor: 6,
}

const features = [
  {
    icon: '🛍️',
    title: 'Fotografía de Producto',
    description: 'Fotos de catálogo, e-commerce y lifestyle. Tus productos con la calidad que merecen para vender más.',
  },
  {
    icon: '👔',
    title: 'Fotografía Corporativa',
    description: 'Retratos profesionales, equipo, instalaciones. La imagen de tu empresa para web, LinkedIn y prensa.',
  },
  {
    icon: '🍽️',
    title: 'Gastronomía',
    description: 'Fotografía de platos, restaurantes, menús. Hacemos que tus clientes sientan hambre con solo mirar.',
  },
  {
    icon: '🎉',
    title: 'Eventos',
    description: 'Cobertura de eventos corporativos, inauguraciones, ferias. Momentos capturados profesionalmente.',
  },
  {
    icon: '🏠',
    title: 'Arquitectura e Interiorismo',
    description: 'Espacios comerciales, inmobiliarias, hoteles. Fotografía que muestra todo el potencial del espacio.',
  },
  {
    icon: '✨',
    title: 'Retoque Profesional',
    description: 'Edición y retoque incluidos. Entregamos las fotos listas para usar en cualquier soporte.',
  },
]

const benefits = [
  {
    title: 'Primera Impresión',
    description: 'Tienes 3 segundos para captar la atención. Con fotos profesionales, esos segundos juegan a tu favor.',
  },
  {
    title: 'Diferenciación',
    description: 'Mientras tu competencia usa fotos de stock, tú muestras tu realidad. Autenticidad que conecta.',
  },
  {
    title: 'Versatilidad',
    description: 'Una sesión, múltiples usos: web, redes sociales, catálogos, publicidad, presentaciones.',
  },
]

const process = [
  { step: '01', title: 'Briefing', description: 'Definimos objetivos, estilo visual, productos/personas y uso final.' },
  { step: '02', title: 'Producción', description: 'Preparamos localización, iluminación y elementos necesarios.' },
  { step: '03', title: 'Sesión', description: 'Realizamos la sesión fotográfica con dirección artística profesional.' },
  { step: '04', title: 'Entrega', description: 'Selección, retoque y entrega en formatos optimizados para cada uso.' },
]

const testimonial = {
  quote: 'Las fotos de producto antiguas nos avergonzaban. ESCALA fotografió todo nuestro catálogo y las ventas online subieron un 40%. La calidad se nota.',
  author: 'Elena Navarro',
  position: 'Directora',
  company: 'Artesanía Murciana',
}

export default function FotografiaPage() {
  return (
    <StandardLayout>
      <ServiceHero {...heroData} />
      <ServiceFeatures features={features} title="Tipos de fotografía" />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTestimonial {...testimonial} />
      <ServiceCTA 
        title="¿Necesitas fotos profesionales?"
        subtitle="Cuéntanos qué necesitas y te preparamos un presupuesto"
      />
    </StandardLayout>
  )
}

