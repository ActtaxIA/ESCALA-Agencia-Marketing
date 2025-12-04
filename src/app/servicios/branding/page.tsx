import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'Branding en Murcia | Diseño de Marca e Identidad Visual',
  description: 'Servicios de branding en Murcia. Creación de marca, logotipo, identidad visual y manual de estilo. Marcas que conectan y perduran. Consulta gratuita.',
  keywords: ['branding murcia', 'diseño de marca murcia', 'logotipo murcia', 'identidad visual murcia'],
  openGraph: {
    title: 'Branding en Murcia | ESCALA Marketing',
    description: 'Creación de marca, logotipo e identidad visual. Marcas que conectan y perduran.',
    url: 'https://escalamarketing.es/servicios/branding',
    siteName: 'ESCALA Marketing',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-branding.jpg', width: 1200, height: 630, alt: 'Branding ESCALA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branding en Murcia | ESCALA Marketing',
    description: 'Diseño de marca e identidad visual profesional.',
    images: ['/og-branding.jpg'],
  },
  alternates: { canonical: 'https://escalamarketing.es/servicios/branding' },
}

const heroData = {
  badge: '✏️ Branding',
  title: 'Construimos marcas que',
  titleHighlight: 'dejan huella',
  description: 'Tu marca es mucho más que un logo. Es la promesa que haces a tus clientes. Creamos identidades visuales que transmiten tus valores y conectan con tu audiencia.',
  stripeColor: 7,
}

const features = [
  {
    icon: '🎯',
    title: 'Estrategia de Marca',
    description: 'Definimos posicionamiento, propuesta de valor, personalidad y tono de voz de tu marca.',
  },
  {
    icon: '✨',
    title: 'Diseño de Logotipo',
    description: 'Creación de logotipo único y memorable. Versiones, variantes y aplicaciones incluidas.',
  },
  {
    icon: '🎨',
    title: 'Identidad Visual',
    description: 'Paleta de colores, tipografías, iconografía y elementos gráficos que definen tu marca.',
  },
  {
    icon: '📖',
    title: 'Manual de Marca',
    description: 'Documento completo con todas las normas de uso. Tu marca coherente en cualquier aplicación.',
  },
  {
    icon: '📄',
    title: 'Papelería Corporativa',
    description: 'Tarjetas de visita, papel carta, sobres, firmas de email y plantillas corporativas.',
  },
  {
    icon: '📱',
    title: 'Branding Digital',
    description: 'Adaptación de la marca para web, redes sociales, apps y cualquier soporte digital.',
  },
]

const benefits = [
  {
    title: 'Reconocimiento',
    description: 'Una marca consistente se reconoce al instante. Cada punto de contacto refuerza tu presencia en la mente del cliente.',
  },
  {
    title: 'Confianza',
    description: 'Las marcas profesionales transmiten solidez. Los clientes confían más en empresas con imagen cuidada.',
  },
  {
    title: 'Valor Percibido',
    description: 'Una buena marca permite cobrar más. Los clientes asocian calidad visual con calidad de producto/servicio.',
  },
]

const process = [
  { step: '01', title: 'Descubrimiento', description: 'Entendemos tu negocio, valores, competencia y audiencia objetivo.' },
  { step: '02', title: 'Estrategia', description: 'Definimos el posicionamiento y personalidad de tu marca.' },
  { step: '03', title: 'Diseño', description: 'Creamos propuestas visuales, iteramos y perfeccionamos.' },
  { step: '04', title: 'Implementación', description: 'Entregamos todos los archivos y manual de uso de marca.' },
]

const testimonial = {
  quote: 'Teníamos un logo hecho en Paint hace 15 años. ESCALA nos dio una identidad de marca completa que nos hace sentir orgullosos. Hasta nuestros empleados están más motivados.',
  author: 'Javier Hernández',
  position: 'Fundador',
  company: 'Construcciones Hernández',
}

export default function BrandingPage() {
  return (
    <StandardLayout>
      <ServiceHero {...heroData} />
      <ServiceFeatures features={features} title="Qué incluye el branding" />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTestimonial {...testimonial} />
      <ServiceCTA 
        title="¿Tu marca necesita una renovación?"
        subtitle="Hablemos de cómo hacer que tu marca destaque"
      />
    </StandardLayout>
  )
}

