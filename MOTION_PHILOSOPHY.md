# Motion Philosophy

MotionKit is built on the principle that animation is not decoration—it is communication. Every animation should serve a purpose: guiding attention, establishing hierarchy, or communicating state.

## Core Principles

### Ease-Out Entrances

Objects entering the visual field should generally decelerate naturally rather than stop abruptly.

**Why:** Ease-out (cubic-bezier equivalent) feels natural because objects start fast and slow down, matching real-world physics. This creates a smooth, confident entrance without feeling abrupt or mechanical.

**Implementation:** Use `motionTokens.easing.enter` for all entrance animations.

```ts
const opacity = fadeIn(frame, delay, duration);
const scale = scaleIn(frame, delay, duration, 0.9);
```

### Faster Exits

Exits should often be shorter than entrances to preserve pacing.

**Why:** Viewers have already processed the content by the time an element exits. Quick exits maintain pacing and prevent visual clutter during transitions. A 20-30% faster exit keeps the video moving without feeling rushed.

**Implementation:** Use `motionTokens.easing.exit` and shorter durations for exits.

```ts
const exitDuration = duration * 0.7;
const exitOpacity = fadeOut(frame, delay, exitDuration);
```

### Stagger Creates Hierarchy

Elements should not animate simultaneously unless that is an intentional composition choice.

**Why:** Staggering related elements (title → subtitle, line → name → role) guides the eye through information in a logical sequence. This reduces cognitive load and makes content easier to scan. Simultaneous animation creates visual noise and fights for attention.

**Implementation:** Use `motionTokens.stagger` with appropriate delays.

```ts
const titleDelay = delay;
const subtitleDelay = delay + motionTokens.stagger.normal;
```

### Motion Communicates Structure

Animation is not decoration. It should communicate hierarchy, relationship, focus, state, and progression.

**Why:** Motion is a powerful tool for information architecture. It can show:
- **Hierarchy:** Primary elements animate first, secondary elements follow
- **Relationship:** Connected elements animate together
- **Focus:** Emphasized elements use stronger motion
- **State:** Active states have subtle motion, inactive states are static
- **Progression:** Sequential animation shows temporal relationships

**Implementation:** Use motion patterns to reinforce content structure.

```ts
// Primary content
const primaryDelay = delay;

// Secondary content follows
const secondaryDelay = delay + motionTokens.stagger.normal;

// Tertiary content follows
const tertiaryDelay = delay + motionTokens.stagger.relaxed;
```

### Avoid Unnecessary Movement

Do not animate something just because animation is possible.

**Why:** Excessive motion creates visual noise, distracts from content, and reduces perceived professionalism. Every animation should have a clear purpose. Static elements provide visual anchors and breathing room.

**Implementation:** Only animate when it serves a communication purpose.

```ts
// Good: Animate to show hierarchy
title enters first, subtitle follows

// Bad: Animate everything simultaneously
all elements fade in at once
```

### Determinism

The same input and frame should produce the same output.

**Why:** Deterministic rendering ensures consistent video output across renders, enables caching, and makes debugging easier. Random or time-based animations create unpredictable results and are difficult to reproduce.

**Implementation:** Use frame-based animation, never time-based or random.

```ts
// Good: Frame-based
const value = interpolate(frame, [0, 30], [0, 1]);

// Bad: Time-based
const value = Math.sin(Date.now() / 1000);
```

## Motion Patterns

MotionKit provides predefined motion patterns for common use cases:

### Entrance Patterns

**Soft Entrance** - Gentle, natural entrance for general content
- Duration: 18 frames
- Easing: ease-out
- Use: Titles, labels, general UI elements

**Emphasis Entrance** - Stronger entrance for important content
- Duration: 24 frames
- Easing: emphasized (ease-in-out)
- Use: Key statistics, important announcements

**Quick Entrance** - Fast entrance for secondary content
- Duration: 10 frames
- Easing: ease-out
- Use: Tooltips, status indicators

### Exit Patterns

**Quick Exit** - Fast exit for maintaining pacing
- Duration: 12 frames
- Easing: ease-in
- Use: General content, UI elements

**Normal Exit** - Standard exit timing
- Duration: 18 frames
- Easing: ease-in
- Use: Important content, transitions

### Reveal Patterns

**Text Reveal** - Staggered text animation
- Duration: 18 frames
- Easing: ease-out
- Stagger: 5 frames
- Use: Paragraphs, lists, word-by-word reveals

**Chart Reveal** - Sequential data visualization
- Duration: 30 frames
- Easing: ease-out
- Stagger: 8 frames
- Use: Bar charts, data points, statistics

**List Reveal** - Sequential list items
- Duration: 24 frames
- Easing: ease-out
- Stagger: 6 frames
- Use: Bullet points, feature lists, steps

## Timing Decisions

### Duration Tokens

**Instant (5 frames)** - Micro-interactions, state changes
**Fast (10 frames)** - Quick entrances, secondary content
**Normal (18 frames)** - Standard entrances, primary content
**Slow (30 frames)** - Emphasis, important content
**Extra Slow (45 frames)** - Major transitions, chapter titles

### Delay Tokens

**Short (5 frames)** - Tight stagger, related elements
**Medium (10 frames)** - Normal stagger, sequential content
**Long (15 frames)** - Relaxed stagger, separate sections

### Stagger Tokens

**Tight (3 frames)** - Closely related elements
**Normal (5 frames)** - Standard stagger, general use
**Relaxed (8 frames)** - Separate sections, breathing room

## Visual Hierarchy

Motion should reinforce visual hierarchy:

1. **Primary elements** animate first with stronger motion
2. **Secondary elements** follow with moderate motion
3. **Tertiary elements** follow last with subtle motion
4. **Background elements** remain static or have minimal motion

Example:
```
Title (primary) → Subtitle (secondary) → Body (tertiary)
```

## Rhythm and Pacing

Good motion has rhythm:

- **Breathing room:** Allow pauses between animations
- **Grouping:** Related elements animate together
- **Contrast:** Mix fast and slow animations for interest
- **Consistency:** Similar elements use similar timing

## Accessibility Considerations

Motion should respect accessibility:

- **Reduced motion:** Provide options for minimal animation
- **Avoid flashing:** No strobe effects or rapid flashing
- **Readable text:** Ensure text remains readable during animation
- **Purposeful motion:** Every animation should have a clear purpose

## Performance Considerations

Motion should be performant:

- **GPU acceleration:** Use transforms and opacity when possible
- **Avoid layout thrashing:** Batch DOM reads and writes
- **Simplify calculations:** Cache expensive calculations
- **Use hardware acceleration:** Leverage CSS transforms

## Common Mistakes

### Over-Animation
- Animating too many elements simultaneously
- Using excessive easing curves
- Adding motion to static UI elements

### Under-Animation
- No visual feedback on interactions
- Abrupt transitions
- Lack of hierarchy communication

### Inconsistent Timing
- Mixed durations without purpose
- Random delays
- No stagger where hierarchy exists

### Wrong Easing
- Using ease-in for entrances (feels unnatural)
- Using ease-out for exits (feels sluggish)
- Linear easing for organic motion

## Conclusion

MotionKit's philosophy is that motion should be intentional, purposeful, and communicative. Every animation should serve a clear purpose: guiding attention, establishing hierarchy, or communicating state. By following these principles, we create motion that feels natural, professional, and enhances the user experience rather than distracting from it.
