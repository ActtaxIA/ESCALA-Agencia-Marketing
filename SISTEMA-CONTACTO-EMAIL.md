# 📧 Sistema de Contacto por Email con Consentimiento RGPD

## ✅ Implementado

### 🎯 Qué hace:

Reemplaza formularios complejos con un sistema simple:
1. Usuario click en "Contactar"
2. **Se muestra modal de consentimiento** (RGPD)
3. Usuario acepta política de privacidad
4. **Se abre su email** (mailto:)

### 💡 Ventajas:

✅ **Más simple** - No backend, no API, no complejidad
✅ **Más natural** - El usuario usa su propio email
✅ **Cumple RGPD** - Consentimiento explícito antes de contactar
✅ **Memoria** - Opción de recordar elección (localStorage)
✅ **Sin spam** - Email público pero con protección
✅ **Mejor UX** - No formularios largos

---

## 📦 Componentes Creados

### 1. `ConsentModal.tsx`
Modal bonito con:
- Checkbox de aceptación de política de privacidad
- Checkbox de "recordar elección"
- Links a política y aviso legal
- Animaciones suaves
- Responsive

### 2. `EmailContactButton.tsx`
Botón todo-en-uno:
- Maneja el click
- Muestra el modal
- Abre el mailto
- Variantes: primary, secondary, outline, minimal
- Tamaños: small, medium, large

### 3. `useEmailContact.ts`
Hook personalizado:
- Gestiona localStorage
- Controla modal
- Genera mailto

---

## 🎨 Cómo Usar

### Opción 1: Botón completo (Recomendado)

```tsx
import { EmailContactButton } from '@/components/ui'

<EmailContactButton 
  variant="primary"
  subject="Consulta sobre SEO"
  email="hola@eskaladigital.com"
>
  📧 Contáctanos
</EmailContactButton>
```

### Opción 2: Botón personalizado con hook

```tsx
import { useEmailContact } from '@/hooks/useEmailContact'
import ConsentModal from '@/components/ui/ConsentModal'

const { isModalOpen, openEmailContact, closeModal, handleAccept, email } = useEmailContact()

<button onClick={() => openEmailContact('hola@eskaladigital.com', 'Consulta Web')}>
  Contactar
</button>

<ConsentModal
  isOpen={isModalOpen}
  onClose={closeModal}
  onAccept={handleAccept}
  email={email}
/>
```

---

## 🎯 Dónde Implementar

### 1. Header/Footer
```tsx
<EmailContactButton variant="outline" size="small">
  Contacto
</EmailContactButton>
```

### 2. CTAs en páginas
```tsx
<EmailContactButton 
  variant="primary" 
  size="large"
  subject="Solicitud de presupuesto"
>
  🚀 Solicita tu presupuesto
</EmailContactButton>
```

### 3. Botones de servicios
```tsx
<EmailContactButton 
  variant="secondary"
  subject="Consulta sobre SEO Local"
>
  Más información sobre SEO
</EmailContactButton>
```

### 4. En lugar de formularios
```tsx
// ANTES: Formulario complejo
<ContactForm fields={...} validation={...} />

// AHORA: Simple
<EmailContactButton 
  variant="primary"
  subject="Consulta desde la página de contacto"
>
  📨 Escríbenos por email
</EmailContactButton>
```

---

## 🎨 Variantes Disponibles

### Primary (Azul degradado)
```tsx
<EmailContactButton variant="primary">
  Contactar
</EmailContactButton>
```

### Secondary (Naranja degradado)
```tsx
<EmailContactButton variant="secondary">
  Más información
</EmailContactButton>
```

### Outline (Solo borde)
```tsx
<EmailContactButton variant="outline">
  Escríbenos
</EmailContactButton>
```

### Minimal (Solo texto)
```tsx
<EmailContactButton variant="minimal">
  Contacto
</EmailContactButton>
```

---

## ⚙️ Configuración

### Email por defecto
En `src/hooks/useEmailContact.ts`:
```typescript
const [email, setEmail] = useState('hola@eskaladigital.com')
```

### Links legales
En `src/components/ui/ConsentModal.tsx`:
```tsx
<a href="/politica-privacidad" target="_blank">
  política de privacidad
</a>
<a href="/aviso-legal" target="_blank">
  aviso legal
</a>
```

⚠️ **Asegúrate de crear estas páginas:**
- `/politica-privacidad`
- `/aviso-legal`

---

## 🔒 Cumplimiento RGPD

### ✅ Requisitos cubiertos:

1. **Consentimiento explícito** ✓
   - Checkbox obligatorio antes de contactar

2. **Información transparente** ✓
   - Links a política de privacidad y aviso legal

3. **Control del usuario** ✓
   - Puede aceptar o rechazar
   - Puede recordar su elección

4. **Finalidad clara** ✓
   - Se explica qué va a pasar (abrir email)

---

## 💾 LocalStorage

### Datos guardados:
```javascript
localStorage.setItem('eskala-contact-consent', 'accepted') // o 'declined'
```

### Para resetear (DevTools):
```javascript
localStorage.removeItem('eskala-contact-consent')
```

---

## 🎯 Próximos pasos

1. **Crear páginas legales:**
   - `/src/app/politica-privacidad/page.tsx`
   - `/src/app/aviso-legal/page.tsx`

2. **Reemplazar formularios existentes:**
   - Buscar `<ContactForm />` en el código
   - Reemplazar por `<EmailContactButton />`

3. **Añadir en todas las CTAs:**
   - Header
   - Footer
   - Páginas de servicios
   - Blog
   - Portfolio

4. **Testear:**
   - Probar en todos los navegadores
   - Verificar que abre el email correcto
   - Comprobar que guarda preferencias

---

## 🚀 Ventajas vs Formulario

| Aspecto | Formulario Tradicional | mailto: + Modal |
|---------|----------------------|-----------------|
| **Complejidad** | Alta (backend, API) | Baja (solo frontend) |
| **Mantenimiento** | Requiere servidor | Solo frontend |
| **UX** | Formulario largo | Natural (su email) |
| **SPAM** | Vulnerable | Menos vulnerable |
| **RGPD** | Complejo | Simple pero completo |
| **Costo** | Backend + DB | Gratis |
| **Fallos** | API caída = no funciona | Siempre funciona |

---

**Creado:** Diciembre 6, 2025
**Estado:** ✅ Listo para implementar
**Compatibilidad:** Todos los navegadores modernos



