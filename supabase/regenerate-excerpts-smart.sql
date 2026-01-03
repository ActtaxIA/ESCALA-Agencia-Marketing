-- ============================================
-- REGENERAR EXCERPTS CON MEJOR TRUNCADO
-- ============================================
-- Este script regenera los excerpts de todos los artículos
-- aplicando un truncado inteligente que:
-- 1. No corta palabras a la mitad
-- 2. Añade "..." cuando se trunca
-- 3. Usa más caracteres (350 en lugar de 250-300)
-- ============================================

-- Función para truncar texto sin cortar palabras
CREATE OR REPLACE FUNCTION smart_truncate(input_text TEXT, max_length INT)
RETURNS TEXT AS $$
DECLARE
  truncated TEXT;
  last_space_pos INT;
  min_acceptable_pos INT;
BEGIN
  -- Si el texto ya es corto, devolverlo tal cual
  IF LENGTH(input_text) <= max_length THEN
    RETURN input_text;
  END IF;
  
  -- Truncar al límite
  truncated := SUBSTRING(input_text, 1, max_length);
  
  -- Buscar el último espacio
  last_space_pos := LENGTH(truncated) - POSITION(' ' IN REVERSE(truncated)) + 1;
  
  -- Calcular posición mínima aceptable (80% del límite)
  min_acceptable_pos := max_length * 0.8;
  
  -- Si el espacio está cerca del límite, cortar ahí
  IF last_space_pos > min_acceptable_pos THEN
    RETURN TRIM(SUBSTRING(truncated, 1, last_space_pos)) || '...';
  END IF;
  
  -- Si no, cortar en el límite
  RETURN TRIM(truncated) || '...';
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Función para limpiar HTML (mejorada)
CREATE OR REPLACE FUNCTION strip_html_improved(html_text TEXT)
RETURNS TEXT AS $$
DECLARE
  clean_text TEXT;
BEGIN
  clean_text := html_text;
  
  -- Eliminar tags HTML
  clean_text := REGEXP_REPLACE(clean_text, '<[^>]*>', '', 'g');
  
  -- Decodificar entidades HTML básicas
  clean_text := REPLACE(clean_text, '&nbsp;', ' ');
  clean_text := REPLACE(clean_text, '&amp;', '&');
  clean_text := REPLACE(clean_text, '&lt;', '<');
  clean_text := REPLACE(clean_text, '&gt;', '>');
  clean_text := REPLACE(clean_text, '&quot;', '"');
  
  -- Tildes minúsculas
  clean_text := REPLACE(clean_text, '&aacute;', 'á');
  clean_text := REPLACE(clean_text, '&eacute;', 'é');
  clean_text := REPLACE(clean_text, '&iacute;', 'í');
  clean_text := REPLACE(clean_text, '&oacute;', 'ó');
  clean_text := REPLACE(clean_text, '&uacute;', 'ú');
  
  -- Tildes mayúsculas
  clean_text := REPLACE(clean_text, '&Aacute;', 'Á');
  clean_text := REPLACE(clean_text, '&Eacute;', 'É');
  clean_text := REPLACE(clean_text, '&Iacute;', 'Í');
  clean_text := REPLACE(clean_text, '&Oacute;', 'Ó');
  clean_text := REPLACE(clean_text, '&Uacute;', 'Ú');
  
  -- Ñ
  clean_text := REPLACE(clean_text, '&ntilde;', 'ñ');
  clean_text := REPLACE(clean_text, '&Ntilde;', 'Ñ');
  
  -- Otros caracteres especiales
  clean_text := REPLACE(clean_text, '&iexcl;', '¡');
  clean_text := REPLACE(clean_text, '&iquest;', '¿');
  clean_text := REPLACE(clean_text, '&ldquo;', '"');
  clean_text := REPLACE(clean_text, '&rdquo;', '"');
  clean_text := REPLACE(clean_text, '&hellip;', '...');
  clean_text := REPLACE(clean_text, '&mdash;', '—');
  clean_text := REPLACE(clean_text, '&ndash;', '–');
  
  -- Normalizar espacios múltiples
  clean_text := REGEXP_REPLACE(clean_text, '\s+', ' ', 'g');
  
  -- Trim
  clean_text := TRIM(clean_text);
  
  RETURN clean_text;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Función para extraer excerpt del contenido
CREATE OR REPLACE FUNCTION extract_excerpt(content_html TEXT)
RETURNS TEXT AS $$
DECLARE
  before_more TEXT;
  clean_text TEXT;
BEGIN
  -- 1. Buscar separador "Leer Más" de Joomla
  IF POSITION('<hr class="readmore"' IN content_html) > 0 THEN
    before_more := SPLIT_PART(content_html, '<hr class="readmore"', 1);
    clean_text := strip_html_improved(before_more);
    
    IF LENGTH(clean_text) > 350 THEN
      RETURN smart_truncate(clean_text, 350);
    END IF;
    
    RETURN clean_text;
  END IF;
  
  -- 2. Buscar separador Markdown <!--more-->
  IF POSITION('<!--more-->' IN content_html) > 0 THEN
    before_more := SPLIT_PART(content_html, '<!--more-->', 1);
    clean_text := strip_html_improved(before_more);
    
    IF LENGTH(clean_text) > 350 THEN
      RETURN smart_truncate(clean_text, 350);
    END IF;
    
    RETURN clean_text;
  END IF;
  
  -- 3. Si no hay separador, usar los primeros 300 caracteres
  clean_text := strip_html_improved(content_html);
  
  IF LENGTH(clean_text) > 300 THEN
    RETURN smart_truncate(clean_text, 300);
  END IF;
  
  RETURN clean_text;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- ============================================
-- REGENERAR TODOS LOS EXCERPTS
-- ============================================

-- Ver estado actual (antes)
SELECT 
  id,
  title,
  LENGTH(excerpt) as excerpt_length,
  SUBSTRING(excerpt, 1, 100) as excerpt_preview
FROM articles
ORDER BY published_at DESC
LIMIT 5;

-- REGENERAR excerpts desde el contenido
UPDATE articles
SET excerpt = extract_excerpt(content)
WHERE content IS NOT NULL;

-- Ver resultado (después)
SELECT 
  id,
  title,
  LENGTH(excerpt) as excerpt_length,
  excerpt
FROM articles
ORDER BY published_at DESC
LIMIT 5;

-- Estadísticas
SELECT 
  COUNT(*) as total_articles,
  AVG(LENGTH(excerpt))::INT as avg_excerpt_length,
  MIN(LENGTH(excerpt)) as min_length,
  MAX(LENGTH(excerpt)) as max_length,
  COUNT(CASE WHEN excerpt LIKE '%...' THEN 1 END) as truncated_count,
  COUNT(CASE WHEN excerpt NOT LIKE '%...' THEN 1 END) as full_count
FROM articles;

-- ============================================
-- LIMPIEZA (OPCIONAL)
-- ============================================
-- Descomentar si quieres eliminar las funciones después
-- DROP FUNCTION IF EXISTS smart_truncate(TEXT, INT);
-- DROP FUNCTION IF EXISTS strip_html_improved(TEXT);
-- DROP FUNCTION IF EXISTS extract_excerpt(TEXT);

