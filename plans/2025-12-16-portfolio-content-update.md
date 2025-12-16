# Plan: Actualización Completa de Contenido del Portfolio - Miguel Bonifaz

**IMPORTANT:** As you complete each task below, update this file to mark checkboxes as done `- [x]` for real-time progress tracking.

## Visión General

Actualizar todo el contenido del portfolio con la información real de Miguel Bonifaz, incluyendo:
- Información personal y profesional
- Proyectos reales con descripciones detalladas
- Automatizaciones AI (agentes de WhatsApp)
- Habilidades técnicas
- Información de contacto

## Fase 1: Análisis y Preparación de Contenido

- [ ] Revisar estructura actual de las 3 páginas (index.html, project-detail.html, automations.html)
- [ ] Organizar contenido de Notion en estructura reutilizable
- [ ] Identificar imágenes necesarias del folder MiguelBonifaz
- [ ] Mapear proyectos a secciones del portfolio
- [ ] Preparar descripciones de automatizaciones

## Fase 2: Actualización de Página Principal (index.html)

### Hero Section
- [ ] Actualizar nombre a "Miguel Bonifaz"
- [ ] Cambiar ubicación a "Basado en Guayaquil, Ecuador"
- [ ] Actualizar rol a "Laravel Developer" (mantener)
- [ ] Actualizar email a real (confirmar con usuario)
- [ ] Actualizar enlaces de redes sociales

### Sección Acerca de (About)
- [ ] Reescribir descripción principal con personalidad de Miguel
- [ ] Actualizar experiencia laboral con años reales (+5 años)
- [ ] Agregar habilidades técnicas:
  - Laravel/PHP
  - Vue.js
  - Livewire
  - Inertia.js
  - Filament
  - TailwindCSS
  - Testing (PHPUnit/Pest)
  - APIs RESTful
  - MySQL/PostgreSQL

### Sección Trabajos (Works)
Reemplazar proyectos genéricos con proyectos reales:

- [ ] **Proyecto 1: Bonifaz Peluqueros**
  - Título: "Sistema de Gestión de Peluquería"
  - Descripción: Sistema con agendamiento en tiempo real
  - Tech: Vue.js, Laravel, TailwindCSS, Inertia.js
  - Imagen: bonifazpeluqueros.com__(1).png
  - Link: bonifaz-peluqueros.html

- [ ] **Proyecto 2: Exchange EC**
  - Título: "Plataforma de Intercambio Estudiantil"
  - Descripción: Sistema administrativo para programas internacionales
  - Tech: Laravel, Filament
  - Imagen: exchangeec.app_admin_enrollments.png
  - Link: exchange.html

- [ ] **Proyecto 3: Segob Noticias**
  - Título: "Portal de Noticias Gubernamental"
  - Descripción: CMS para noticias oficiales
  - Tech: Laravel, Filament
  - Imagen: noticias.segob.gob.mx_.png
  - Link: segob.html

- [ ] **Proyecto 4: Sonata**
  - Título: "Plataforma de Reservaciones de Clases"
  - Descripción: Sistema para clases de música
  - Tech: Laravel, Livewire, TailwindCSS
  - Imagen: image 2.png
  - Link: sonata.html

- [ ] **Proyecto 5: Beaubella**
  - Título: "Sistema de Gestión de Citas"
  - Descripción: Sistema mixto con Filament Form & Table Builder
  - Tech: Laravel, Filament (parcial)
  - Imagen: image 5.png
  - Link: beaubella.html

### Sección Automatizaciones (Preview en home)
- [ ] Actualizar Agente 1 (Bonifaz Peluqueros) con info real
- [ ] Cambiar Agente 2 a "Dulce Sabor" (en proceso)
  - Título: "Asistente de Pastelería"
  - Estado: "En Desarrollo"
  - Funciones: Cotización de tortas, consulta de productos, toma de pedidos, verificación de disponibilidad

### Sección Contacto
- [ ] Actualizar email real
- [ ] Actualizar número de WhatsApp
- [ ] Actualizar enlaces de LinkedIn y redes sociales
- [ ] Configurar formulario de contacto (si hay backend)

## Fase 3: Actualización de Página de Automatizaciones (automations.html)

### Hero Section
- [ ] Mantener diseño con efecto glow
- [ ] Revisar copy para que refleje experiencia real

### Sección de Agentes
- [ ] **Agente 1: Bonifaz Peluqueros** (EN VIVO)
  - Status: Agente en Vivo (green dot)
  - Descripción: Bot de agendamiento de citas vía WhatsApp
  - Funcionalidades:
    - Agendar, cancelar y reagendar citas
    - Envío de recordatorios automáticos
    - Consulta de próximas citas
    - Sincronización con calendario
  - Icono: scissors

- [ ] **Agente 2: Dulce Sabor** (EN DESARROLLO)
  - Status: En Desarrollo (yellow/orange dot)
  - Descripción: Asistente para pastelería
  - Funcionalidades:
    - Cotización de tortas personalizadas
    - Información sobre productos del catálogo
    - Consulta de disponibilidad para fechas
    - Toma de pedidos (en proceso)
  - Icono: cake o coffee

### Tech Stack
- [ ] Actualizar stack tecnológico si es necesario
- [ ] Mantener: OpenAI API, WhatsApp Business, etc.

## Fase 4: Crear Página de Detalle de Proyectos (project-detail.html)

Esta página debe ser dinámica o tener variaciones para cada proyecto. Se necesita:

- [ ] Implementar sistema de query params (?project=nombre) o crear páginas individuales
- [ ] Crear template base reutilizable
- [ ] Crear contenido detallado para cada proyecto:

### Bonifaz Peluqueros
- [ ] Hero con imagen principal
- [ ] Descripción completa del proyecto
- [ ] Galería de imágenes (usar las disponibles en folder)
- [ ] Tecnologías utilizadas
- [ ] Desafíos y soluciones
- [ ] Resultados/impacto

### Exchange EC
- [ ] Contenido similar al anterior
- [ ] Destacar funcionalidades clave
- [ ] Screenshots del panel admin

### Segob Noticias
- [ ] Enfoque en CMS y gestión de contenido
- [ ] Screenshots relevantes

### Sonata
- [ ] Primer proyecto freelance
- [ ] Historia del proyecto

### Beaubella
- [ ] Enfoque en solución mixta con Filament

## Fase 5: Optimización de Assets

- [ ] Copiar imágenes necesarias del folder MiguelBonifaz a directorio público
- [ ] Optimizar imágenes para web (comprimir si es necesario)
- [ ] Crear estructura de carpetas: `assets/projects/`
- [ ] Actualizar referencias de imágenes en HTML

## Fase 6: Mejoras de UX/UI

- [ ] Verificar responsividad en todas las páginas
- [ ] Actualizar navegación entre páginas
- [ ] Añadir smooth scroll
- [ ] Verificar todos los links internos
- [ ] Añadir meta tags para SEO
- [ ] Configurar Open Graph para compartir en redes sociales

## Fase 7: Testing y Validación

- [ ] Probar navegación completa del sitio
- [ ] Verificar responsive en mobile/tablet/desktop
- [ ] Validar todos los enlaces
- [ ] Revisar ortografía en español
- [ ] Probar formulario de contacto
- [ ] Verificar que todas las imágenes carguen correctamente

## Fase 8: Documentación

- [ ] Crear README.md con información del proyecto
- [ ] Documentar estructura del proyecto
- [ ] Commit de cambios con mensaje descriptivo

---

## Notas Importantes

- **Idioma**: Todo el contenido debe estar en español
- **Tono**: Profesional pero accesible, mostrando pasión por el desarrollo
- **Testing**: Enfatizar cultura de testing en descripción personal
- **IA**: Mencionar uso de IA en workflow de desarrollo
- **Imágenes**: Usar las imágenes reales del folder MiguelBonifaz cuando sea posible

## Información Pendiente de Confirmar con Usuario

- [ ] Email real de contacto
- [ ] Número de WhatsApp
- [ ] Enlaces de LinkedIn y redes sociales
- [ ] Si existe backend para formulario de contacto
- [ ] Preferencias de colores/branding específicos
- [ ] URLs de proyectos que pueden ser públicas
