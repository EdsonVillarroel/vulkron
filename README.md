# VULKRON SRL — Landing Page

Landing page corporativa de **VULKRON SRL** (Ingeniería Metálica · Soldadura Industrial · Estructuras), construida con **React + Vite + TypeScript**.

## 🚀 Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción (carpeta dist/)
npm run preview  # previsualizar el build
```

## 🧩 Secciones

Hero · Quiénes somos · Misión y Visión · Servicios · Reparación de equipos · Sectores que atendemos · Beneficios · Compromiso · **Contacto (formulario)** · Footer. Incluye botón flotante de WhatsApp y menú responsive.

## ✏️ Editar la información de contacto

Toda la información editable está en **`src/data/content.ts`**, en la constante `CONTACT`:

```ts
export const CONTACT = {
  email: "contacto@vulkron.com",   // correo donde llegan los mensajes
  phone: "+591 700 00000",         // teléfono visible
  whatsapp: "59170000000",         // WhatsApp internacional SIN "+" ni espacios
  location: "Santa Cruz, Bolivia",
};
```

> ⚠️ Reemplaza estos valores de ejemplo por los datos reales de la empresa.

## 📩 Envío del formulario de contacto

El formulario envía los mensajes al correo definido en `CONTACT.email` usando el
servicio gratuito [FormSubmit](https://formsubmit.co) (no requiere backend).

**Para activarlo (una sola vez):**
1. Publica el sitio o córrelo localmente.
2. Envía un primer mensaje de prueba desde el formulario.
3. FormSubmit enviará un correo de confirmación a `CONTACT.email`: haz clic en el
   enlace para activar la recepción. A partir de ahí todos los mensajes llegan
   directo a la bandeja.

Si prefieres otro proveedor (Formspree, un backend propio, etc.), la lógica de
envío está aislada en `src/components/Contact.tsx` (función `handleSubmit`).

## 🎨 Marca

- Fondo negro industrial `#0d0d0f` + acento naranja `#ff5a1f`.
- Tokens de diseño en `src/index.css` (`:root`).
- Tipografías: Oswald (títulos) e Inter (texto).
