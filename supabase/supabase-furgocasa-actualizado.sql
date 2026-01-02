-- =====================================================
-- ACTUALIZACIÓN DEL PROYECTO FURGOCASA
-- =====================================================
-- Este script actualiza el proyecto de Furgocasa con información detallada
-- Ejecutar en Supabase después de tener el schema principal

-- Primero eliminamos el registro anterior si existe
DELETE FROM portfolio_projects WHERE slug = 'furgocasa-alquiler-camper';

-- Insertamos la versión actualizada y completa de Furgocasa
INSERT INTO portfolio_projects (
  title, 
  slug, 
  client, 
  industry,
  short_description, 
  full_description,
  challenge, 
  solution, 
  results,
  featured_image, 
  gallery_images,
  video_url,
  website_url,
  services, 
  metrics,
  published, 
  featured, 
  order_position,
  meta_title, 
  meta_description,
  project_date, 
  published_at
) VALUES (
  'Furgocasa: Plataforma Completa de Alquiler de Campers',
  'furgocasa-alquiler-camper',
  'Furgocasa Campervans',
  'Turismo y Alquiler de Vehículos',
  
  -- Short Description
  'Proyecto integral de branding, diseño web, fotografía y marketing digital para la plataforma líder de alquiler de furgonetas camper en Murcia. Desde 2017 gestionamos todo su ecosistema digital.',
  
  -- Full Description (Markdown)
  '# Furgocasa: 8 Años Transformando el Alquiler de Campervans

Furgocasa es la empresa de referencia en alquiler de furgonetas camper en Murcia, ofreciendo experiencias de viaje únicas desde 68€/día. Desde 2017, ESKALA Digital ha sido el socio estratégico integral para todo su ecosistema de marketing y comunicación.

## El Proyecto Completo

Lo que comenzó en 2017 como un proyecto de branding y diseño web se ha convertido en una colaboración integral de largo plazo que abarca todas las áreas del marketing digital.

### Fase 1: Fundación (2017)

**Branding y Identidad Corporativa**
- Creación completa de la identidad de marca
- Diseño del logotipo y manual de identidad visual
- Paleta de colores y tipografía corporativa
- Tono de voz y personalidad de marca

**Diseño y Desarrollo Web**
- Plataforma web completa en Joomla (CMS)
- Catálogo visual de toda la flota
- Sistema de consulta de disponibilidad
- Integración con calendario de reservas
- Diseño responsive optimizado para móviles

**Fotografía Profesional**
- Sesión fotográfica de toda la flota de furgonetas
- Fotografía de producto y detalle
- Imágenes lifestyle para transmitir la experiencia
- Banco de imágenes propio de +200 fotografías

### Fase 2: Crecimiento Continuo (2017-2025)

**Gestión de Redes Sociales**
- Estrategia de contenido mensual
- Creación y programación de posts
- Gestión de comunidad y atención al cliente
- Campañas estacionales y promociones
- Crecimiento orgánico de +3500 seguidores en Instagram

**Marketing de Contenidos**
- Blog con +40 artículos sobre viajes en camper
- Guías de rutas por España
- Consejos para viajar en autocaravana
- SEO local y contenido optimizado

**Mantenimiento y Actualización Web**
- Actualizaciones mensuales de contenido
- Incorporación de nuevas furgonetas a la flota
- Mejoras continuas de UX/UI
- Optimización de velocidad y rendimiento
- Implementación de mejoras SEO

**Email Marketing**
- Newsletter mensual a base de clientes
- Campañas de remarketing
- Emails automatizados de seguimiento
- Promociones especiales y ofertas

## Características Destacadas

### Sistema de Reservas
Sistema intuitivo que permite a los usuarios:
- Consultar disponibilidad en tiempo real
- Ver características detalladas de cada furgoneta
- Solicitar presupuestos personalizados
- Reservar online de forma sencilla

### Experiencia Visual
Todo el contenido visual está cuidadosamente diseñado para:
- Transmitir la calidad de las furgonetas
- Inspirar el espíritu viajero
- Mostrar la experiencia completa
- Generar confianza y deseo de reserva

### SEO Local Avanzado
Optimización completa para:
- "Alquiler furgoneta camper Murcia"
- "Camper van alquiler Región de Murcia"
- "Autocaravanas alquiler Murcia"
- Búsquedas long-tail relacionadas

## Resultados de 8 Años de Colaboración

Los números hablan por sí solos:

**Tráfico Web**
- De 0 a +25,000 visitas anuales
- 60% de tráfico orgánico (SEO)
- Tasa de rebote reducida del 75% al 35%
- Tiempo en página aumentado a 3min 20seg

**Conversión y Reservas**
- Las reservas online pasaron del 0% al 70% del total
- Tasa de conversión del 8% (media sector: 2-3%)
- Aumento de la facturación digital en +350%
- Ticket medio incrementado en 45%

**Presencia Digital**
- Primera página en Google para todas las búsquedas objetivo
- +3,500 seguidores en Instagram
- +2,000 suscriptores newsletter
- 4.9 estrellas en Google con +150 reseñas

**Eficiencia Operativa**
- Reducción del 80% en llamadas de consulta básica
- Tiempo de gestión de reservas reducido en 60%
- Automatización de respuestas frecuentes
- Sistema de recordatorios automático

## Metodología de Trabajo

Nuestra colaboración con Furgocasa se basa en:

1. **Reuniones mensuales de estrategia** para planificar contenido y campañas
2. **Análisis de métricas** y ajuste continuo de estrategias
3. **Comunicación fluida** para adaptarnos a necesidades en tiempo real
4. **Innovación constante** incorporando nuevas tecnologías y tendencias

## Tecnologías Utilizadas

- **CMS:** Joomla personalizado
- **Fotografía:** Sony A7III + lentes profesionales
- **Diseño:** Adobe Creative Suite
- **Analytics:** Google Analytics 4 + Search Console
- **Email Marketing:** Mailchimp
- **Social Media:** Meta Business Suite + Scheduling tools
- **SEO:** Semrush + Herramientas propias

## Testimonial del Cliente

> "Trabajar con ESKALA Digital desde 2017 ha sido clave para el crecimiento de Furgocasa. No solo diseñaron nuestra marca y web, sino que han sido nuestro departamento de marketing completo. Su implicación va más allá de lo profesional, realmente entienden nuestro negocio y nuestros clientes. Los números hablan por sí solos: hemos multiplicado por 4 nuestras reservas online."

**Narciso Pardo** - Fundador de Furgocasa

## El Futuro del Proyecto

La colaboración continúa evolucionando:
- Implementación de nuevas funcionalidades web
- Expansión a nuevos canales de marketing
- Desarrollo de app móvil
- Automatización avanzada con IA
- Expansión geográfica',

  -- Challenge
  'Cuando Furgocasa comenzó en 2017, el proyecto partía desde cero: no existía identidad de marca, ni presencia digital, ni material fotográfico profesional. El mercado del alquiler de campers en Murcia estaba poco desarrollado y había que crear desde los cimientos toda la imagen corporativa y el sistema de comercialización online. El desafío era doble: construir una marca reconocible y atractiva, y simultáneamente crear un sistema eficiente de captación y conversión de clientes.',

  -- Solution
  'ESKALA Digital asumió el proyecto de forma integral desde el primer día. Comenzamos con un análisis profundo del mercado y la competencia para crear una identidad de marca única y diferenciadora. Diseñamos el logo y toda la imagen corporativa, desarrollamos una plataforma web completa en Joomla con sistema de gestión de reservas, realizamos sesión fotográfica profesional de toda la flota, y establecimos una estrategia de marketing digital 360º. Desde entonces, gestionamos mensualmente todo el ecosistema digital: redes sociales, contenido del blog, actualizaciones web, campañas de email marketing y optimización SEO continua.',

  -- Results
  'Los resultados de 8 años de colaboración son excepcionales. Furgocasa ha pasado de ser una startup sin presencia digital a ser la referencia en alquiler de campers en Murcia. El tráfico web ha crecido de 0 a más de 25,000 visitas anuales, con un 60% de tráfico orgánico. Las reservas online representan ahora el 70% del total vs 0% inicial. La marca ha conseguido +3,500 seguidores en Instagram y aparece en primera página de Google para todas sus búsquedas objetivo. La facturación digital se ha incrementado en un 350% y la tasa de conversión alcanza el 8%, muy por encima de la media del sector. La eficiencia operativa ha mejorado drásticamente, reduciendo las consultas telefónicas en un 80% gracias a la automatización.',

  -- Featured Image
  '/portfolio/furgocasa-hero.jpg',
  
  -- Gallery Images
  ARRAY[
    '/portfolio/furgocasa-1.jpg',
    '/portfolio/furgocasa-2.jpg',
    '/portfolio/furgocasa-3.jpg',
    '/portfolio/furgocasa-4.jpg',
    '/portfolio/furgocasa-5.jpg',
    '/portfolio/furgocasa-6.jpg',
    '/portfolio/furgocasa-branding.jpg',
    '/portfolio/furgocasa-web-mockup.jpg',
    '/portfolio/furgocasa-social-media.jpg'
  ],
  
  -- Video URL (opcional)
  NULL,
  
  -- Website URL
  'https://www.furgocasa.com',
  
  -- Services
  ARRAY['branding', 'diseño-web', 'fotografia', 'seo-local', 'redes-sociales', 'email-marketing'],
  
  -- Metrics
  '{"trafico_web": "+25K visitas/año", "reservas_online": "+70%", "conversion": "8%", "facturacion": "+350%", "seguidores_ig": "+3.5K", "posicionamiento": "#1 Google", "eficiencia": "-80% consultas", "satisfaccion": "4.9★"}'::jsonb,
  
  -- Published & Featured
  true,
  true,
  
  -- Order Position (primero)
  1,
  
  -- Meta Title
  'Furgocasa: Caso de Éxito | Proyecto Integral Marketing Digital',
  
  -- Meta Description
  'Proyecto completo de branding, diseño web y marketing digital para Furgocasa desde 2017. +350% facturación, 70% reservas online. Caso de éxito real.',
  
  -- Project Date
  '2017-03-15',
  
  -- Published At
  NOW()
);

-- =====================================================
-- VERIFICACIÓN
-- =====================================================
-- Consulta para verificar que se insertó correctamente
SELECT 
  title, 
  client, 
  slug, 
  array_length(services, 1) as num_servicios,
  array_length(gallery_images, 1) as num_imagenes,
  published,
  featured,
  website_url
FROM portfolio_projects 
WHERE slug = 'furgocasa-alquiler-camper';

-- =====================================================
-- NOTAS
-- =====================================================
-- 1. Las rutas de las imágenes deberán ser actualizadas con las URLs reales
-- 2. Se recomienda cargar las imágenes en /public/portfolio/ 
-- 3. El video_url se puede añadir posteriormente si se crea un video del proyecto
-- 4. Este proyecto debe aparecer primero (order_position = 1) por ser el más completo

