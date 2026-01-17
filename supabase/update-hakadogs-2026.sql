-- =====================================================
-- ACTUALIZACIÓN PROYECTO HAKADOGS - RENOVACIÓN 2026
-- =====================================================
-- Este archivo contiene las instrucciones para actualizar
-- el proyecto Hakadogs con la nueva información de
-- la renovación completa realizada en enero de 2026

-- =====================================================
-- PASO 1: ELIMINAR ENTRADA ANTIGUA (si existe)
-- =====================================================
DELETE FROM portfolio_projects WHERE slug = 'hakadogs-adiestramiento-canino';

-- =====================================================
-- PASO 2: INSERTAR NUEVA ENTRADA ACTUALIZADA
-- =====================================================
INSERT INTO portfolio_projects (
  title, slug, client, industry,
  short_description, full_description,
  challenge, solution, results,
  featured_image, website_url,
  services, metrics,
  published, featured, order_position,
  meta_title, meta_description,
  project_date, published_at
) VALUES (
  'Hakadogs: Renovación Completa con Next.js y Escuela Online con IA',
  'hakadogs-escuela-online-ia',
  'Hakadogs',
  'Educación/Tecnología/Adiestramiento',
  'Renovación completa del sitio web con Next.js incluyendo blog con CMS, escuela online con cursos generados por IA, y sistema de pagos.',
  '# Hakadogs: Plataforma Educativa Canina con Inteligencia Artificial

Hakadogs es un centro especializado en educación y adiestramiento canino en Archena, Murcia. En enero de 2026 realizamos una transformación digital completa, convirtiéndolo en una plataforma educativa de última generación.

## El Proyecto

Renovación integral con tecnología Next.js, incluyendo un blog dinámico, CMS personalizado y, lo más innovador: una escuela online completa con cursos generados mediante inteligencia artificial.

## Innovación Tecnológica

### Escuela Online Inteligente

- **Cursos Estructurados**: Sistema modular con cursos organizados en módulos y lecciones
- **Generación con IA**: Utilización de inteligencia artificial para la creación automática de contenido educativo de calidad
- **Gestión Administrativa**: Panel completo para que el administrador cree y gestione cursos, módulos y lecciones
- **E-commerce Educativo**: Sistema de compra de cursos a precios accesibles con pasarela de pagos integrada
- **Área de Usuario**: Dashboard para que los estudiantes accedan a sus cursos, realicen seguimiento de su progreso y gestionen sus compras

### Blog y CMS

- **Blog Educativo**: Artículos sobre adiestramiento canino, comportamiento, cuidados
- **CMS Potente**: Gestor de contenidos que permite al equipo de Hakadogs publicar y editar fácilmente
- **SEO Optimizado**: Estructura pensada para posicionamiento orgánico

### Tecnología Next.js

- **Rendimiento Superior**: Carga ultrarrápida con Server-Side Rendering
- **Experiencia Móvil**: Diseño 100% responsive optimizado para todos los dispositivos
- **Escalabilidad**: Arquitectura preparada para crecer sin límites',
  
  'La versión anterior de Hakadogs había quedado obsoleta tecnológicamente. No podían monetizar su conocimiento mediante cursos online. El contenido educativo estaba disperso sin un CMS eficiente. Necesitaban una plataforma que les permitiera crear y vender formaciones de forma ágil, escalable y con soporte de IA para generar contenido de calidad rápidamente.',
  
  'Migramos completamente la web a Next.js para máximo rendimiento. Desarrollamos un CMS a medida para gestión del blog. Creamos desde cero una plataforma de escuela online con arquitectura modular (cursos > módulos > lecciones). Integramos IA (GPT) para asistir en la generación de contenidos educativos. Implementamos sistema de pagos para venta de cursos. Desarrollamos panel administrativo completo. Creamos área de usuario con seguimiento de progreso. Optimizamos toda la experiencia UX/UI.',
  
  'Hakadogs ahora cuenta con una plataforma educativa profesional que les permite monetizar su expertise. El administrador puede crear cursos completos en una fracción del tiempo gracias a la asistencia de IA. Los estudiantes pueden comprar y acceder a formaciones estructuradas a precios módicos. El blog genera tráfico orgánico constante. La nueva arquitectura en Next.js ha mejorado la velocidad de carga en un 70%. La plataforma está preparada para escalar a cientos de cursos y miles de estudiantes.',
  
  '/portfolio/hakadogs-escuela-online-ia/hero.jpg',
  'https://www.hakadogs.com',
  ARRAY['diseño-web', 'apps-ia', 'desarrollo-web'],
  '{"velocidad_carga": "+70%", "plataforma": "Next.js", "cursos_ia": "Generación automática", "monetizacion": "Nueva fuente de ingresos", "escalabilidad": "Ilimitada"}'::jsonb,
  true,
  true,
  1,
  'Hakadogs: Escuela Online Canina con IA | Next.js',
  'Renovación completa con Next.js: blog, CMS y escuela online con cursos generados por IA. Plataforma educativa de última generación.',
  '2026-01-15',
  NOW()
);

-- =====================================================
-- PASO 3: ACTUALIZAR ORDEN DE OTROS PROYECTOS
-- =====================================================
-- Hakadogs ahora es el proyecto más reciente (order_position = 1)
-- Ajustar el orden de los demás proyectos destacados

UPDATE portfolio_projects 
SET order_position = 2 
WHERE slug = 'furgocasa-alquiler-camper';

UPDATE portfolio_projects 
SET order_position = 7 
WHERE slug = 'casi-cinco-recomendaciones';

UPDATE portfolio_projects 
SET order_position = 8 
WHERE slug = 'mapa-furgocasa-ia';

-- =====================================================
-- VERIFICACIÓN
-- =====================================================
-- Ejecuta esta consulta para verificar que todo está correcto
SELECT slug, title, order_position, featured, project_date, published
FROM portfolio_projects
WHERE published = true
ORDER BY order_position ASC;

-- =====================================================
-- NOTAS FINALES
-- =====================================================
-- 1. El proyecto Hakadogs está marcado como destacado (featured = true)
-- 2. Es el primer proyecto en orden (order_position = 1)
-- 3. Los screenshots se capturaron automáticamente con el script
-- 4. La imagen destacada está en: /portfolio/hakadogs-escuela-online-ia/hero.jpg
-- 5. Fecha del proyecto: 15 de enero de 2026
