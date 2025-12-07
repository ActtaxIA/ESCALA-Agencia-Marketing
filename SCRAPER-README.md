# 🚀 SCRAPER DE EMPRESAS MURCIA

Sistema automático para encontrar empresas en Murcia con sus datos de contacto.

---

## 📋 ¿Qué hace este scraper?

1. **Busca empresas** en Google Maps por categorías (restaurantes, hoteles, etc.)
2. **Extrae datos**:
   - Nombre
   - Dirección
   - Teléfono
   - Web
   - Rating y reviews
   - **Email** (scrapeando la web si existe)
3. **Guarda en Supabase** para luego enviar mailings
4. **Exporta CSV** con todos los datos

---

## ⚙️ INSTALACIÓN

### 1. Instalar dependencias:

```bash
npm install
```

Esto instalará:
- `serpapi` - Para buscar en Google Maps
- `axios` - Para hacer requests HTTP
- `cheerio` - Para scraping de webs
- `dotenv` - Para variables de entorno
- `@supabase/supabase-js` - Para guardar en DB

---

### 2. Configurar Supabase:

Ve a tu proyecto de Supabase y ejecuta el SQL:

**Archivo:** `supabase-empresas-murcia.sql`

Esto creará:
- ✅ Tabla `empresas_murcia`
- ✅ Índices optimizados
- ✅ Trigger para `updated_at`
- ✅ Vistas útiles (empresas con email, sin contactar, stats)

---

### 3. Variables de entorno:

Ya están configuradas en `.env.local`:

```env
SERPAPI_KEY=tu_api_key_ya_configurada
SUPABASE_URL=tu_url_ya_configurada
SUPABASE_KEY=tu_key_ya_configurada
```

---

## 🚀 USO

### Ejecutar el scraper:

```bash
npm run scraper
```

El script hará:

1. ✅ Verifica conexión a Supabase
2. 🔍 Busca en 24 categorías de empresas:
   - Restaurantes, hoteles, gimnasios
   - Peluquerías, abogados, dentistas
   - Clínicas, ópticas, inmobiliarias
   - Talleres, autoescuelas, tiendas
   - Cafeterías, panaderías, estéticas
   - Fisios, veterinarios, ferreterías
   - Floristerías, joyerías, agencias
   - Papelerías, librerías, zapaterías
3. 📧 Intenta extraer el email de cada web
4. 💾 Guarda todo en Supabase
5. 📊 Exporta CSV con los resultados
6. 📈 Muestra estadísticas finales

---

## 📊 ESTADÍSTICAS

Al finalizar verás algo como:

```
═══════════════════════════════════════
📊 ESTADÍSTICAS FINALES
═══════════════════════════════════════
Categorías buscadas:     24
Empresas encontradas:    380
Empresas guardadas:      375
Con teléfono:            342 (90%)
Con web:                 298 (78%)
Con email:               156 (41%)
Errores:                 5
═══════════════════════════════════════
```

---

## 📁 RESULTADO

### 1. Base de datos Supabase:

Tabla `empresas_murcia` con:
- ✅ Nombre, dirección, teléfono
- ✅ Web y email
- ✅ Rating y reviews
- ✅ Categoría y ubicación GPS
- ✅ Campos para tracking de marketing

### 2. Archivo CSV:

Se genera automáticamente:
```
empresas-murcia-2025-12-07.csv
```

Puedes abrirlo en Excel/Google Sheets.

---

## 🎯 USAR LOS DATOS PARA MAILING

### Ver empresas con email:

```sql
SELECT * FROM empresas_con_email
ORDER BY rating DESC
LIMIT 100;
```

### Ver empresas sin contactar:

```sql
SELECT * FROM empresas_sin_contactar
ORDER BY rating DESC, reviews DESC;
```

### Marcar como contactada:

```sql
UPDATE empresas_murcia
SET 
  email_enviado = true,
  fecha_primer_contacto = NOW(),
  campana = 'Navidad 2025'
WHERE email = 'empresa@ejemplo.com';
```

### Ver estadísticas por categoría:

```sql
SELECT * FROM stats_por_categoria;
```

---

## 💰 COSTOS DE SERPAPI

SerpAPI cobra por búsqueda:

- **Plan gratis:** 100 búsquedas/mes
- **Plan básico:** $50/mes = 5,000 búsquedas
- **Este script:** ~24 búsquedas (una por categoría)

**Costo estimado:** $0.24 por ejecución completa

---

## ⚙️ PERSONALIZAR

### Añadir más categorías:

Edita `scripts/scraper-empresas-murcia.js`:

```javascript
const CATEGORIAS = [
  'restaurante',
  'hotel',
  // ... añade aquí
  'tu nueva categoría'
];
```

### Cambiar ciudad:

```javascript
await buscarEmpresasConSerpAPI(categoria, 'Cartagena');
```

### Cambiar número de resultados por búsqueda:

```javascript
const params = {
  // ...
  num: 20 // Máximo 20, cambia aquí
};
```

---

## 🔒 LEGAL (RGPD)

✅ **Es legal** si:
- Los emails son públicos (están en sus webs)
- Ofreces cancelar suscripción (opt-out)
- Es B2B (empresa a empresa)
- No haces spam masivo

⚠️ **Recomendaciones:**
- Personaliza los emails
- Envía máximo 50-100 por día
- Usa el sistema de consent modal que ya creamos
- Marca en DB quién respondió

---

## 🛠️ TROUBLESHOOTING

### Error: "Failed to connect to Supabase"

➡️ Verifica que ejecutaste el SQL: `supabase-empresas-murcia.sql`

### Error: "SerpAPI limit exceeded"

➡️ Has superado tu límite mensual. Espera al siguiente mes o upgrade.

### Error: "Cannot find module 'serpapi'"

➡️ Ejecuta: `npm install`

### Pocas empresas con email

➡️ Normal. Solo ~40% de empresas locales tienen email público en su web.

---

## 📈 PRÓXIMOS PASOS

1. **Ejecuta el scraper:**
   ```bash
   npm run scraper
   ```

2. **Revisa los datos en Supabase**

3. **Exporta empresas con email:**
   ```bash
   # El CSV se genera automáticamente
   ```

4. **Crea campaña de mailing:**
   - Usa los emails HTML que creamos
   - Personaliza por categoría
   - Envía con herramienta de email marketing

5. **Trackea resultados:**
   - Marca en DB quién abrió
   - Quién respondió
   - Quién se convirtió en cliente

---

## 🎯 EJEMPLO DE WORKFLOW

```bash
# 1. Buscar empresas
npm run scraper

# 2. Ver resultados en Supabase
# (abre Supabase → Table Editor → empresas_murcia)

# 3. Exportar solo con email
# (el CSV ya se generó)

# 4. Importar a Mailchimp/SendinBlue
# (usar el CSV generado)

# 5. Enviar campaña con los emails HTML de /mailing/

# 6. Marcar como contactadas en Supabase
UPDATE empresas_murcia 
SET email_enviado = true, 
    campana = 'Lanzamiento ESKALA'
WHERE email IS NOT NULL;
```

---

## 📞 SOPORTE

Si algo no funciona:
1. Revisa que todas las dependencias estén instaladas
2. Verifica que el SQL se ejecutó en Supabase
3. Comprueba las credenciales en `.env.local`
4. Mira los logs del script (son muy descriptivos)

---

**¡Listo para conseguir leads! 🚀**



