# MotionKit — Production Motion Design System

A comprehensive, production-ready motion design system built with React, TypeScript, and Remotion. Create animated titles, lower thirds, data visualizations, kinetic typography, statistics cards, quotes, chapter titles, and scene transitions with a reusable component library.

![MotionKit Promo](public/previews/motionkit-promo.mp4)

## Why I Built It

I wanted to explore how the React component model can be applied to professional motion design. Instead of creating one-off animations, I focused on building a comprehensive, parameterized motion system with predictable timing, clean TypeScript APIs, and production-grade reliability. This project demonstrates that animation can be treated as a first-class citizen in component architecture.

## What It Demonstrates

- **React fundamentals** and component composition patterns
- **TypeScript** for type-safe motion APIs and data-driven video generation
- **Remotion 4** for frame-based deterministic video rendering
- **Reusable motion components** with typed props and validation
- **Motion design tokens 2.0** with delays, stagger patterns, and presets
- **Responsive video formats** (16:9 landscape, 9:16 vertical, 1:1 square)
- **Data-driven video generation** with presets and strong typing
- **Theme system** with 6 pre-built themes
- **Typography hierarchy** with 7 levels
- **Render reliability** with validation and fallback handling
- **Professional transitions** (6 types: fade, slide, wipe, zoom, push, mask)
- **Chart visualization** with 3 types (vertical-bar, horizontal-bar, percentage)

## Component Library

### KineticText

Kinetic typography with word-by-word, line-by-line, or character-by-character animation.

```tsx
<KineticText
  text="Motion makes content memorable"
  mode="words"
  emphasis={["memorable"]}
  enter="slide-up"
  align="center"
  delay={10}
  fontSize={96}
/>
```

**Features:**
- Three modes: words, lines, characters
- Six entrance animations: slide-up, slide-down, slide-left, slide-right, fade, scale
- Emphasis highlighting for specific words
- Configurable stagger delay
- Text validation with fallback

### StatCard

Animated statistics card with trend indicators and counter animation.

```tsx
<StatCard
  value={42}
  suffix="%"
  label="Growth Rate"
  trend="up"
  trendValue={8}
  variant="large"
  delay={10}
/>
```

**Features:**
- Two variants: compact, large
- Trend indicators: up, down, neutral
- Animated counter with formatting
- Configurable accent color
- Prefix/suffix support

### QuoteCard

Professional quote component with author attribution and source.

```tsx
<QuoteCard
  quote="Motion is the bridge between static design and dynamic experience"
  author="MotionKit"
  role="Design System"
  source="Motion Philosophy"
  accent="violet"
  align="center"
/>
```

**Features:**
- Three alignments: left, center, right
- Optional avatar support
- Source attribution
- Accent color theming

### ChapterTitle

Chapter title with number, category, and subtitle support.

```tsx
<ChapterTitle
  chapterNumber="01"
  title="The Motion System"
  subtitle="Building reusable components"
  category="Chapter"
  align="center"
  showBackground={true}
/>
```

**Features:**
- Numbered chapters with zero-padding
- Category labels
- Optional background gradient
- Accent color customization

### AnimatedChart

Data-driven chart with three visualization types.

```tsx
<AnimatedChart
  title="Revenue Growth"
  data={growthData}
  type="vertical-bar"
  showLabels={true}
  showValues={true}
  precision={0}
/>
```

**Features:**
- Three chart types: vertical-bar, horizontal-bar, percentage
- Animated bars with stagger
- Counter animation for values
- Data validation with fallback
- Configurable precision

### LowerThird

Professional lower-third for interviews and videos.

```tsx
<LowerThird
  name="Sarah Chen"
  role="Motion Designer"
  company="MotionKit"
  accent="violet"
  showAvatar={true}
/>
```

### SceneTransition

Six professional transition types.

```tsx
<SceneTransition type="push" direction="left" progress={0.5}>
  <Content />
</SceneTransition>
```

**Transition types:**
- Fade - Simple opacity transition
- Slide - Directional slide with fade
- Wipe - Clip-path reveal
- Zoom - Scale-based transition
- Push - Directional push without fade
- Mask - Circular mask reveal

## Flagship Compositions

### CreatorExplainerShowcase

45-second explainer video demonstrating all components in a cohesive narrative.

**Scenes:**
1. Hook with kinetic typography
2. Statistic with StatCard
3. Chapter title
4. Data chart
5. Quote
6. Multiple statistics
7. Transition showcase
8. Ending CTA

### MotionKitShowreel

40-second showreel showcasing the entire component library.

**Scenes:**
1. Logo/title
2. Typography demo
3. Lower third
4. Charts
5. Statistics
6. Quote
7. Chapter title
8. Transitions
9. Responsive formats
10. Themes

### VerticalDemo

6-second vertical video (9:16) demonstrating format adaptability.

## Data-Driven Video Generation

MotionKit supports data-driven video generation with TypeScript validation and presets.

```tsx
import {DataDrivenExplainer} from './compositions/DataDrivenExplainer';
import {saasAnalyticsPreset} from './data/presets';

<Composition
  id="SaaSPreset"
  component={DataDrivenExplainer}
  defaultProps={saasAnalyticsPreset}
/>
```

**Presets included:**
- SaaS Analytics preset
- Creator Growth preset
- Product Launch preset

**Create custom presets:**
```ts
const customPreset: ExplainerVideoData = {
  brand: {name: 'YourBrand', primaryColor: '#...', accentColor: '#...'},
  hook: {text: 'Your hook', emphasis: ['emphasis']},
  statistic: {value: 42, suffix: '%', label: 'Metric', trend: 'up', trendValue: 8},
  // ... full data structure
};
```

## Motion Design Tokens 2.0

### Duration Tokens

```ts
motionTokens.duration = {
  instant: 5,    // Micro-interactions
  fast: 10,      // Quick entrances
  normal: 18,    // Standard timing
  slow: 30,      // Emphasis
  extraSlow: 45,  // Major transitions
}
```

### Delay Tokens

```ts
motionTokens.delay = {
  short: 5,    // Tight stagger
  medium: 10,  // Normal stagger
  long: 15,    // Relaxed stagger
}
```

### Stagger Tokens

```ts
motionTokens.stagger = {
  tight: 3,      // Closely related elements
  normal: 5,    // General use
  relaxed: 8,   // Separate sections
}
```

### Easing Functions

```ts
motionTokens.easing = {
  standard: (t) => 1 - Math.pow(1 - t, 3),  // Ease-out
  enter: (t) => 1 - Math.pow(1 - t, 3),    // Entrance
  exit: (t) => t * t * t,                  // Exit
  emphasized: (t) => /* ease-in-out */,     // Emphasis
  sharp: (t) => /* sharp curve */,         // Sharp
}
```

### Motion Patterns

```ts
motionTokens.patterns = {
  entrance: {
    soft: {duration: 18, easing: 'enter', delay: 0},
    emphasis: {duration: 24, easing: 'emphasized', delay: 0},
    quick: {duration: 10, easing: 'enter', delay: 0},
  },
  exit: {
    quick: {duration: 12, easing: 'exit', delay: 0},
    normal: {duration: 18, easing: 'exit', delay: 0},
  },
  reveal: {
    text: {duration: 18, easing: 'enter', stagger: 5},
    chart: {duration: 30, easing: 'enter', stagger: 8},
    list: {duration: 24, easing: 'enter', stagger: 6},
  },
}
```

## Theme System

Six pre-built themes for different brand identities:

```ts
import {themes} from './design/tokens';

themes.default      // Dark purple theme
themes.light        // Light theme
themes.editorial    // Warm editorial theme
themes.ocean        // Blue ocean theme
themes.forest       // Green forest theme
themes.sunset       // Orange sunset theme
```

**Theme structure:**
```ts
{
  background: string,
  foreground: string,
  accent: string,
  accentSecondary: string,
  muted: string,
  border: string,
}
```

## Typography System

Seven-level typography hierarchy:

```ts
designTokens.typography = {
  display: {fontSize: 96, fontWeight: 700},      // Hero titles
  heading: {fontSize: 64, fontWeight: 600},      // Section headers
  subheading: {fontSize: 48, fontWeight: 600},   // Subsections
  body: {fontSize: 32, fontWeight: 400},        // Body text
  label: {fontSize: 24, fontWeight: 500},       // Labels
  caption: {fontSize: 20, fontWeight: 400},      // Captions
  numeric: {fontSize: 56, fontWeight: 600},     // Numbers
}
```

## Responsive Video Formats

Support for three aspect ratios:

```ts
import {formatDimensions, useFormatAware} from './utils/format';

// 16:9 Landscape (1920x1080)
// 9:16 Vertical (1080x1920)
// 1:1 Square (1080x1080)

const {format, isVertical, isLandscape, isSquare} = useFormatAware();
```

**Format-aware utilities:**
- `scaleTypography()` - Scale fonts by format
- `scaleSpacing()` - Scale spacing by format
- `getSafeZone()` - Get safe area margins
- `getMaxWidth()` - Get max width percentage

## Architecture

```
src/
├── components/motion/      # Reusable motion components
│   ├── AnimatedTitle.tsx
│   ├── LowerThird.tsx
│   ├── AnimatedChart.tsx
│   ├── SceneTransition.tsx
│   ├── Counter.tsx
│   ├── KineticText.tsx
│   ├── StatCard.tsx
│   ├── QuoteCard.tsx
│   └── ChapterTitle.tsx
├── compositions/           # Demo and flagship compositions
│   ├── TitleDemo.tsx
│   ├── LowerThirdDemo.tsx
│   ├── ChartDemo.tsx
│   ├── TransitionDemo.tsx
│   ├── ProductPromo.tsx
│   ├── CreatorStats.tsx
│   ├── VerticalDemo.tsx
│   ├── CreatorExplainerShowcase.tsx
│   ├── DataDrivenExplainer.tsx
│   └── MotionKitShowreel.tsx
├── design/                # Design tokens
│   └── tokens.ts
├── utils/                 # Utilities
│   ├── animation.ts
│   ├── numbers.ts
│   ├── format.ts
│   └── validation.ts
├── types/                 # TypeScript types
│   └── video.ts
├── data/                  # Sample data and presets
│   ├── chartData.ts
│   └── presets.ts
├── Root.tsx              # Composition registry
└── index.ts              # Entry point
```

## Motion Philosophy

MotionKit is built on the principle that animation is communication, not decoration. See [MOTION_PHILOSOPHY.md](./MOTION_PHILOSOPHY.md) for detailed documentation on:

- Core principles (ease-out entrances, faster exits, stagger creates hierarchy)
- Motion patterns (entrance, exit, reveal)
- Timing decisions
- Visual hierarchy
- Rhythm and pacing
- Accessibility considerations
- Performance considerations
- Common mistakes to avoid

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
npm run render:vertical        # Vertical format demo (6s)
npm run render:explainer       # Creator explainer (45s)
npm run render:showreel        # MotionKit showreel (40s)
```

**Smoke check:**
```bash
npm run smoke-check
```

Output files are saved to the `public/previews/` directory.

## Development

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Build
npm run build
```

## Tech Stack

- **React 18** - Component model and hooks
- **TypeScript 5** - Type safety and better DX
- **Remotion 4** - Frame-based video rendering
- **ESLint** - Code quality
- **Prettier** - Code formatting

## License

MIT
