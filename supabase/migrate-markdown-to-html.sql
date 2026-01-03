-- Script para convertir artículos de Markdown a HTML en Supabase
-- Ejecutar una sola vez en el SQL Editor de Supabase

-- Crear función temporal de conversión Markdown -> HTML
CREATE OR REPLACE FUNCTION markdown_to_html(markdown_text TEXT)
RETURNS TEXT AS $$
DECLARE
    html_text TEXT;
BEGIN
    html_text := markdown_text;
    
    -- Si ya parece HTML, devolver tal cual
    IF html_text ~ '^\s*<[^>]+>' AND html_text ~ '</[^>]+>\s*$' THEN
        RETURN html_text;
    END IF;
    
    -- Convertir headings
    html_text := regexp_replace(html_text, '^### (.+)$', '<h3>\1</h3>', 'gm');
    html_text := regexp_replace(html_text, '^## (.+)$', '<h2>\1</h2>', 'gm');
    html_text := regexp_replace(html_text, '^# (.+)$', '<h1>\1</h1>', 'gm');
    
    -- Convertir bold (negrita)
    html_text := regexp_replace(html_text, '\*\*([^\*]+)\*\*', '<strong>\1</strong>', 'g');
    html_text := regexp_replace(html_text, '__([^_]+)__', '<strong>\1</strong>', 'g');
    
    -- Convertir italic (cursiva)
    html_text := regexp_replace(html_text, '\*([^\*]+)\*', '<em>\1</em>', 'g');
    html_text := regexp_replace(html_text, '_([^_]+)_', '<em>\1</em>', 'g');
    
    -- Convertir links
    html_text := regexp_replace(html_text, '\[([^\]]+)\]\(([^\)]+)\)', '<a href="\2">\1</a>', 'g');
    
    -- Convertir listas (items individuales)
    html_text := regexp_replace(html_text, '^\* (.+)$', '<li>\1</li>', 'gm');
    html_text := regexp_replace(html_text, '^- (.+)$', '<li>\1</li>', 'gm');
    html_text := regexp_replace(html_text, '^\d+\. (.+)$', '<li>\1</li>', 'gm');
    
    -- Envolver listas en <ul>
    html_text := regexp_replace(html_text, '(<li>.*?</li>(\n|$))+', '<ul>\1</ul>', 'g');
    
    -- Convertir párrafos (doble salto de línea)
    html_text := regexp_replace(html_text, '\n\n+', '</p><p>', 'g');
    
    -- Convertir saltos de línea simples
    html_text := regexp_replace(html_text, '\n', '<br>', 'g');
    
    -- Envolver en párrafo si no empieza con tag HTML
    IF NOT (html_text ~ '^\s*<') THEN
        html_text := '<p>' || html_text || '</p>';
    END IF;
    
    RETURN html_text;
END;
$$ LANGUAGE plpgsql;

-- Actualizar todos los artículos existentes
UPDATE articles 
SET 
    content = markdown_to_html(content),
    updated_at = NOW()
WHERE 
    -- Solo actualizar si parece ser Markdown (contiene ## o ** o *)
    (content ~ '##' OR content ~ '\*\*' OR content ~ '^\*' OR content ~ '^-')
    -- Y no parece ser ya HTML
    AND NOT (content ~ '^\s*<[^>]+>' AND content ~ '</[^>]+>\s*$');

-- Mostrar cuántos artículos se actualizaron
SELECT COUNT(*) as articulos_convertidos
FROM articles
WHERE content ~ '<h[1-6]>' OR content ~ '<p>' OR content ~ '<strong>';

-- Eliminar la función temporal (opcional, comentar si quieres mantenerla)
-- DROP FUNCTION IF EXISTS markdown_to_html(TEXT);

-- Resultado: Los artículos ahora tienen HTML puro en lugar de Markdown

