-- ============================================
-- PROYECTO: Rebeca Medina - Coordinadora de Intimidad y Coach Actoral
-- ============================================
-- Página web personal para Rebeca Medina
-- Coordinadora de Intimidad certificada internacionalmente
-- y Coach Actoral especializada en cine, televisión y teatro
--
-- FECHA: Abril 2019
-- CLIENTE: Rebeca Medina
-- URL: https://www.rebecamedina.es/
--
-- SERVICIOS:
-- - Diseño Web: Página web profesional con blog
-- 
-- NOTA: Proyecto sencillo, sin SEO local ni gestión de redes sociales
-- ============================================

INSERT INTO portfolio_projects (
  slug,
  title,
  short_description,
  full_description,
  services,
  colors,
  client_name,
  project_date,
  website_url,
  featured_image,
  gallery_images,
  metrics,
  meta_title,
  meta_description,
  is_published,
  order_position,
  created_at,
  updated_at
) VALUES (
  'rebeca-medina',
  'Rebeca Medina - Coordinadora de Intimidad y Coach Actoral',
  'Web profesional para coordinadora de intimidad certificada',
  '# Rebeca Medina - Coordinadora de Intimidad

## Sobre el Cliente

Rebeca Medina es una profesional del sector audiovisual con una trayectoria única en España. **Coordinadora de Intimidad Certificada internacionalmente** por IPA (Intimacy Professionals Association) y **acreditada por SAG-AFTRA**, trabaja en producciones nacionales e internacionales de cine y televisión.

Además de su trabajo como coordinadora de intimidad, Rebeca es **Coach Actoral** especializada en la formación de menores de edad, jóvenes e intérpretes noveles, y ha trabajado como directora en diversas producciones teatrales.

## El Proyecto

En abril de 2019, desarrollamos una **página web profesional** para Rebeca Medina que reflejara su perfil profesional único en la industria audiovisual española.

### Características Principales

- **Diseño Profesional**: Web elegante y minimalista que transmite profesionalidad
- **Secciones Destacadas**: 
  - Coordinación de Intimidad
  - Coach Actoral
  - Biografía profesional
  - Portfolio de trabajos
  - Blog de noticias
  - Contacto

- **Responsive Design**: Adaptada perfectamente a todos los dispositivos
- **Blog Integrado**: Sección de noticias para compartir proyectos y novedades
- **Optimización de Rendimiento**: Carga rápida y navegación fluida

## Servicios Desarrollados

### Diseño y Desarrollo Web

Creamos una página web que sirve como **tarjeta de presentación profesional** en el sector audiovisual, destacando:

- Su doble perfil: Coordinadora de Intimidad y Coach Actoral
- Portfolio visual de sus trabajos en producciones destacadas
- Sección de noticias para mantener actualizada su actividad
- Información de contacto profesional

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

- ✅ **Visibilidad Internacional**: Presencia online profesional en el sector audiovisual
- ✅ **Credibilidad**: Showcase de certificaciones y trabajos de alto perfil
- ✅ **Contacto Profesional**: Canal directo para producciones y empresas del sector
- ✅ **Actualización Continua**: Blog para compartir novedades y proyectos

## Tecnología Utilizada

- **CMS Moderno**: Sistema de gestión de contenidos para actualización sencilla
- **Diseño Responsive**: Adaptado a todos los dispositivos
- **Blog Integrado**: Sistema de publicación de noticias
- **Optimización SEO**: Estructura optimizada para buscadores

## Resultado

Una **web profesional y elegante** que refleja el perfil único de Rebeca Medina en el sector audiovisual español, posicionándola como referente en coordinación de intimidad y coaching actoral.',
  
  ARRAY['diseño-web']::text[],
  ARRAY['#FF6B6B']::text[],
  'Rebeca Medina',
  '2019-04-01',
  'https://www.rebecamedina.es/',
  '/portfolio/rebeca-medina/hero.jpg',
  
  ARRAY[
    '/portfolio/rebeca-medina/hero.jpg',
    '/portfolio/rebeca-medina/screenshot-full.jpg'
  ]::text[],
  
  '{
    "Certificaciones": "IPA y SAG-AFTRA",
    "Escenas Coordinadas": "Más de 400 desde 2021",
    "Tipo de Web": "Página profesional con blog",
    "Secciones": "6 secciones principales"
  }'::jsonb,
  
  'Rebeca Medina | Web Coordinadora de Intimidad y Coach Actoral',
  'Página web profesional para Rebeca Medina, Coordinadora de Intimidad certificada por IPA y SAG-AFTRA, y Coach Actoral. Desarrollo web con blog para sector audiovisual.',
  
  true,
  9,
  NOW(),
  NOW()
)
ON CONFLICT (slug) 
DO UPDATE SET
  title = EXCLUDED.title,
  short_description = EXCLUDED.short_description,
  full_description = EXCLUDED.full_description,
  services = EXCLUDED.services,
  colors = EXCLUDED.colors,
  client_name = EXCLUDED.client_name,
  project_date = EXCLUDED.project_date,
  website_url = EXCLUDED.website_url,
  featured_image = EXCLUDED.featured_image,
  gallery_images = EXCLUDED.gallery_images,
  metrics = EXCLUDED.metrics,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  is_published = EXCLUDED.is_published,
  order_position = EXCLUDED.order_position,
  updated_at = NOW();

-- Verificación
SELECT 
  slug,
  title,
  LENGTH(short_description) as short_desc_length,
  LENGTH(meta_title) as meta_title_length,
  services,
  project_date,
  website_url,
  is_published,
  order_position
FROM portfolio_projects 
WHERE slug = 'rebeca-medina';

