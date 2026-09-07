import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import {KineticText} from '../components/motion/KineticText';
import {StatCard} from '../components/motion/StatCard';
import {QuoteCard} from '../components/motion/QuoteCard';
import {ChapterTitle} from '../components/motion/ChapterTitle';
import {AnimatedChart} from '../components/motion/AnimatedChart';
import {designTokens, motionTokens} from '../design/tokens';
import {ExplainerVideoData} from '../types/video';

export const DataDrivenExplainer: React.FC<Partial<ExplainerVideoData>> = (data) => {
  const frame = useCurrentFrame();
  
  // Provide fallback values for optional props
  const brand = data.brand || {name: 'MotionKit', primaryColor: '#6366f1', accentColor: '#8b5cf6'};
  const hook = data.hook || {text: 'Motion makes content memorable', emphasis: ['memorable']};
  const statistic = data.statistic || {value: 82, suffix: '%', label: 'Engagement', trend: 'up' as const, trendValue: 12};
  const chapter = data.chapter || {number: '01', title: 'The Future', subtitle: 'Why motion matters', category: 'Chapter'};
  const chart = data.chart || {title: 'Growth', data: [{label: 'Q1', value: 100}, {label: 'Q2', value: 150}]};
  const quote = data.quote || {text: 'Motion communicates', author: 'MotionKit', role: 'Design System'};
  const stats = data.stats || [{value: 42, suffix: '%', label: 'Growth', trend: 'up' as const, trendValue: 8}];
  const ending = data.ending || {title: 'MotionKit', subtitle: 'Build better videos', cta: 'motionkit.dev'};
  
  // Scene timing (total ~45 seconds = 1350 frames)
  const scene1End = 180;    // 6s - Hook
  const scene2End = 360;    // 12s - Statistic
  const scene3End = 540;    // 18s - Explainer
  const scene4End = 720;    // 24s - Chart
  const scene5End = 900;    // 30s - Quote
  const scene6End = 1080;   // 36s - Multiple stats
  const scene7End = 1200;   // 40s - Transition
  const scene8End = 1350;   // 45s - Ending
  
  return (
    <AbsoluteFill style={{backgroundColor: designTokens.colors.background}}>
      {/* SCENE 1 — HOOK: Kinetic Typography */}
      {frame < scene1End && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: motionTokens.spacing.xl,
            padding: motionTokens.spacing.xl,
          }}
        >
          <KineticText
            text={hook.text}
            mode="words"
            emphasis={hook.emphasis || []}
            enter="slide-up"
            align="center"
            delay={20}
            duration={motionTokens.duration.slow}
            fontSize={designTokens.typography.display.fontSize}
            maxWidth={1200}
          />
        </div>
      )}
      
      {/* SCENE 2 — STATISTIC: StatCard */}
      {frame >= scene1End && frame < scene2End && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: motionTokens.spacing.xl,
            padding: motionTokens.spacing.xl,
          }}
        >
          <StatCard
            value={statistic.value}
            prefix={statistic.prefix}
            suffix={statistic.suffix}
            label={statistic.label}
            trend={statistic.trend}
            trendValue={statistic.trendValue}
            variant="large"
            delay={scene1End + 20}
            duration={motionTokens.duration.slow}
            accentColor={brand.accentColor}
          />
        </div>
      )}
      
      {/* SCENE 3 — EXPLAINER: ChapterTitle */}
      {frame >= scene2End && frame < scene3End && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: motionTokens.spacing.xl,
            padding: motionTokens.spacing.xl,
          }}
        >
          <ChapterTitle
            chapterNumber={chapter.number}
            title={chapter.title}
            subtitle={chapter.subtitle}
            category={chapter.category}
            align="center"
            delay={scene2End + 10}
            duration={motionTokens.duration.slow}
            accentColor={brand.accentColor}
            showBackground={true}
          />
        </div>
      )}
      
      {/* SCENE 4 — CHART: AnimatedChart */}
      {frame >= scene3End && frame < scene4End && (
        <AnimatedChart
          title={chart.title}
          data={chart.data}
          type={chart.type || 'vertical-bar'}
          delay={scene3End + 10}
          duration={motionTokens.duration.slow}
          showLabels={true}
          showValues={true}
          precision={0}
        />
      )}
      
      {/* SCENE 5 — QUOTE: QuoteCard */}
      {frame >= scene4End && frame < scene5End && (
        <QuoteCard
          quote={quote.text}
          author={quote.author}
          role={quote.role}
          source={quote.source}
          accent="violet"
          align="center"
          delay={scene4End + 10}
          duration={motionTokens.duration.slow}
        />
      )}
      
      {/* SCENE 6 — MULTIPLE STATS: StatCard System */}
      {frame >= scene5End && frame < scene6End && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: motionTokens.spacing.xl,
            padding: motionTokens.spacing.xl,
          }}
        >
          <div
            style={{
              fontSize: designTokens.typography.heading.fontSize,
              fontWeight: designTokens.typography.heading.fontWeight,
              color: designTokens.colors.foreground,
              opacity: interpolate(frame, [scene5End, scene5End + 15], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            Key Metrics
          </div>
          <div
            style={{
              display: 'flex',
              gap: motionTokens.spacing.lg,
              opacity: interpolate(frame, [scene5End + 10, scene5End + 25], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                trend={stat.trend}
                trendValue={stat.trendValue}
                variant="compact"
                delay={scene5End + 20 + index * 5}
                accentColor={brand.accentColor}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* SCENE 7 — TRANSITION SHOWCASE */}
      {frame >= scene6End && frame < scene7End && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: motionTokens.spacing.xl,
            padding: motionTokens.spacing.xl,
          }}
        >
          <KineticText
            text={`${brand.name} delivers results`}
            mode="words"
            emphasis={[brand.name]}
            enter="slide-up"
            align="center"
            delay={scene6End + 10}
            duration={motionTokens.duration.normal}
            fontSize={designTokens.typography.heading.fontSize}
          />
        </div>
      )}
      
      {/* SCENE 8 — ENDING */}
      {frame >= scene7End && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: motionTokens.spacing.xl,
            padding: motionTokens.spacing.xl,
          }}
        >
          <div
            style={{
              fontSize: designTokens.typography.display.fontSize,
              fontWeight: designTokens.typography.display.fontWeight,
              color: designTokens.colors.foreground,
              opacity: interpolate(frame, [scene7End, scene7End + 15], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            {brand.name}
          </div>
          <div
            style={{
              fontSize: designTokens.typography.body.fontSize,
              color: designTokens.colors.muted,
              opacity: interpolate(frame, [scene7End + 10, scene7End + 25], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            {ending.subtitle}
          </div>
          <div
            style={{
              fontSize: designTokens.typography.label.fontSize,
              color: brand.accentColor,
              opacity: interpolate(frame, [scene7End + 20, scene7End + 35], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            {ending.cta}
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
