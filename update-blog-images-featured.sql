-- =====================================================
-- ACTUALIZAR IMÁGENES FEATURED DE ARTÍCULOS DEL BLOG
-- =====================================================
-- Este script actualiza el campo featured_image de los artículos
-- con las rutas de las imágenes ya existentes en /public/blog/

-- Artículo 1: SEO Local 2025
UPDATE articles 
SET featured_image = 'guia-seo-local-2025.png'
WHERE slug = 'guia-seo-local-2025';

-- Artículo 2: Cómo mejorar SEO local
UPDATE articles 
SET featured_image = 'como-mejorar-seo-local.png'
WHERE slug = 'como-mejorar-seo-local';

-- Artículo 3: Tendencias diseño web 2025
UPDATE articles 
SET featured_image = 'tendencias-diseno-web-2025.webp'
WHERE slug = 'tendencias-diseno-web-2025';

-- Artículo 4: Google Ads vs Facebook Ads
UPDATE articles 
SET featured_image = 'google-ads-vs-facebook-ads.jpg'
WHERE slug = 'google-ads-vs-facebook-ads';

-- Artículo 5: IA en marketing
UPDATE articles 
SET featured_image = 'ia-en-marketing.png'
WHERE slug = 'ia-en-marketing';

-- Artículo 6: Redes sociales empresas locales
UPDATE articles 
SET featured_image = 'redes-sociales-empresas-locales.png'
WHERE slug = 'redes-sociales-empresas-locales';

-- Artículo 7: Email marketing que convierte
UPDATE articles 
SET featured_image = 'email-marketing-que-convierte.jpg'
WHERE slug = 'email-marketing-que-convierte';

-- Artículo 8: Optimizar Google My Business
UPDATE articles 
SET featured_image = 'optimizar-google-my-business.png'
WHERE slug = 'optimizar-google-my-business';

-- Artículo 9: Errores web pymes
UPDATE articles 
SET featured_image = 'errores-web-pymes.webp'
WHERE slug = 'errores-web-pymes';

-- =====================================================
-- VERIFICACIÓN
-- =====================================================
-- Consulta para verificar que todos los artículos tienen imagen
SELECT slug, title, featured_image 
FROM articles 
WHERE published = true
ORDER BY published_at DESC;



