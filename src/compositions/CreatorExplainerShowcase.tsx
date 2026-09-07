import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import {KineticText} from '../components/motion/KineticText';
import {StatCard} from '../components/motion/StatCard';
import {QuoteCard} from '../components/motion/QuoteCard';
import {ChapterTitle} from '../components/motion/ChapterTitle';
import {AnimatedChart} from '../components/motion/AnimatedChart';
import {designTokens, motionTokens} from '../design/tokens';
import {creatorGrowthData} from '../data/chartData';

export const CreatorExplainerShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  
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
            text="Video is becoming the language of the internet"
            mode="words"
            emphasis={["language", "internet"]}
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
            value={82}
            suffix="%"
            label="of online traffic is video"
            trend="up"
            trendValue={15}
            variant="large"
            delay={scene1End + 20}
            duration={motionTokens.duration.slow}
          />
          <div
            style={{
              fontSize: designTokens.typography.body.fontSize,
              color: designTokens.colors.muted,
              opacity: interpolate(frame, [scene1End + 40, scene1End + 55], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            Source: Global video consumption data
          </div>
        </div>
      )}
      
      {/* SCENE 3 — EXPLAINER: ChapterTitle + Animated Text */}
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
            chapterNumber="01"
            title="The Creator Economy"
            subtitle="Why storytelling is changing"
            category="Chapter"
            align="center"
            delay={scene2End + 10}
            duration={motionTokens.duration.slow}
            accentColor={designTokens.colors.accent}
            showBackground={true}
          />
        </div>
      )}
      
      {/* SCENE 4 — CHART: AnimatedChart */}
      {frame >= scene3End && frame < scene4End && (
        <AnimatedChart
          title="Creator Growth Over Time"
          data={creatorGrowthData}
          type="vertical-bar"
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
          quote="The best marketing doesn't feel like marketing. It feels like a story."
          author="Tom Fishburne"
          role="Marketing Cartoonist"
          accent="violet"
          align="center"
          delay={scene4End + 10}
          duration={motionTokens.duration.slow}
          source="Marketoonist"
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
            <StatCard
              value={42}
              suffix="%"
              label="Growth Rate"
              trend="up"
              trendValue={8}
              variant="compact"
              delay={scene5End + 20}
            />
            <StatCard
              value={2400000}
              label="Total Views"
              trend="up"
              trendValue={12}
              variant="compact"
              delay={scene5End + 25}
            />
            <StatCard
              value={18000}
              label="Followers"
              trend="up"
              trendValue={15}
              variant="compact"
              delay={scene5End + 30}
            />
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
            text="Motion makes content memorable"
            mode="words"
            emphasis={["memorable"]}
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
            MotionKit
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
            Build better videos with React
          </div>
          <div
            style={{
              fontSize: designTokens.typography.label.fontSize,
              color: designTokens.colors.accent,
              opacity: interpolate(frame, [scene7End + 20, scene7End + 35], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            motionkit.dev
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
