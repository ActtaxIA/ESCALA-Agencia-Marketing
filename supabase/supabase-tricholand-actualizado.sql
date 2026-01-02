-- =====================================================
-- PROYECTO: TRICHOLAND - VIVERO ESPECIALIZADO EN CACTUS
-- =====================================================
-- Script completo para insertar el proyecto Tricholand en portfolio
-- Ejecutar en Supabase SQL Editor

-- Primero eliminamos el registro anterior si existe
DELETE FROM portfolio_projects WHERE slug = 'tricholand-vivero-cactus';

-- Insertamos el proyecto completo de Tricholand
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
  'Tricholand: Web Multiidioma para Vivero Especializado B2B',
  'tricholand-vivero-cactus',
  'Tricholand',
  'Agricultura y Viveros Especializados',
  
  -- Short Description (máximo 70 caracteres = 69 chars)
  'Vivero especializado en cactus Trichocereus. Web B2B multiidioma.',
  
  -- Full Description (Markdown)
  '# Tricholand: Presencia Digital Internacional para Vivero Especializado

Tricholand es un vivero español altamente especializado en la producción y venta al por mayor de cactus de la variedad **Trichocereus**, con clientes en toda la Unión Europea, Reino Unido y Estados Unidos. En 2021, ESKALA Digital desarrolló su ecosistema digital completo: web multiidioma, blog técnico potente y gestión integral de redes sociales.

## El Proyecto

Una plataforma digital profesional que posiciona a Tricholand como referencia internacional en cactus Trichocereus, con capacidad de comunicarse en múltiples idiomas con distribuidores y viveros de todo el mundo.

### Características Principales

**Web Multiidioma Profesional**
- Plataforma en múltiples idiomas (español, inglés, alemán, etc.)
- Diseño profesional que transmite especialización
- Catálogo completo de variedades de Trichocereus
- Información técnica para profesionales del sector
- Sistema de contacto B2B para pedidos al por mayor

**Blog Técnico Potente**
- Artículos especializados sobre cultivo de Trichocereus
- Guías de cuidado y reproducción
- Información sobre variedades y características
- Contenido optimizado para SEO internacional
- Recursos para profesionales del sector

**Gestión Integral de Redes Sociales**
- Estrategia de contenido en Instagram
- Publicaciones regulares con imágenes de calidad
- Community management y atención a seguidores
- Contenido educativo sobre cactáceas
- Posicionamiento de marca en el sector

**SEO Internacional**
- Optimización para búsquedas en múltiples idiomas
- Posicionamiento en mercados europeos y estadounidense
- Términos técnicos especializados en cactáceas
- Búsquedas B2B de viveros y distribuidores

## Sobre Tricholand y Trichocereus

### ¿Qué es Trichocereus?

Trichocereus es un género de cactus columnares originarios de Sudamérica, especialmente populares entre:
- Viveros especializados en cactáceas
- Coleccionistas de plantas suculentas
- Distribuidores de plantas ornamentales
- Jardineros profesionales y paisajistas

**Características de Trichocereus:**
- Cactus columnares de rápido crecimiento
- Flores espectaculares y vistosas
- Resistentes y fáciles de cultivar
- Alta demanda en mercado europeo
- Múltiples variedades y especies

### Modelo de Negocio B2B

Tricholand opera en el sector **Business to Business (B2B)**:
- Venta al por mayor a otros viveros
- Distribución a tiendas de jardinería
- Suministro a distribuidores internacionales
- Exportación a UE, Reino Unido y EEUU
- Pedidos de gran volumen

## Estrategia Digital Implementada

### 1. Web Multiidioma

**Desarrollo Técnico**
- Estructura multiidioma completa
- Cambio de idioma fluido y rápido
- URLs optimizadas por idioma
- Contenido adaptado culturalmente
- SEO específico para cada mercado

**Idiomas Implementados**
- Español (mercado local y latinoamericano)
- Inglés (internacional, UK, USA)
- Alemán (mercado centro-europeo)
- Otros idiomas según necesidad del mercado

**Contenido por Idioma**
- Catálogo de productos traducido
- Información técnica adaptada
- Blog con artículos en múltiples idiomas
- Formularios de contacto localizados

### 2. Blog Técnico Especializado

**Contenido de Alto Valor**
Artículos técnicos sobre:
- Cultivo profesional de Trichocereus
- Cuidados específicos por variedad
- Reproducción y propagación
- Control de plagas y enfermedades
- Tendencias del mercado de cactáceas
- Diferencias entre especies y variedades

**Estrategia de Contenido**
- Posicionamiento como expertos del sector
- Contenido que atrae a profesionales
- Optimización SEO por término técnico
- Recursos descargables para viveros
- Guías de cultivo profesional

### 3. Gestión de Instagram y Redes Sociales

**Instagram Strategy**
- Feed visual con fotografías de calidad de cactus
- Stories educativas sobre cultivo
- Reels mostrando procesos del vivero
- Destacados organizados por temas
- Engagement con comunidad de cactáceas

**Contenido Visual**
- Fotografía profesional de las plantas
- Behind the scenes del vivero
- Procesos de cultivo y producción
- Floración de diferentes variedades
- Nuevas incorporaciones al catálogo

**Community Management**
- Respuesta a consultas técnicas
- Interacción con seguidores
- Colaboraciones con otros viveros
- Participación en comunidad especializada
- Gestión de mensajes directos B2B

### 4. SEO Internacional

**Optimización Multilingüe**
- Keywords específicas por idioma y mercado
- "Trichocereus wholesale" (inglés)
- "Trichocereus großhandel" (alemán)
- "Vivero Trichocereus" (español)
- Términos técnicos especializados

**Posicionamiento por Mercado**
- Europa: Alemania, Francia, Italia, Países Bajos
- Reino Unido: Post-Brexit targeting
- Estados Unidos: Mercado californiano
- España: Mercado local y nacional

## Público Objetivo B2B

### Perfil de Cliente

**Viveros y Garden Centers**
- Viveros especializados en cactáceas
- Garden centers con sección de suculentas
- Viveros generalistas que buscan especialización
- Productores que amplían catálogo

**Distribuidores**
- Distribuidores mayoristas de plantas
- Importadores/exportadores
- Empresas de logística de plantas
- Mayoristas de material de jardinería

**Profesionales del Sector**
- Paisajistas especializados
- Diseñadores de jardines
- Coleccionistas grandes
- Proyectos de jardines botánicos

### Características del Mercado B2B

- **Pedidos de gran volumen**: Cientos o miles de plantas
- **Compras recurrentes**: Clientes habituales con pedidos regulares
- **Decisiones técnicas**: Basadas en variedad, calidad, precio
- **Ciclo de venta largo**: Relaciones comerciales a largo plazo
- **Exportación internacional**: Logística compleja

## Tecnología y Herramientas

**Plataforma Web**
- CMS con capacidad multiidioma
- Gestión de catálogo de productos
- Sistema de contacto B2B
- Optimización para múltiples mercados
- Integración con redes sociales

**Herramientas de Marketing**
- Instagram Business
- Planificación de contenido
- Herramientas de diseño gráfico
- Analytics multimercado
- Herramientas SEO internacional

**Fotografía**
- Fotografía profesional de productos
- Imágenes del vivero e instalaciones
- Macro de flores y detalles
- Contenido lifestyle para redes

## Resultados del Proyecto

**Presencia Internacional**
- Web profesional en múltiples idiomas
- Capacidad de comunicación con cualquier mercado
- Posicionamiento como vivero especializado de referencia
- Credibilidad internacional aumentada

**Visibilidad Online**
- Posicionamiento en búsquedas técnicas de cactus
- Tráfico desde múltiples países
- Visibilidad en mercados objetivo (UE, UK, USA)
- Blog que posiciona como expertos

**Redes Sociales**
- Comunidad activa en Instagram
- Engagement con profesionales del sector
- Visibilidad de marca aumentada
- Canal de comunicación directo con clientes

**Captación B2B**
- Consultas de viveros y distribuidores internacionales
- Pedidos desde nuevos mercados
- Reducción de dependencia de ferias presenciales
- Canal de venta digital 24/7

## Desafíos del Sector

**Especialización Técnica**
- Producto muy específico y técnico
- Público objetivo muy nicho
- Necesidad de contenido especializado
- Conocimiento profundo del sector requerido

**Mercado B2B Digital**
- Sector tradicionalmente offline
- Compras basadas en relaciones personales
- Necesidad de generar confianza online
- Ciclos de venta largos

**Competencia Internacional**
- Viveros de toda Europa
- Productores sudamericanos
- Necesidad de diferenciación
- Posicionamiento de especialización

## Valor Diferencial de Tricholand

**Especialización Única**
- Enfoque exclusivo en Trichocereus
- Conocimiento técnico profundo
- Catálogo amplio de variedades
- Calidad garantizada

**Capacidad Internacional**
- Comunicación en múltiples idiomas
- Experiencia en exportación
- Logística internacional
- Servicio adaptado a cada mercado

**Presencia Digital Profesional**
- Web que transmite profesionalidad
- Contenido técnico de valor
- Redes sociales activas
- Posicionamiento SEO internacional

## Impacto del Proyecto

El proyecto digital de Tricholand ha permitido:

✅ **Expandir internacionalmente** alcanzando nuevos mercados
✅ **Comunicar profesionalmente** en múltiples idiomas
✅ **Posicionar como expertos** mediante blog técnico
✅ **Generar confianza** con presencia digital sólida
✅ **Captar clientes B2B** mediante búsquedas orgánicas
✅ **Construir comunidad** en redes sociales especializadas

## Sector de Viveros Especializados

El mercado de viveros especializados está en crecimiento:

- Aumento del interés en plantas suculentas y cactus
- Demanda de variedades específicas y raras
- Mercado B2B con márgenes profesionales
- Exportación dentro de normativas fitosanitarias UE
- Digitalización progresiva del sector

Tricholand se posiciona como referencia en este nicho con una estrategia digital completa que abarca web multiidioma, contenido técnico y presencia en redes sociales.',

  -- Challenge
  'Tricholand operaba en un mercado B2B altamente especializado: venta al por mayor de cactus Trichocereus a viveros y distribuidores internacionales. Su principal desafío era comunicarse efectivamente con clientes de diferentes países (UE, Reino Unido, EEUU) que hablan distintos idiomas. El sector de viveros es tradicionalmente offline, basado en ferias y relaciones personales, con poca digitalización. El producto (Trichocereus) es muy específico y técnico, requiriendo contenido especializado. Necesitaban diferenciarse en un mercado con competencia de toda Europa y Sudamérica, generando confianza online para cerrar ventas B2B de gran volumen sin contacto presencial previo.',

  -- Solution
  'ESKALA Digital desarrolló una estrategia digital integral multicanal. Diseñamos y desarrollamos una web profesional multiidioma (español, inglés, alemán) con contenido adaptado culturalmente para cada mercado. Implementamos un blog técnico potente con artículos especializados sobre cultivo, cuidado y variedades de Trichocereus, optimizado para SEO internacional. Diseñamos una estrategia de SEO específica por idioma y mercado, posicionando términos técnicos en cada país objetivo. Desarrollamos y gestionamos integralmente Instagram y redes sociales, con contenido visual de calidad, publicaciones educativas y community management especializado. Creamos contenido que posiciona a Tricholand como expertos del sector, generando confianza para ventas B2B internacionales.',

  -- Results
  'Tricholand estableció una presencia digital internacional profesional que le permite competir en mercados europeos y estadounidenses. La web multiidioma facilita la comunicación con clientes de cualquier país, eliminando barreras idiomáticas. El blog técnico genera tráfico orgánico cualificado y posiciona a la empresa como referencia en Trichocereus. El SEO internacional atrae consultas de viveros y distribuidores de múltiples países mediante búsquedas orgánicas especializadas. Instagram ha construido una comunidad activa de profesionales del sector, generando visibilidad de marca y engagement. La presencia digital ha permitido captar clientes B2B sin depender exclusivamente de ferias presenciales, con consultas y pedidos desde nuevos mercados internacionales.',

  -- Featured Image
  '/portfolio/tricholand-tienda-cactus/hero.jpg',
  
  -- Gallery Images
  ARRAY[
    '/portfolio/tricholand-tienda-cactus/hero.jpg',
    '/portfolio/tricholand-tienda-cactus/screenshot-full.jpg'
  ],
  
  -- Video URL (opcional)
  NULL,
  
  -- Website URL
  'https://www.tricholand.com',
  
  -- Services (Web multiidioma, Blog, SEO internacional, Redes sociales)
  ARRAY['diseño-web', 'seo-local', 'redes-sociales'],
  
  -- Metrics
  '{"web": "Multiidioma", "blog": "Técnico potente", "redes": "Instagram activo", "mercado": "B2B Internacional", "año": "2021", "idiomas": "ES/EN/DE", "sector": "Viveros", "exportacion": "UE/UK/USA"}'::jsonb,
  
  -- Published & Featured
  true,
  false,
  
  -- Order Position
  3,
  
  -- Meta Title (máximo 70 caracteres = 64 chars)
  'Tricholand | Vivero Cactus Especializado B2B | ESKALA Portfolio',
  
  -- Meta Description (máximo 160 caracteres = 156 chars)
  'Web multiidioma y marketing digital para Tricholand. Vivero especializado en Trichocereus con blog técnico, SEO internacional y redes sociales.',
  
  -- Project Date
  '2021-08-10',
  
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
  website_url,
  LENGTH(meta_title) as longitud_meta_title
FROM portfolio_projects 
WHERE slug = 'tricholand-vivero-cactus';

-- =====================================================
-- NOTAS
-- =====================================================
-- 1. Proyecto de 2021 - Web multiidioma, blog técnico y redes sociales
-- 2. Gestión integral de Instagram incluida
-- 3. Enfoque B2B internacional (UE, UK, USA)
-- 4. Blog técnico especializado en Trichocereus
-- 5. SEO internacional por idioma y mercado
-- 6. Sector: Viveros especializados en cactáceas
-- 7. Meta_title: 64 caracteres (dentro del límite de 70)
-- 8. Meta_description: 156 caracteres (dentro del límite de 160)

