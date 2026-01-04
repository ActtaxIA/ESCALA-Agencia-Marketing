import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'Desarrollo de Apps con IA en Murcia | Inteligencia Artificial | ESKALA',
  description: 'Desarrollo de aplicaciones con inteligencia artificial en Murcia. Automatización inteligente, chatbots avanzados, análisis predictivo y soluciones IA personalizadas. Trabajamos con empresas de Murcia, Cartagena y toda la Región. GPT-4, Claude, Machine Learning. Consultoría IA gratuita.',
  keywords: [
    'apps ia murcia',
    'inteligencia artificial murcia',
    'desarrollo ia murcia',
    'automatización ia murcia',
    'machine learning murcia',
    'ia empresas murcia',
    'soluciones ia murcia',
    'consultoria ia murcia',
    'gpt murcia',
    'ia cartagena',
  ],
  openGraph: {
    title: 'Apps con IA en Murcia | Inteligencia Artificial | ESKALA',
    description: 'Desarrollamos soluciones de inteligencia artificial para empresas. Automatización, análisis predictivo y ventaja competitiva.',
    url: 'https://www.eskaladigital.com/servicios/apps-ia',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [{ 
      url: '/eskala_digital_opengraph.png', 
      width: 1200, 
      height: 630, 
      alt: 'Apps con IA en Murcia - ESKALA' 
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apps con IA en Murcia | ESKALA Marketing Digital',
    description: 'Automatización inteligente y soluciones de IA para empresas.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: { 
    canonical: 'https://www.eskaladigital.com/servicios/apps-ia' 
  },
}

const heroData = {
  badge: '🤖 Inteligencia Artificial en Murcia',
  title: 'Desarrollo de Apps con IA',
  titleHighlight: 'para Empresas Innovadoras',
  description: 'Desarrollamos aplicaciones y soluciones con inteligencia artificial para empresas en Murcia. Automatización inteligente de procesos, análisis predictivo con Machine Learning, procesamiento de lenguaje natural (NLP) y soluciones personalizadas con GPT-4, Claude y otros modelos avanzados. La IA no es el futuro: es el presente. Empresas en Murcia, Cartagena y Lorca ya están usando IA para reducir costes, mejorar eficiencia y ofrecer mejor servicio. Consultoría IA gratuita para identificar oportunidades en tu negocio.',
  stripeColor: 5,
}

const features = [
  {
    icon: '⚡',
    title: 'Automatización Inteligente de Procesos',
    description: 'Automatizamos tareas repetitivas y procesos complejos con IA: clasificación automática de emails, generación de informes, extracción de datos de facturas/contratos, respuestas automáticas personalizadas. RPA (Robotic Process Automation) potenciado con IA. Libera a tu equipo de tareas tediosas para que se centren en lo estratégico. Empresas ahorran hasta 40% del tiempo en tareas administrativas con automatización IA.',
  },
  {
    icon: '📊',
    title: 'Análisis Predictivo y Machine Learning',
    description: 'Algoritmos de Machine Learning que predicen comportamiento de clientes, demanda de productos, rotación de personal (churn), fraude, tendencias de mercado. Modelos entrenados con tus datos históricos. Toma decisiones basadas en predicciones precisas, no en intuición. Forecasting de ventas. Recomendaciones personalizadas. Detección de anomalías. El 85% de empresas que usan ML reportan mejora en toma de decisiones.',
  },
  {
    icon: '🔍',
    title: 'Procesamiento Inteligente de Datos (NLP)',
    description: 'Procesamiento de lenguaje natural (NLP) para analizar grandes volúmenes de texto: análisis de sentimiento en reseñas/redes sociales, extracción automática de información de documentos legales/médicos, resumen automático de textos largos, clasificación de tickets de soporte. OCR avanzado con IA para digitalizar documentos escaneados. Convierte datos no estructurados en insights accionables.',
  },
  {
    icon: '🎨',
    title: 'Generación de Contenido con IA Generativa',
    description: 'Herramientas IA personalizadas para tu negocio: generación de descripciones de productos para e-commerce, creación de contenido para blog/redes (asistido por IA), generación de código para desarrolladores, diseño de imágenes con IA (Stable Diffusion, Midjourney API). Integramos GPT-4, Claude, Gemini y otros LLMs en tus flujos de trabajo. Acelera creación de contenido manteniendo calidad y coherencia de marca.',
  },
  {
    icon: '🔧',
    title: 'Integración con tus Sistemas Existentes',
    description: 'Conectamos las soluciones IA con tu infraestructura actual: CRM (Salesforce, HubSpot), ERP (SAP, Microsoft Dynamics), página web, WhatsApp Business API, bases de datos, Google Sheets, Zapier/Make. APIs REST para integración con cualquier sistema. No necesitas cambiar tu stack tecnológico: la IA se adapta a ti. Despliegue en cloud (AWS, Azure, Google Cloud) o on-premise según necesites.',
  },
  {
    icon: '🛡️',
    title: 'IA Ética, Segura y Cumplimiento GDPR',
    description: 'Desarrollo de IA responsable cumpliendo normativa europea (GDPR, AI Act). Protección de datos personales. Modelos auditables y explicables (no "cajas negras"). Pruebas exhaustivas para evitar sesgos algorítmicos. Seguridad de datos end-to-end con cifrado. Tu información empresarial confidencial protegida. Hosting en servidores europeos. Transparencia total sobre cómo funciona cada solución IA que desarrollamos.',
  },
]

const benefits = [
  {
    title: 'Reducción de Costes Operativos hasta 40%',
    description: 'Automatiza tareas que antes requerían horas de trabajo manual: clasificación de documentos, respuestas a consultas, generación de reportes, entrada de datos. Reduce errores humanos (que cuestan dinero). Ahorra tiempo y dinero desde el primer mes. McKinsey estima que la IA puede automatizar el 45% de tareas pagadas. Empleados se enfocan en tareas de alto valor. ROI típico en IA: recuperas inversión en 6-12 meses.',
  },
  {
    title: 'Disponibilidad 24/7 sin Límites',
    description: 'Sistemas IA no duermen, no se enferman, no tienen vacaciones. Tus clientes atendidos a cualquier hora del día, cualquier día del año. Sin esperas, sin colas, sin horarios. Escalas sin contratar más personal. Un chatbot IA puede atender 1.000 conversaciones simultáneas. Sistemas predictivos analizan datos continuamente y alertan de problemas antes de que ocurran. Productividad 24/7.',
  },
  {
    title: 'Ventaja Competitiva Duradera',
    description: 'Según estudio IBM 2024, solo el 34% de empresas españolas usan IA (vs 50% en Reino Unido/Alemania). En Murcia el porcentaje es aún menor. Adelántate a tu competencia. Ofrece experiencias que otros no pueden igualar: personalización extrema, rapidez inhumana, precisión superior. La IA no es una moda: empresas que no adopten IA en 2-3 años quedarán obsoletas. Invierte ahora en tu futuro.',
  },
]

const process = [
  { 
    step: '01', 
    title: 'Descubrimiento y Auditoría IA', 
    description: 'Workshop inicial para entender tu negocio, procesos actuales y puntos de dolor. Identificamos oportunidades concretas de automatización con IA. Auditoría de datos disponibles (calidad, volumen). Análisis de viabilidad técnica y ROI esperado. Casos de uso priorizados. No vendemos IA por vender: solo recomendamos soluciones con impacto real medible.' 
  },
  { 
    step: '02', 
    title: 'Diseño de Solución IA', 
    description: 'Definimos arquitectura técnica: qué modelos IA usar (GPT-4, Claude, Llama, modelos custom), qué datos entrenar, flujos de trabajo, integraciones necesarias. Wireframes y mockups de interfaz si aplica. Definición de KPIs y métricas de éxito. Documento técnico detallado. Presupuesto cerrado y timeline realista. Validación conjunta antes de desarrollo.' 
  },
  { 
    step: '03', 
    title: 'Desarrollo y Entrenamiento', 
    description: 'Construimos la solución IA con tecnologías punta: Python, TensorFlow, PyTorch, LangChain, OpenAI API, Anthropic Claude. Entrenamos modelos con tus datos específicos (fine-tuning). Desarrollo iterativo con demos semanales. Testing exhaustivo: casos edge, control de calidad, evaluación de precisión. Code review y documentación técnica. Entrega de código fuente.' 
  },
  { 
    step: '04', 
    title: 'Despliegue, Formación y Soporte', 
    description: 'Desplegamos en producción en tu infraestructura o cloud. Formación a tu equipo sobre uso y mantenimiento. Monitorización continua del rendimiento. Mejora continua: reentrenamiento de modelos con nuevos datos, ajustes según feedback. Soporte técnico mensual. Los sistemas IA mejoran con el tiempo: cuantos más datos, mejor funcionan. Acompañamiento a largo plazo.' 
  },
]

const testimonial = {
  quote: 'El sistema de IA que desarrolló ESKALA procesa automáticamente 500 facturas mensuales, extrae datos y los integra en nuestro ERP. Antes tardábamos 3 días. Ahora 2 horas. Recuperamos la inversión en 4 meses.',
  author: 'Pedro Sánchez',
  position: 'Director Financiero',
  company: 'Distribuciones del Sureste',
}

export default function AppsIAPage() {
  // Schema Service para SEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Artificial Intelligence Development',
    name: 'Desarrollo de Aplicaciones con Inteligencia Artificial en Murcia',
    description: 'Servicio de desarrollo de soluciones de inteligencia artificial para empresas. Automatización, Machine Learning, NLP y soluciones IA personalizadas.',
    provider: {
      '@type': 'MarketingAgency',
      name: 'ESKALA Marketing Digital',
      image: 'https://www.eskaladigital.com/logo.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Murcia',
        addressRegion: 'Región de Murcia',
        addressCountry: 'ES',
      },
      telephone: '+34626823404',
      priceRange: '€€€',
    },
    areaServed: [
      { '@type': 'City', name: 'Murcia' },
      { '@type': 'City', name: 'Cartagena' },
      { '@type': 'City', name: 'Lorca' },
      { '@type': 'State', name: 'Región de Murcia' },
      { '@type': 'Country', name: 'España' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Inteligencia Artificial',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automatización con IA',
            description: 'Automatización inteligente de procesos empresariales',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Machine Learning',
            description: 'Análisis predictivo y modelos de aprendizaje automático',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Procesamiento de Lenguaje Natural',
            description: 'NLP para análisis de texto y documentos',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IA Generativa',
            description: 'Generación de contenido con GPT-4 y otros LLMs',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
    },
  }

  return (
    <StandardLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
