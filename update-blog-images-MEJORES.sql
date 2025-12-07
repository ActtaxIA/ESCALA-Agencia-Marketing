-- =====================================================
-- ACTUALIZAR CON LAS MEJORES IMÁGENES DEL BLOG
-- =====================================================
-- Este script actualiza las imágenes con opciones más apropiadas
-- según el contenido de cada artículo

-- ✅ MANTENER (Ya son buenas)
-- ----------------------------------------

-- Artículo 4: Google Ads vs Facebook Ads
-- Imagen actual: google-ads-vs-facebook-ads.webp ✓ BIEN (publicidad, luces, descuentos)
-- No cambiar

-- Artículo 8: Optimizar Google My Business
-- Imagen actual: optimizar-google-my-business.webp ✓ BIEN (CEO, profesional, ciudad)
-- No cambiar

-- Artículo 9: Errores web pymes
-- Imagen actual: errores-web-pymes.webp ✓ BIEN (wireframe, diseño técnico)
-- No cambiar


-- 🔄 MEJORAR (Cambios recomendados)
-- ----------------------------------------

-- Artículo 1: Guía SEO Local 2025 ⭐ (DESTACADO)
-- Anterior: guia-seo-local-2025.webp (Murcia tranquila - ciudad vacía)
-- MEJOR: ceo-ciudad.webp (profesional, negocio, más impactante)
UPDATE articles 
SET featured_image = 'ceo-ciudad.webp'
WHERE slug = 'guia-seo-local-2025';

-- Artículo 2: Cómo mejorar SEO local
-- Anterior: como-mejorar-seo-local.webp (Murcia nocturna - muy oscura)
-- MEJOR: firefly-city-daylight.webp (ciudad vibrante, profesional)
UPDATE articles 
SET featured_image = 'firefly-city-daylight.webp'
WHERE slug = 'como-mejorar-seo-local';

-- Artículo 3: Tendencias diseño web 2025
-- Anterior: tendencias-diseno-web-2025.webp (¡camper cyberpunk! - fuera de contexto)
-- MEJOR: poster-wireframe.webp (diseño web real, wireframes, UX/UI)
UPDATE articles 
SET featured_image = 'poster-wireframe.webp'
WHERE slug = 'tendencias-diseno-web-2025';

-- Artículo 5: IA en marketing
-- Anterior: ia-en-marketing.webp (mono extraño con voltios - poco profesional)
-- MEJOR: chatgpt-jun-8.webp (ChatGPT real, herramienta reconocible)
UPDATE articles 
SET featured_image = 'chatgpt-jun-8.webp'
WHERE slug = 'ia-en-marketing';

-- Artículo 6: Redes sociales para empresas locales
-- Anterior: redes-sociales-empresas-locales.webp (mono otra vez - poco serio)
-- MEJOR: laura-portrait-1.webp (persona real, profesional, social media vibe)
UPDATE articles 
SET featured_image = 'laura-portrait-1.webp'
WHERE slug = 'redes-sociales-empresas-locales';

-- Artículo 7: Email marketing que convierte
-- Anterior: email-marketing-que-convierte.webp (ciudad genérica - no relacionado)
-- MEJOR: laura-living-room-1.webp (persona trabajando, comunicación, profesional)
UPDATE articles 
SET featured_image = 'laura-living-room-1.webp'
WHERE slug = 'email-marketing-que-convierte';


-- =====================================================
-- VERIFICACIÓN
-- =====================================================
-- Consulta para ver todas las imágenes actualizadas
SELECT 
  slug, 
  title, 
  featured_image,
  CASE 
    WHEN slug IN ('google-ads-vs-facebook-ads', 'optimizar-google-my-business', 'errores-web-pymes') 
    THEN '✅ Mantener'
    ELSE '🔄 Actualizada'
  END as status
FROM articles 
WHERE published = true
ORDER BY 
  CASE 
    WHEN featured = true THEN 0 
    ELSE 1 
  END,
  published_at DESC;


-- =====================================================
-- NOTAS IMPORTANTES
-- =====================================================
-- 
-- ANTES vs DESPUÉS:
-- 
-- ❌ ANTES (Problemas):
-- - Camper en artículo de diseño web → Fuera de contexto
-- - Monos raros en artículos profesionales → Poco serio
-- - Ciudades vacías/oscuras → No transmite acción
-- 
-- ✅ DESPUÉS (Mejoras):
-- - Imágenes relacionadas con el tema específico
-- - Profesionales y modernas
-- - Personas reales para temas de comunicación
-- - Herramientas reconocibles (ChatGPT)
-- - Diseños técnicos para temas de diseño
-- 
-- OPTIMIZACIÓN LOGRADA:
-- - chatgpt-jun-8: 2.2 MB → 219 KB (90% reducción)
-- - chatgpt-ago-30: 2.9 MB → 72 KB (97.5% reducción)
-- - laura-*.webp: Ya optimizadas
-- 
-- =====================================================



