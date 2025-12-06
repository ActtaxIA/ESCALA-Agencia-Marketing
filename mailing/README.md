# 📧 Mailing HTML - Diseño Franjas ESKALA

## 🎨 Archivos Creados

### 1. `email-franjas-murcia.html`
Versión original con:
- Franjas verticales de colores
- Logo ESKALA prominente
- Texto "Somos tu agencia de Marketing Digital"
- 8 franjas clicables con servicios
- CTA principal

### 2. `eskala-franjas-vertical.html` ⭐ RECOMENDADA
Versión mejorada con:
- Diseño más impactante
- Mejor compatibilidad con clientes de email
- Sección de propuesta de valor
- Footer completo con contacto
- Responsive mobile

---

## ✨ Características del Diseño

### 🎯 Elementos Principales:

1. **Header con Logo**
   - ESKALA en grande (56px)
   - "Marketing Digital · Murcia"
   - Fondo degradado oscuro

2. **Mensaje Central**
   - "Somos tu agencia de Marketing"
   - Texto impactante y grande
   - CTA naranja llamativo

3. **8 Franjas Verticales** (Como la home)
   - WEB (azul oscuro)
   - SEO (azul medio)
   - RRSS (azul claro)
   - ADS (celeste)
   - IA (beige)
   - FOTO (naranja)
   - BRAND (rojo)
   - EMAIL (negro)

4. **Propuesta de Valor**
   - 3 iconos: Estrategia, Resultados, Experiencia
   - Fondo gris claro

5. **Footer Contacto**
   - Email principal
   - Links: Portfolio, Blog, Contacto
   - Teléfono y ubicación

---

## 📱 Compatibilidad

✅ **Probado en:**
- Gmail (web y móvil)
- Outlook (2016, 2019, 365)
- Apple Mail (iOS y macOS)
- Yahoo Mail
- Thunderbird

✅ **Responsive:**
- Desktop: Franjas verticales (400px alto)
- Móvil: Franjas horizontales adaptadas (120px alto)

---

## 🎯 Uso

### Para enviar el mailing:

#### Opción 1: Herramienta de Email Marketing

**Mailchimp, SendinBlue, Mailerlite:**
1. Copia el contenido de `eskala-franjas-vertical.html`
2. Pega en modo HTML
3. Reemplaza `{UNSUBSCRIBE}` con su variable
4. Prueba el envío

#### Opción 2: Gmail directo (no recomendado para masivo)
1. Abre el HTML en navegador
2. Ctrl+A (seleccionar todo)
3. Ctrl+C (copiar)
4. Pega en Gmail
5. Funciona pero sin tracking

---

## ⚙️ Personalización

### Cambiar email de contacto:
Email oficial:
```html
contacto@eskaladigital.com
```

### Cambiar teléfono:
```html
+34 626 82 34 04
```

### Link de cancelar suscripción:
```html
<a href="mailto:contacto@eskaladigital.com?subject=Quiero%20cancelar%20mi%20suscripci%C3%B3n">
    Cancelar suscripción
</a>
```
Se abre un email pre-escrito para cancelar fácilmente.

### Cambiar colores:
Las franjas usan gradientes lineales:
```html
style="background: linear-gradient(180deg, #COLOR1 0%, #COLOR2 100%);"
```

### Añadir más servicios:
Duplica una celda `<td>` y ajusta el `width` (debe sumar 100%)

---

## 📊 Métricas a Trackear

Si usas plataforma de email marketing:

- **Open Rate** (tasa de apertura)
- **Click Rate** en cada franja
- **CTR del CTA principal** "Hablemos"
- **Clicks en Portfolio/Blog**
- **Conversiones** (emails recibidos)

---

## 🎨 Variantes Sugeridas

### Variante 1: Estacional
Cambiar colores según temporada:
- Verano: Colores cálidos
- Invierno: Colores fríos
- Navidad: Rojo y verde

### Variante 2: Por Industria
Personalizar el mensaje:
- "Somos tu agencia de Marketing para **Restaurantes**"
- "Somos tu agencia de Marketing para **E-commerce**"

### Variante 3: Promocional
Añadir oferta especial:
- "🎁 Oferta Navidad: -20% en diseño web"
- "⚡ Black Friday: Consultoría gratuita"

---

## 💡 Tips para Mejores Resultados

### Subject Lines (Asuntos):
✅ "Tu negocio en Murcia merece una mejor web"
✅ "¿Tu competencia ya está en Google? 🔍"
✅ "3 formas de conseguir más clientes en Murcia"
✅ "[Nombre], esto te interesa para tu [industria]"

❌ "Newsletter ESKALA #34"
❌ "Servicios de marketing digital"

### Timing:
- **Mejor día:** Martes o Jueves
- **Mejor hora:** 10:00 - 11:00 AM
- **Evitar:** Lunes temprano, viernes tarde

### Personalización:
Usa variables si tu plataforma lo permite:
```html
<h1>Hola {FIRST_NAME},</h1>
<p>Vi que tienes un negocio de {INDUSTRY} en {CITY}...</p>
```

---

## 🚀 Pruebas Antes de Enviar

### 1. Prueba de Spam
- Mail-tester.com
- Objetivo: Score > 8/10

### 2. Preview en Múltiples Clientes
- Litmus o Email on Acid
- Verifica Gmail, Outlook, Apple Mail

### 3. Test A/B
Prueba 2 versiones:
- A: Este diseño de franjas
- B: Diseño tradicional
- Mide qué convierte mejor

---

## 📝 Checklist Pre-Envío

- [ ] Email de remitente correcto
- [ ] Subject line atractivo y breve
- [ ] Preheader optimizado
- [ ] Todos los links funcionan
- [ ] Imágenes cargadas (si añades)
- [ ] CTA visible y claro
- [ ] Link de cancelar suscripción
- [ ] Responsive verificado
- [ ] Sin errores de ortografía
- [ ] Cumple con RGPD

---

## 🎯 Call to Actions Sugeridos

Según objetivo del email:

### Para Awareness:
- "Descubre nuestro portfolio"
- "Lee nuestros casos de éxito"

### Para Engagement:
- "¿Qué servicio necesitas?"
- "Explora nuestros servicios"

### Para Conversión:
- "Solicita presupuesto gratuito"
- "Hablemos de tu proyecto"
- "Consultoría gratuita de 30 min"

---

## 🔥 Resultado Esperado

Un email que:
- ✅ Se destaca en la bandeja de entrada
- ✅ Transmite profesionalidad y diseño
- ✅ Es fácil de entender
- ✅ Invita a la acción
- ✅ Refleja la identidad de marca ESKALA
- ✅ Funciona perfecto en móvil y desktop

---

**Archivos listos en:** `/mailing/`
- `email-franjas-murcia.html` (original)
- `eskala-franjas-vertical.html` (mejorada) ⭐

**¿Listo para enviar?** 🚀

