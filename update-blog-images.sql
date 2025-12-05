-- Actualizar imágenes destacadas de los artículos del blog
-- Ejecutar en Supabase SQL Editor

UPDATE articles SET featured_image = '/blog/guia-seo-local-2025.png' WHERE slug = 'guia-seo-local-2025';
UPDATE articles SET featured_image = '/blog/como-mejorar-seo-local.png' WHERE slug = 'como-mejorar-seo-local';
UPDATE articles SET featured_image = '/blog/tendencias-diseno-web-2025.webp' WHERE slug = 'tendencias-diseno-web-2025';
UPDATE articles SET featured_image = '/blog/google-ads-vs-facebook-ads.jpg' WHERE slug = 'google-ads-vs-facebook-ads';
UPDATE articles SET featured_image = '/blog/ia-en-marketing.png' WHERE slug = 'ia-en-marketing';
UPDATE articles SET featured_image = '/blog/redes-sociales-empresas-locales.png' WHERE slug = 'redes-sociales-empresas-locales';
UPDATE articles SET featured_image = '/blog/email-marketing-que-convierte.jpg' WHERE slug = 'email-marketing-que-convierte';
UPDATE articles SET featured_image = '/blog/optimizar-google-my-business.png' WHERE slug = 'optimizar-google-my-business';
UPDATE articles SET featured_image = '/blog/errores-web-pymes.webp' WHERE slug = 'errores-web-pymes';

-- Verificar que se actualizaron correctamente
SELECT slug, featured_image FROM articles WHERE published = true ORDER BY published_at DESC;

