import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'Email Marketing en Murcia | Newsletters y Automatizaciones',
  description: 'Servicio de email marketing en Murcia. Newsletters, automatizaciones, segmentación y campañas que convierten. ROI de 42€ por cada 1€ invertido.',
  keywords: ['email marketing murcia', 'newsletter murcia', 'mailchimp murcia', 'automatizacion email murcia'],
}

const heroData = {
  badge: '📧 Email Marketing',
  title: 'El canal con mayor ROI:',
  titleHighlight: '42€ por cada 1€ invertido',
  description: 'El email marketing sigue siendo el rey de la conversión. Llegamos directo al buzón de tus clientes con mensajes personalizados que generan ventas.',
  stripeColor: 8,
}

const features = [
  {
    icon: '📝',
    title: 'Diseño de Newsletters',
    description: 'Emails con diseño profesional, responsive y alineados con tu marca. Que se vean bien en cualquier dispositivo.',
  },
  {
    icon: '⚙️',
    title: 'Automatizaciones',
    description: 'Secuencias automáticas: bienvenida, carrito abandonado, cumpleaños, reactivación de inactivos.',
  },
  {
    icon: '🎯',
    title: 'Segmentación',
    description: 'Dividimos tu lista en grupos para enviar mensajes relevantes a cada tipo de cliente.',
  },
  {
    icon: '✍️',
    title: 'Copywriting',
    description: 'Asuntos que se abren, textos que se leen, CTAs que se clican. Cada palabra cuenta.',
  },
  {
    icon: '📊',
    title: 'Tests A/B',
    description: 'Probamos asuntos, contenidos y horarios para optimizar cada campaña.',
  },
  {
    icon: '📈',
    title: 'Reporting',
    description: 'Métricas claras: aperturas, clics, conversiones, bajas. Sabrás qué funciona y qué mejorar.',
  },
]

const benefits = [
  {
    title: 'Canal Propio',
    description: 'Tu lista de emails es tuya. No dependes de algoritmos de redes sociales ni de Google. Acceso directo a tu audiencia.',
  },
  {
    title: 'Personalización',
    description: 'Llama a cada cliente por su nombre, recomienda productos según su historial, envía en su momento óptimo.',
  },
  {
    title: 'Coste Reducido',
    description: 'Enviar emails cuesta céntimos. El email marketing tiene el ROI más alto de cualquier canal digital.',
  },
]

const process = [
  { step: '01', title: 'Auditoría', description: 'Analizamos tu lista actual, herramientas y campañas anteriores.' },
  { step: '02', title: 'Estrategia', description: 'Definimos calendario, segmentos, automatizaciones y objetivos.' },
  { step: '03', title: 'Implementación', description: 'Configuramos herramientas, diseñamos templates y creamos flujos.' },
  { step: '04', title: 'Ejecución', description: 'Enviamos campañas, analizamos resultados y optimizamos.' },
]

const testimonial = {
  quote: 'Teníamos 5.000 suscriptores y no les enviábamos nada. ESCALA creó una estrategia de email que genera 15.000€/mes en ventas directas. El email es oro.',
  author: 'Ana Belén Torres',
  position: 'Directora E-commerce',
  company: 'Moda Mediterránea',
}

export default function EmailMarketingPage() {
  return (
    <StandardLayout>
      <ServiceHero {...heroData} />
      <ServiceFeatures features={features} title="Qué incluye el servicio" />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTestimonial {...testimonial} />
      <ServiceCTA 
        title="¿Tienes una lista de emails sin explotar?"
        subtitle="Auditoría gratuita de tu estrategia de email marketing"
      />
    </StandardLayout>
  )
}

