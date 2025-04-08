# Tienda Online

Aplicación de tienda online desarrollada con Next.js y React que permite a los usuarios explorar productos, filtrarlos por categorías, buscar productos específicos y realizar compras a través de un carrito.

## 🚀 Características

- **Catálogo de productos**: Visualización de productos con opciones de filtrado y ordenamiento
- **Detalles de producto**: Páginas individuales optimizadas para SEO con información detallada
- **Carrito de compras**: Funcionalidad completa para añadir/eliminar productos y gestionar cantidades
- **Búsqueda y filtros**: Sistema de búsqueda y filtrado por categorías y precios
- **Diseño responsivo**: Interfaz adaptable a todos los dispositivos
- **Animaciones de transición**: Experiencia de usuario mejorada con animaciones fluidas entre páginas
- **Optimización SEO**: Metadatos dinámicos .

## 🛠️ Tecnologías utilizadas

- **Next.js 15**: Framework React con enrutamiento y renderizado híbrido (SSR/CSR)
- **React 19**: Biblioteca UI con Hooks y componentes funcionales
- **Conext API**: Para manejo del estado global
- **TypeScript**: Tipado estático para mayor robustez del código
- **Tailwind CSS**: Framework de utilidades CSS para un diseño rápido y consistente
- **Framer Motion**: Biblioteca de animaciones para transiciones fluidas
- **React Query**: Gestión de estado del servidor y caché de datos
- **Radix UI**: Componentes accesibles y personalizables
- **Zod**: Validación de esquemas para formularios y datos
- **Lucide Icons**: Conjunto de iconos limpios y personalizables

## 📂 Estructura del proyecto

El proyecto sigue la estructura de carpetas recomendada por Next.js App Router:

- `/app`: Rutas y páginas de la aplicación
  - `/product/[id]`: Página de detalles de producto con SEO optimizado
- `/components`: Componentes reutilizables
  - `/ui`: Componentes de interfaz básicos (botones, inputs, etc.)
  - `/product-card`: Tarjetas de producto para el listado
  - `/product-list`: Listado de productos con filtros y ordenamiento
- `/context`: Contextos de React para estado global
  - `/cart-context`: Gestión del carrito de compras
  - `/providers`: Proveedores globales de la aplicación
- `/hooks`: Hooks personalizados
  - `/use-products`: Hooks para obtener datos de productos
  - `/use-toast`: Sistema de notificaciones
- `/services`: Servicios para comunicación con APIs
  - `/products.service`: Obtención de datos de productos
- `/styles`: Estilos globales de la aplicación
- `/types`: Definiciones de tipos TypeScript

## 🔍 Optimizaciones implementadas

### Rendimiento
- Uso de `useMemo` para optimizar operaciones costosas como filtrado y ordenamiento
- Componentes divididos en servidor/cliente para mejor rendimiento
- Imágenes optimizadas con `next/image`
- Carga diferida de componentes cuando sea apropiado

### SEO
- Metadatos dinámicos para cada página de producto
- Etiquetas OpenGraph para compartir en redes sociales
- Renderizado en servidor para contenido crítico
- Información estructurada para motores de búsqueda

### UX/UI
- Animaciones de transición entre páginas con Framer Motion
- Esqueletos de carga para mejor experiencia de usuario
- Diseño responsivo para todos los dispositivos
- Sistema de notificaciones para feedback al usuario

## 🚀 Instalación y ejecución

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev

# Construir para producción
pnpm build

# Iniciar en modo producción
pnpm start
```

## 🧪 Posibles mejoras futuras

- Implementar autenticación de usuarios
- Añadir pasarela de pagos
- Desarrollar un panel de administración
- Implementar sistema de reseñas de productos
- Añadir más opciones de filtrado y búsqueda avanzada
- Mejorar accesibilidad siguiendo WCAG 2.1
- Añadir pruebas unitarias y de integración
- Implementar PWA para mejor experiencia en dispositivos móviles

---

Desarrollado por Tony Ale como prueba técnica. 
<a>https://tecopos.vercel.app/</a>