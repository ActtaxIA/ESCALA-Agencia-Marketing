import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'Desarrollo de Apps con IA en Murcia | Inteligencia Artificial',
  description: 'Desarrollo de aplicaciones con inteligencia artificial en Murcia. Chatbots, automatización, análisis predictivo y soluciones IA personalizadas para tu negocio.',
  keywords: ['apps ia murcia', 'inteligencia artificial murcia', 'chatbot murcia', 'automatización ia murcia'],
}

const heroData = {
  badge: '🤖 Apps con IA',
  title: 'Potencia tu negocio con',
  titleHighlight: 'Inteligencia Artificial',
  description: 'Desarrollamos soluciones de IA que automatizan procesos, mejoran la atención al cliente y te dan ventaja competitiva. El futuro ya está aquí.',
  stripeColor: 5,
}

const features = [
  {
    icon: '💬',
    title: 'Chatbots Inteligentes',
    description: 'Asistentes virtuales que atienden a tus clientes 24/7. Resuelven dudas, captan leads y derivan consultas complejas.',
  },
  {
    icon: '⚡',
    title: 'Automatización',
    description: 'Automatiza tareas repetitivas: emails, informes, clasificación de datos. Libera tiempo para lo importante.',
  },
  {
    icon: '📊',
    title: 'Análisis Predictivo',
    description: 'Algoritmos que predicen comportamiento de clientes, demanda de productos o tendencias de mercado.',
  },
  {
    icon: '🔍',
    title: 'Procesamiento de Datos',
    description: 'Extrae información valiosa de grandes volúmenes de datos, documentos o imágenes automáticamente.',
  },
  {
    icon: '🎨',
    title: 'Generación de Contenido',
    description: 'Herramientas IA para crear textos, imágenes o código adaptadas a tu negocio específico.',
  },
  {
    icon: '🔧',
    title: 'Integración con Sistemas',
    description: 'Conectamos las soluciones IA con tu CRM, ERP, web o cualquier sistema que ya uses.',
  },
]

const benefits = [
  {
    title: 'Reducción de Costes',
    description: 'Automatiza tareas que antes requerían horas de trabajo manual. Ahorra tiempo y dinero desde el primer mes.',
  },
  {
    title: 'Disponibilidad 24/7',
    description: 'Tus clientes atendidos a cualquier hora. Sin esperas, sin horarios, sin límites geográficos.',
  },
  {
    title: 'Ventaja Competitiva',
    description: 'La mayoría de PYMEs aún no usan IA. Adelántate y ofrece una experiencia que tu competencia no puede igualar.',
  },
]

const process = [
  { step: '01', title: 'Descubrimiento', description: 'Identificamos procesos automatizables y oportunidades de mejora con IA.' },
  { step: '02', title: 'Diseño', description: 'Definimos la solución técnica, flujos de conversación y reglas de negocio.' },
  { step: '03', title: 'Desarrollo', description: 'Construimos y entrenamos los modelos de IA con tus datos y contexto.' },
  { step: '04', title: 'Despliegue', description: 'Lanzamos, monitorizamos y mejoramos continuamente el sistema.' },
]

const testimonial = {
  quote: 'El chatbot de ESCALA resuelve el 70% de las consultas sin intervención humana. Nuestro equipo de atención al cliente ahora puede centrarse en casos complejos. Una revolución.',
  author: 'Pedro Sánchez',
  position: 'CTO',
  company: 'Seguros del Sureste',
}

export default function AppsIAPage() {
  return (
    <StandardLayout>
      <ServiceHero {...heroData} />
      <ServiceFeatures features={features} title="Soluciones de IA" />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTestimonial {...testimonial} />
      <ServiceCTA 
        title="¿Listo para la revolución IA?"
        subtitle="Consultoría gratuita. Te mostramos qué puedes automatizar."
      />
    </StandardLayout>
  )
}

