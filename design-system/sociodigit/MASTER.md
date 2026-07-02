# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Sociodigit
**Generated:** 2026-07-02 22:24:43
**Category:** IT & Consulting Agency

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#E8421A` | `--color-brand-orange` |
| Secondary | `#ff6b3d` | `--color-brand-amber` |
| CTA/Accent | `#C43510` | `--color-brand-crimson` |
| Background | `#050505` | `--color-space-blue` |
| Text | `#ffffff` | `--color-text` |

**Color Notes:** Cybernetic dark theme with vibrant high-contrast orange and amber accents.

### Typography

- **Heading Font:** Plus Jakarta Sans
- **Body Font:** Outfit
- **Mono Font:** JetBrains Mono
- **Mood:** Next-gen engineering, high-performance IT consulting, premium tech agency
- **Google Fonts:** [Plus Jakarta Sans + Outfit + JetBrains Mono](https://fonts.google.com/share?selection.family=Plus+Jakarta+Sans:wght@700;800&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: var(--color-brand-orange);
  color: white;
  padding: 16px 32px;
  border-radius: 9999px;
  font-weight: 700;
  transition: all 300ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  transform: scale(1.05);
}

.btn-primary:active {
  transform: scale(0.95);
}

/* Secondary/Outline Button */
.btn-outline {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid var(--color-glass-border);
  padding: 16px 32px;
  border-radius: 9999px;
  font-weight: 700;
  transition: all 300ms ease;
  cursor: pointer;
}

.btn-outline:hover {
  border-color: var(--color-brand-orange);
  color: var(--color-brand-orange);
}
```

### Cards

```css
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2rem;
  padding: 40px;
  transition: all 500ms ease;
  cursor: pointer;
}

.glass-card:hover {
  border-color: rgba(232, 66, 26, 0.5); /* brand-orange/50 */
  background: rgba(255, 255, 255, 0.1);
}
```

---

## Style Guidelines

**Style:** High-Performance Cybernetic Tech

**Key Effects:** Glow effects, grid backgrounds, pulse animations, seamless marquees, smooth transitions

### Page Pattern

**Pattern Name:** Bento Grid & Interactive Sections

- **Section Order:** 1. Hero, 2. Tech Marquee, 3. Impact Metrics, 4. Services Grid, 5. Tech Showcase, 6. Interactive Features, 7. Final CTA
- **CTA Placement:** Primary CTAs in Hero and Final CTA; auxiliary links inside cards.

---

## Anti-Patterns (Do NOT Use)

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum (if applicable)
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
