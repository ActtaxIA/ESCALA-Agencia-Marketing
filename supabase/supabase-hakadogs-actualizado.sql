-- =====================================================
-- PROYECTO: HAKADOGS - ADIESTRAMIENTO CANINO
-- =====================================================
-- Script completo para insertar el proyecto Hakadogs en portfolio
-- Ejecutar en Supabase SQL Editor

-- Primero eliminamos el registro anterior si existe
DELETE FROM portfolio_projects WHERE slug = 'hakadogs-adiestramiento-canino';

-- Insertamos el proyecto completo de Hakadogs
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
  'Hakadogs: Web para Centro de Adiestramiento Canino',
  'hakadogs-adiestramiento-canino',
  'Hakadogs',
  'Educación Canina y Servicios para Mascotas',
  
  -- Short Description
  'Diseño y desarrollo web completo para centro de adiestramiento y educación canina en Archena (Murcia). Blog educativo y landing pages locales para captación de clientes en la Región de Murcia.',
  
  -- Full Description (Markdown)
  '# Hakadogs: Presencia Digital para Educación Canina

Hakadogs es un centro especializado en adiestramiento y educación canina ubicado en Archena, Murcia. ESKALA Digital desarrolló en 2018 su plataforma web completa para establecer su presencia digital y captar clientes en la zona.

## El Proyecto

Una web profesional que transmite confianza y expertise en educación canina, con información clara sobre servicios, metodología y enfoque de entrenamiento.

### Características Principales

**Diseño Web Profesional**
- Plataforma desarrollada en Joomla (CMS)
- Diseño limpio y profesional que transmite confianza
- Estructura clara de servicios de adiestramiento
- Información sobre metodología de trabajo
- Formularios de contacto para consultas

**Blog Educativo**
- Artículos sobre educación y comportamiento canino
- Consejos prácticos para dueños de perros
- Contenido que posiciona como expertos
- Optimizado para SEO y captación de tráfico

**Landing Pages Locales**
- Páginas específicas por localidad (Archena, Murcia, Molina de Segura, etc.)
- Optimización SEO local para búsquedas geo-localizadas
- "Adiestramiento canino Archena"
- "Educador canino Murcia"
- "Clases de obediencia canina Región de Murcia"

**Contenido Optimizado**
- Descripción clara de cada servicio de adiestramiento
- Información sobre filosofía y metodología
- Casos de éxito y testimonios
- Galería de imágenes de entrenamientos

## Servicios de Adiestramiento Destacados

- **Educación básica**: Obediencia, socialización, paseo con correa
- **Modificación de conducta**: Agresividad, ansiedad, miedos
- **Adiestramiento avanzado**: Trucos, deportes caninos
- **Clases grupales**: Socialización y aprendizaje en grupo
- **Sesiones a domicilio**: Entrenamiento personalizado

## Estrategia de Contenido

### Blog Educativo
Artículos que abordan:
- Problemas comunes de comportamiento
- Técnicas de adiestramiento positivo
- Cuidados y bienestar canino
- Socialización de cachorros
- Preparación para la llegada de un perro

### SEO Local
Optimización para captar clientes en:
- Archena (ubicación principal)
- Murcia capital
- Molina de Segura
- Cieza
- Fortuna
- Abarán
- Toda la Región de Murcia

## Tecnología Utilizada

**Plataforma Web**
- Joomla como CMS principal
- Diseño responsive para móviles
- Optimización de velocidad de carga
- Estructura SEO-friendly

**Funcionalidades**
- Blog integrado para contenido educativo
- Formularios de contacto
- Galería de imágenes
- Sistema de gestión de contenidos fácil de usar

## Resultados del Proyecto

**Presencia Digital Establecida**
- Web profesional que transmite confianza y expertise
- Primera presencia online del centro de adiestramiento
- Herramienta de información para potenciales clientes
- Canal de contacto directo 24/7

**Captación Local**
- Posicionamiento en búsquedas locales de adiestramiento canino
- Visibilidad en Archena y municipios cercanos
- Captación de clientes mediante búsquedas orgánicas
- Reducción de dependencia del boca a boca

**Autoridad en el Sector**
- Blog educativo que posiciona como expertos
- Contenido de valor que genera confianza
- Diferenciación de la competencia local
- Mejora de la imagen de marca profesional

## Filosofía de Hakadogs

Hakadogs trabaja con metodología de **refuerzo positivo**, promoviendo una relación sana y respetuosa entre perro y dueño. Su enfoque se basa en:

- Entrenamiento sin castigos ni métodos aversivos
- Técnicas basadas en la ciencia del comportamiento animal
- Personalización según cada perro y familia
- Educación del dueño como parte fundamental
- Bienestar animal como prioridad

## Público Objetivo

**Perfil de Cliente**
- Dueños de perros en Archena y Región de Murcia
- Personas con problemas de comportamiento canino
- Familias que acaban de adoptar un perro
- Propietarios que buscan educación básica
- Clientes que buscan métodos respetuosos

**Necesidades que Cubre**
- Solución a problemas de conducta
- Educación básica de cachorros
- Socialización con otros perros
- Modificación de conductas no deseadas
- Adiestramiento avanzado y deportes caninos

## Impacto del Proyecto

La web ha permitido a Hakadogs:

✅ **Establecer presencia online** en un sector con poca digitalización
✅ **Captar clientes** más allá del boca a boca tradicional
✅ **Informar y educar** sobre métodos de adiestramiento respetuosos
✅ **Diferenciarse** de la competencia local
✅ **Facilitar el contacto** con potenciales clientes
✅ **Posicionarse** como referencia en educación canina en la zona

## Sector de la Educación Canina

El sector del adiestramiento canino en España ha crecido significativamente:

- Mayor conciencia sobre bienestar animal
- Preferencia por métodos de refuerzo positivo
- Aumento de adopciones y tenencia responsable
- Demanda de servicios profesionales de educación canina
- Búsqueda de soluciones a problemas de comportamiento

Hakadogs se posiciona en este mercado creciente con una propuesta profesional y ética, apoyada por una presencia digital sólida.',

  -- Challenge
  'En 2018, Hakadogs era un centro de adiestramiento canino sin presencia online. La captación de clientes dependía exclusivamente del boca a boca y de la visibilidad física en Archena. Sin una web, perdían oportunidades de clientes que buscaban servicios de educación canina en internet. Necesitaban establecer su presencia digital, transmitir profesionalidad y captar clientes en Archena y municipios cercanos de la Región de Murcia. El sector de adiestramiento canino tiene poca digitalización, lo que representaba tanto un reto como una oportunidad.',

  -- Solution
  'ESKALA Digital diseñó y desarrolló una web completa en Joomla que transmite profesionalidad y expertise en educación canina. Creamos un diseño limpio y profesional con información clara sobre servicios, metodología y filosofía de adiestramiento basada en refuerzo positivo. Implementamos un blog educativo con artículos sobre comportamiento canino, técnicas de entrenamiento y consejos prácticos. Desarrollamos landing pages específicas para diferentes localidades de la Región de Murcia (Archena, Murcia, Molina de Segura, etc.) optimizadas para SEO local. Estructuramos la web para facilitar el contacto y la conversión de visitantes en clientes, con formularios y llamadas a la acción estratégicas.',

  -- Results
  'Hakadogs estableció una presencia digital profesional que le permite captar clientes más allá del boca a boca tradicional. La web se posiciona en búsquedas locales relacionadas con adiestramiento canino en Archena y la Región de Murcia. El blog educativo genera tráfico orgánico y posiciona al centro como referente en educación canina con métodos respetuosos. Las landing pages locales atraen clientes de diferentes municipios cercanos. La web funciona como herramienta de información 24/7, reduciendo consultas básicas y facilitando la conversión. El proyecto cumplió su objetivo: dar visibilidad online a un negocio local y facilitar la captación de clientes mediante internet.',

  -- Featured Image
  '/portfolio/hakadogs-adiestramiento-canino/hero.jpg',
  
  -- Gallery Images
  ARRAY[
    '/portfolio/hakadogs-adiestramiento-canino/hero.jpg',
    '/portfolio/hakadogs-adiestramiento-canino/screenshot-full.jpg'
  ],
  
  -- Video URL (opcional)
  NULL,
  
  -- Website URL
  'https://www.hakadogs.com',
  
  -- Services (Solo diseño web, no gestión de redes)
  ARRAY['diseño-web', 'seo-local'],
  
  -- Metrics
  '{"presencia": "Web profesional", "seo_local": "Posicionado", "blog": "Activo", "captacion": "Local", "año": "2018", "cms": "Joomla", "landing": "Múltiples", "sector": "Educación canina"}'::jsonb,
  
  -- Published & Featured
  true,
  false,
  
  -- Order Position
  5,
  
  -- Meta Title
  'Hakadogs | Web para Centro de Adiestramiento Canino | ESKALA Portfolio',
  
  -- Meta Description
  'Web completa para Hakadogs, centro de educación canina en Archena. Diseño Joomla, blog educativo y SEO local para captación en Murcia.',
  
  -- Project Date
  '2018-06-15',
  
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
WHERE slug = 'hakadogs-adiestramiento-canino';

-- =====================================================
-- NOTAS
-- =====================================================
-- 1. Proyecto de 2018 - Solo diseño web, no gestión de redes sociales
-- 2. Enfoque en SEO local para Archena y Región de Murcia
-- 3. Blog educativo sobre adiestramiento y comportamiento canino
-- 4. Landing pages locales para diferentes municipios
-- 5. CMS: Joomla (como indicó el usuario)
-- 6. Sector: Educación canina con metodología de refuerzo positivo

