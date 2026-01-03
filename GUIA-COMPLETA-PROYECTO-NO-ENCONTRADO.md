# 🚨 SOLUCIÓN: "Proyecto no encontrado" en títulos

## 🔍 DIAGNÓSTICO DEL PROBLEMA

El título muestra "Proyecto no encontrado" porque **los datos NO están en la base de datos de Supabase** o **la conexión no funciona**.

## ✅ SOLUCIÓN PASO A PASO

### **PASO 1: Verificar Supabase**

1. Abre https://supabase.com
2. Inicia sesión
3. Ve a tu proyecto de ESKALA Marketing
4. Click en **"SQL Editor"** (menú lateral izquierdo)

### **PASO 2: Diagnosticar**

1. En SQL Editor, copia y pega el contenido de: `DIAGNOSTICO-portfolio.sql`
2. Click en **"RUN"**
3. Mira los resultados:

**Resultado A: "tabla_existe = false"**
- La tabla no existe
- **Solución**: Ejecuta primero `supabase-schema.sql`
- Luego continúa con PASO 3

**Resultado B: "total_proyectos_publicados = 0"**
- La tabla existe pero está vacía
- **Solución**: Continúa con PASO 3

**Resultado C: Los slugs NO aparecen en la consulta**
- Los proyectos no están insertados
- **Solución**: Continúa con PASO 3

**Resultado D: Los slugs SÍ aparecen pero `published = false`**
- Los proyectos existen pero no están publicados
- **Solución**: Ejecuta este comando:
  ```sql
  UPDATE portfolio_projects 
  SET published = true 
  WHERE slug IN ('furgocasa-alquiler-camper', 'acttax-asesoria-fiscal');
  ```

### **PASO 3: Insertar los Proyectos (SI NO EXISTEN)**

1. Abre el archivo: `EJECUTAR-AHORA-supabase-portfolio-COMPLETO.sql`
2. **COPIA TODO EL CONTENIDO** (Ctrl+A, Ctrl+C)
3. En Supabase SQL Editor, **PEGA** (Ctrl+V)
4. Click en **"RUN"**
5. **Deberías ver**: Una tabla con 2 filas (Furgocasa y Acttax)

### **PASO 4: Verificar Variables de Entorno**

1. Verifica que exista el archivo `.env.local` en la raíz del proyecto
2. Debe contener:
   ```
   NEXT_PUBLIC_SUPABASE_URL=tu-url-de-supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-clave-anonima
   ```
3. **IMPORTANTE**: Estos valores los obtienes en:
   - Supabase Dashboard → Settings → API
   - Copia "Project URL" → Pega en `NEXT_PUBLIC_SUPABASE_URL`
   - Copia "anon public" key → Pega en `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### **PASO 5: Reiniciar el Servidor (SI ES LOCAL)**

Si estás probando en local:
```bash
# Detener el servidor (Ctrl+C)
# Luego ejecutar:
npm run dev
```

Si está desplegado en AWS Amplify:
- Los cambios en Supabase se reflejan **inmediatamente**
- NO necesitas redesplegar la aplicación
- Solo refresca el navegador

### **PASO 6: Probar**

1. Abre en el navegador:
   - https://www.eskaladigital.com/portfolio/furgocasa-alquiler-camper
   - https://www.eskaladigital.com/portfolio/acttax-asesoria-fiscal

2. **Revisa el título de la pestaña del navegador**:
   - ✅ Correcto: "Furgocasa | Caso de Éxito Marketing Digital | ESKALA Portfolio"
   - ❌ Incorrecto: "Proyecto no encontrado | ESKALA Marketing"

## 🔧 SI AÚN NO FUNCIONA

### Opción A: Revisar en Consola del Navegador

1. Abre la página del proyecto
2. Presiona F12 (Herramientas de desarrollador)
3. Ve a la pestaña "Console"
4. ¿Hay errores? Cópialos y dime cuáles son

### Opción B: Verificar en Supabase Table Editor

1. Supabase Dashboard → Table Editor
2. Busca la tabla `portfolio_projects`
3. ¿Ves los proyectos Furgocasa y Acttax?
4. ¿El campo `published` está en `true`?
5. ¿El campo `slug` coincide exactamente con la URL?
   - Debe ser: `furgocasa-alquiler-camper` (sin espacios, guiones bajos, etc.)

### Opción C: Verificar Logs de Amplify

Si está desplegado en AWS Amplify:
1. AWS Amplify Console
2. Tu app → Hosting → View Logs
3. ¿Hay errores relacionados con Supabase?

## 📊 CHECKLIST COMPLETO

- [ ] Ejecutar `DIAGNOSTICO-portfolio.sql` en Supabase
- [ ] Verificar que la tabla `portfolio_projects` existe
- [ ] Ejecutar `EJECUTAR-AHORA-supabase-portfolio-COMPLETO.sql`
- [ ] Confirmar que aparecen 2 proyectos con `published = true`
- [ ] Verificar archivo `.env.local` con credenciales de Supabase
- [ ] Reiniciar servidor local (si aplica)
- [ ] Refrescar navegador (Ctrl+F5 para forzar)
- [ ] Revisar título de la pestaña del navegador

## 💡 NOTA IMPORTANTE

**El código de Next.js está correcto**. El problema es 100% de datos:
- O los proyectos no están en Supabase
- O las variables de entorno no están configuradas
- O la conexión a Supabase no funciona

**No necesitas modificar el código**. Solo necesitas que los datos estén en Supabase.

---

**¿Necesitas ayuda con alguno de estos pasos?** Dime qué resultado obtuviste en el PASO 2 (Diagnóstico).





