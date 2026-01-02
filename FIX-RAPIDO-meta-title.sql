-- =====================================================
-- FIX RÁPIDO: Actualizar meta_title de proyectos
-- =====================================================
-- Este script SOLO actualiza los meta_title si los proyectos ya existen
-- Ejecutar si los proyectos están en la BD pero el título sigue mal

-- Furgocasa
UPDATE portfolio_projects 
SET 
  meta_title = 'Furgocasa | Caso de Éxito Marketing Digital | ESKALA Portfolio',
  meta_description = 'Proyecto completo de branding, diseño web y marketing digital para Furgocasa desde 2017. +350% facturación, 70% reservas online.',
  published = true
WHERE slug = 'furgocasa-alquiler-camper';

-- Acttax
UPDATE portfolio_projects 
SET 
  meta_title = 'Acttax | Caso de Éxito Web y SEO B2B | ESKALA Portfolio',
  meta_description = 'Transformación digital para Acttax. Web con IA, SEO B2B especializado, +160% consultas. De 0 a referencia en fiscalidad.',
  published = true
WHERE slug = 'acttax-asesoria-fiscal';

-- Verificar que se actualizó
SELECT 
  slug,
  title,
  meta_title,
  published
FROM portfolio_projects
WHERE slug IN ('furgocasa-alquiler-camper', 'acttax-asesoria-fiscal');

-- DEBE MOSTRAR:
-- slug                      | title                    | meta_title                        | published
-- furgocasa-alquiler-camper | Furgocasa: Plataforma... | Furgocasa | Caso de Éxito...    | true
-- acttax-asesoria-fiscal    | Acttax: Transformación...| Acttax | Caso de Éxito Web...  | true

