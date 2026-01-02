-- =====================================================
-- ACTUALIZACIÓN DE IMÁGENES PARA FURGOCASA
-- =====================================================
-- Script para actualizar las imágenes del proyecto Furgocasa
-- Incluye las nuevas imágenes de branding añadidas

-- Actualizar imagen principal (featured_image)
UPDATE portfolio_projects 
SET featured_image = '/portfolio/furgocasa-alquiler-camper/hero.jpg'
WHERE slug = 'furgocasa-alquiler-camper';

-- Actualizar galería de imágenes (gallery_images)
-- Incluye todas las imágenes disponibles en orden estratégico
UPDATE portfolio_projects 
SET gallery_images = ARRAY[
  '/portfolio/furgocasa-alquiler-camper/hero.jpg',
  '/portfolio/furgocasa-alquiler-camper/screenshot-full.jpg',
  '/portfolio/furgocasa-alquiler-camper/Logo_fondo_gris_azul.jpg',
  '/portfolio/furgocasa-alquiler-camper/LOGO BLANCO_1500.png',
  '/portfolio/furgocasa-alquiler-camper/LOGO NEGRO.png',
  '/portfolio/furgocasa-alquiler-camper/Favicon_blue.png',
  '/portfolio/furgocasa-alquiler-camper/favicon.png'
]
WHERE slug = 'furgocasa-alquiler-camper';

-- Verificar que se actualizó correctamente
SELECT 
  title,
  client,
  featured_image,
  gallery_images,
  array_length(gallery_images, 1) as num_images
FROM portfolio_projects 
WHERE slug = 'furgocasa-alquiler-camper';

-- =====================================================
-- ORDEN DE LAS IMÁGENES EN EL CARRUSEL
-- =====================================================
-- 1. hero.jpg - Imagen principal espectacular
-- 2. screenshot-full.jpg - Captura completa de la web
-- 3. Logo_fondo_gris_azul.jpg - Logo con fondo corporativo
-- 4. LOGO BLANCO_1500.png - Versión blanca del logo (alta resolución)
-- 5. LOGO NEGRO.png - Versión negra del logo
-- 6. Favicon_blue.png - Favicon azul (versión grande)
-- 7. favicon.png - Favicon estándar

-- =====================================================
-- NOTAS IMPORTANTES
-- =====================================================
-- 1. Todas las imágenes existen en /public/portfolio/furgocasa-alquiler-camper/
-- 2. El carrusel mostrará 7 imágenes en total
-- 3. Las rutas son relativas a /public/, por eso comienzan con /portfolio/
-- 4. Next.js sirve automáticamente los archivos de /public/
-- 5. El carrusel tiene auto-play y navegación manual
-- 6. Incluye elementos de branding (logos) que muestran el trabajo completo

