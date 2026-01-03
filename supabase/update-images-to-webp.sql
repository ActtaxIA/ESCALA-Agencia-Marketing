-- ============================================
-- ACTUALIZAR REFERENCIAS DE IMÁGENES A WEBP
-- ============================================
-- Cambia todas las referencias de .png, .jpg, .jpeg
-- a .webp en el campo featured_image de articles
-- ============================================

-- Ver el estado actual de las imágenes
SELECT 
  id,
  title,
  featured_image,
  CASE 
    WHEN featured_image LIKE '%.png' THEN 'PNG'
    WHEN featured_image LIKE '%.jpg' THEN 'JPG'
    WHEN featured_image LIKE '%.jpeg' THEN 'JPEG'
    WHEN featured_image LIKE '%.webp' THEN 'WEBP'
    ELSE 'Otra/Ninguna'
  END as tipo_actual
FROM articles
WHERE featured_image IS NOT NULL
ORDER BY featured_image;

-- ============================================
-- ACTUALIZAR TODAS LAS REFERENCIAS
-- ============================================

-- Actualizar .png a .webp
UPDATE articles
SET featured_image = REGEXP_REPLACE(featured_image, '\.png$', '.webp', 'i')
WHERE featured_image LIKE '%.png';

-- Actualizar .jpg a .webp
UPDATE articles
SET featured_image = REGEXP_REPLACE(featured_image, '\.jpg$', '.webp', 'i')
WHERE featured_image LIKE '%.jpg';

-- Actualizar .jpeg a .webp
UPDATE articles
SET featured_image = REGEXP_REPLACE(featured_image, '\.jpeg$', '.webp', 'i')
WHERE featured_image LIKE '%.jpeg';

-- ============================================
-- VERIFICAR RESULTADOS
-- ============================================

SELECT 
  id,
  title,
  featured_image,
  CASE 
    WHEN featured_image LIKE '%.png' THEN '❌ PNG (no convertido)'
    WHEN featured_image LIKE '%.jpg' THEN '❌ JPG (no convertido)'
    WHEN featured_image LIKE '%.jpeg' THEN '❌ JPEG (no convertido)'
    WHEN featured_image LIKE '%.webp' THEN '✅ WEBP'
    ELSE '⚠️ Otra/Ninguna'
  END as estado
FROM articles
WHERE featured_image IS NOT NULL
ORDER BY featured_image;

-- Contar por tipo
SELECT 
  CASE 
    WHEN featured_image LIKE '%.webp' THEN 'WEBP ✅'
    WHEN featured_image LIKE '%.png' THEN 'PNG ❌'
    WHEN featured_image LIKE '%.jpg' THEN 'JPG ❌'
    WHEN featured_image LIKE '%.jpeg' THEN 'JPEG ❌'
    WHEN featured_image IS NULL THEN 'Sin imagen'
    ELSE 'Otro'
  END as tipo,
  COUNT(*) as cantidad
FROM articles
GROUP BY tipo
ORDER BY cantidad DESC;

-- Mensaje final
DO $$
BEGIN
  RAISE NOTICE '✅ Referencias de imágenes actualizadas a WebP';
  RAISE NOTICE '📝 Revisa los resultados arriba para confirmar';
END $$;

