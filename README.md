# MotionKit — Reusable Motion Components with React + Remotion

A reusable motion design system built with React, TypeScript, and Remotion for animated titles, lower thirds, data visualizations, and scene transitions.

![MotionKit Promo](public/previews/motionkit-promo.mp4)

## Why I Built It

I wanted to explore how the React component model can be applied to motion design. Instead of creating one-off animations, I focused on building reusable, parameterized motion components with predictable timing and clean TypeScript APIs. This project demonstrates that animation can be treated as a first-class citizen in component architecture.

## What It Demonstrates

- React fundamentals and component composition
- TypeScript for type-safe motion APIs
- Remotion for frame-based video rendering
- Reusable motion components with typed props
- Frame-based deterministic animation
- Animation timing and easing functions
- Animated data visualization
- Scene sequencing and transitions
- Motion design systems and tokens
- Clean separation of content and animation logic

## Compositions

### Animated Title

A reusable title component with configurable direction, timing, and accent text.

```tsx
<AnimatedTitle
  title="Build Better Videos"
  subtitle="Motion systems powered by React"
  direction="up"
  delay={8}
  accentText="Videos"
/>
```

**Key decisions:**
- Uses ease-out easing for natural entrance feel
- Staggered animation between title and subtitle creates visual hierarchy
- Subtle scale (0.9 to 1) prevents jarring appearance
- Direction parameter allows flexible layout integration

### Lower Third

Professional lower-third component for interviews and videos with configurable accent colors.

```tsx
<LowerThird
  name="Bora Aydin"
  role="Frontend Developer"
  company="MotionKit"
  accent="violet"
  showAvatar={true}
/>
```

**Key decisions:**
- Line reveal before text establishes visual anchor
- Name and role stagger (5 frames) guides reading order
- Exit timing matches entrance for symmetry
- Avatar optional for different use cases

### Animated Chart

Data-driven bar chart with animated values and labels.

```tsx
<AnimatedChart
  title="Monthly Views"
  data={creatorGrowthData}
  unit="views"
/>
```

**Key decisions:**
- Bars animate in sequence (8-frame stagger) following data order
- Counter animates values for clear progression
- Chart container fades in before bars for context
- Max value calculated dynamically for any dataset

### Scene Transitions

Four transition styles: fade, slide, wipe, and zoom.

```tsx
<SceneTransition type="slide" direction="left" progress={0.5}>
  <Content />
</SceneTransition>
```

**Key decisions:**
- Progress-based for flexible timing control
- Each transition uses appropriate easing (fade: linear, slide: ease-out)
- Wipe uses clip-path for clean edge
- Zoom combines scale and opacity for depth

### Product Promo

15-second composition combining all reusable components.

**Key decisions:**
- Scene duration (90 frames) allows comfortable viewing
- Components reused without modification proves system flexibility
- Feature cards stagger to show multiple benefits
- Final CTA uses existing title component

### Creator Stats (Bonus)

Data-driven creator analytics recap demonstrating parameterized video creation.

```tsx
<CreatorStats
  creatorName="Alex"
  followersBefore={12500}
  followersAfter={48700}
  views={1200000}
  engagement={8.4}
/>
```

**Key decisions:**
- Props drive all content and calculations
- Growth percentage computed dynamically
- Stat cards stagger for visual hierarchy
- Demonstrates video generation from data

## Architecture

The project follows a clear separation of concerns:

```
src/
├── components/motion/    # Reusable motion components
│   ├── AnimatedTitle.tsx
│   ├── LowerThird.tsx
│   ├── AnimatedChart.tsx
│   ├── SceneTransition.tsx
│   └── Counter.tsx
├── compositions/         # Demo compositions
│   ├── TitleDemo.tsx
│   ├── LowerThirdDemo.tsx
│   ├── ChartDemo.tsx
│   ├── TransitionDemo.tsx
│   └── ProductPromo.tsx
├── design/              # Design tokens
│   └── tokens.ts
├── utils/               # Animation helpers
│   ├── animation.ts
│   └── numbers.ts
├── data/                # Sample data
│   └── chartData.ts
├── Root.tsx             # Composition registry
└── index.ts             # Entry point
```

**Motion tokens** centralize timing, spacing, and easing for consistency:

```ts
export const motionTokens = {
  duration: {
    fast: 10,
    normal: 18,
    slow: 30,
  },
  easing: {
    easeOut: (t: number) => 1 - Math.pow(1 - t, 3),
    easeIn: (t: number) => t * t * t,
  },
};
```

**Animation utilities** reduce duplication:

```ts
fadeIn(frame, delay, duration)
slideIn(frame, direction, distance, delay, duration)
scaleIn(frame, delay, duration, fromScale)
stagger(index, staggerDelay)
```

## Motion Decisions

### Why entrance uses ease-out

Ease-out (cubic-bezier equivalent) feels natural because objects start fast and slow down, matching real-world physics. This creates a smooth, confident entrance without feeling abrupt.

### Why exit timing is shorter

Exits are 20-30% faster than entrances because viewers have already processed the content. Quick exits maintain pacing and prevent visual clutter during transitions.

### How stagger improves hierarchy

Staggering related elements (title → subtitle, line → name → role) guides the eye through information in a logical sequence. This reduces cognitive load and makes content easier to scan.

### Why chart animation follows data sequence

Bars animate in the same order as the data array (left to right). This reinforces the temporal nature of the data (Month 1 → Month 5) and makes the growth story clear.

### Why motion durations are centralized

Centralized durations (`fast: 10`, `normal: 18`, `slow: 30`) ensure consistent pacing across all components. Changing a single value updates the entire system, making iteration faster and preventing inconsistent timing.

## Running Locally

```bash
# Install dependencies
npm install

# Start Remotion Studio
npm run dev
```

Remotion Studio will open at `http://localhost:3000` where you can preview all compositions.

## Rendering

Render individual compositions:

```bash
npm run render:promo          # Product promo (15s)
npm run render:title           # Animated title demo (4s)
npm run render:lowerthird      # Lower third demo (5s)
npm run render:chart           # Animated chart demo (6s)
npm run render:transitions     # Scene transitions demo (8s)
npm run render:creatorstats    # Creator stats bonus (10s)
```

Output files are saved to the `public/previews/` directory.

## Tech Stack

- **React 18** - Component model and hooks
- **TypeScript 5** - Type safety and better DX
- **Remotion 4** - Frame-based video rendering
- **ESLint** - Code quality
- **Prettier** - Code formatting

## Project Structure

```
motionkit-remotion/
├── src/
│   ├── components/motion/     # Reusable components
│   ├── compositions/          # Demo compositions
│   ├── design/               # Design tokens
│   ├── utils/                # Utilities
│   ├── data/                 # Sample data
│   ├── Root.tsx              # Composition registry
│   └── index.ts              # Entry point
├── out/                      # Rendered videos
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
└── .gitignore
```

## Development

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Build
npm run build
```

## License

MIT
