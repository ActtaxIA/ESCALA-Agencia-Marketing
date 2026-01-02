-- =====================================================
-- PROYECTO: REBECA MEDINA - WEB PROFESIONAL
-- =====================================================
-- Script completo para insertar el proyecto Rebeca Medina en portfolio
-- Ejecutar en Supabase SQL Editor
--
-- CLIENTE: Rebeca Medina
-- URL: https://www.rebecamedina.es/
-- FECHA: Abril 2019
-- SERVICIOS: Diseño Web con blog
-- =====================================================

-- Primero eliminamos el registro anterior si existe
DELETE FROM portfolio_projects WHERE slug = 'rebeca-medina';

-- Insertamos el proyecto completo de Rebeca Medina
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
  'Rebeca Medina - Coordinadora de Intimidad y Coach Actoral',
  'rebeca-medina',
  'Rebeca Medina',
  'Sector Audiovisual - Coordinación de Intimidad',
  
  -- Short Description
  'Web profesional para coordinadora de intimidad certificada internacionalmente (IPA, SAG-AFTRA) y coach actoral. Diseño con blog integrado.',
  
  -- Full Description (Markdown)
  '# Rebeca Medina - Coordinadora de Intimidad y Coach Actoral

## Sobre el Cliente

Rebeca Medina es una profesional del sector audiovisual con una trayectoria única en España. **Coordinadora de Intimidad Certificada internacionalmente** por IPA (Intimacy Professionals Association) y **acreditada por SAG-AFTRA**, trabaja en producciones nacionales e internacionales de cine y televisión.

Además de su trabajo como coordinadora de intimidad, Rebeca es **Coach Actoral** especializada en la formación de menores de edad, jóvenes e intérpretes noveles, y ha trabajado como directora en diversas producciones teatrales.

## El Proyecto

En **abril de 2019**, desarrollamos una **página web profesional** para Rebeca Medina que reflejara su perfil profesional único en la industria audiovisual española.

### Características Principales

🎭 **Diseño Profesional**
- Web elegante y minimalista que transmite profesionalidad
- Identidad visual acorde al sector audiovisual

📱 **Secciones Destacadas**
- Coordinación de Intimidad
- Coach Actoral
- Biografía profesional
- Portfolio de trabajos
- Blog de noticias
- Contacto

💻 **Tecnología**
- Responsive Design adaptado a todos los dispositivos
- Blog integrado con sistema de publicación
- Optimización de rendimiento y carga rápida

## Servicios Desarrollados

### Diseño y Desarrollo Web

Creamos una página web que sirve como **tarjeta de presentación profesional** en el sector audiovisual, destacando:

✅ Su doble perfil: Coordinadora de Intimidad y Coach Actoral  
✅ Portfolio visual de sus trabajos en producciones destacadas  
✅ Sección de noticias para mantener actualizada su actividad  
✅ Información de contacto profesional

### Portfolio de Trabajos

La web incluye un showcase de las producciones en las que Rebeca ha trabajado, incluyendo series y películas de alto perfil como:

- **The Walking Dead: Daryl Dixon**
- **El caso Asunta**
- **Now and Then**
- **Jaguar**
- **Veneno**
- **Malasaña 32**
- **La Viuda Negra**
- **Física o Química: La Nueva Generación**

Y producciones teatrales como:

- **33, El Musical** (Adjunta a la dirección artística)
- **Entre Sevilla y Triana** (Teatro de La Zarzuela / INAEM)
- **Historias de una escalera**
- **El Hilo de la Vida** (Ganadora Premios Buero de Teatro Joven)

## Impacto del Proyecto

La página web ha servido como **plataforma profesional** para Rebeca Medina, permitiéndole:

✅ **Visibilidad Internacional**: Presencia online profesional en el sector audiovisual  
✅ **Credibilidad**: Showcase de certificaciones y trabajos de alto perfil  
✅ **Contacto Profesional**: Canal directo para producciones y empresas del sector  
✅ **Actualización Continua**: Blog para compartir novedades y proyectos

## Tecnología Utilizada

- **CMS Moderno**: Sistema de gestión de contenidos para actualización sencilla
- **Diseño Responsive**: Adaptado a todos los dispositivos
- **Blog Integrado**: Sistema de publicación de noticias
- **Optimización SEO**: Estructura optimizada para buscadores

## Resultado

Una **web profesional y elegante** que refleja el perfil único de Rebeca Medina en el sector audiovisual español, posicionándola como referente en coordinación de intimidad y coaching actoral.',
  
  -- Challenge
  'Rebeca Medina, profesional con una trayectoria única como Coordinadora de Intimidad certificada internacionalmente y Coach Actoral, necesitaba una presencia digital profesional que reflejara su doble perfil en el sector audiovisual y sirviera como tarjeta de presentación para producciones y empresas.',
  
  -- Solution
  'Desarrollamos una página web profesional con diseño elegante y minimalista, que incluye secciones dedicadas para cada área (Coordinación de Intimidad, Coach Actoral, Biografía, Trabajos, Blog, Contacto), con un showcase visual de sus trabajos en producciones de alto perfil y un blog integrado para mantener actualizada su actividad profesional.',
  
  -- Results
  'Plataforma profesional que sirve como canal de contacto directo para producciones nacionales e internacionales, con showcase de más de 400 escenas coordinadas en producciones destacadas como The Walking Dead, El caso Asunta, Veneno y Jaguar. La web se ha convertido en su tarjeta de presentación oficial en el sector audiovisual.',
  
  -- Featured Image
  '/portfolio/rebeca-medina/hero.jpg',
  
  -- Gallery Images
  ARRAY[
    '/portfolio/rebeca-medina/hero.jpg',
    '/portfolio/rebeca-medina/screenshot-full.jpg'
  ]::text[],
  
  -- Video URL
  NULL,
  
  -- Website URL
  'https://www.rebecamedina.es/',
  
  -- Services
  ARRAY['diseño-web']::text[],
  
  -- Metrics
  '{
    "Certificaciones": "IPA y SAG-AFTRA",
    "Escenas Coordinadas": "+400 desde 2021",
    "Tipo": "Web profesional con blog",
    "Secciones": "6 secciones principales",
    "Producciones Destacadas": "The Walking Dead, El caso Asunta, Veneno, Jaguar"
  }'::jsonb,
  
  -- Published
  true,
  
  -- Featured
  false,
  
  -- Order Position
  9,
  
  -- Meta Title
  'Rebeca Medina | Web Coordinadora de Intimidad y Coach Actoral',
  
  -- Meta Description
  'Página web profesional para Rebeca Medina, Coordinadora de Intimidad certificada por IPA y SAG-AFTRA, y Coach Actoral. Desarrollo web con blog para sector audiovisual.',
  
  -- Project Date
  '2019-04-01',
  
  -- Published At
  NOW()
);

-- Verificación
SELECT 
  slug,
  title,
  client,
  industry,
  LENGTH(short_description) as short_desc_chars,
  LENGTH(meta_title) as meta_title_chars,
  services,
  project_date,
  website_url,
  published,
  order_position
FROM portfolio_projects 
WHERE slug = 'rebeca-medina';

