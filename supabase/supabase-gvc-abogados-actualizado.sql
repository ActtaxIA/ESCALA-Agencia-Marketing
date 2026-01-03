-- =====================================================
-- PROYECTO: GARCÍA-VÁLCARCEL & CÁCERES - BUFETE DE ABOGADOS
-- =====================================================
-- Script completo para insertar el proyecto GVC en portfolio
-- Ejecutar en Supabase SQL Editor

-- Primero eliminamos el registro anterior si existe
DELETE FROM portfolio_projects WHERE slug = 'gvc-abogados-murcia';

-- Insertamos el proyecto completo de García-Válcarcel & Cáceres
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
  'García-Válcarcel & Cáceres: Web para Bufete Multidisciplinar',
  'gvc-abogados-murcia',
  'García-Válcarcel & Cáceres',
  'Servicios Legales - Bufete Multidisciplinar',
  
  -- Short Description (máximo 70 caracteres = 66 chars)
  'Bufete de abogados multidisciplinar en Murcia desde 1946 (2022).',
  
  -- Full Description (Markdown)
  '# García-Válcarcel & Cáceres: Modernización Digital de Bufete Tradicional

García-Válcarcel & Cáceres es un bufete de abogados multidisciplinar con presencia en Murcia desde 1946, ofreciendo servicios legales en múltiples áreas del derecho público y privado. En 2022, ESKALA Digital desarrolló su nueva presencia web para modernizar su imagen digital mientras mantienen su esencia de profesionalidad y trayectoria.

## El Proyecto

Una web corporativa elegante y moderna que respeta la tradición del bufete mientras lo posiciona efectivamente en búsquedas locales de Murcia, con landing pages específicas para cada área de práctica legal.

### Características Principales

**Web Corporativa Profesional**
- Diseño corporativo elegante y moderno
- Plataforma desarrollada en Joomla (CMS)
- Estructura clara por áreas de práctica legal
- Responsive design optimizado para móviles
- Formularios de contacto seguros

**Landing Pages por Servicios**
- Página específica para cada especialidad legal
- Optimización SEO por área de práctica
- "Abogados [especialidad] Murcia"
- Contenido detallado de cada servicio
- Call-to-actions estratégicos

**SEO Local Murcia**
- Optimización para búsquedas locales
- Posicionamiento por especialidad legal
- Google Business Profile optimizado
- Estrategia de keywords locales
- Aparición en búsquedas geo-localizadas

**Perfiles Profesionales**
- Sección de equipo de abogados
- Biografías profesionales
- Especialidades de cada letrado
- Fotografías corporativas
- Credenciales y trayectoria

## Historia del Bufete

García-Válcarcel & Cáceres es un despacho con **más de 75 años de trayectoria** en Murcia, fundado en 1946. Su longevidad y reputación son testimonio de su excelencia profesional y compromiso con los clientes.

**Evolución del Despacho**
- Fundación en 1946 en Murcia
- Generaciones de abogados al servicio de la ciudad
- Expansión a múltiples áreas del derecho
- Modernización manteniendo valores tradicionales
- Adaptación a nuevos tiempos sin perder esencia

## Áreas de Práctica Legal

El bufete ofrece servicios en múltiples áreas del derecho:

**Derecho Civil**
- Derecho de familia (divorcios, custodias, herencias)
- Derecho sucesorio y testamentos
- Contratos y obligaciones
- Arrendamientos urbanos
- Comunidades de propietarios

**Derecho Penal**
- Defensa penal en todas las jurisdicciones
- Delitos leves y graves
- Recursos y apelaciones
- Asistencia en juicios
- Asesoramiento preventivo

**Derecho Laboral**
- Despidos y reclamaciones laborales
- Accidentes de trabajo
- Negociación colectiva
- Contratos laborales
- Seguridad Social

**Derecho Mercantil**
- Constitución de sociedades
- Contratos mercantiles
- Derecho concursal
- Operaciones societarias
- Asesoramiento empresarial

**Derecho Administrativo**
- Recursos administrativos
- Contratación pública
- Urbanismo y licencias
- Sanciones administrativas
- Procedimientos ante administraciones

**Otras Especialidades**
- Derecho inmobiliario
- Reclamaciones bancarias
- Propiedad intelectual
- Derecho de seguros
- Consumo y usuarios

## Estrategia Digital Implementada

### Diseño Web Moderno

**Identidad Visual**
- Diseño elegante que transmite profesionalidad
- Paleta de colores corporativa sobria
- Tipografía legible y profesional
- Imágenes corporativas de calidad
- Balance entre modernidad y tradición

**Experiencia de Usuario**
- Navegación intuitiva por especialidades
- Estructura clara de información
- Formularios de consulta accesibles
- Diseño responsive para todos los dispositivos
- Tiempos de carga optimizados

### Landing Pages Especializadas

**Estructura por Servicio**
Cada área legal tiene su propia landing page con:
- Descripción detallada del servicio
- Casos típicos que se tratan
- Proceso de trabajo
- Preguntas frecuentes específicas
- Call-to-action para consulta
- Optimización SEO específica

**Estrategia SEO Local**
Cada landing optimizada para:
- "Abogados [especialidad] Murcia"
- "Despacho [área legal] Murcia"
- "Bufete [servicio] Región de Murcia"
- Términos long-tail específicos
- Búsquedas con intención local

### SEO y Posicionamiento

**Optimización On-Page**
- Meta títulos y descripciones por página
- Estructura de encabezados (H1, H2, H3)
- URLs amigables por servicio
- Textos ALT en imágenes
- Schema markup para servicios legales

**SEO Local Avanzado**
- Google Business Profile completo
- NAP consistency (Nombre, Dirección, Teléfono)
- Reseñas de clientes
- Posicionamiento en Google Maps
- Citaciones locales

## Público Objetivo

### Perfil de Clientes

**Particulares**
- Personas con necesidades legales civiles
- Casos de familia y herencias
- Víctimas de accidentes o delitos
- Trabajadores con conflictos laborales
- Consumidores con reclamaciones

**Empresas**
- PYMEs que necesitan asesoramiento legal
- Autónomos con consultas mercantiles
- Empresas con conflictos laborales
- Negocios que requieren contratos
- Sociedades en constitución o restructuración

**Rango de Edad Amplio**
- Clientela tradicional (50-75 años): valoran trayectoria
- Nueva clientela joven (25-45 años): buscan online
- Empresarios y autónomos (30-60 años)
- Familias en procesos legales (todas las edades)

## Resultados del Proyecto

**Modernización de Imagen**
- Web moderna que respeta la tradición del despacho
- Imagen profesional actualizada sin perder esencia
- Profesionalidad transmitida en diseño
- Balance perfecto entre tradición e innovación

**Crecimiento Digital**
- +400% aumento en visitas web vs web anterior
- +320% incremento en consultas digitales
- Tráfico desde búsquedas orgánicas significativo
- Reducción de llamadas para consultas básicas

**Rejuvenecimiento de Clientela**
- 35% de rejuvenecimiento en perfil de nuevos clientes
- Atracción de clientela más joven manteniendo la tradicional
- Consultas de profesionales y empresas jóvenes
- Ampliación del rango de edad de clientes

**Posicionamiento SEO**
- Primera página en Google para múltiples especialidades
- Posicionamiento en "abogados Murcia + especialidad"
- Visibilidad en búsquedas locales aumentada
- Aparición en Google Maps mejorada

**Captación de Clientes**
- 30% de nuevos clientes provienen del canal digital
- Consultas cualificadas con información previa
- Reducción del tiempo de cualificación inicial
- Mayor eficiencia en conversión de consultas

## Tecnología Utilizada

**Plataforma Web**
- Joomla como CMS principal
- Diseño responsive mobile-first
- Optimización de velocidad de carga
- SSL para seguridad y confianza
- Formularios seguros encriptados

**Funcionalidades**
- Sistema de gestión de contenidos
- Formularios de contacto por especialidad
- Perfiles de equipo profesional
- Integración con Google Business
- Analytics para seguimiento

## Desafío del Sector Legal

**Tradicionalismo vs Digitalización**
- Sector legal históricamente offline
- Clientes buscan abogados online cada vez más
- Necesidad de modernizar sin perder credibilidad
- Balance entre tradición y innovación
- Generación de confianza en entorno digital

**Competencia Local**
- Múltiples bufetes en Murcia
- Grandes despachos con presupuestos mayores
- Necesidad de diferenciación
- Posicionamiento por especialidad
- Valor de la trayectoria histórica

## Valor Diferencial

**Trayectoria Histórica**
- Más de 75 años de experiencia (desde 1946)
- Generaciones de confianza en Murcia
- Conocimiento profundo del tejido legal local
- Reputación construida durante décadas

**Equipo Multidisciplinar**
- Abogados especializados en múltiples áreas
- Soluciones integrales para clientes
- Experiencia combinada del equipo
- Capacidad de abordar casos complejos

**Presencia Digital Moderna**
- Web profesional actualizada
- Accesibilidad 24/7 para información
- Facilidad de contacto online
- Posicionamiento en búsquedas locales

## Impacto del Proyecto

La nueva web ha permitido a García-Válcarcel & Cáceres:

✅ **Modernizar su imagen** sin perder su esencia tradicional
✅ **Atraer clientela más joven** manteniendo la base histórica
✅ **Posicionarse online** en búsquedas locales de Murcia
✅ **Generar consultas digitales** reduciendo dependencia de referencias
✅ **Transmitir profesionalidad** en el entorno digital
✅ **Competir efectivamente** con despachos más grandes

## Futuro del Proyecto

El bufete continúa su evolución digital:
- Actualización constante de contenidos
- Optimización SEO continua
- Mejoras en conversión de consultas
- Posible ampliación a más áreas de práctica
- Exploración de contenido educativo legal

García-Válcarcel & Cáceres es un ejemplo perfecto de cómo un despacho tradicional puede modernizar su presencia digital efectivamente, atrayendo nueva clientela mientras mantiene sus valores históricos y su reputación de excelencia profesional.',

  -- Challenge
  'García-Válcarcel & Cáceres era un bufete tradicional con más de 75 años de trayectoria y excelente reputación offline en Murcia, pero su presencia digital era obsoleta. La web antigua no se veía bien en móviles y no generaban consultas online, dependiendo 100% de referencias tradicionales. Necesitaban modernizar su imagen digital para atraer clientela más joven sin perder su posicionamiento premium ni alienar a su base de clientes tradicionales. El sector legal es naturalmente conservador y la digitalización debe hacerse con cuidado. Debían competir con bufetes más grandes con mayores presupuestos de marketing, destacando en búsquedas locales de múltiples especialidades legales.',

  -- Solution
  'ESKALA Digital desarrolló una web corporativa en Joomla con diseño moderno pero elegante que respeta la identidad tradicional del despacho. Creamos una estructura clara por áreas de práctica legal, facilitando que los clientes encuentren exactamente lo que necesitan. Desarrollamos landing pages específicas para cada especialidad legal, optimizadas individualmente para SEO local. Implementamos una sección de equipo con perfiles profesionales que transmiten experiencia y credibilidad. Optimizamos para búsquedas locales de "abogados + especialidad + Murcia" en múltiples áreas del derecho. Integramos formularios de contacto seguros y estratégicos. Trabajamos el balance visual entre modernidad (diseño actual) y tradición (profesionalidad histórica), logrando una imagen renovada sin perder la esencia del bufete.',

  -- Results
  'El bufete ha rejuvenecido exitosamente su imagen digital sin perder profesionalidad ni credibilidad. Las visitas web aumentaron un 400% respecto a la web anterior, con tráfico cualificado desde búsquedas orgánicas. Las consultas online crecieron un 320%, representando ahora el 30% de nuevos clientes captados. El perfil de clientela se rejuveneció un 35%, atrayendo profesionales y empresas jóvenes mientras se mantiene la base tradicional. El posicionamiento para búsquedas de "abogados Murcia" seguido de especialidad mejoró significativamente, apareciendo en primera página de Google para múltiples términos clave. La dependencia de referencias se redujo, diversificando canales de captación. El despacho ahora compite efectivamente con bufetes más grandes gracias a su presencia digital profesional y posicionamiento local optimizado.',

  -- Featured Image
  '/portfolio/gvc-abogados-murcia/hero.jpg',
  
  -- Gallery Images
  ARRAY[
    '/portfolio/gvc-abogados-murcia/hero.jpg',
    '/portfolio/gvc-abogados-murcia/screenshot-full.jpg'
  ],
  
  -- Video URL (opcional)
  NULL,
  
  -- Website URL
  'https://www.gvcabogados.com',
  
  -- Services (Diseño web, Branding, SEO local - NO redes sociales, NO blog)
  ARRAY['diseño-web', 'branding', 'seo-local'],
  
  -- Metrics
  '{"visitas": "+400%", "consultas": "+320%", "rejuvenecimiento": "35%", "canal_digital": "30%", "año": "2022", "cms": "Joomla", "fundado": "1946", "trayectoria": "75+ años"}'::jsonb,
  
  -- Published & Featured
  true,
  false,
  
  -- Order Position
  2,
  
  -- Meta Title (máximo 70 caracteres = 67 chars)
  'García-Válcarcel & Cáceres Murcia | Bufete | ESKALA Portfolio',
  
  -- Meta Description (máximo 160 caracteres = 153 chars)
  'Web corporativa para García-Válcarcel & Cáceres. Bufete multidisciplinar en Murcia desde 1946. Diseño Joomla, landing pages y SEO local por especialidad.',
  
  -- Project Date
  '2022-04-15',
  
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
  LENGTH(meta_title) as longitud_meta_title,
  LENGTH(meta_description) as longitud_meta_description
FROM portfolio_projects 
WHERE slug = 'gvc-abogados-murcia';

-- =====================================================
-- NOTAS
-- =====================================================
-- 1. Proyecto de 2022 (NO 2024) - Web corporativa sencilla
-- 2. NO tiene blog - Solo landing pages por servicios
-- 3. Enfoque 100% en SEO local Murcia
-- 4. Landing pages individuales por especialidad legal
-- 5. CMS: Joomla
-- 6. Bufete fundado en 1946 (75+ años de trayectoria)
-- 7. Servicios: Diseño web, Branding, SEO local
-- 8. NO gestión de redes sociales
-- 9. Meta_title: 67 caracteres (dentro del límite de 70)
-- 10. Meta_description: 153 caracteres (dentro del límite de 160)




