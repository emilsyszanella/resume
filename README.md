# Emilsys Zanella — Portfolio 2026

**Tech Lead & Senior Android Engineer** | Spain · EU Passport · Open to Global Remote

> Live site: [emilsyszanella.dev](https://emilsyszanella.dev) · [LinkedIn](https://linkedin.com/in/emilsyszanella)

---

## About This Project

This portfolio was designed and built as a reflection of my engineering principles: **structured, accessible, and production-ready**. Rather than using a template or a no-code tool, every architectural decision in this codebase was deliberate.

The goal was to create a portfolio that communicates **Senior Engineering credibility** from the first second — not just through the content, but through the code itself.

---

## Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| **Framework** | React 19 + Vite 7 | Fast HMR, native ESM, production-optimized builds |
| **Language** | JavaScript (JSX) | No over-engineering for a content-driven project |
| **Animations** | Framer Motion 12 | Declarative motion with `MotionConfig reducedMotion="user"` for a11y |
| **Icons** | Lucide React | Tree-shakeable, consistent visual language |
| **Styling** | Vanilla CSS + CSS Variables | Full control, zero runtime cost, native dark mode |
| **Testing** | Vitest + Testing Library | Vitest integrates natively with Vite — no Babel, no extra config |
| **Fonts** | Inter + Plus Jakarta Sans | Google Fonts with `preconnect` preloading |
| **SEO** | JSON-LD Schema + Open Graph | Person schema, WebSite schema, Twitter Card |

---

## Architecture Decisions

### 1. Component Data Architecture
Each project in `FeaturedProjects.jsx` follows a **dual-data pattern**:

```js
{
  card: { /* Minimal data for the grid view */ },
  modal: { /* Full executive case study data */ }
}
```

This separates concerns cleanly: the grid is optimized for scanning (no cognitive overload), while the modal provides the full narrative for engaged visitors. Adding a new project requires only a new object in the array — no component changes.

### 2. Accessibility-First Animation
All motion is handled globally through Framer Motion's `MotionConfig`:

```jsx
<MotionConfig reducedMotion="user">
  {/* Entire app */}
</MotionConfig>
```

This means users who have enabled "Reduce Motion" in their OS preferences will automatically get a fade-only experience. No manual `prefers-reduced-motion` media queries needed per component.

### 3. CSS Custom Properties Design System
The entire design system is defined in `:root` in `index.css`. Both light and dark modes are handled via `@media (prefers-color-scheme: dark)` — no JavaScript, no localStorage, no flash of unstyled content (FOUC).

```css
:root {
  --accent-color: #2563EB;
  --bg-primary: #F8FAFC;
  /* ... */
}

@media (prefers-color-scheme: dark) {
  :root {
    --accent-color: #3B82F6;
    --bg-primary: #0F172A;
  }
}
```

### 4. ScrollSpy via IntersectionObserver
The navbar active state uses a native `IntersectionObserver` (no library) with a detection band tuned to avoid false positives on tall sections:

```js
rootMargin: '-20% 0px -60% 0px'
```

This creates a detection zone in the upper 20–40% of the viewport, so the active link changes when a section *enters the focus zone*, not just when any pixel is visible.

### 5. Testimonials: Desktop Grid + Mobile Scroll-Snap
Instead of a JavaScript-heavy carousel everywhere, the testimonials use CSS `scroll-snap` natively on mobile:

```css
overflow-x: auto;
scroll-snap-type: x mandatory;
```

Each slide uses `scroll-snap-align: start`. This gives native browser-level swipe behavior with zero JavaScript weight on the interaction, only on the dot indicator state.

### 6. Semantic HTML + ARIA
- `<main id="main-content">` with a skip link for keyboard navigation
- Project cards use `role="button"` + `tabIndex={0}` + `aria-label` + `onKeyDown` (Enter/Space)
- Modal: `role="dialog"` + `aria-modal="true"` + `aria-labelledby`
- Section-level `aria-label` attributes on modal sections (Context, Challenge, etc.)

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Fixed nav with IntersectionObserver ScrollSpy
│   ├── HeroSection.jsx      # Above the fold: headline, CTA, StatsBar
│   ├── AboutSection.jsx     # Profile + availability badges
│   ├── CorePhilosophy.jsx   # Engineering principles (non-clickable cards)
│   ├── FeaturedProjects.jsx # Projects grid + modal orchestration
│   ├── ProjectCard.jsx      # Shared card component (clickable + static variants)
│   ├── ProjectModal.jsx     # Executive case study modal
│   ├── Testimonials.jsx     # Desktop grid + mobile scroll-snap carousel
│   ├── ContactSection.jsx   # CTA section with email + LinkedIn
│   └── BackgroundEffects.jsx# Animated ambient orbs (fixed, pointer-events: none)
├── test/
│   ├── setup.js             # Vitest + @testing-library/jest-dom setup
│   ├── ProjectModal.test.jsx # 15 tests: rendering, a11y, interactions
│   └── ProjectCard.test.jsx  # 14 tests: rendering, a11y, keyboard navigation
├── App.jsx                  # Root: MotionConfig + skip link + layout
├── main.jsx                 # React DOM entry point
└── index.css                # Design system (tokens, dark mode, utilities, grid)
public/
├── og-image.png             # Open Graph image (1200×630)
├── favicon.svg              # SVG favicon with brand gradient
├── robots.txt               # Indexing rules
└── sitemap.xml              # Site map for crawlers
```

---

## SEO Implementation

```html
<!-- Structured Data (JSON-LD) -->
<script type="application/ld+json">
{
  "@type": "Person",
  "name": "Emilsys Zanella",
  "jobTitle": "Tech Lead & Senior Android Engineer",
  "sameAs": ["https://linkedin.com/in/emilsyszanella"],
  "knowsAbout": ["Kotlin", "Jetpack Compose", "Clean Architecture", ...]
}
</script>
```

Implemented: Title tags, meta description, canonical URL, Open Graph (LinkedIn/Facebook), Twitter Card, JSON-LD Person + WebSite schema, `robots.txt`, `sitemap.xml`, `apple-touch-icon`, `theme-color`.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Production build
npm run build
```

---

## Testing Philosophy

Tests are focused on **behaviour that matters to users**, not implementation details:

- **Does the modal open and close correctly?** (user interaction)
- **Are ARIA roles and labels correct?** (accessibility)
- **Does keyboard navigation work?** (Enter, Space, Escape)
- **Does scroll lock activate?** (UX contract)
- **Does the component handle null data gracefully?** (edge case)

Tests avoid:
- Snapshot tests of visual output (brittle, low value)
- Testing internal state (implementation detail)
- Testing third-party library behavior (Framer Motion is mocked)

```bash
npm test
# ✓ ProjectModal (15 tests)
# ✓ ProjectCard (14 tests)
```

---

## Adding a New Project

Add a new object to the `projects` array in `FeaturedProjects.jsx`:

```js
{
    id: 6,
    colSpan: 2,
    card: {
        icon: <YourIcon size={22} />,
        title: 'Company Name',
        subtitle: 'Your Role · Focus Area',
        description: 'One-line impact summary.',
        metrics: ['Metric 1', 'Metric 2'],
    },
    modal: {
        icon: <YourIcon size={22} />,
        title: 'Company Name',
        subtitle: 'Your Role · Focus Area',
        hook: 'One-sentence impact statement.',
        context: ['Bullet 1', 'Bullet 2', 'Bullet 3'],
        challenge: 'The core problem you solved.',
        approach: ['Decision 1', 'Decision 2', 'Decision 3'],
        metrics: ['Result 1 (quantified)', 'Result 2', 'Result 3'],
        tags: [
            { label: 'Kotlin', category: 'Language' },
            { label: 'Clean Architecture', category: 'Architecture' },
        ],
        year: '2026 - Present',
        links: [
            { url: 'https://play.google.com/...', label: 'Play Store' }
        ], // optional
    }
}
```

---

## License

MIT — Feel free to use this as inspiration for your own portfolio. If you do, a mention would be appreciated but isn't required.

---

*Built with React + Vite · Designed for performance, accessibility, and impact.*
