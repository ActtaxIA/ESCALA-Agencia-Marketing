-- =====================================================
-- PROYECTO: BCM ABOGADOS - WEB CON SEO LOCAL
-- =====================================================
-- Script completo para insertar el proyecto BCM Abogados en portfolio
-- Ejecutar en Supabase SQL Editor
--
-- CLIENTE: BCM Abogados
-- URL: https://www.abogadoslaboralistasibiza.com/
-- FECHA: 2022
-- SERVICIOS: Diseño Web + SEO Local
-- =====================================================

-- Primero eliminamos el registro anterior si existe
DELETE FROM portfolio_projects WHERE slug = 'bcm-abogados-ibiza';

-- Insertamos el proyecto completo de BCM Abogados
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
  'BCM Abogados - Web con SEO Local para Despacho Laboralista',
  'bcm-abogados-ibiza',
  'BCM Abogados',
  'Servicios Legales - Derecho Laboral',
  
  -- Short Description
  'Web corporativa con SEO local para despacho de abogados laboralistas en Ibiza y Madrid. Diseño profesional enfocado en captación de clientes locales.',
  
  -- Full Description (Markdown)
  '# BCM Abogados - Presencia Digital para Despacho Laboralista

## Sobre el Cliente

**BCM Abogados** es un despacho especializado en **derecho laboral y de Seguridad Social** con presencia en las **Islas Baleares (Ibiza) y Madrid**. Su equipo está formado por abogados especialistas con una extensa carrera profesional en Firmas de primer nivel.

El despacho ofrece servicios integrales de asesoramiento laboral para:
- 🏢 **Empresas** nacionales e internacionales
- 💼 **Directivos** y altos cargos
- 👥 **Trabajadores** y empleados

Además, cuentan con colaboración de Firmas de servicios jurídicos de primer nivel ("Best Friends") para ofrecer un servicio integral en otras materias como derecho civil, mercantil, urbanístico, penal, fiscal y propiedad industrial.

## El Proyecto

En **2022**, desarrollamos una **página web corporativa** para BCM Abogados con **SEO local** enfocado en posicionar el despacho en Ibiza y ciudades cercanas, así como en Madrid capital.

### Objetivos del Proyecto

🎯 **Presencia Digital Profesional**
- Web corporativa que transmita confianza y profesionalidad
- Diseño acorde al sector legal y de servicios profesionales
- Información clara sobre servicios y especialización

📍 **SEO Local Estratégico**
- Posicionamiento en búsquedas locales de Ibiza y Baleares
- Optimización para "abogados laboralistas Ibiza"
- Alcance también en Madrid capital

👥 **Captación de Clientes**
- Estructura que facilite el contacto y la conversión
- Información detallada por tipo de cliente (empresas, directivos, trabajadores)
- Formularios de contacto optimizados

## Características de la Web

### Diseño Corporativo

✅ **Profesionalidad**: Diseño elegante que transmite confianza y experiencia  
✅ **Usabilidad**: Navegación intuitiva con información bien estructurada  
✅ **Responsive**: Adaptado perfectamente a móviles y tablets  
✅ **Multiidioma**: Versión en español e inglés

### Estructura de Contenidos

La web cuenta con secciones estratégicamente diseñadas:

**🏠 Inicio**
- Presentación del despacho y especialización
- Destacar presencia en Baleares y Madrid
- Llamadas a la acción para contacto

**🏛️ La Firma**
- Presentación del equipo profesional
- Más de 15 años de experiencia
- Valores: Visión práctica, compromiso, conocimiento, experiencia

**⚖️ Servicios Jurídicos**
- **Para Empresas**: Asesoría recurrente, auditorías laborales, reestructuraciones, planes de igualdad
- **Para Directivos**: Contratos de alta dirección, blindajes, terminaciones contractuales
- **Para Trabajadores**: Despidos, sanciones, contratación, derechos laborales
- **Otros Servicios**: Colaboración con especialistas en otras ramas del derecho

**📰 Publicaciones**
- Blog corporativo (preparado para futuros contenidos)

**📞 Contacto**
- Formulario de contacto optimizado
- Información de oficinas en Ibiza y Madrid
- Email: info@bcm-abogados.com

### SEO Local Implementado

🔍 **Optimización On-Page**
- Meta tags optimizados para búsquedas locales
- H1, H2, H3 estructurados con keywords locales
- URLs amigables y descriptivas
- Schema markup para negocios locales

📍 **Targeting Geográfico**
- Contenido optimizado para: "abogados laboralistas Ibiza"
- Referencias a Baleares, Ibiza, Madrid
- Información de sedes y áreas de cobertura

🎯 **Conversión**
- Múltiples puntos de contacto
- CTAs estratégicamente ubicados
- Formularios optimizados para móvil

## Tecnología Utilizada

**CMS Yobla**
- Sistema de gestión de contenidos profesional
- Fácil actualización de contenidos
- Rendimiento optimizado
- Seguridad robusta

**Responsive Design**
- Adaptación perfecta a todos los dispositivos
- Experiencia de usuario optimizada en móvil
- Tiempos de carga rápidos

**Multiidioma**
- Versión en español e inglés
- Facilita captación de clientes internacionales

## Servicios Desarrollados

### Diseño y Desarrollo Web

✅ Diseño corporativo profesional acorde al sector legal  
✅ Estructura de contenidos optimizada por tipo de cliente  
✅ Sistema de gestión de contenidos (CMS Yobla)  
✅ Versión multiidioma (ES/EN)

### SEO Local

✅ Optimización para búsquedas locales en Ibiza y Baleares  
✅ Keywords estratégicas: "abogados laboralistas Ibiza"  
✅ Posicionamiento también en Madrid capital  
✅ Schema markup para negocios locales

## Impacto del Proyecto

La página web ha permitido a BCM Abogados:

✅ **Presencia Digital Profesional**: Web que transmite la experiencia y seriedad del despacho  
✅ **Visibilidad Local**: Posicionamiento en búsquedas locales de servicios laboralistas en Ibiza  
✅ **Captación de Clientes**: Canal de contacto y conversión para empresas, directivos y trabajadores  
✅ **Diferenciación**: Destacar su especialización y red de colaboradores "Best Friends"

## Resultado

Una **web corporativa profesional** con **SEO local optimizado** que posiciona a BCM Abogados como referente en derecho laboral en Ibiza y Baleares, facilitando la captación de clientes empresariales, directivos y trabajadores en su zona de influencia.',
  
  -- Challenge
  'BCM Abogados, despacho especializado en derecho laboral con presencia en Ibiza y Madrid, necesitaba una web corporativa profesional y posicionamiento en búsquedas locales para captar clientes empresariales, directivos y trabajadores en Baleares y zonas cercanas.',
  
  -- Solution
  'Desarrollamos una web corporativa con CMS Yobla, diseño profesional multiidioma (ES/EN) y estructura de contenidos optimizada por tipo de cliente (empresas, directivos, trabajadores). Implementamos SEO local estratégico para posicionar el despacho en búsquedas de "abogados laboralistas Ibiza" y ciudades cercanas.',
  
  -- Results
  'Web profesional que transmite confianza y experiencia, con presencia optimizada en búsquedas locales de Ibiza y Baleares. Estructura clara que facilita la conversión de visitantes en clientes potenciales, destacando la especialización del despacho y su red de colaboradores de primer nivel.',
  
  -- Featured Image
  '/portfolio/bcm-abogados-ibiza/hero.jpg',
  
  -- Gallery Images
  ARRAY[
    '/portfolio/bcm-abogados-ibiza/hero.jpg',
    '/portfolio/bcm-abogados-ibiza/screenshot-full.jpg'
  ]::text[],
  
  -- Video URL
  NULL,
  
  -- Website URL
  'https://www.abogadoslaboralistasibiza.com/',
  
  -- Services
  ARRAY['diseño-web', 'seo-local']::text[],
  
  -- Metrics
  '{
    "Experiencia": "+15 años en derecho laboral",
    "Sedes": "Ibiza y Madrid",
    "Especialización": "Derecho Laboral y Seguridad Social",
    "Servicios": "Empresas, Directivos y Trabajadores",
    "Idiomas": "Español e Inglés",
    "Red": "Best Friends con firmas de primer nivel"
  }'::jsonb,
  
  -- Published
  true,
  
  -- Featured
  false,
  
  -- Order Position
  7,
  
  -- Meta Title (70 caracteres máximo - 63 chars)
  'BCM Abogados Ibiza | Web + SEO Local | ESKALA Portfolio',
  
  -- Meta Description (160 caracteres máximo - 157 chars)
  'Web corporativa con SEO local para BCM Abogados, despacho laboralista en Ibiza y Madrid. Diseño profesional con CMS Yobla. Proyecto 2022 ESKALA Digital.',
  
  -- Project Date
  '2022-06-01',
  
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
  LENGTH(meta_description) as meta_desc_chars,
  services,
  project_date,
  website_url,
  published,
  order_position
FROM portfolio_projects 
WHERE slug = 'bcm-abogados-ibiza';

