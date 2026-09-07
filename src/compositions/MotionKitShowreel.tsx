import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import {AnimatedTitle} from '../components/motion/AnimatedTitle';
import {LowerThird} from '../components/motion/LowerThird';
import {AnimatedChart} from '../components/motion/AnimatedChart';
import {SceneTransition} from '../components/motion/SceneTransition';
import {KineticText} from '../components/motion/KineticText';
import {StatCard} from '../components/motion/StatCard';
import {QuoteCard} from '../components/motion/QuoteCard';
import {ChapterTitle} from '../components/motion/ChapterTitle';
import {designTokens, motionTokens} from '../design/tokens';
import {creatorGrowthData} from '../data/chartData';

export const MotionKitShowreel: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Showreel timing (30-45 seconds = 900-1350 frames)
  const scene1End = 120;    // 4s - Logo/Title
  const scene2End = 240;    // 8s - Typography
  const scene3End = 360;    // 12s - Lower Third
  const scene4End = 480;    // 16s - Charts
  const scene5End = 600;    // 20s - Stats
  const scene6End = 720;    // 24s - Quote
  const scene7End = 840;    // 28s - Chapter
  const scene8End = 960;    // 32s - Transitions
  const scene9End = 1080;   // 36s - Vertical
  const scene10End = 1200;  // 40s - Themes
  
  return (
    <AbsoluteFill style={{backgroundColor: designTokens.colors.background}}>
      {/* SCENE 1 — LOGO/TITLE */}
      {frame < scene1End && (
        <AnimatedTitle
          title="MotionKit"
          subtitle="Reusable Motion Components"
          direction="up"
          delay={10}
          accentText="Kit"
        />
      )}
      
      {/* SCENE 2 — TYPOGRAPHY */}
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
          <div
            style={{
              fontSize: designTokens.typography.heading.fontSize,
              fontWeight: designTokens.typography.heading.fontWeight,
              color: designTokens.colors.foreground,
              opacity: interpolate(frame, [scene1End, scene1End + 15], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            Kinetic Typography
          </div>
          <KineticText
            text="Words animate with purpose"
            mode="words"
            emphasis={["purpose"]}
            enter="slide-up"
            align="center"
            delay={scene1End + 20}
            fontSize={designTokens.typography.display.fontSize}
          />
        </div>
      )}
      
      {/* SCENE 3 — LOWER THIRD */}
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
          <div
            style={{
              fontSize: designTokens.typography.heading.fontSize,
              fontWeight: designTokens.typography.heading.fontWeight,
              color: designTokens.colors.foreground,
              opacity: interpolate(frame, [scene2End, scene2End + 15], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            Lower Thirds
          </div>
          <LowerThird
            name="Sarah Chen"
            role="Motion Designer"
            company="MotionKit"
            accent="violet"
            showAvatar={true}
            delay={scene2End + 20}
          />
        </div>
      )}
      
      {/* SCENE 4 — CHARTS */}
      {frame >= scene3End && frame < scene4End && (
        <AnimatedChart
          title="Data Visualization"
          data={creatorGrowthData}
          type="vertical-bar"
          delay={scene3End + 10}
          duration={motionTokens.duration.slow}
          showLabels={true}
          showValues={true}
          precision={0}
        />
      )}
      
      {/* SCENE 5 — STATS */}
      {frame >= scene4End && frame < scene5End && (
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
              opacity: interpolate(frame, [scene4End, scene4End + 15], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            Statistics
          </div>
          <div
            style={{
              display: 'flex',
              gap: motionTokens.spacing.lg,
              opacity: interpolate(frame, [scene4End + 10, scene4End + 25], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            <StatCard
              value={42}
              suffix="%"
              label="Growth"
              trend="up"
              trendValue={8}
              variant="compact"
              delay={scene4End + 20}
            />
            <StatCard
              value={2400000}
              label="Views"
              trend="up"
              trendValue={12}
              variant="compact"
              delay={scene4End + 25}
            />
            <StatCard
              value={18000}
              label="Followers"
              trend="up"
              trendValue={15}
              variant="compact"
              delay={scene4End + 30}
            />
          </div>
        </div>
      )}
      
      {/* SCENE 6 — QUOTE */}
      {frame >= scene5End && frame < scene6End && (
        <QuoteCard
          quote="Motion is the bridge between static design and dynamic experience"
          author="MotionKit"
          role="Design System"
          accent="blue"
          align="center"
          delay={scene5End + 10}
          duration={motionTokens.duration.slow}
          source="Motion Philosophy"
        />
      )}
      
      {/* SCENE 7 — CHAPTER TITLE */}
      {frame >= scene6End && frame < scene7End && (
        <ChapterTitle
          chapterNumber="01"
          title="The Motion System"
          subtitle="Building reusable components"
          category="Chapter"
          align="center"
          delay={scene6End + 10}
          duration={motionTokens.duration.slow}
          accentColor={designTokens.colors.accent}
          showBackground={true}
        />
      )}
      
      {/* SCENE 8 — TRANSITIONS */}
      {frame >= scene7End && frame < scene8End && (
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
              opacity: interpolate(frame, [scene7End, scene7End + 15], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            Transitions
          </div>
          <div
            style={{
              display: 'flex',
              gap: motionTokens.spacing.md,
              opacity: interpolate(frame, [scene7End + 10, scene7End + 25], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            {['Fade', 'Slide', 'Wipe', 'Zoom', 'Push', 'Mask'].map((type, index) => (
              <div
                key={index}
                style={{
                  fontSize: designTokens.typography.label.fontSize,
                  color: designTokens.colors.muted,
                  padding: motionTokens.spacing.md,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: designTokens.borderRadius.md,
                  border: `1px solid ${designTokens.colors.border}`,
                }}
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* SCENE 9 — VERTICAL FORMAT */}
      {frame >= scene8End && frame < scene9End && (
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
              opacity: interpolate(frame, [scene8End, scene8End + 15], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            Responsive Formats
          </div>
          <div
            style={{
              display: 'flex',
              gap: motionTokens.spacing.lg,
              opacity: interpolate(frame, [scene8End + 10, scene8End + 25], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            {['16:9 Landscape', '9:16 Vertical', '1:1 Square'].map((format, index) => (
              <div
                key={index}
                style={{
                  fontSize: designTokens.typography.label.fontSize,
                  color: designTokens.colors.accent,
                  padding: motionTokens.spacing.md,
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  borderRadius: designTokens.borderRadius.md,
                  border: `1px solid ${designTokens.colors.accent}`,
                }}
              >
                {format}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* SCENE 10 — THEMES */}
      {frame >= scene9End && frame < scene10End && (
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
              opacity: interpolate(frame, [scene9End, scene9End + 15], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            Theme Support
          </div>
          <div
            style={{
              display: 'flex',
              gap: motionTokens.spacing.lg,
              opacity: interpolate(frame, [scene9End + 10, scene9End + 25], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            {['Dark', 'Light', 'Editorial'].map((theme, index) => (
              <div
                key={index}
                style={{
                  fontSize: designTokens.typography.label.fontSize,
                  color: designTokens.colors.foreground,
                  padding: motionTokens.spacing.md,
                  backgroundColor: index === 0 ? '#0a0a0f' : index === 1 ? '#ffffff' : '#f5f5f0',
                  borderRadius: designTokens.borderRadius.md,
                  border: `1px solid ${designTokens.colors.border}`,
                  minWidth: 100,
                  textAlign: 'center',
                }}
              >
                {theme}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* ENDING */}
      {frame >= scene10End && (
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
              opacity: interpolate(frame, [scene10End, scene10End + 15], [0, 1], {
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
              opacity: interpolate(frame, [scene10End + 10, scene10End + 25], [0, 1], {
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
              opacity: interpolate(frame, [scene10End + 20, scene10End + 35], [0, 1], {
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
