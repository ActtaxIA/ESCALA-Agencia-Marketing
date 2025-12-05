-- Actualizar imágenes destacadas de los proyectos de portfolio
-- Ejecutar en Supabase SQL Editor

UPDATE portfolio_projects SET featured_image = '/portfolio/furgocasa-alquiler-camper.jpg' WHERE slug = 'furgocasa-alquiler-camper';
UPDATE portfolio_projects SET featured_image = '/portfolio/mapa-furgocasa-ia.jpg' WHERE slug = 'mapa-furgocasa-ia';
UPDATE portfolio_projects SET featured_image = '/portfolio/tricholand-tienda-cactus.jpg' WHERE slug = 'tricholand-tienda-cactus';
UPDATE portfolio_projects SET featured_image = '/portfolio/acttax-asesoria-fiscal.jpg' WHERE slug = 'acttax-asesoria-fiscal';
UPDATE portfolio_projects SET featured_image = '/portfolio/gvc-expertos-abogados.jpg' WHERE slug = 'gvc-expertos-abogados';
UPDATE portfolio_projects SET featured_image = '/portfolio/gvc-abogados-murcia.jpg' WHERE slug = 'gvc-abogados-murcia';
UPDATE portfolio_projects SET featured_image = '/portfolio/casi-cinco-recomendaciones.jpg' WHERE slug = 'casi-cinco-recomendaciones';
UPDATE portfolio_projects SET featured_image = '/portfolio/hakadogs-adiestramiento-canino.jpg' WHERE slug = 'hakadogs-adiestramiento-canino';
UPDATE portfolio_projects SET featured_image = '/portfolio/on-procuradores-murcia.jpg' WHERE slug = 'on-procuradores-murcia';

-- Verificar que se actualizaron correctamente
SELECT slug, featured_image FROM portfolio_projects WHERE published = true ORDER BY order_position;

