-- =====================================================
-- ACTUALIZAR IMÁGENES FEATURED A FORMATO WEBP OPTIMIZADO
-- =====================================================
-- Este script actualiza las referencias a imágenes WebP optimizadas
-- Ejecutar en Supabase después de optimizar las imágenes

-- guia-seo-local-2025
UPDATE articles 
SET featured_image = 'guia-seo-local-2025.webp'
WHERE slug = 'guia-seo-local-2025';

-- como-mejorar-seo-local
UPDATE articles 
SET featured_image = 'como-mejorar-seo-local.webp'
WHERE slug = 'como-mejorar-seo-local';

-- tendencias-diseno-web-2025
UPDATE articles 
SET featured_image = 'tendencias-diseno-web-2025.webp'
WHERE slug = 'tendencias-diseno-web-2025';

-- google-ads-vs-facebook-ads
UPDATE articles 
SET featured_image = 'google-ads-vs-facebook-ads.webp'
WHERE slug = 'google-ads-vs-facebook-ads';

-- ia-en-marketing
UPDATE articles 
SET featured_image = 'ia-en-marketing.webp'
WHERE slug = 'ia-en-marketing';

-- redes-sociales-empresas-locales
UPDATE articles 
SET featured_image = 'redes-sociales-empresas-locales.webp'
WHERE slug = 'redes-sociales-empresas-locales';

-- email-marketing-que-convierte
UPDATE articles 
SET featured_image = 'email-marketing-que-convierte.webp'
WHERE slug = 'email-marketing-que-convierte';

-- optimizar-google-my-business
UPDATE articles 
SET featured_image = 'optimizar-google-my-business.webp'
WHERE slug = 'optimizar-google-my-business';

-- errores-web-pymes
UPDATE articles 
SET featured_image = 'errores-web-pymes.webp'
WHERE slug = 'errores-web-pymes';

-- Verificar actualización
SELECT slug, title, featured_image 
FROM articles 
WHERE published = true
ORDER BY published_at DESC;
