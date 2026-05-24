---
name: Deep Code Noir
colors:
  surface: '#0f1415'
  surface-dim: '#0f1415'
  surface-bright: '#353a3b'
  surface-container-lowest: '#0a0f10'
  surface-container-low: '#171c1d'
  surface-container: '#1b2021'
  surface-container-high: '#262b2c'
  surface-container-highest: '#313637'
  on-surface: '#dfe3e4'
  on-surface-variant: '#c0c8ca'
  inverse-surface: '#dfe3e4'
  inverse-on-surface: '#2c3132'
  outline: '#8a9294'
  outline-variant: '#40484a'
  surface-tint: '#9ecfda'
  primary: '#9ecfda'
  on-primary: '#00363e'
  primary-container: '#4e7e88'
  on-primary-container: '#ffffff'
  inverse-primary: '#35656f'
  secondary: '#b2cbd0'
  on-secondary: '#1c3438'
  secondary-container: '#354d51'
  on-secondary-container: '#a4bdc2'
  tertiary: '#aac9ee'
  on-tertiary: '#0e3250'
  tertiary-container: '#5a799a'
  on-tertiary-container: '#ffffff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b9ebf6'
  primary-fixed-dim: '#9ecfda'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#194d57'
  secondary-fixed: '#cde7ed'
  secondary-fixed-dim: '#b2cbd0'
  on-secondary-fixed: '#061f23'
  on-secondary-fixed-variant: '#334a4f'
  tertiary-fixed: '#cfe5ff'
  tertiary-fixed-dim: '#aac9ee'
  on-tertiary-fixed: '#001d34'
  on-tertiary-fixed-variant: '#294968'
  background: '#0f1415'
  on-background: '#dfe3e4'
  surface-variant: '#313637'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 96px
    fontWeight: '800'
    lineHeight: 100%
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 100%
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 110%
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 120%
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 140%
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 160px
---

## Brand & Style

This design system is engineered for a high-end developer portfolio, blending the precision of an Integrated Development Environment (IDE) with the polished aesthetics of modern SaaS marketing. The brand personality is authoritative, technical, and sophisticated. It targets tech-savvy recruiters and engineering leads who value clean code and sophisticated UI architecture.

The visual direction is a fusion of **Minimalism** and **Glassmorphism**, set against a **Muted Tonal Dark** backdrop. We use heavy whitespace to let technical content breathe, while incorporating "developer easter eggs" like monospaced syntax accents, code-comment style navigation, and subtle tonal borders. The emotional response should be one of professional competence and industrial-grade innovation.

## Colors

The palette is anchored in a deep tonal slate (`#111415`), providing a professional and focused environment that reduces eye strain while maintaining clear hierarchy.

- **Primary (Muted Teal):** Used for primary actions, focus states, and key highlights. It represents clarity and steady logic.
- **Secondary (Slate Blue):** Used for supporting UI elements, differentiating sections, and balanced accents. 
- **Tertiary (Steel Blue):** Reserved for interactive transitions and depth, adding a metallic shimmer to the glassmorphic layers.
- **Surface & Border:** Surfaces utilize tonal variations of slate with low-opacity borders to create a layered, "windowed" effect reminiscent of professional IDEs.

## Typography

The typography strategy relies on the tension between the humanist, ultra-clean **Inter** and the technical, monospaced **JetBrains Mono**. 

Headlines use Inter with tight tracking and heavy weights to create "wall-of-text" impact in hero sections. Body copy remains legible and airy. JetBrains Mono is utilized for "metadata" and UI labels—navigation items should be prefixed with `//` or wrapped in `< >` to lean into the developer aesthetic. For mobile, display sizes scale down aggressively to ensure no more than two words are broken across lines.

## Layout & Spacing

This design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. We utilize a strictly proportional 8px spacing system to maintain mathematical harmony.

- **Generous Voids:** Sections are separated by large vertical gaps (`section-gap`) to signify distinct chapters in the portfolio narrative.
- **Code Indentation:** Secondary content or "details" should be indented by 2-4 grid columns, mimicking the hierarchical structure of a codebase.
- **Safe Zones:** Content is constrained within a `1280px` max-width container to ensure high-readability on ultra-wide developer monitors.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows.

1.  **Floor:** The base background is the dark neutral slate.
2.  **Panels:** Floating cards and sections use tonal surface tiers with subtle borders (`#3F484A`).
3.  **Active Glass:** Overlays (modals, dropdowns) use a semi-transparent blur (`backdrop-filter: blur(12px)`) with a subtle white tint.
4.  **Accent Glow:** Interactive elements emit a soft, localized outer glow using the primary teal color at 10% opacity, simulating the "bloom" of a high-quality monitor.

## Shapes

The shape language is primarily **Soft (Level 1)**. This subtle rounding (0.25rem - 0.75rem) provides a modern feel without losing the structural, "blocky" integrity associated with coding environments. 

- **Buttons & Inputs:** Use `rounded-sm` (4px) for a precise, tool-like appearance.
- **Project Cards:** Use `rounded-lg` (8px) to soften large surface areas.
- **Custom Cursor:** A 20px circular ring that expands and changes color (Teal to Steel Blue) when hovering over interactive elements.

## Components

### Buttons
- **Primary:** Solid Muted Teal (`#4E7E88`) background with dark text. On hover, apply a 4px offset shadow in Steel Blue.
- **Ghost:** Transparent background with a `1px` Teal border. Use JetBrains Mono for the label.

### Cards
- Project cards feature a "header bar" with three window control dots to mimic a terminal window. The body of the card should use a tonal grey surface with muted syntax highlighting for tech stack tags.

### Inputs
- Text fields are dark blocks with a bottom-only Teal border. The cursor inside the input should be a solid Teal block `_` that blinks to simulate a terminal prompt.

### Navigation
- Vertical navigation on the left or top-right, using `//` prefixes for each link (e.g., `// work`, `// about`). Active states should trigger a "syntax highlight" change from white to Teal.

### Chips/Tags
- Small, monospaced tags with low-saturation Teal backgrounds and bright borders.