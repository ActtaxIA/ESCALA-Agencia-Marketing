import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'Diseño Web en Murcia | Páginas Web Profesionales',
  description: 'Diseño web profesional en Murcia. Creamos páginas web modernas, rápidas y optimizadas para convertir visitantes en clientes. Presupuesto sin compromiso.',
  keywords: ['diseño web murcia', 'páginas web murcia', 'desarrollo web murcia', 'crear web murcia'],
}

const heroData = {
  badge: '🌐 Diseño Web',
  title: 'Páginas web que',
  titleHighlight: 'convierten visitantes en clientes',
  description: 'Diseñamos y desarrollamos páginas web modernas, rápidas y optimizadas para SEO. Tu web es tu mejor comercial, disponible 24/7.',
  stripeColor: 1,
}

const features = [
  {
    icon: '🎨',
    title: 'Diseño Personalizado',
    description: 'Cada web es única. Diseñamos a medida según tu marca, sector y objetivos de negocio.',
  },
  {
    icon: '📱',
    title: '100% Responsive',
    description: 'Tu web se verá perfecta en móviles, tablets y ordenadores. Más del 60% del tráfico es móvil.',
  },
  {
    icon: '⚡',
    title: 'Velocidad Optimizada',
    description: 'Webs ultra-rápidas que cargan en menos de 3 segundos. Mejor experiencia y mejor SEO.',
  },
  {
    icon: '🔒',
    title: 'Seguridad SSL',
    description: 'Certificado SSL incluido. Tu web segura con HTTPS, imprescindible para Google y tus clientes.',
  },
  {
    icon: '📊',
    title: 'Panel de Control',
    description: 'Gestiona tu contenido fácilmente. Te formamos para que seas autónomo con tu web.',
  },
  {
    icon: '🔍',
    title: 'SEO Incluido',
    description: 'Optimización SEO básica incluida. Tu web preparada para posicionar en Google desde el día 1.',
  },
]

const benefits = [
  {
    title: 'Más Credibilidad',
    description: 'Una web profesional transmite confianza. El 75% de usuarios juzga la credibilidad de una empresa por su web.',
  },
  {
    title: 'Disponible 24/7',
    description: 'Tu negocio nunca cierra. Clientes pueden informarse, contactar o comprar a cualquier hora.',
  },
  {
    title: 'Más Conversiones',
    description: 'Diseñamos con estrategia de conversión. CTAs claros, formularios optimizados, experiencia de usuario cuidada.',
  },
]

const process = [
  { step: '01', title: 'Briefing', description: 'Entendemos tu negocio, competencia, objetivos y público objetivo.' },
  { step: '02', title: 'Diseño', description: 'Creamos el diseño visual. Revisamos contigo hasta que esté perfecto.' },
  { step: '03', title: 'Desarrollo', description: 'Programamos tu web con las últimas tecnologías y mejores prácticas.' },
  { step: '04', title: 'Lanzamiento', description: 'Publicamos, configuramos analytics y te formamos en el uso.' },
]

const testimonial = {
  quote: 'Nuestra web anterior era un desastre. ESCALA nos creó una web moderna que refleja realmente quiénes somos. Las reservas online se han triplicado.',
  author: 'Laura Martínez',
  position: 'Gerente',
  company: 'Restaurante La Huerta',
}

export default function DisenoWebPage() {
  return (
    <StandardLayout>
      <ServiceHero {...heroData} />
      <ServiceFeatures features={features} title="Qué incluye tu web" />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTestimonial {...testimonial} />
      <ServiceCTA 
        title="¿Necesitas una web profesional?"
        subtitle="Cuéntanos tu proyecto y te enviamos presupuesto en 24h"
      />
    </StandardLayout>
  )
}

