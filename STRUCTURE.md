# Estructura del Proyecto - Portfolio Miguel Bonifaz

## Descripción General

Portfolio estático desarrollado con HTML5, TailwindCSS y JavaScript vanilla. El proyecto muestra proyectos reales, habilidades técnicas y automatizaciones con IA.

## Estructura de Directorios

```
portfolio/
│
├── index.html                      # Página principal del portfolio
├── automations.html                 # Página dedicada a automatizaciones con IA
│
├── bonifaz-peluqueros.html         # Detalle del proyecto Bonifaz Peluqueros
├── exchange.html                    # Detalle del proyecto Exchange EC
├── segob.html                       # Detalle del proyecto Segob Noticias
├── sonata.html                      # Detalle del proyecto Sonata
├── beaubella.html                   # Detalle del proyecto Beaubella
│
├── template.html                    # Template original (no utilizado en producción)
├── project-detail.html              # Template de detalle (no utilizado en producción)
│
├── assets/
│   └── images/
│       └── projects/                # Imágenes de proyectos
│           ├── bonifazpeluqueros.com__(1).png
│           ├── exchangeec.app_admin_enrollments.png
│           ├── exchangeec.app_admin_programs.png
│           ├── exchangeec.app_admin_payments_8.png
│           ├── noticias.segob.gob.mx_.png
│           ├── image 2.png          # Sonata
│           ├── image 5.png          # Beaubella
│           └── ...                   # Otras imágenes
│
├── plans/                           # Documentación y planes del proyecto
│   └── 2025-12-16-portfolio-content-update.md
│
├── content-structure.md             # Estructura de contenido
├── automation-descriptions.md        # Descripciones de automatizaciones
├── project-mapping.md               # Mapeo de proyectos
│
├── MiguelBonifaz/                   # Carpeta con imágenes originales
│
├── package.json                     # Configuración de Node.js (no utilizado actualmente)
├── README.md                        # Documentación principal
└── STRUCTURE.md                     # Este archivo
```

## Archivos Principales

### `index.html`
Página principal que incluye:
- **Hero Section**: Información personal, foto, ubicación, redes sociales
- **Sección Acerca de**: Descripción profesional, experiencia, habilidades técnicas
- **Sección Trabajos**: Grid de proyectos destacados con imágenes y descripciones
- **Sección Automatizaciones**: Preview de agentes de IA
- **Sección Contacto**: Formulario de contacto y enlaces sociales

### `automations.html`
Página dedicada a automatizaciones con IA:
- **Hero Section**: Diseño con efecto glow y fondo punteado
- **Sección de Agentes**: Cards con información de cada agente
- **Tech Stack**: Stack tecnológico utilizado

### Páginas de Proyecto (`*.html`)
Cada proyecto tiene su propia página con estructura consistente:
- **Hero Section**: Título, categoría, año
- **Imagen Principal**: Hero image del proyecto
- **Sidebar**: Información del proyecto (cliente, rol, herramientas, año)
- **Contenido Principal**: Descripción detallada, galería, desafíos, resultados
- **Navegación**: Enlaces a proyecto anterior y siguiente
- **CTA de Contacto**: Llamado a la acción para contactar

## Estructura HTML Común

Todas las páginas comparten una estructura base:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Meta tags SEO -->
  <!-- Open Graph tags -->
  <!-- TailwindCSS CDN -->
  <!-- Google Fonts -->
  <!-- Lucide Icons -->
  <!-- Estilos personalizados -->
</head>
<body>
  <!-- Header con navegación -->
  <!-- Main content -->
  <!-- Footer -->
  <!-- Scripts (clock, icons) -->
</body>
</html>
```

## Componentes Reutilizables

### Header
- Logo/Nombre (enlace a index.html)
- Navegación principal
- Reloj en tiempo real

### Footer
- Copyright
- Email de contacto
- Enlace a contacto

### Navegación entre Proyectos
- Enlace a proyecto anterior
- Enlace a proyecto siguiente

## Estilos CSS

### Clases Personalizadas
- `.serif-font`: Fuente Playfair Display para títulos
- `.thin-border-bottom/top`: Bordes delgados
- `.grayscale-img`: Filtro de escala de grises para imágenes
- `.pill-badge`: Badge estilo píldora
- `.hover-color`: Efecto hover para imágenes

### Responsive Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## JavaScript

### Funcionalidades
1. **Lucide Icons**: Inicialización de iconos SVG
2. **Reloj**: Actualización en tiempo real del reloj en el header

### Scripts Externos
- TailwindCSS (CDN)
- Lucide Icons (CDN)
- Google Fonts

## SEO y Meta Tags

Cada página incluye:
- Meta description
- Meta keywords
- Meta author
- Open Graph tags (Facebook/LinkedIn)
- Twitter Card tags

## Enlaces y Navegación

### Enlaces Internos
- `index.html` - Página principal
- `index.html#about` - Sección acerca de
- `index.html#works` - Sección trabajos
- `index.html#contact` - Sección contacto
- `automations.html` - Página de automatizaciones
- `automations.html#agents` - Sección de agentes

### Enlaces Externos
- LinkedIn: https://www.linkedin.com/in/miguelbonifaz126/
- Twitter/X: https://x.com/MBonifaz126
- WhatsApp: https://wa.me/593968204300

## Imágenes

### Estructura
Todas las imágenes de proyectos están en `assets/images/projects/`

### Formato
- PNG para capturas de pantalla
- Nombres descriptivos basados en el proyecto

### Optimización
- Las imágenes se cargan bajo demanda
- Efecto grayscale que se remueve en hover
- Responsive con aspect ratios definidos

## Formulario de Contacto

### Ubicación
`index.html` - Sección contacto

### Campos
- Nombre (text)
- Email (email)
- Mensaje (textarea)

### Estado Actual
- HTML form presente
- Sin backend implementado
- Requiere desarrollo futuro para funcionalidad completa

## Notas de Desarrollo

### Dependencias
- TailwindCSS vía CDN (no requiere build)
- Lucide Icons vía CDN
- Google Fonts

### Sin Build Process
El proyecto es completamente estático y no requiere proceso de build. Los archivos HTML pueden ser servidos directamente.

### Compatibilidad
- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Mobile-first approach
- Progressive enhancement

## Próximas Mejoras

- [ ] Implementar backend para formulario de contacto
- [ ] Optimizar imágenes (compresión)
- [ ] Agregar animaciones adicionales
- [ ] Implementar modo oscuro (opcional)
- [ ] Agregar analytics

