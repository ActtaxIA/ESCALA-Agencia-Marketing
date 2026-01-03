-- ============================================
-- SCRIPT PARA DECODIFICAR ENTIDADES HTML EN EXCERPTS
-- ============================================
-- Este script actualiza todos los excerpts de artículos
-- que tienen entidades HTML sin decodificar
-- ============================================

-- Función simplificada para decodificar entidades HTML comunes
CREATE OR REPLACE FUNCTION decode_html_entities(input_text TEXT)
RETURNS TEXT AS $$
DECLARE
  result TEXT;
BEGIN
  result := input_text;
  
  -- Entidades básicas
  result := REPLACE(result, '&nbsp;', ' ');
  result := REPLACE(result, '&amp;', '&');
  result := REPLACE(result, '&lt;', '<');
  result := REPLACE(result, '&gt;', '>');
  result := REPLACE(result, '&quot;', '"');
  result := REPLACE(result, '&apos;', '''');
  result := REPLACE(result, '&#39;', '''');
  result := REPLACE(result, '&#x27;', '''');
  
  -- Vocales con tilde minúsculas
  result := REPLACE(result, '&aacute;', 'á');
  result := REPLACE(result, '&eacute;', 'é');
  result := REPLACE(result, '&iacute;', 'í');
  result := REPLACE(result, '&oacute;', 'ó');
  result := REPLACE(result, '&uacute;', 'ú');
  
  -- Vocales con tilde mayúsculas
  result := REPLACE(result, '&Aacute;', 'Á');
  result := REPLACE(result, '&Eacute;', 'É');
  result := REPLACE(result, '&Iacute;', 'Í');
  result := REPLACE(result, '&Oacute;', 'Ó');
  result := REPLACE(result, '&Uacute;', 'Ú');
  
  -- Ñ
  result := REPLACE(result, '&ntilde;', 'ñ');
  result := REPLACE(result, '&Ntilde;', 'Ñ');
  
  -- Diéresis
  result := REPLACE(result, '&uuml;', 'ü');
  result := REPLACE(result, '&Uuml;', 'Ü');
  result := REPLACE(result, '&auml;', 'ä');
  result := REPLACE(result, '&euml;', 'ë');
  result := REPLACE(result, '&iuml;', 'ï');
  result := REPLACE(result, '&ouml;', 'ö');
  
  -- Signos de puntuación español
  result := REPLACE(result, '&iexcl;', '¡');
  result := REPLACE(result, '&iquest;', '¿');
  
  -- Comillas tipográficas
  result := REPLACE(result, '&ldquo;', '"');
  result := REPLACE(result, '&rdquo;', '"');
  result := REPLACE(result, '&lsquo;', '''');
  result := REPLACE(result, '&rsquo;', '''');
  result := REPLACE(result, '&sbquo;', '‚');
  result := REPLACE(result, '&bdquo;', '„');
  
  -- Guiones
  result := REPLACE(result, '&mdash;', '—');
  result := REPLACE(result, '&ndash;', '–');
  result := REPLACE(result, '&#8211;', '–');
  result := REPLACE(result, '&#8212;', '—');
  
  -- Otros símbolos comunes
  result := REPLACE(result, '&hellip;', '...');
  result := REPLACE(result, '&bull;', '•');
  result := REPLACE(result, '&middot;', '·');
  result := REPLACE(result, '&deg;', '°');
  result := REPLACE(result, '&euro;', '€');
  result := REPLACE(result, '&pound;', '£');
  result := REPLACE(result, '&copy;', '©');
  result := REPLACE(result, '&reg;', '®');
  result := REPLACE(result, '&trade;', '™');
  
  -- Entidades numéricas de comillas
  result := REPLACE(result, '&#8216;', '''');
  result := REPLACE(result, '&#8217;', '''');
  result := REPLACE(result, '&#8220;', '"');
  result := REPLACE(result, '&#8221;', '"');
  result := REPLACE(result, '&#8230;', '...');
  
  RETURN result;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- ============================================
-- ACTUALIZACIÓN DE EXCERPTS
-- ============================================

-- Ver cuántos artículos tienen entidades sin decodificar
SELECT 
  COUNT(*) as total_articles_with_entities
FROM articles
WHERE excerpt LIKE '%&%';

-- Actualizar todos los excerpts que contengan entidades HTML
UPDATE articles
SET excerpt = decode_html_entities(excerpt)
WHERE excerpt LIKE '%&%';

-- ============================================
-- VERIFICACIÓN
-- ============================================

-- Ver si todavía quedan artículos con entidades (debería ser 0)
SELECT 
  id,
  title,
  SUBSTRING(excerpt, 1, 100) as excerpt_preview
FROM articles
WHERE excerpt LIKE '%&%'
LIMIT 10;

-- Estadísticas finales
SELECT 
  COUNT(*) as total_articles,
  COUNT(CASE WHEN excerpt LIKE '%&%' THEN 1 END) as still_with_entities,
  COUNT(CASE WHEN excerpt NOT LIKE '%&%' THEN 1 END) as properly_decoded
FROM articles;

-- Ver algunos ejemplos de excerpts actualizados
SELECT 
  title,
  SUBSTRING(excerpt, 1, 150) as excerpt_preview
FROM articles
ORDER BY updated_at DESC
LIMIT 5;

-- ============================================
-- LIMPIEZA (OPCIONAL)
-- ============================================
-- Descomentar si quieres eliminar la función después de usarla
-- DROP FUNCTION IF EXISTS decode_html_entities(TEXT);
