# Plan: Página de Desarrollo & Mejoras UI/UX para Automatizaciones

**IMPORTANT:** As you complete each task below, update this file to mark checkboxes as done `- [x]` for real-time progress tracking.

## Overview

Crear una página exclusiva de "Desarrollo" y mejorar el sistema de cards de automatizaciones para que sea consistente con el estilo usado en la página principal (home) para proyectos.

### Análisis Actual

**Problema identificado:**
- Las cards de automatización en `/automations` usan un diseño diferente al de las cards de proyectos en el home
- Las cards de proyectos en home son minimalistas, con imagen grayscale que se colorea al hover
- Las cards de automatización son más elaboradas, con iconos grandes, badges de estado, y diseño tipo "card elevada"
- Falta filtración por estado (live/desarrollo)

**Estilo actual de ProjectCard (home):**
- Imagen grayscale que se colorea en hover
- Título con underline animado
- Descripción corta
- Efecto hover-lift
- Minimalista y limpio

**Estilo actual de AutomationCard (/automations):**
- Sin imagen
- Ícono grande de fondo
- Badge de estado (Live/En Desarrollo)
- Lista de features
- Bordes y sombras
- CTA "Ver Detalles"

---

## Fase 1: Análisis y Decisiones de Diseño

- [ ] Revisar todos los componentes relacionados con proyectos y automatizaciones
- [ ] Definir si crear una página `/automations/development` o usar filtros en `/automations`
- [ ] Decidir qué elementos mantener/eliminar de las cards actuales
- [ ] Crear mockup mental del nuevo diseño unificado

### Recomendaciones UI/UX

**Agregar:**
- Imágenes hero para cada automatización (como ProjectCard)
- Efecto grayscale → color en hover (consistencia visual)
- Sistema de filtrado por status (Live/Desarrollo/Planned)
- Categorías o tags de industria (Belleza, Alimentos, etc.)

**Mantener:**
- Badge de estado (Live/En Desarrollo) - es información valiosa
- Lista de features clave (máx 2-3 en card)
- CTA "Ver Detalles"

**Eliminar/Mejorar:**
- Ícono gigante de fondo (demasiado decorativo, poco funcional)
- Reducir cantidad de features mostradas en card (mostrar todas en página de detalle)
- Simplificar bordes y sombras para estilo más minimalista

**Página de Desarrollo:**
- Opción A: `/automations?filter=development` (recomendado)
- Opción B: `/automations/development` (página dedicada)
- Mostrar roadmap o timeline de automatizaciones planificadas
- Permitir suscripción a updates

---

## Fase 2: Actualización del Modelo de Datos

- [ ] Agregar campo `category` a Automation type para clasificación (e.g., "Salud y Belleza", "Alimentos", "Retail")
- [ ] Agregar campo `thumbnail` al tipo Automation.images
- [ ] Actualizar `data/automations.ts` con nuevos campos
- [ ] Crear imágenes placeholder o reales para thumbnails
- [ ] Actualizar schema de validación en `data/schemas.ts`

---

## Fase 3: Crear Componente AutomationCard Unificado

- [ ] Crear `components/automations/AutomationCard.tsx` similar a ProjectCard
- [ ] Implementar diseño con:
  - Imagen thumbnail con efecto grayscale
  - Badge de estado posicionado sobre la imagen
  - Título con efecto underline
  - Descripción corta
  - Hover effects consistentes con ProjectCard
- [ ] Agregar prop `variant` para permitir vista "compact" y "detailed" si es necesario

---

## Fase 4: Sistema de Filtrado en Página de Automatizaciones

- [ ] Agregar tabs o botones de filtro en `/automations/page.tsx`:
  - "Todos"
  - "En Vivo"
  - "En Desarrollo"
  - "Planeados"
- [ ] Implementar lógica de filtrado client-side
- [ ] Agregar animaciones de transición al cambiar filtros
- [ ] Considerar persistencia de filtro en URL query params

---

## Fase 5: Página de Desarrollo Dedicada (Opcional)

**Si se decide crear `/automations/development`:**

- [ ] Crear `app/automations/development/page.tsx`
- [ ] Diseño especializado mostrando:
  - Timeline de desarrollo
  - Automatizaciones en progreso con % completado
  - Próximas automatizaciones planificadas
  - Formulario para solicitar nuevas automatizaciones
- [ ] Agregar metadata SEO
- [ ] Actualizar sitemap

**Alternativa (Recomendada):**
- [ ] Usar filtros en página principal `/automations`
- [ ] Agregar sección "Roadmap" al final de la página

---

## Fase 6: Refinamiento de Página de Detalle

- [ ] Actualizar `/automations/[slug]/page.tsx` para mostrar thumbnail en breadcrumb/preview
- [ ] Mejorar gallery section para mostrar capturas de pantalla
- [ ] Agregar sección de "Casos de Uso" con ejemplos reales
- [ ] Considerar agregar testimonios de clientes (si aplica)

---

## Fase 7: Mejoras Globales UI/UX

- [ ] Asegurar consistencia de colores entre proyectos y automatizaciones
- [ ] Revisar spacing y typography para uniformidad
- [ ] Optimizar animaciones (evitar exceso)
- [ ] Probar responsive en móvil y tablet
- [ ] Validar accesibilidad (contrast ratios, keyboard navigation)

---

## Fase 8: Testing y Optimización

- [ ] Ejecutar `npm run build` para verificar SSG
- [ ] Probar todas las rutas generadas
- [ ] Validar metadata y SEO
- [ ] Verificar performance (Lighthouse)
- [ ] Revisar que no haya TypeScript errors
- [ ] Commit final

---

## Decisiones Pendientes

1. **¿Página dedicada `/automations/development` o filtros en `/automations`?**
   - Recomendación: Filtros en página principal + sección Roadmap

2. **¿Mantener iconos en las cards?**
   - Recomendación: Pequeño icono junto al título, no de fondo

3. **¿Cuántas features mostrar en card?**
   - Recomendación: 2-3 máximo, resto en página de detalle

4. **¿Agregar categorías de industria?**
   - Recomendación: Sí, ayuda a la navegación y SEO

---

## Notas Técnicas

- Todas las automatizaciones deben tener imagen thumbnail
- Mantener data-driven approach (todo en `/data/automations.ts`)
- Preservar SSG y SEO optimization
- Type safety estricta (no `any`)
- Seguir patrones existentes del proyecto
