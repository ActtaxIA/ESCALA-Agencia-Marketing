# Portfolio - Imágenes de Proyectos

## Estructura de carpetas

Cada proyecto tiene su propia carpeta donde debes subir las capturas de pantalla:

### 📂 Proyectos:

1. **furgocasa-alquiler-camper/** - www.furgocasa.com
2. **mapa-furgocasa-ia/** - www.mapafurgocasa.com
3. **tricholand-tienda-cactus/** - www.tricholand.com
4. **acttax-asesoria-fiscal/** - www.acttax.es
5. **gvc-expertos-abogados/** - www.gvcexpertos.com
6. **gvc-abogados-murcia/** - www.gvcabogados.com
7. **casi-cinco-recomendaciones/** - www.casicinco.com
8. **hakadogs-adiestramiento-canino/** - www.hakadogs.com
9. **on-procuradores-murcia/** - www.onprocuradores.com

## 📸 Qué imágenes subir:

En cada carpeta, sube:
- `hero.jpg` o `hero.png` - Imagen principal (captura del home)
- `screenshot-1.jpg` - Captura adicional (opcional)
- `screenshot-2.jpg` - Captura adicional (opcional)
- `screenshot-3.jpg` - Captura adicional (opcional)

## 🔧 Después de subir las imágenes:

1. Ejecuta en Supabase SQL Editor:

```sql
-- Actualizar imagen principal de cada proyecto
UPDATE portfolio_projects SET featured_image = '/portfolio/furgocasa-alquiler-camper/hero.jpg' WHERE slug = 'furgocasa-alquiler-camper';
UPDATE portfolio_projects SET featured_image = '/portfolio/mapa-furgocasa-ia/hero.jpg' WHERE slug = 'mapa-furgocasa-ia';
UPDATE portfolio_projects SET featured_image = '/portfolio/tricholand-tienda-cactus/hero.jpg' WHERE slug = 'tricholand-tienda-cactus';
UPDATE portfolio_projects SET featured_image = '/portfolio/acttax-asesoria-fiscal/hero.jpg' WHERE slug = 'acttax-asesoria-fiscal';
UPDATE portfolio_projects SET featured_image = '/portfolio/gvc-expertos-abogados/hero.jpg' WHERE slug = 'gvc-expertos-abogados';
UPDATE portfolio_projects SET featured_image = '/portfolio/gvc-abogados-murcia/hero.jpg' WHERE slug = 'gvc-abogados-murcia';
UPDATE portfolio_projects SET featured_image = '/portfolio/casi-cinco-recomendaciones/hero.jpg' WHERE slug = 'casi-cinco-recomendaciones';
UPDATE portfolio_projects SET featured_image = '/portfolio/hakadogs-adiestramiento-canino/hero.jpg' WHERE slug = 'hakadogs-adiestramiento-canino';
UPDATE portfolio_projects SET featured_image = '/portfolio/on-procuradores-murcia/hero.jpg' WHERE slug = 'on-procuradores-murcia';
```

2. Para las galerías (opcional):

```sql
UPDATE portfolio_projects SET gallery_images = ARRAY[
  '/portfolio/nombre-proyecto/screenshot-1.jpg',
  '/portfolio/nombre-proyecto/screenshot-2.jpg',
  '/portfolio/nombre-proyecto/screenshot-3.jpg'
] WHERE slug = 'nombre-proyecto';
```

## 📐 Recomendaciones de tamaño:

- **hero.jpg**: 1200x800px o similar (landscape)
- **screenshots**: 1200x800px o más (depende de la página)
- Formato: JPG o PNG
- Calidad: Alta (para que se vean bien en la web)





