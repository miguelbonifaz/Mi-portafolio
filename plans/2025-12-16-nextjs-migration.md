# Migración a Next.js con Gestión de Contenido Dinámico

**IMPORTANT:** As you complete each task below, update this file to mark checkboxes as done `- [x]` for real-time progress tracking.

## Resumen

Migrar el portfolio actual (HTML estático con Vite/React) a **Next.js 15** (última versión) con capacidades de contenido dinámico. Dado que no hay backend, se proponen soluciones modernas de gestión de contenido sin necesidad de servidor propio.

## Arquitectura Propuesta

### Stack Tecnológico
- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS 4.x
- **Gestión de Contenido**: JSON Local + TypeScript
- **Validación**: Zod para type-safety en runtime
- **Imágenes**: next/image con assets locales
- **Iconos**: Lucide React

### Por qué JSON Local + TypeScript

**Ventajas:**
- Control total del contenido versionado en Git
- Zero dependencies externas para contenido
- Type-safety completo con TypeScript
- Deploy instantáneo sin configuración adicional
- Sin costos ni límites de API
- Actualizaciones directas vía commits
- Migraciones futuras sencillas (a DB si lo necesitas)

## Fases de Implementación

### Fase 1: Setup de Next.js 15
- [ ] Crear nuevo proyecto Next.js 15 con App Router: `npx create-next-app@latest`
- [ ] Configurar TypeScript (incluido en create-next-app)
- [ ] Instalar y configurar TailwindCSS 4.x
- [ ] Instalar dependencias adicionales:
  - [ ] `zod` - Validación de schemas
  - [ ] `lucide-react` - Iconos
  - [ ] `react-hook-form` - Formularios
  - [ ] `@hookform/resolvers` - Integración Zod + React Hook Form
- [ ] Migrar fuentes (Space Mono, Playfair Display) usando `next/font/google`
- [ ] Setup de estructura de carpetas:
  ```
  app/
  ├── page.tsx                 # Homepage
  ├── projects/
  │   └── [slug]/
  │       └── page.tsx         # Project detail pages
  ├── automations/
  │   └── page.tsx             # Automations page
  ├── layout.tsx               # Root layout
  └── api/
      └── contact/
          └── route.ts         # Contact form API
  components/
  ├── ui/
  │   ├── Header.tsx
  │   ├── Footer.tsx
  │   └── Button.tsx
  ├── sections/
  │   ├── Hero.tsx
  │   ├── About.tsx
  │   ├── Works.tsx
  │   ├── Automations.tsx
  │   └── Contact.tsx
  └── projects/
      ├── ProjectCard.tsx
      └── ProjectGallery.tsx
  data/                        # JSON data layer
  ├── types.ts                 # TypeScript types
  ├── profile.ts               # Personal info
  ├── projects.ts              # Projects data
  ├── automations.ts           # Automation agents
  └── skills.ts                # Skills & experience
  lib/
  ├── utils.ts                 # Utilities
  └── constants.ts             # Constants
  public/
  └── assets/
      └── images/
          └── projects/
  ```

### Fase 2: Creación de Data Layer con TypeScript
- [ ] Crear tipos TypeScript en `/data/types.ts`:
  - [ ] `Profile` - Info personal, contacto, redes sociales
  - [ ] `Experience` - Historial laboral
  - [ ] `Skill` - Habilidades técnicas
  - [ ] `Project` - Proyectos completos
  - [ ] `Automation` - Agentes de automatización
  - [ ] `SocialLink` - Enlaces a redes
- [ ] Crear schemas de validación con Zod en `/data/schemas.ts`
- [ ] Implementar archivos de datos:
  - [ ] `/data/profile.ts` - Exporta objeto `profile` con info personal
  - [ ] `/data/projects.ts` - Exporta array `projects` con todos los proyectos
  - [ ] `/data/automations.ts` - Exporta array `automations` con agentes
  - [ ] `/data/skills.ts` - Exporta arrays `experience` y `skills`
- [ ] Crear helpers en `/data/index.ts`:
  - [ ] `getProfile()` - Retorna perfil validado
  - [ ] `getAllProjects()` - Retorna proyectos ordenados
  - [ ] `getProjectBySlug(slug)` - Busca proyecto específico
  - [ ] `getAutomations()` - Retorna automatizaciones
- [ ] Validar todos los datos con Zod al importar

### Fase 3: Migración de Componentes UI
- [ ] Crear layout principal (`app/layout.tsx`):
  - [ ] Configurar fuentes con `next/font/google`
  - [ ] Meta tags base
  - [ ] Estilos globales de TailwindCSS
- [ ] Crear componentes UI base:
  - [ ] `Header.tsx` - Navegación sticky con clock
  - [ ] `Footer.tsx` - Footer minimalista
- [ ] Migrar Hero Section (`components/sections/Hero.tsx`):
  - [ ] Implementar optimización de imagen con `next/image`
  - [ ] Importar datos desde `data/profile`
  - [ ] Mantener efectos visuales (clip-path, grayscale)
  - [ ] Badge "Disponible para Trabajar"
  - [ ] Links a redes sociales con iconos Lucide
- [ ] Migrar About Section (`components/sections/About.tsx`):
  - [ ] Importar experiencia desde `data/skills`
  - [ ] Renderizar skills como pills dinámicos
  - [ ] Layout con grid responsive
- [ ] Migrar Works Section (`components/sections/Works.tsx`):
  - [ ] Crear `ProjectCard.tsx` reutilizable
  - [ ] Grid de proyectos desde `data/projects`
  - [ ] Lazy loading de imágenes con `next/image`
  - [ ] Hover effects y transiciones CSS
  - [ ] Links a páginas de detalle
- [ ] Migrar Automations Section (`components/sections/Automations.tsx`):
  - [ ] Cards de agentes desde `data/automations`
  - [ ] Iconos con Lucide React
  - [ ] Badges de estado (En Vivo, En Desarrollo)
- [ ] Migrar Contact Section (`components/sections/Contact.tsx`):
  - [ ] Formulario con React Hook Form
  - [ ] Validación con Zod
  - [ ] Datos de contacto desde `data/profile`

### Fase 4: Páginas Dinámicas de Proyectos
- [ ] Crear `/app/projects/[slug]/page.tsx`:
  - [ ] Implementar `generateStaticParams()` usando `getAllProjects()`
  - [ ] Implementar `generateMetadata()` para SEO dinámico
  - [ ] Obtener proyecto con `getProjectBySlug(params.slug)`
- [ ] Diseño de página de detalle:
  - [ ] Hero con imagen principal y título
  - [ ] Grid de información (año, tecnologías, categoría)
  - [ ] Descripción larga del proyecto
  - [ ] Galería de imágenes con `ProjectGallery.tsx`
  - [ ] Stack tecnológico como pills
  - [ ] Links a GitHub/Demo (condicional)
  - [ ] CTA para contacto
- [ ] Implementar navegación entre proyectos (Anterior/Siguiente)
- [ ] Breadcrumbs con Link de Next.js
- [ ] Página 404 personalizada si slug no existe
- [ ] Migrar contenido de HTML a `/data/projects.ts`:
  - [ ] bonifaz-peluqueros.html → objeto en projects array
  - [ ] exchange.html → objeto en projects array
  - [ ] segob.html → objeto en projects array
  - [ ] sonata.html → objeto en projects array
  - [ ] beaubella.html → objeto en projects array

### Fase 5: SEO y Optimizaciones
- [ ] Configurar Metadata API de Next.js 15:
  - [ ] `metadata` object en `app/layout.tsx` (title, description, OG)
  - [ ] `generateMetadata()` en `app/projects/[slug]/page.tsx`
  - [ ] Open Graph images (usar imagen del proyecto)
  - [ ] Twitter Cards metadata
  - [ ] Canonical URLs
- [ ] Crear `app/sitemap.ts`:
  - [ ] Generar dinámicamente con `getAllProjects()`
  - [ ] Incluir homepage, automations, y proyectos
  - [ ] Configurar lastModified y changeFrequency
- [ ] Crear `app/robots.ts` para SEO
- [ ] Añadir JSON-LD para Schema.org:
  - [ ] `Person` schema en homepage
  - [ ] `WebSite` schema en layout
  - [ ] `WebPage` schema en proyectos
- [ ] Optimizar imágenes:
  - [ ] Configurar `next.config.js` para optimización
  - [ ] Usar `placeholder="blur"` con blurDataURL
  - [ ] Definir sizes responsivos
  - [ ] Lazy loading automático de next/image
- [ ] Performance:
  - [ ] Habilitar `output: 'export'` para SSG puro (opcional)
  - [ ] Configurar `revalidate` en páginas si usas ISR

### Fase 6: Formulario de Contacto Funcional
- [ ] Crear Server Action en `app/actions/contact.ts`:
  - [ ] Validar datos con Zod
  - [ ] Rate limiting simple (opcional)
  - [ ] Retornar success/error states
- [ ] Integrar servicio de email:
  - **Opción 1: Resend** (recomendado, plan gratuito 3k/mes)
    - [ ] Instalar `resend`
    - [ ] Configurar API key en `.env.local`
    - [ ] Crear template de email
  - **Opción 2: SendGrid** (alternativa)
  - **Opción 3: Nodemailer + Gmail** (gratis pero menos confiable)
- [ ] Actualizar componente Contact:
  - [ ] Conectar formulario con Server Action
  - [ ] Manejar estados loading/success/error
  - [ ] Toast notifications (react-hot-toast)
  - [ ] Reset form al enviar
- [ ] Testing del formulario en desarrollo

### Fase 7: Testing y Deploy
- [ ] Testing local:
  - [ ] Navegación entre todas las páginas
  - [ ] Carga de imágenes optimizadas
  - [ ] Formulario de contacto end-to-end
  - [ ] Responsive design (mobile 375px / tablet 768px / desktop 1440px)
  - [ ] Verificar todos los links externos
- [ ] Build de producción:
  - [ ] `npm run build` sin errores
  - [ ] Verificar output estático generado
  - [ ] Probar con `npm run start`
- [ ] Optimización de performance:
  - [ ] Lighthouse audit (objetivo: >90 en todas las métricas)
  - [ ] Core Web Vitals (LCP, FID, CLS)
  - [ ] Verificar bundle size
- [ ] Setup deploy en Vercel:
  - [ ] Crear cuenta y proyecto en Vercel
  - [ ] Conectar repositorio de GitHub
  - [ ] Configurar variables de entorno (RESEND_API_KEY, etc.)
  - [ ] Deploy automático en push a main
- [ ] Configuración de dominio:
  - [ ] Configurar dominio personalizado (miguelbonifaz.dev)
  - [ ] SSL automático
  - [ ] Configurar DNS
- [ ] Post-deploy:
  - [ ] Verificar sitio en producción
  - [ ] Probar formulario en producción
  - [ ] Submit a Google Search Console
  - [ ] Configurar Analytics (Vercel Analytics - gratis)
- [ ] Documentación:
  - [ ] README con instrucciones para actualizar contenido
  - [ ] Comentarios en archivos de datos

## Estructura de Datos Propuesta

### Ejemplo de `/data/types.ts`:
```typescript
export interface Profile {
  name: string
  title: string
  bio: string
  email: string
  phone: string
  location: string
  image: string
  availability: boolean
  socials: SocialLink[]
}

export interface Project {
  id: string
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  year: number
  category: string
  technologies: string[]
  featured: boolean
  images: {
    thumbnail: string
    hero: string
    gallery: string[]
  }
  links?: {
    github?: string
    live?: string
    demo?: string
  }
}

export interface Automation {
  id: string
  name: string
  description: string
  features: string[]
  status: 'live' | 'development' | 'planned'
  icon: string
}
```

### Ejemplo de `/data/projects.ts`:
```typescript
import { Project } from './types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'bonifaz-peluqueros',
    title: 'Sistema de Gestión de Peluquería',
    shortDescription: 'Agendamiento en Tiempo Real / Laravel + Vue.js',
    longDescription: 'Sistema completo de gestión...',
    year: 2024,
    category: 'Web Application',
    technologies: ['Laravel', 'Vue.js', 'TailwindCSS'],
    featured: true,
    images: {
      thumbnail: '/assets/images/projects/bonifazpeluqueros.com__(1).png',
      hero: '/assets/images/projects/bonifazpeluqueros.com__(1).png',
      gallery: []
    }
  }
  // ... más proyectos
]
```

## Notas Técnicas

- **Next.js 15**: App Router exclusivamente (no Pages Router)
- **Renderizado**: Static Site Generation (SSG) puro
  - Usar `export const dynamic = 'force-static'` en páginas
  - `generateStaticParams()` para rutas dinámicas
  - Todo se genera en build time
- **Datos**: TypeScript + validación Zod en import time
- **Imágenes**:
  - Migrar todas a `/public/assets/images/`
  - Usar `next/image` con width/height explícitos
  - Generar placeholders blur con herramienta externa
- **Estilos**:
  - TailwindCSS 4.x con configuración CSS-first
  - Mantener diseño minimalista actual
  - Fuentes con `next/font/google` (optimización automática)
- **Performance**:
  - Code splitting automático por ruta
  - Tree shaking de componentes no usados
  - Lazy loading de imágenes
- **Deployment**: Vercel (recomendado)
  - Deploy automático en push
  - Edge Network global
  - Analytics gratis incluido

## Migración de Datos

### Contenido a migrar desde HTML:
1. **Información personal** (nombre, bio, ubicación, email)
2. **Experiencia laboral** (3 posiciones)
3. **Habilidades/Stack** (Laravel, Vue.js, Livewire, etc.)
4. **Proyectos** (5 proyectos principales)
5. **Automatizaciones** (2 agentes)
6. **Links y redes sociales**

### Assets:
- Imágenes de proyectos en `assets/images/projects/`
- Foto de perfil (placeholder actual de Unsplash)
- Favicon y og-image

## Ventajas de JSON Local vs CMS Headless

| Aspecto | JSON Local | Sanity/Contentful |
|---------|------------|-------------------|
| **Setup** | Inmediato | ~2 horas config |
| **Costo** | $0 siempre | Gratis con límites |
| **Velocidad build** | Instantáneo | Fetch API en build |
| **Type Safety** | TypeScript nativo | SDK + tipos generados |
| **Versionado** | Git directo | API + webhooks |
| **Complejidad** | Mínima | Media |
| **Migración futura** | Fácil a cualquier DB | Lock-in parcial |
| **Ideal para** | Portfolios, sites estáticos | Equipos, multi-editor |

## Comandos Clave

```bash
# Crear proyecto
npx create-next-app@latest portfolio-nextjs --typescript --tailwind --app --no-src-dir

# Instalar dependencias
npm install zod lucide-react react-hook-form @hookform/resolvers resend react-hot-toast

# Development
npm run dev

# Build
npm run build

# Deploy (después de conectar a Vercel)
git push origin main  # Auto-deploy
```

## Próximos Pasos

1. ✅ Plan actualizado con JSON Local + TypeScript
2. Comenzar Fase 1: Setup de Next.js 15
3. Crear data layer con TypeScript
4. Migrar componentes UI progresivamente
5. Testing y deploy en Vercel

**¿Listo para comenzar con Fase 1?** 🚀
