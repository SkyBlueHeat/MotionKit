# MotionKit

### Programmatic Motion Design System built with React, TypeScript & Remotion

**Live Showcase:** https://motion-kit-drab.vercel.app/  
**GitHub:** https://github.com/SkyBlueHeat/MotionKit

MotionKit is a reusable motion graphics system for building polished, data-driven video in code.

Instead of creating one-off animations, it applies React component architecture and design-system principles to motion — with reusable components, centralized timing and easing, typed APIs, responsive formats, themes, and deterministic frame-based rendering.

## 🎬 Watch the Project

### MotionKit Showreel — 40s
**[▶ Watch Showreel](./public/previews/motionkit-showreel.mp4)**

A fast overview of the complete MotionKit system: kinetic typography, lower thirds, charts, statistics, transitions, themes, and responsive video layouts.

### Creator Explainer — 45s
**[▶ Watch Creator Explainer](./public/previews/creator-explainer.mp4)**

A complete creator-style video built by composing reusable MotionKit components into one cohesive sequence.

### Vertical Demo — 9:16
**[▶ Watch Vertical Demo](./public/previews/vertical-demo.mp4)**

Demonstrates format-aware motion and layout behavior for vertical video.

### Product Promo — 15s
**[▶ Watch Product Promo](./public/previews/motionkit-promo.mp4)**

A compact product-style composition combining titles, motion graphics, charts, and transitions.

---

## What It Demonstrates

- **React + TypeScript** component architecture
- **Remotion 4** frame-based video rendering
- reusable, type-safe motion components
- kinetic typography and animated titles
- lower thirds and quote layouts
- animated statistics and data visualization
- centralized timing, easing, stagger, and motion tokens
- reusable scene transitions
- responsive **16:9, 9:16, and 1:1** video formats
- data-driven and parameterized video generation
- themes and typography systems
- validation, fallbacks, and render reliability

---

## Motion Components

| Component | Purpose |
| --- | --- |
| `KineticText` | Word, line, and character-based typography |
| `AnimatedTitle` | Titles and subtitle animation |
| `LowerThird` | Interview and creator lower thirds |
| `StatCard` | Animated statistics and counters |
| `AnimatedChart` | Data-driven animated charts |
| `QuoteCard` | Quote and testimonial layouts |
| `ChapterTitle` | Editorial / explainer chapter intros |
| `SceneTransition` | Fade, slide, wipe, zoom, push, and mask transitions |

---

## Data-Driven Video

MotionKit separates content from presentation.

The same composition can generate different videos from typed data:

```tsx
const video = {
  brand: {
    name: 'CreatorLab',
    primaryColor: '#111111',
    accentColor: '#7c3aed',
  },

  statistic: {
    value: 42,
    suffix: '%',
    label: 'Growth',
  },

  chart: {
    title: 'Creator Growth',
    data: [
      {label: '2023', value: 42},
      {label: '2024', value: 68},
      {label: '2025', value: 91},
    ],
  },
};