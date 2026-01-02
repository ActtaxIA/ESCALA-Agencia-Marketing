# 📁 Scripts SQL de Supabase

Esta carpeta contiene **todos los scripts SQL** para ejecutar en Supabase.

## 📋 Estructura de Archivos

### **Schema y Datos Base**
- `supabase-schema.sql` - Schema completo de la base de datos (ejecutar PRIMERO)
- `supabase-blog-data.sql` - Datos de artículos del blog
- `supabase-portfolio-data.sql` - Datos generales del portfolio (versión antigua)

### **Proyectos del Portfolio (Ejemplos Definitivos)**
- `supabase-furgocasa-actualizado.sql` - **Proyecto Furgocasa completo** (ejemplo definitivo)
- `supabase-acttax-actualizado.sql` - **Proyecto Acttax completo** (ejemplo definitivo)

Estos dos archivos sirven como **plantilla/referencia** para crear nuevos proyectos del portfolio.

### **Actualizaciones y Mantenimiento**
- `update-blog-images-*.sql` - Scripts para actualizar imágenes del blog
- `update-portfolio-images.sql` - Script para actualizar imágenes del portfolio
- `supabase-articulo-kit-digital.sql` - Artículo específico del blog
- `supabase-empresas-murcia.sql` - Datos de empresas de Murcia

## 🎯 Cómo Usar

### **Para Nuevos Proyectos del Portfolio:**

1. **Copia** `supabase-furgocasa-actualizado.sql` o `supabase-acttax-actualizado.sql`
2. **Renombra** el archivo: `supabase-[nombre-proyecto]-actualizado.sql`
3. **Modifica** el contenido según el nuevo proyecto
4. **Ejecuta** en Supabase SQL Editor

### **Estructura de un Script de Proyecto:**

```sql
-- Eliminar registro anterior si existe
DELETE FROM portfolio_projects WHERE slug = 'slug-del-proyecto';

-- Insertar proyecto completo
INSERT INTO portfolio_projects (
  title, slug, client, industry,
  short_description, full_description,
  challenge, solution, results,
  featured_image, gallery_images,
  website_url, services, metrics,
  published, featured, order_position,
  meta_title, meta_description,
  project_date, published_at
) VALUES (
  -- ... datos del proyecto
);
```

## 📝 Convenciones de Nomenclatura

- **Schema**: `supabase-schema.sql`
- **Proyectos**: `supabase-[nombre-proyecto]-actualizado.sql`
- **Updates**: `update-[tipo]-[descripcion].sql`
- **Datos generales**: `supabase-[tipo]-data.sql`

## ⚠️ IMPORTANTE

- **TODOS los scripts SQL** deben crearse en esta carpeta (`supabase/`)
- **NO crear scripts SQL** en la carpeta raíz del proyecto
- Antes de ejecutar un script, **verifica** que no haya conflictos con datos existentes
- Los scripts de proyectos incluyen `DELETE` para evitar duplicados

## 🔄 Orden de Ejecución Recomendado

1. **Primera vez**: `supabase-schema.sql` (crear tablas)
2. **Datos base**: `supabase-blog-data.sql` (si es necesario)
3. **Proyectos**: `supabase-[proyecto]-actualizado.sql` (uno por uno)
4. **Actualizaciones**: Scripts `update-*.sql` según necesidad

