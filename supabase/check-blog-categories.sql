-- ============================================
-- VERIFICAR CATEGORÍAS DEL BLOG
-- ============================================
-- Muestra todas las categorías existentes en Supabase
-- y cuántos artículos tiene cada una
-- ============================================

-- 1. Ver todas las categorías existentes
SELECT 
  id,
  name as "Nombre de Categoría",
  slug,
  description as "Descripción"
FROM categories
ORDER BY name;

-- 2. Contar artículos por categoría
SELECT 
  c.name as "Categoría",
  COUNT(a.id) as "Artículos Publicados"
FROM categories c
LEFT JOIN articles a ON a.category_id = c.id AND a.published = true
GROUP BY c.id, c.name
ORDER BY COUNT(a.id) DESC, c.name;

-- 3. Ver artículos sin categoría
SELECT 
  id,
  title as "Título",
  published
FROM articles
WHERE category_id IS NULL;

-- 4. Lista completa: artículos con sus categorías
SELECT 
  a.id,
  a.title as "Título del Artículo",
  c.name as "Categoría",
  a.published as "Publicado",
  a.published_at as "Fecha Publicación"
FROM articles a
LEFT JOIN categories c ON a.category_id = c.id
ORDER BY a.published_at DESC;

-- Resumen
DO $$
DECLARE
  total_categories INTEGER;
  total_articles INTEGER;
  articles_with_category INTEGER;
BEGIN
  SELECT COUNT(*) INTO total_categories FROM categories;
  SELECT COUNT(*) INTO total_articles FROM articles WHERE published = true;
  SELECT COUNT(*) INTO articles_with_category FROM articles WHERE published = true AND category_id IS NOT NULL;
  
  RAISE NOTICE '📊 RESUMEN:';
  RAISE NOTICE '📚 Total de categorías: %', total_categories;
  RAISE NOTICE '📄 Total de artículos publicados: %', total_articles;
  RAISE NOTICE '✅ Artículos con categoría: %', articles_with_category;
  RAISE NOTICE '⚠️  Artículos sin categoría: %', total_articles - articles_with_category;
END $$;

