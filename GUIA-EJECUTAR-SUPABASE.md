# 🚨 SOLUCIÓN: "Proyecto no encontrado" en títulos

## ❌ Problema:
Las páginas muestran "Proyecto no encontrado" en el título del navegador porque **los datos NO están en Supabase**.

## ✅ Solución Rápida (5 minutos):

### Paso 1: Abrir Supabase
1. Ve a https://supabase.com
2. Inicia sesión en tu proyecto
3. Click en "SQL Editor" en el menú lateral

### Paso 2: Ejecutar Script
1. Abre el archivo: `EJECUTAR-PRIMERO-supabase-portfolio.sql`
2. **Copia TODO el contenido** (Ctrl+A, Ctrl+C)
3. **Pega en Supabase SQL Editor** (Ctrl+V)
4. Click en el botón **"RUN"** o **"Ejecutar"**

### Paso 3: Verificar
El script debería devolver una tabla con 2 filas:
```
slug                        | title                  | client    | published
----------------------------|------------------------|-----------|----------
furgocasa-alquiler-camper   | Furgocasa: Plataforma  | Furgocasa | true
acttax-asesoria-fiscal      | Acttax: Transformación | Acttax    | true
```

### Paso 4: Probar
1. Refresca tu web: https://www.eskaladigital.com/portfolio/furgocasa-alquiler-camper
2. El título del navegador debería mostrar: **"Furgocasa | Caso de Éxito Marketing Digital | ESKALA Portfolio"**
3. Prueba también: https://www.eskaladigital.com/portfolio/acttax-asesoria-fiscal
4. Debería mostrar: **"Acttax | Caso de Éxito Web y SEO B2B | ESKALA Portfolio"**

## 🎯 ¿Qué hace el script?

Inserta 2 proyectos completos en tu base de datos:
- ✅ **Furgocasa** con 7 imágenes para el carrusel
- ✅ **Acttax** con 2 imágenes para el carrusel
- ✅ Todos los meta_title configurados correctamente
- ✅ Métricas, descripciones, enlaces, etc.

## ⚠️ Si hay error:

**Error: "table portfolio_projects does not exist"**
- Primero debes ejecutar: `supabase-schema.sql`
- Luego ejecuta: `EJECUTAR-PRIMERO-supabase-portfolio.sql`

**Error: "duplicate key value"**
- Los proyectos ya existen
- Puedes ejecutar solo las líneas DELETE y luego los INSERT

## 📊 Después de ejecutar:

### En el Portfolio principal (`/portfolio`):
- Verás 2 proyectos (Furgocasa y Acttax)
- Cada uno clickeable
- Con imágenes y descripciones

### En las páginas individuales:
- ✅ Título correcto en el navegador
- ✅ Carrusel con imágenes
- ✅ Métricas destacadas
- ✅ Contenido completo
- ✅ Enlaces al sitio web del cliente

## 🔄 Orden de ejecución recomendado:

1. **PRIMERO:** `supabase-schema.sql` (si es la primera vez)
2. **SEGUNDO:** `EJECUTAR-PRIMERO-supabase-portfolio.sql` (este archivo)
3. **TERCERO:** Refrescar la web y verificar

## 💡 Nota sobre el contenido full_description:

Los scripts incluyen texto resumido en `full_description`. 

Si quieres el contenido completo en Markdown (+400 líneas):
- Ejecuta también: `supabase-furgocasa-actualizado.sql`
- Y: `supabase-acttax-actualizado.sql`

Pero el script actual ya funciona perfectamente para mostrar las páginas.

---

**¿Necesitas ayuda?** Revisa que:
1. ✅ Estás en el proyecto correcto de Supabase
2. ✅ La tabla `portfolio_projects` existe
3. ✅ Ejecutaste el script completo (no solo una parte)





