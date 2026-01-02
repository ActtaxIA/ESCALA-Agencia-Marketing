-- =====================================================
-- VERIFICACIÓN SIMPLE Y RÁPIDA
-- =====================================================
-- Este script verifica EXACTAMENTE qué hay en tu base de datos

-- 1. ¿Existen los proyectos?
SELECT 
  slug,
  title,
  meta_title,
  published,
  LENGTH(full_description) as longitud_contenido
FROM portfolio_projects
WHERE slug IN ('furgocasa-alquiler-camper', 'acttax-asesoria-fiscal');

-- 2. Si NO aparecen resultados arriba:
--    → Los proyectos NO están en la base de datos
--    → DEBES ejecutar: EJECUTAR-AHORA-supabase-portfolio-COMPLETO.sql

-- 3. Si SÍ aparecen pero published = false:
--    → Ejecuta este comando:
UPDATE portfolio_projects 
SET published = true 
WHERE slug IN ('furgocasa-alquiler-camper', 'acttax-asesoria-fiscal');

-- 4. Si aparecen y published = true:
--    → El problema es de CACHÉ
--    → Sigue las instrucciones de LIMPIEZA DE CACHÉ más abajo

-- =====================================================
-- RESULTADO ESPERADO (si todo está bien):
-- =====================================================
-- slug                      | title                              | meta_title                        | published | longitud
-- furgocasa-alquiler-camper | Furgocasa: Plataforma Completa... | Furgocasa | Caso de Éxito...    | true      | ~5800
-- acttax-asesoria-fiscal    | Acttax: Transformación Digital... | Acttax | Caso de Éxito Web...  | true      | ~9400

