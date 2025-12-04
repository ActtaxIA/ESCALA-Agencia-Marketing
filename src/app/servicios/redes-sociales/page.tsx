import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'Gestión de Redes Sociales en Murcia | Community Manager',
  description: 'Gestión profesional de redes sociales en Murcia. Instagram, Facebook, LinkedIn y TikTok. Contenido, comunidad y resultados. Consulta sin compromiso.',
  keywords: ['redes sociales murcia', 'community manager murcia', 'instagram murcia', 'social media murcia'],
}

const heroData = {
  badge: '📱 Redes Sociales',
  title: 'Conecta con tu audiencia',
  titleHighlight: 'donde pasan su tiempo',
  description: 'Las redes sociales son el escaparate de tu marca. Creamos contenido que engancha, genera comunidad y convierte seguidores en clientes.',
  stripeColor: 3,
}

const features = [
  {
    icon: '📅',
    title: 'Estrategia y Calendario',
    description: 'Planificación mensual de contenidos alineada con tus objetivos de negocio, temporadas y eventos del sector.',
  },
  {
    icon: '🎨',
    title: 'Diseño de Contenido',
    description: 'Posts, stories, reels y carruseles con diseño profesional y coherente con tu identidad de marca.',
  },
  {
    icon: '✍️',
    title: 'Copywriting',
    description: 'Textos que conectan con tu audiencia. Tono de voz definido, llamadas a la acción efectivas y hashtags estratégicos.',
  },
  {
    icon: '💬',
    title: 'Gestión de Comunidad',
    description: 'Respondemos comentarios y mensajes en tu nombre. Tu comunidad atendida profesionalmente.',
  },
  {
    icon: '📊',
    title: 'Análisis de Métricas',
    description: 'Seguimiento de alcance, engagement, crecimiento y conversiones. Decisiones basadas en datos.',
  },
  {
    icon: '📣',
    title: 'Campañas de Ads',
    description: 'Publicidad en redes sociales para amplificar tu alcance y conseguir seguidores cualificados.',
  },
]

const benefits = [
  {
    title: 'Presencia Profesional',
    description: 'Una marca activa y coherente en redes transmite profesionalidad. Tus competidores ya están ahí.',
  },
  {
    title: 'Cercanía con Clientes',
    description: 'Las redes son el canal directo con tu audiencia. Humaniza tu marca y crea relaciones duraderas.',
  },
  {
    title: 'Tráfico y Ventas',
    description: 'Redes sociales bien gestionadas generan visitas a tu web, consultas y ventas directas.',
  },
]

const process = [
  { step: '01', title: 'Auditoría', description: 'Analizamos tus perfiles actuales, competencia y audiencia objetivo.' },
  { step: '02', title: 'Estrategia', description: 'Definimos tono, pilares de contenido, frecuencia y objetivos medibles.' },
  { step: '03', title: 'Creación', description: 'Diseñamos y publicamos contenido de calidad de forma constante.' },
  { step: '04', title: 'Optimización', description: 'Analizamos resultados y ajustamos la estrategia para mejorar.' },
]

const testimonial = {
  quote: 'Pasamos de 500 a 8.000 seguidores en Instagram en 6 meses. Pero lo importante es que ahora recibimos 3-4 consultas diarias desde redes. ESCALA transformó nuestra presencia digital.',
  author: 'María López',
  position: 'CEO',
  company: 'Boutique Mía',
}

export default function RedesSocialesPage() {
  return (
    <StandardLayout>
      <ServiceHero {...heroData} />
      <ServiceFeatures features={features} title="Qué incluye la gestión" />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTestimonial {...testimonial} />
      <ServiceCTA 
        title="¿Listo para brillar en redes?"
        subtitle="Cuéntanos tu marca y te proponemos una estrategia"
      />
    </StandardLayout>
  )
}

