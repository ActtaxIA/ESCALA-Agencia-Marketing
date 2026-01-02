-- =====================================================
-- PROYECTO: ON PROCURADORES - DESPACHO DE PROCURADORES
-- =====================================================
-- Script completo para insertar el proyecto On Procuradores en portfolio
-- Ejecutar en Supabase SQL Editor

-- Primero eliminamos el registro anterior si existe
DELETE FROM portfolio_projects WHERE slug = 'on-procuradores-murcia';

-- Insertamos el proyecto completo de On Procuradores
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
  'ON Procuradores: Web para Despacho de Procuradores en Murcia',
  'on-procuradores-murcia',
  'ON Procuradores',
  'Servicios Legales y Procuraduría',
  
  -- Short Description
  'Diseño y desarrollo web para despacho de procuradores en Murcia. Web profesional con blog jurídico, SEO local y configuración de Google Business para captación de clientes en la Región de Murcia.',
  
  -- Full Description (Markdown)
  '# ON Procuradores: Presencia Digital para Despacho de Procuraduría

ON Procuradores es un despacho profesional de procuradores en Murcia especializado en representación procesal y gestión de trámites judiciales. En 2021, ESKALA Digital desarrolló su presencia digital completa para establecer su autoridad online y captar clientes en la Región de Murcia.

## El Proyecto

Una web profesional que transmite seriedad, confianza y expertise en servicios de procuraduría, con información clara sobre servicios, blog jurídico y optimización para búsquedas locales.

### Características Principales

**Diseño Web Profesional**
- Plataforma desarrollada en Joomla (CMS)
- Diseño serio y corporativo que transmite confianza
- Estructura clara de servicios de procuraduría
- Información sobre el equipo y experiencia
- Formularios de contacto profesionales

**Blog Jurídico**
- Artículos sobre procesos judiciales y procedimientos
- Información útil sobre representación procesal
- Guías sobre trámites y gestiones judiciales
- Contenido que posiciona como expertos
- Optimizado para SEO y captación de tráfico

**SEO Local Murcia**
- Optimización para búsquedas locales en Murcia
- "Procurador Murcia"
- "Procuradores Región de Murcia"
- "Representación procesal Murcia"
- Posicionamiento en búsquedas relacionadas con servicios de procuraduría

**Google Business Profile**
- Configuración completa del perfil
- Optimización de información de contacto
- Categorías correctas para servicios legales
- Gestión de reseñas y reputación online
- Mejora de visibilidad en búsquedas locales

## ¿Qué es un Procurador?

Los procuradores son profesionales del Derecho que representan a las partes ante los tribunales y realizan las actuaciones procesales necesarias. Sus funciones incluyen:

- **Representación procesal**: Actuar en nombre del cliente ante los juzgados
- **Tramitación judicial**: Presentación de escritos y documentos
- **Notificaciones**: Recepción y gestión de comunicaciones judiciales
- **Seguimiento de procedimientos**: Control del estado de los procesos
- **Coordinación**: Enlace entre abogado, cliente y tribunal

## Servicios de ON Procuradores

**Ámbitos de Actuación**
- Procesos civiles (demandas, divorcios, reclamaciones)
- Procesos penales (representación en causas penales)
- Procesos contencioso-administrativos
- Procedimientos de ejecución
- Recursos y apelaciones
- Tramitación de herencias y sucesiones

**Ventajas de sus Servicios**
- Experiencia en todos los juzgados de Murcia
- Conocimiento profundo de procedimientos
- Atención personalizada y cercana
- Coordinación eficiente con abogados
- Gestión ágil de trámites judiciales

## Estrategia Digital Implementada

### Diseño Web Corporativo
- Diseño limpio y profesional
- Colores sobrios que transmiten seriedad
- Información clara y accesible
- Estructura intuitiva de navegación
- Formularios de contacto estratégicos

### Contenido Optimizado
- Descripción detallada de servicios de procuraduría
- Explicación de procesos y procedimientos
- Información sobre honorarios y tarifas
- Área de preguntas frecuentes
- Datos de contacto destacados

### Blog Jurídico
Artículos informativos sobre:
- Diferencias entre procurador y abogado
- Cuándo es obligatorio procurador
- Procedimientos judiciales paso a paso
- Novedades legislativas en procedimientos
- Consejos para clientes en procesos judiciales

### SEO Local Avanzado
Optimización para captar clientes en:
- Murcia capital
- Cartagena
- Lorca
- Molina de Segura
- Alcantarillα
- Toda la Región de Murcia

### Google Business Optimization
- Perfil completo con horarios y contacto
- Categorías: Procurador, Servicios legales
- Fotos del despacho
- Descripción optimizada con palabras clave
- Gestión de preguntas y respuestas
- Estrategia de reseñas

## Tecnología Utilizada

**Plataforma Web**
- Joomla como CMS principal
- Diseño responsive para todos los dispositivos
- Optimización de velocidad de carga
- Estructura SEO-friendly
- SSL para seguridad

**Funcionalidades**
- Blog integrado para contenido legal
- Formularios de contacto seguros
- Sistema de gestión de contenidos
- Integración con Google Business
- Analytics para seguimiento

## Público Objetivo

**Perfil de Cliente**
- Particulares con procesos judiciales en Murcia
- Despachos de abogados que necesitan procurador
- Empresas con litigios o reclamaciones
- Personas en procesos de divorcio o herencias
- Clientes que buscan representación procesal profesional

**Necesidades que Cubre**
- Representación ante tribunales en Murcia
- Tramitación eficiente de procedimientos
- Gestión de notificaciones judiciales
- Seguimiento de procesos legales
- Coordinación con abogados

## Resultados del Proyecto

**Presencia Digital Profesional**
- Web corporativa que transmite confianza y seriedad
- Primera presencia online estructurada del despacho
- Herramienta de información para clientes potenciales
- Canal de contacto profesional 24/7

**Visibilidad Local**
- Posicionamiento en búsquedas de procuradores en Murcia
- Visibilidad mejorada en Google Maps
- Aparición en búsquedas relacionadas con servicios legales
- Mayor alcance que la competencia local

**Captación de Clientes**
- Captación de clientes mediante búsquedas orgánicas
- Reducción de dependencia de referencias exclusivamente
- Consultas de abogados que buscan procurador
- Contactos de particulares con procesos judiciales

**Autoridad Digital**
- Blog que posiciona como expertos en procesos judiciales
- Contenido que genera confianza y credibilidad
- Diferenciación en un sector con poca presencia digital
- Mejora de imagen profesional del despacho

## Sector de la Procuraduría

La procuraduría es una profesión colegiada esencial en el sistema judicial español:

- Representación obligatoria en muchos procedimientos
- Profesión regulada con altos estándares
- Escasa digitalización en el sector
- Oportunidad de diferenciación online
- Búsquedas locales muy específicas

ON Procuradores se posiciona en este mercado con una presencia digital profesional que transmite confianza y facilita el contacto.

## Importancia del SEO Local

Para servicios de procuraduría, el SEO local es fundamental:

- **Búsquedas geográficas**: "Procurador Murcia" tiene alta intención
- **Competencia limitada**: Pocos despachos optimizados
- **Google Business**: Aparición en mapas y búsquedas locales
- **Confianza local**: Preferencia por profesionales cercanos
- **Urgencia**: Búsquedas con necesidad inmediata

## Impacto del Proyecto

La web ha permitido a ON Procuradores:

✅ **Establecer presencia online** en un sector con baja digitalización
✅ **Captar clientes** más allá de referencias tradicionales
✅ **Informar y educar** sobre servicios de procuraduría
✅ **Facilitar el contacto** con abogados y particulares
✅ **Posicionarse** como referencia local en Murcia
✅ **Transmitir profesionalidad** y seriedad

## Diferenciación en el Mercado

ON Procuradores se diferencia por:

- Presencia digital profesional y completa
- Información clara y accesible sobre servicios
- Blog educativo sobre procesos judiciales
- Fácil localización en búsquedas online
- Imagen moderna manteniendo seriedad profesional

La web de ON Procuradores es un ejemplo de cómo un despacho profesional puede aprovechar el marketing digital para mejorar su visibilidad, transmitir confianza y facilitar la captación de clientes en un sector tradicionalmente poco digitalizado.',

  -- Challenge
  'En 2021, ON Procuradores era un despacho de procuradores en Murcia sin presencia online significativa. En un sector donde la captación de clientes dependía principalmente de referencias de abogados y del boca a boca, la falta de presencia digital limitaba las oportunidades de crecimiento. La profesión de procurador es poco conocida por el público general, lo que requería contenido educativo. Además, el sector de servicios legales tiene poca digitalización, con la mayoría de despachos sin web optimizada o con presencia muy básica. Necesitaban transmitir seriedad y profesionalidad mientras se posicionaban en búsquedas locales de Murcia.',

  -- Solution
  'ESKALA Digital diseñó y desarrolló una web profesional en Joomla que transmite confianza y seriedad propias de un despacho legal. Creamos un diseño corporativo limpio con información clara sobre servicios de procuraduría y representación procesal. Implementamos un blog jurídico con artículos educativos sobre procesos judiciales, diferencias entre procurador y abogado, y guías de procedimientos. Desarrollamos una estrategia de SEO local enfocada en búsquedas relacionadas con procuradores en Murcia y la Región. Configuramos y optimizamos completamente su Google Business Profile con categorías correctas, información de contacto, fotos del despacho y descripción optimizada para aparecer en búsquedas locales y Google Maps. Estructuramos la web para facilitar el contacto tanto de abogados como de particulares.',

  -- Results
  'ON Procuradores estableció una presencia digital profesional que le permite ser encontrado por clientes potenciales que buscan servicios de procuraduría en Murcia. La web se posiciona en búsquedas locales relacionadas con procuradores y representación procesal en la Región de Murcia. El blog educativo genera tráfico orgánico y ayuda a explicar el rol del procurador, facilitando la comprensión del servicio. El perfil de Google Business mejora significativamente la visibilidad local, apareciendo en mapas y búsquedas geo-localizadas. La web funciona como herramienta de credibilidad y contacto 24/7, facilitando que tanto abogados como particulares encuentren y contacten con el despacho. El proyecto cumplió su objetivo: dar visibilidad profesional online a un despacho de procuradores y facilitar la captación de clientes mediante internet en un sector con baja competencia digital.',

  -- Featured Image
  '/portfolio/on-procuradores-murcia/hero.jpg',
  
  -- Gallery Images
  ARRAY[
    '/portfolio/on-procuradores-murcia/hero.jpg',
    '/portfolio/on-procuradores-murcia/screenshot-full.jpg'
  ],
  
  -- Video URL (opcional)
  NULL,
  
  -- Website URL
  'https://www.onprocuradores.com',
  
  -- Services (Diseño web, SEO local, Google Business - NO redes sociales)
  ARRAY['diseño-web', 'seo-local'],
  
  -- Metrics
  '{"presencia": "Web profesional", "seo_local": "Posicionado", "google": "Optimizado", "blog": "Jurídico", "año": "2021", "cms": "Joomla", "sector": "Legal", "ubicacion": "Murcia"}'::jsonb,
  
  -- Published & Featured
  true,
  false,
  
  -- Order Position
  4,
  
  -- Meta Title
  'ON Procuradores | Web para Despacho de Procuradores Murcia | ESKALA Portfolio',
  
  -- Meta Description
  'Web profesional para ON Procuradores en Murcia. Diseño Joomla, blog jurídico, SEO local y Google Business para captación de clientes.',
  
  -- Project Date
  '2021-05-20',
  
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
WHERE slug = 'on-procuradores-murcia';

-- =====================================================
-- NOTAS
-- =====================================================
-- 1. Proyecto de 2021 - Solo diseño web, SEO local y Google Business
-- 2. NO gestión de redes sociales
-- 3. Enfoque en SEO local para Murcia y Región
-- 4. Blog jurídico educativo sobre procesos y procedimientos
-- 5. CMS: Joomla
-- 6. Sector: Servicios legales - Procuraduría
-- 7. Google Business configurado y optimizado

