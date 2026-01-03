# 🔴 SOLUCIÓN INMEDIATA: Título "Proyecto no encontrado"

## 📌 PASO A PASO (Hazlo EN ORDEN)

### **PASO 1: Verificar Base de Datos**

1. Abre **Supabase** (https://supabase.com)
2. Ve a **SQL Editor**
3. Copia y pega el contenido de: **`VERIFICACION-RAPIDA.sql`**
4. Click **"RUN"**

**Resultado A: NO aparece nada (0 filas)**
→ Los proyectos NO están en Supabase
→ **SOLUCIÓN**: Continúa con PASO 2

**Resultado B: SÍ aparece 1 o 2 filas**
→ Los proyectos SÍ están en Supabase
→ **SOLUCIÓN**: Continúa con PASO 3 (Limpiar caché)

---

### **PASO 2: Insertar Proyectos en Supabase** (Solo si PASO 1 dio 0 filas)

1. Abre el archivo: **`EJECUTAR-AHORA-supabase-portfolio-COMPLETO.sql`**
2. **SELECCIONA TODO** el contenido (Ctrl+A)
3. **COPIA** (Ctrl+C)
4. Ve a **Supabase SQL Editor**
5. **PEGA** (Ctrl+V) - Deberías ver 550 líneas de código
6. Click **"RUN"** (botón grande)
7. **ESPERA** a que termine (puede tardar 5-10 segundos)
8. Deberías ver al final una tabla con **2 filas**:
   ```
   slug                      | title                    | published
   furgocasa-alquiler-camper | Furgocasa: Plataforma... | true
   acttax-asesoria-fiscal    | Acttax: Transformación...| true
   ```

Si ves eso → ¡PERFECTO! Ahora continúa con PASO 3

---

### **PASO 3: Limpiar Caché del Navegador**

El navegador guarda el título en caché. Debes limpiarlo:

#### **Opción A: Hard Refresh (MÁS RÁPIDO)**
1. Ve a: https://www.eskaladigital.com/portfolio/furgocasa-alquiler-camper
2. Presiona: **Ctrl + Shift + R** (Windows/Linux) o **Cmd + Shift + R** (Mac)
3. O también: **Ctrl + F5**
4. Esto fuerza una recarga sin caché

#### **Opción B: Limpiar Caché Completo**
1. En el navegador, presiona **F12** (Herramientas de desarrollador)
2. Click derecho en el **botón de refrescar** 🔄 del navegador
3. Selecciona: **"Vaciar caché y volver a cargar de forma forzada"**
4. O también:
   - Chrome: Configuración → Privacidad → Borrar datos de navegación → Últimas 24 horas → Solo "Imágenes y archivos en caché"

#### **Opción C: Modo Incógnito (PARA PROBAR)**
1. Abre una ventana de **incógnito/privado**:
   - Chrome: Ctrl + Shift + N
   - Firefox: Ctrl + Shift + P
   - Edge: Ctrl + Shift + N
2. Ve a: https://www.eskaladigital.com/portfolio/furgocasa-alquiler-camper
3. ¿Funciona aquí? → Entonces es 100% problema de caché

---

### **PASO 4: Si está en AWS Amplify (Producción)**

Si el sitio está desplegado en AWS Amplify, puede que necesites:

#### **Opción 1: Invalidar Caché de CloudFront**
1. AWS Amplify Console → Tu app
2. Hosting → CloudFront distribution
3. Invalidations → Create invalidation
4. Paths: `/*` (todos los archivos)

#### **Opción 2: Redesplegar** (Si nada más funciona)
1. AWS Amplify Console → Tu app
2. Click en **"Redeploy this version"**
3. Espera 3-5 minutos
4. Prueba de nuevo

---

### **PASO 5: Verificar Variables de Entorno en Amplify**

Si aún no funciona, verifica las variables:

1. AWS Amplify Console → Tu app
2. Environment variables
3. Debe tener:
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://tu-proyecto.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = tu-clave-publica
   ```
4. Si faltan, agrégalas y **Redeploy**

Para obtener estos valores:
1. Supabase Dashboard → Settings → API
2. Copia "Project URL" → Pega en `NEXT_PUBLIC_SUPABASE_URL`
3. Copia "anon public" key → Pega en `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## ✅ CHECKLIST FINAL

Marca lo que ya hiciste:

- [ ] Ejecuté `VERIFICACION-RAPIDA.sql` en Supabase
- [ ] Vi que aparecen 2 proyectos con `published = true`
- [ ] Hice **Ctrl + Shift + R** en la página
- [ ] Probé en **modo incógnito**
- [ ] El título en incógnito SÍ funciona → Es problema de caché (limpia caché del navegador normal)
- [ ] El título en incógnito NO funciona → Verificar variables de entorno en Amplify
- [ ] Verifiqué variables de entorno en AWS Amplify
- [ ] Redespliegue en Amplify (si fue necesario)

---

## 🎯 TÍTULO CORRECTO ESPERADO

**❌ INCORRECTO:**
```
Proyecto no encontrado | ESKALA Marketing
```

**✅ CORRECTO:**
```
Furgocasa | Caso de Éxito Marketing Digital | ESKALA Portfolio
```

---

## 💬 DIME EXACTAMENTE

Para ayudarte mejor, dime:

1. **¿Ejecutaste el script SQL en Supabase?** (Sí/No)
2. **¿Qué resultado dio `VERIFICACION-RAPIDA.sql`?** (0 filas / 2 filas / otro)
3. **¿Probaste en modo incógnito?** (Sí/No)
4. **¿Funciona en incógnito?** (Sí/No)

Con esa información sabré exactamente qué está pasando.





