-- =====================================================
-- SCRIPT COMPLETO PARA PORTFOLIO - FURGOCASA Y ACTTAX
-- =====================================================
-- Ejecutar este script completo en Supabase SQL Editor
-- Incluye ambos proyectos con todos los datos

-- =====================================================
-- 1. FURGOCASA - PROYECTO COMPLETO
-- =====================================================

-- Eliminar registro anterior si existe
DELETE FROM portfolio_projects WHERE slug = 'furgocasa-alquiler-camper';

-- Insertar Furgocasa con todos los datos
INSERT INTO portfolio_projects (
  title, slug, client, industry,
  short_description, full_description,
  challenge, solution, results,
  featured_image, gallery_images,
  website_url, services, metrics,
  published, featured, order_position,
  meta_title, meta_description,
  project_date, published_at
) VALUES (
  'Furgocasa: Plataforma Completa de Alquiler de Campers',
  'furgocasa-alquiler-camper',
  'Furgocasa Campervans',
  'Turismo y Alquiler de Vehículos',
  'Proyecto integral de branding, diseño web, fotografía y marketing digital para la plataforma líder de alquiler de furgonetas camper en Murcia. Desde 2017 gestionamos todo su ecosistema digital.',
  'Contenido completo en Markdown aquí...',
  'Furgocasa partía desde cero en 2017: sin identidad de marca, sin presencia digital, sin material fotográfico. Había que crear toda la imagen corporativa y sistema de comercialización online desde los cimientos.',
  'ESKALA Digital asumió el proyecto integral: análisis de mercado, creación de identidad corporativa, diseño de logo, desarrollo web en Joomla, sesión fotográfica profesional de la flota, y estrategia de marketing digital 360º con gestión mensual de RRSS, blog, actualizaciones web, email marketing y SEO.',
  'De 0 a +25,000 visitas anuales (60% orgánico). Reservas online pasaron de 0% a 70% del total. +3,500 seguidores en Instagram. Primera página en Google. Facturación digital +350%. Tasa de conversión 8%. Eficiencia operativa mejorada: -80% consultas telefónicas.',
  '/portfolio/furgocasa-alquiler-camper/hero.jpg',
  ARRAY[
    '/portfolio/furgocasa-alquiler-camper/hero.jpg',
    '/portfolio/furgocasa-alquiler-camper/screenshot-full.jpg',
    '/portfolio/furgocasa-alquiler-camper/Logo_fondo_gris_azul.jpg',
    '/portfolio/furgocasa-alquiler-camper/LOGO BLANCO_1500.png',
    '/portfolio/furgocasa-alquiler-camper/LOGO NEGRO.png',
    '/portfolio/furgocasa-alquiler-camper/Favicon_blue.png',
    '/portfolio/furgocasa-alquiler-camper/favicon.png'
  ],
  'https://www.furgocasa.com',
  ARRAY['branding', 'diseño-web', 'fotografia', 'seo-local', 'redes-sociales', 'email-marketing'],
  '{"trafico_web": "+25K/año", "reservas_online": "70%", "conversion": "8%", "facturacion": "+350%", "seguidores": "+3.5K", "google": "#1", "eficiencia": "-80%", "rating": "4.9★"}'::jsonb,
  true, true, 1,
  'Furgocasa | Caso de Éxito Marketing Digital | ESKALA Portfolio',
  'Proyecto completo de branding, diseño web y marketing digital para Furgocasa desde 2017. +350% facturación, 70% reservas online.',
  '2017-03-15', NOW()
);

-- =====================================================
-- 2. ACTTAX - PROYECTO COMPLETO
-- =====================================================

-- Eliminar registro anterior si existe
DELETE FROM portfolio_projects WHERE slug = 'acttax-asesoria-fiscal';

-- Insertar Acttax con todos los datos
INSERT INTO portfolio_projects (
  title, slug, client, industry,
  short_description, full_description,
  challenge, solution, results,
  featured_image, gallery_images,
  website_url, services, metrics,
  published, featured, order_position,
  meta_title, meta_description,
  project_date, published_at
) VALUES (
  'Acttax: Transformación Digital de Asesoría Fiscal Especializada',
  'acttax-asesoria-fiscal',
  'Acttax',
  'Servicios Profesionales y Fiscalidad',
  'Proyecto integral de presencia digital para asesoría fiscal especializada en precios de transferencia y valoración de empresas. Web con IA, estrategia SEO B2B y gestión completa de contenidos.',
  'Contenido completo en Markdown aquí...',
  'Acttax: excelente reputación offline pero presencia digital nula. Servicios técnicos (precios de transferencia, valoración) difíciles de posicionar. Competencia: grandes consultoras con presupuestos millonarios. Público objetivo muy específico y difícil de alcanzar.',
  'Estrategia digital B2B: web profesional Next.js con IA, SEO ultra-especializado en términos técnicos de alto valor, blog técnico mensual con análisis normativo, Google Business optimizado, analítica continua. Todo sin redes sociales (innecesarias para el sector).',
  'De invisibilidad a primera página en +35 términos clave. Tráfico: 0 a +6,000 visitas/año (85% orgánico). Consultas +160% (90% del público objetivo correcto). 40% nuevos clientes vía web. Conversión 8% B2B. Coste adquisición -40%. Tiempo en página: 4min 20seg.',
  '/portfolio/acttax-asesoria-fiscal/hero.jpg',
  ARRAY[
    '/portfolio/acttax-asesoria-fiscal/hero.jpg',
    '/portfolio/acttax-asesoria-fiscal/screenshot-full.jpg'
  ],
  'https://www.acttax.es',
  ARRAY['diseño-web', 'seo-local', 'apps-ia'],
  '{"visitas": "+6K/año", "organico": "85%", "consultas": "+160%", "conversion": "8%", "clientes_web": "40%", "terminos": "+35", "coste": "-40%", "tiempo": "4:20min"}'::jsonb,
  true, false, 3,
  'Acttax | Caso de Éxito Web y SEO B2B | ESKALA Portfolio',
  'Transformación digital para Acttax. Web con IA, SEO B2B especializado, +160% consultas. De 0 a referencia en fiscalidad.',
  '2024-03-10', NOW()
);

-- =====================================================
-- VERIFICACIÓN
-- =====================================================

-- Consultar los proyectos insertados
SELECT 
  slug,
  title,
  client,
  meta_title,
  published,
  featured,
  array_length(gallery_images, 1) as num_imagenes,
  website_url
FROM portfolio_projects 
WHERE slug IN ('furgocasa-alquiler-camper', 'acttax-asesoria-fiscal')
ORDER BY order_position;

-- =====================================================
-- INSTRUCCIONES
-- =====================================================
-- 1. Copiar TODO este script
-- 2. Ir a Supabase Dashboard > SQL Editor
-- 3. Pegar y ejecutar
-- 4. Verificar que muestra 2 filas en el resultado
-- 5. Refrescar la web: https://www.eskaladigital.com/portfolio/furgocasa-alquiler-camper
-- 6. El título debería cambiar correctamente

-- Si hay error, verificar que la tabla portfolio_projects existe
-- y que tiene los campos correctos (ejecutar antes supabase-schema.sql)

