-- =====================================================
-- SCRIPT DE DIAGNÓSTICO - PORTFOLIO
-- =====================================================
-- Ejecutar este script PRIMERO para diagnosticar el problema

-- 1. VERIFICAR SI LA TABLA EXISTE
SELECT EXISTS (
   SELECT FROM information_schema.tables 
   WHERE table_schema = 'public'
   AND table_name = 'portfolio_projects'
) as tabla_existe;

-- 2. CONTAR PROYECTOS PUBLICADOS
SELECT COUNT(*) as total_proyectos_publicados
FROM portfolio_projects
WHERE published = true;

-- 3. BUSCAR PROYECTOS POR SLUG
SELECT 
  slug,
  title,
  client,
  meta_title,
  published,
  created_at
FROM portfolio_projects
WHERE slug IN ('furgocasa-alquiler-camper', 'acttax-asesoria-fiscal');

-- 4. VER TODOS LOS PROYECTOS (PARA VERIFICAR)
SELECT 
  id,
  slug,
  title,
  client,
  published,
  featured
FROM portfolio_projects
ORDER BY order_position;

-- =====================================================
-- INTERPRETACIÓN DE RESULTADOS:
-- =====================================================

-- Si "tabla_existe" = false:
--   → Ejecutar primero: supabase-schema.sql

-- Si "total_proyectos_publicados" = 0:
--   → Ejecutar: EJECUTAR-AHORA-supabase-portfolio-COMPLETO.sql

-- Si los slugs no aparecen:
--   → Ejecutar: EJECUTAR-AHORA-supabase-portfolio-COMPLETO.sql

-- Si los slugs aparecen pero published = false:
--   → Ejecutar: UPDATE portfolio_projects SET published = true WHERE slug IN ('furgocasa-alquiler-camper', 'acttax-asesoria-fiscal');

