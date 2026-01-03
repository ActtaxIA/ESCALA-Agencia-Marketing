-- ============================================
-- VERIFICAR IMÁGENES Y METADATOS DE ARTÍCULOS
-- ============================================
-- Detecta artículos sin imagen o sin metadatos Open Graph
-- para compartir en WhatsApp, Facebook, Twitter
-- ============================================

-- 1. Artículos SIN imagen destacada
SELECT 
  id,
  title as "Título",
  slug,
  featured_image as "Imagen",
  published_at as "Fecha"
FROM articles
WHERE published = true
  AND (featured_image IS NULL OR featured_image = '')
ORDER BY published_at DESC;

-- 2. Artículos SIN meta_title
SELECT 
  id,
  title as "Título",
  slug,
  meta_title as "Meta Title",
  published_at as "Fecha"
FROM articles
WHERE published = true
  AND (meta_title IS NULL OR meta_title = '')
ORDER BY published_at DESC;

-- 3. Artículos SIN meta_description
SELECT 
  id,
  title as "Título",
  slug,
  meta_description as "Meta Description",
  published_at as "Fecha"
FROM articles
WHERE published = true
  AND (meta_description IS NULL OR meta_description = '')
ORDER BY published_at DESC;

-- 4. Vista completa: todos los artículos con sus metadatos
SELECT 
  id,
  title as "Título",
  slug,
  CASE 
    WHEN featured_image IS NOT NULL AND featured_image != '' THEN '✅'
    ELSE '❌'
  END as "Imagen",
  CASE 
    WHEN meta_title IS NOT NULL AND meta_title != '' THEN '✅'
    ELSE '❌'
  END as "Meta Title",
  CASE 
    WHEN meta_description IS NOT NULL AND meta_description != '' THEN '✅'
    ELSE '❌'
  END as "Meta Desc",
  featured_image as "Archivo Imagen"
FROM articles
WHERE published = true
ORDER BY published_at DESC;

-- 5. Resumen general
SELECT 
  COUNT(*) as "Total Publicados",
  COUNT(CASE WHEN featured_image IS NOT NULL AND featured_image != '' THEN 1 END) as "Con Imagen",
  COUNT(CASE WHEN featured_image IS NULL OR featured_image = '' THEN 1 END) as "Sin Imagen",
  COUNT(CASE WHEN meta_title IS NOT NULL AND meta_title != '' THEN 1 END) as "Con Meta Title",
  COUNT(CASE WHEN meta_description IS NOT NULL AND meta_description != '' THEN 1 END) as "Con Meta Desc"
FROM articles
WHERE published = true;

-- 6. Artículos con imágenes .png o .jpg (deben ser .webp)
SELECT 
  id,
  title as "Título",
  slug,
  featured_image as "Imagen (formato antiguo)",
  REGEXP_REPLACE(featured_image, '\.(png|jpg|jpeg)$', '.webp', 'i') as "Debería ser"
FROM articles
WHERE published = true
  AND (
    featured_image LIKE '%.png' 
    OR featured_image LIKE '%.jpg' 
    OR featured_image LIKE '%.jpeg'
  )
ORDER BY published_at DESC;

-- Mensaje final
DO $$
DECLARE
  total_articles INTEGER;
  articles_with_image INTEGER;
  articles_without_image INTEGER;
BEGIN
  SELECT COUNT(*) INTO total_articles FROM articles WHERE published = true;
  SELECT COUNT(*) INTO articles_with_image FROM articles WHERE published = true AND featured_image IS NOT NULL AND featured_image != '';
  articles_without_image := total_articles - articles_with_image;
  
  RAISE NOTICE '📊 RESUMEN DE IMÁGENES Y METADATOS:';
  RAISE NOTICE '📄 Total artículos publicados: %', total_articles;
  RAISE NOTICE '✅ Artículos con imagen: %', articles_with_image;
  RAISE NOTICE '❌ Artículos sin imagen: %', articles_without_image;
  RAISE NOTICE '';
  RAISE NOTICE '⚠️  Los artículos SIN imagen no mostrarán preview en WhatsApp/Facebook';
  RAISE NOTICE '⚠️  Los artículos SIN meta_description usarán el excerpt (puede tener HTML)';
END $$;

