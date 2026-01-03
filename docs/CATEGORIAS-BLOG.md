# 📚 CATEGORÍAS DEL BLOG - DOCUMENTACIÓN

## 🎯 CATEGORÍAS EN LA PÁGINA /BLOG (Frontend)

### Filtros Superiores (BlogHero.tsx)
Botones de filtro rápido que aparecen debajo del buscador:

1. **📚 Todos** - Muestra todos los artículos
2. **📈 SEO** - Artículos de SEO y posicionamiento
3. **🎨 Diseño Web** - Artículos de diseño web
4. **📱 Redes Sociales** - Artículos de redes sociales
5. **🎯 Publicidad** - Artículos de publicidad digital
6. **🤖 IA** - Artículos de IA y estrategia digital
7. **📧 Email** - Artículos de email marketing

---

## 🗂️ CATEGORÍAS EN SUPABASE (Base de Datos)

### Nombres completos que deben estar en la tabla `categories`:

1. **SEO y Posicionamiento** (color: #4a7c9b, icono: 📈)
2. **SEO** (color: #4a7c9b, icono: 📈)
3. **Diseño Web** (color: #87ceeb, icono: 🎨)
4. **Redes Sociales** (color: #ffb366, icono: 📱)
5. **Publicidad Digital** (color: #ff6b35, icono: 🎯)
6. **Estrategia Digital** (color: #1e3a5f, icono: 🤖)
7. **IA** (color: #1e3a5f, icono: 🤖)
8. **Email** (color: #e84a23, icono: 📧)
9. **Copywriting** (color: #9b59b6, icono: ✍️)
10. **Casos de Estudio** (color: #27ae60, icono: 📋)

---

## 🔗 MAPEO ENTRE FILTROS Y CATEGORÍAS

El `categoryMapping` en `BlogGrid.tsx` conecta los filtros con las categorías de Supabase:

```javascript
const categoryMapping = {
  'all': [],                              // Muestra todas
  'seo': ['SEO', 'SEO y Posicionamiento'], // Mapea a 2 categorías
  'diseno': ['Diseño Web'],
  'redes': ['Redes Sociales'],
  'ads': ['Publicidad Digital'],
  'ia': ['IA', 'Estrategia Digital'],     // Mapea a 2 categorías
  'email': ['Email'],
  'casos': ['Casos de Estudio']            // Solo sidebar
}
```

---

## ⚠️ CATEGORÍAS FALTANTES EN FILTROS SUPERIORES

Estas categorías **SOLO** aparecen en el **sidebar derecho**:
- **✍️ Copywriting**
- **📋 Casos de Estudio**

---

## 🔍 VERIFICAR CATEGORÍAS EN SUPABASE

Ejecuta este script SQL para ver qué categorías existen actualmente:

**Archivo:** `supabase/check-blog-categories.sql`

Este script te mostrará:
1. ✅ Todas las categorías existentes
2. 📊 Cuántos artículos tiene cada categoría
3. ⚠️ Artículos sin categoría asignada
4. 📝 Lista completa de artículos con sus categorías

---

## 💡 RECOMENDACIONES

1. **Consistencia:** Los nombres en Supabase deben coincidir exactamente con los del `categoryStyles`
2. **Slugs:** Cada categoría en Supabase debería tener un slug único
3. **Sin categoría:** Asignar una categoría a todos los artículos
4. **Copywriting:** Si no se usa, considerar eliminarla o agregarla a los filtros superiores
5. **Casos de Estudio:** Considerar agregarlo a los filtros superiores si es importante

---

## 📝 PRÓXIMOS PASOS

1. Ejecutar `check-blog-categories.sql` en Supabase
2. Verificar que todas las categorías necesarias existan
3. Asignar categorías a artículos sin categoría
4. Considerar agregar "Casos de Estudio" a filtros superiores

