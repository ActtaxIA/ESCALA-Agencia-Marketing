-- Actualizar las imágenes destacadas de los artículos del blog
-- Estas imágenes están almacenadas en public/blog/

-- 1. Guía Completa de SEO Local para 2025
UPDATE articles
SET featured_image = '/blog/guia-seo-local-2025.png'
WHERE slug = 'guia-seo-local-2025';

-- 2. Cómo mejorar el SEO local de tu negocio en 2024
UPDATE articles
SET featured_image = '/blog/como-mejorar-seo-local.png'
WHERE slug = 'como-mejorar-seo-local';

-- 3. 10 tendencias de diseño web para 2025
UPDATE articles
SET featured_image = '/blog/tendencias-diseno-web-2025.webp'
WHERE slug = 'tendencias-diseno-web-2025';

-- 4. Google Ads vs Facebook Ads: ¿Cuál elegir?
UPDATE articles
SET featured_image = '/blog/google-ads-vs-facebook-ads.jpg'
WHERE slug = 'google-ads-vs-facebook-ads';

-- 5. IA en marketing: Cómo aprovecharla para tu negocio
UPDATE articles
SET featured_image = '/blog/ia-en-marketing.png'
WHERE slug = 'ia-en-marketing';

-- 6. Redes sociales para empresas locales: Guía práctica
UPDATE articles
SET featured_image = '/blog/redes-sociales-empresas-locales.png'
WHERE slug = 'redes-sociales-empresas-locales';

-- 7. Email marketing que convierte: Secretos revelados
UPDATE articles
SET featured_image = '/blog/email-marketing-que-convierte.jpg'
WHERE slug = 'email-marketing-que-convierte';

-- 8. Optimiza tu Google My Business en 30 minutos
UPDATE articles
SET featured_image = '/blog/optimizar-google-my-business.png'
WHERE slug = 'optimizar-google-my-business';

-- 9. 7 errores de diseño web que ahuyentan clientes
UPDATE articles
SET featured_image = '/blog/errores-web-pymes.webp'
WHERE slug = 'errores-web-pymes';
