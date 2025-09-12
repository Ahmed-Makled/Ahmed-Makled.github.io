# Ahmed's Tech Portfolio - AI Coding Guide

## Project Overview
This is a modern single-page portfolio application built with React + Vite + TypeScript, utilizing shadcn/ui components and Tailwind CSS. The project follows a professional design system with custom CSS variables and a dark theme aesthetic.

## Architecture & Structure

### Core Tech Stack
- **Framework**: React 18 with Vite (SWC compilation)
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: React Query for server state
- **Routing**: React Router DOM (single page with smooth scrolling)

### Key File Structure
```
src/
├── components/           # Main portfolio sections (Hero, About, Projects, etc.)
├── components/ui/        # shadcn/ui components (auto-generated, avoid editing)
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions (utils.ts)
├── pages/               # Route components (Index.tsx, NotFound.tsx)
└── index.css            # Global styles and design system
```

## Critical Patterns & Conventions

### Design System (src/index.css)
- **Colors**: ALL custom properties use HSL values (never RGB/hex)
- **Professional palette**: Primary blue (#217DF6), accent purple (#9333EA), dark background
- **Custom CSS classes**: Use `.btn-hero`, `.card-glow`, `.gradient-text`, `.timeline-item`
- **Animations**: Floating particles, glitch effects, smooth transitions with cubic-bezier
- **Shadow system**: `--shadow-elegant`, `--shadow-glow`, `--shadow-card` for consistent depth

### Component Architecture
- **Section components**: Each portfolio section is a standalone component (`Hero.tsx`, `About.tsx`, etc.)
- **Single-page layout**: All sections rendered in `pages/Index.tsx` with smooth scroll navigation
- **Navigation pattern**: Hash-based anchors with custom smooth scrolling handler
- **Mobile-first responsive**: Uses Tailwind breakpoints (`md:`, `lg:`) consistently

### State & Data Management
- **Static data**: Project information, skills, and content are hardcoded in components
- **No external APIs**: Portfolio content is self-contained
- **Smooth scrolling**: Custom useEffect in Index.tsx handles anchor click behavior
- **Navigation state**: Scroll-based header styling in Navigation.tsx

## Development Workflow

### Commands (Bun-based project)
- **Dev server**: `npm run dev` (runs on port 8080, hosts on ::)
- **Build**: `npm run build` (production) or `npm run build:dev` (development mode)
- **Lint**: `npm run lint` (ESLint with TypeScript rules)

### Import Patterns
- **Alias**: Use `@/components`, `@/lib`, `@/hooks` for all internal imports
- **UI components**: Import from `@/components/ui/[component]` (never edit these files)
- **Utilities**: Use `cn()` from `@/lib/utils` for className merging
- **Icons**: Lucide React for consistent icon library

### Styling Guidelines
- **Tailwind first**: Use utility classes, custom CSS only for complex animations
- **Design tokens**: Reference CSS variables (`hsl(var(--primary))`) for consistent theming
- **Component variants**: Use `.card-professional`, `.card-glow` for consistent card styling
- **Responsive design**: Mobile-first approach with `md:` and `lg:` breakpoints
- **Shadow system**: Use CSS properties (`box-shadow: var(--shadow-elegant)`) instead of `@apply shadow-elegant`
- **Custom colors**: Access extended colors like `primary-glow` via `primary.glow` in Tailwind classes

## Component Patterns

### Section Components
Each portfolio section follows this pattern:
```tsx
export const SectionName = () => {
  return (
    <section id="section-name" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section content */}
      </div>
    </section>
  );
};
```

### Data Structure
Projects and other content use consistent object structures:
```tsx
const projects = [
  {
    title: "Project Name",
    description: "Brief description",
    technologies: ["Angular", "TypeScript", "..."],
    features: ["Feature 1", "Feature 2"],
    status: "Production",
    impact: "Business impact description",
    type: "Project category"
  }
];
```

## Integration Points
- **Lovable Platform**: Connected to Lovable.dev for live editing and deployment
- **Component Tagger**: Development mode includes component tagging for Lovable integration
- **Route Structure**: Catch-all route for 404 handling, main content on Index route

## Key Conventions
- **File naming**: PascalCase for components, kebab-case for utilities
- **Component exports**: Named exports for sections, default export for pages
- **CSS classes**: Professional naming with semantic prefixes (`.btn-`, `.card-`, `.timeline-`)
- **Animation timing**: Consistent 300ms transitions, cubic-bezier for smooth effects
- **Content structure**: Hardcoded professional content with focus on frontend leadership and Angular expertise

When making changes, maintain the professional aesthetic, ensure mobile responsiveness, and follow the established design system patterns.