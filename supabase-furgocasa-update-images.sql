-- =====================================================
-- ACTUALIZACIÓN DE IMÁGENES PARA FURGOCASA
-- =====================================================
-- Script para actualizar las imágenes del proyecto Furgocasa
-- Asume que ya existe la carpeta /public/portfolio/furgocasa-alquiler-camper/

-- Actualizar imagen principal (featured_image)
UPDATE portfolio_projects 
SET featured_image = '/portfolio/furgocasa-alquiler-camper/hero.jpg'
WHERE slug = 'furgocasa-alquiler-camper';

-- Actualizar galería de imágenes (gallery_images)
-- Si tienes más capturas de pantalla en la carpeta, agrégalas al array
UPDATE portfolio_projects 
SET gallery_images = ARRAY[
  '/portfolio/furgocasa-alquiler-camper/hero.jpg',
  '/portfolio/furgocasa-alquiler-camper/screenshot-full.jpg',
  '/portfolio/furgocasa-alquiler-camper/screenshot-1.jpg',
  '/portfolio/furgocasa-alquiler-camper/screenshot-2.jpg',
  '/portfolio/furgocasa-alquiler-camper/screenshot-3.jpg',
  '/portfolio/furgocasa-alquiler-camper/screenshot-4.jpg'
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
-- NOTAS IMPORTANTES
-- =====================================================
-- 1. Asegúrate de que las imágenes existen en /public/portfolio/furgocasa-alquiler-camper/
-- 2. Si alguna imagen no existe, elimínala del array
-- 3. Las rutas son relativas a /public/, por eso comienzan con /portfolio/
-- 4. Next.js sirve automáticamente los archivos de /public/
-- 5. Si quieres añadir más imágenes, súbelas a la carpeta y agrégalas al array

