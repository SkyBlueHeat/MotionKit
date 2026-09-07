# Portfolio Screenshots and Output

This guide covers generating portfolio screenshots and rendered videos for the MotionKit project.

## Portfolio Strategy

MotionKit demonstrates professional motion design capabilities through:
- **Component library** - 9 reusable motion components
- **Flagship compositions** - 3 showcase compositions
- **Demo compositions** - 6 individual component demos
- **Documentation** - Comprehensive guides and philosophy

## Rendering Portfolio Videos

### Recommended Render Settings

For portfolio videos, use these settings:

**1080p (1920x1080, 30fps, H.264)**
- Best for web playback
- Reasonable file size
- Good quality
- Standard format

**4K (3840x2160, 30fps, ProRes)**
- Best for high-quality portfolio
- Larger file size
- Excellent quality
- Professional format

### Render Commands

Render all portfolio videos:

```bash
# Demo compositions
npm run render:title           # Animated title demo (4s)
npm run render:lowerthird      # Lower third demo (5s)
npm run render:chart           # Animated chart demo (6s)
npm run render:transitions     # Scene transitions demo (8s)

# Flagship compositions
npm run render:promo          # Product promo (15s)
npm run render:creatorstats    # Creator stats (10s)
npm run render:vertical        # Vertical format demo (6s)
npm run render:explainer       # Creator explainer (45s)
npm run render:showreel        # MotionKit showreel (40s)
```

### Custom Render Settings

For custom renders, use Remotion CLI directly:

```bash
# Render with custom codec
npx remotion render src/index.ts MotionKitShowreel output.mp4 \
  --codec=h264 \
  --crf=18 \
  --pixel-format=yuv420p

# Render with ProRes for quality
npx remotion render src/index.ts MotionKitShowreel output.mov \
  --codec=prores \
  --prores-profile=422hq

# Render specific frame range
npx remotion render src/index.ts MotionKitShowreel output.mp4 \
  --frames=0-300
```

## Generating Screenshots

### Using Remotion Studio

1. **Open Remotion Studio**: `npm run dev`
2. **Select composition**: Choose composition from sidebar
3. **Navigate to frame**: Use timeline to find desired frame
4. **Take screenshot**: Use Remotion's screenshot feature
5. **Save image**: Save to `public/previews/` directory

### Using Command Line

```bash
# Render single frame as image
npx remotion still src/index.ts MotionKitShowreel output.png \
  --frame=120

# Render multiple frames
npx remotion still src/index.ts MotionKitShowreel frame-%d.png \
  --frames=0,60,120,180,240
```

### Recommended Screenshot Frames

**MotionKitShowreel** (1200 frames):
- Frame 60 - Logo/title
- Frame 180 - Typography demo
- Frame 300 - Lower third
- Frame 420 - Charts
- Frame 540 - Statistics
- Frame 660 - Quote
- Frame 780 - Chapter title
- Frame 900 - Transitions
- Frame 1020 - Formats
- Frame 1140 - Themes

**CreatorExplainerShowcase** (1350 frames):
- Frame 90 - Hook
- Frame 270 - Statistic
- Frame 450 - Chapter title
- Frame 630 - Chart
- Frame 810 - Quote
- Frame 990 - Multiple stats
- Frame 1170 - Ending

## Portfolio Presentation

### Recommended Portfolio Structure

```
Portfolio/
├── Components/           # Individual component demos
│   ├── animated-title.mp4
│   ├── lower-third.mp4
│   ├── animated-chart.mp4
│   ├── transitions.mp4
│   ├── kinetic-text.mp4
│   ├── stat-card.mp4
│   ├── quote-card.mp4
│   └── chapter-title.mp4
├── Showreels/           # Flagship compositions
│   ├── motionkit-showreel.mp4
│   ├── creator-explainer.mp4
│   └── product-promo.mp4
├── Screenshots/         # Key frames
│   ├── showreel-01.png
│   ├── showreel-02.png
│   └── ...
└── Documentation/       # Project docs
    ├── README.md
    ├── MOTION_PHILOSOPHY.md
    └── ...
```

### Portfolio Descriptions

**AnimatedTitle**
- Demonstrates: Title animation with direction control
- Duration: 4 seconds
- Key features: Staggered animation, accent text, configurable timing

**LowerThird**
- Demonstrates: Professional lower-third with avatar
- Duration: 5 seconds
- Key features: Line reveal, staggered text, accent colors

**AnimatedChart**
- Demonstrates: Data-driven chart with animation
- Duration: 6 seconds
- Key features: Three chart types, animated values, staggered bars

**SceneTransition**
- Demonstrates: Six transition types
- Duration: 8 seconds
- Key features: Fade, slide, wipe, zoom, push, mask transitions

**KineticText**
- Demonstrates: Kinetic typography
- Duration: 4-6 seconds
- Key features: Three modes, six entrances, emphasis highlighting

**StatCard**
- Demonstrates: Animated statistics card
- Duration: 4-6 seconds
- Key features: Trend indicators, counter animation, two variants

**QuoteCard**
- Demonstrates: Professional quote component
- Duration: 4-6 seconds
- Key features: Author attribution, source, accent theming

**ChapterTitle**
- Demonstrates: Chapter title with number
- Duration: 4-6 seconds
- Key features: Numbered chapters, category labels, background option

**MotionKitShowreel**
- Demonstrates: Entire component library
- Duration: 40 seconds
- Key features: 10 scenes, all components, format and theme showcase

**CreatorExplainerShowcase**
- Demonstrates: Data-driven explainer video
- Duration: 45 seconds
- Key features: 8 scenes, narrative flow, all components

## Output Quality

### Video Quality

**H.264 (Recommended for web)**
- Codec: H.264
- Pixel format: yuv420p
- CRF: 18-23 (lower = better quality)
- Bitrate: ~5-10 Mbps for 1080p

**ProRes (Recommended for professional)**
- Codec: ProRes 422 HQ
- Bitrate: ~200 Mbps for 1080p
- Quality: Excellent
- File size: Large

### Audio Quality

MotionKit videos are silent (no audio). If adding audio:
- Codec: AAC (for H.264) or PCM (for ProRes)
- Sample rate: 48kHz
- Bitrate: 192-320 kbps (AAC)

## File Size Estimates

**1080p H.264:**
- 4-second demo: ~2-3 MB
- 15-second promo: ~8-12 MB
- 40-second showreel: ~20-30 MB
- 45-second explainer: ~22-35 MB

**1080p ProRes:**
- 4-second demo: ~40-60 MB
- 15-second promo: ~150-225 MB
- 40-second showreel: ~400-600 MB
- 45-second explainer: ~450-675 MB

## Platform-Specific Recommendations

### GitHub

- **Format**: H.264 MP4
- **Resolution**: 1080p
- **Size**: Under 25 MB (GitHub limit)
- **Duration**: Keep under 30 seconds for GIFs

### Portfolio Website

- **Format**: H.264 MP4
- **Resolution**: 1080p or 720p
- **Size**: Under 10 MB for fast loading
- **Duration**: Any length
- **Autoplay**: Muted, loop

### LinkedIn

- **Format**: MP4
- **Resolution**: 1080x1080 (square) or 1920x1080
- **Size**: Under 5 GB
- **Duration**: Under 10 seconds recommended
- **Aspect ratio**: 1:1 or 16:9

### Twitter/X

- **Format**: MP4
- **Resolution**: 1280x720 (720p)
- **Size**: Under 512 MB
- **Duration**: Under 2:20
- **Aspect ratio**: 16:9 or 1:1

## Hosting Recommendations

### GitHub Pages

- Free hosting
- Good for portfolios
- Supports video files
- Easy to set up

### Vimeo

- Professional video hosting
- High quality
- Customizable player
- Privacy controls

### YouTube

- Free hosting
- Good quality
- Wide reach
- Analytics included

### Self-hosted

- Full control
- No platform limits
- Requires infrastructure
- Higher cost

## Portfolio Checklist

- [x] Render all demo compositions
- [x] Render flagship compositions
- [x] Generate key frame screenshots
- [x] Optimize file sizes
- [x] Test on target platforms
- [x] Create portfolio descriptions
- [x] Organize file structure
- [x] Document render settings

## Conclusion

MotionKit provides a comprehensive portfolio of motion design capabilities through its component library and flagship compositions. Use the recommended render settings and platform-specific guidelines to create professional portfolio materials that showcase your motion design skills.
