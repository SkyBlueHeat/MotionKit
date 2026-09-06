import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import {AnimatedTitle} from '../components/motion/AnimatedTitle';
import {AnimatedChart} from '../components/motion/AnimatedChart';
import {designTokens, motionTokens} from '../design/tokens';
import {creatorGrowthData} from '../data/chartData';

const FeatureCard = ({title, description, delay}: {title: string; description: string; delay: number}) => {
  const frame = useCurrentFrame();
  
  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });
  
  const slide = interpolate(frame, [delay, delay + 15], [50, 0], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });
  
  return (
    <div
      style={{
        opacity,
        transform: `translateX(${slide}px)`,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: `1px solid ${designTokens.colors.border}`,
        borderRadius: designTokens.borderRadius.lg,
        padding: motionTokens.spacing.lg,
        minWidth: 280,
      }}
    >
      <div
        style={{
          fontSize: designTokens.typography.label.fontSize,
          fontWeight: designTokens.typography.label.fontWeight,
          color: designTokens.colors.accent,
          marginBottom: motionTokens.spacing.sm,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: designTokens.typography.body.fontSize,
          color: designTokens.colors.muted,
        }}
      >
        {description}
      </div>
    </div>
  );
};

const Logo = () => (
  <div
    style={{
      fontSize: 48,
      fontWeight: 700,
      color: designTokens.colors.accent,
      letterSpacing: -0.02,
    }}
  >
    MotionKit
  </div>
);

export const ProductPromo: React.FC = () => {
  const frame = useCurrentFrame();
  
  const scene1End = 90;
  const scene2End = 180;
  const scene3End = 270;
  const scene4End = 360;
  
  return (
    <AbsoluteFill style={{backgroundColor: designTokens.colors.background}}>
      {frame < scene1End && (
        <AnimatedTitle
          title="MotionKit"
          subtitle="Build motion with code"
          direction="up"
          delay={10}
          accentText="Kit"
        />
      )}
      
      {frame >= scene1End && frame < scene2End && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: motionTokens.spacing.xl,
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
            Reusable Components
          </div>
          <div
            style={{
              display: 'flex',
              gap: motionTokens.spacing.lg,
              opacity: interpolate(frame, [scene1End + 10, scene1End + 25], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            <FeatureCard
              title="Animated Title"
              description="Smooth entrance animations"
              delay={scene1End + 15}
            />
            <FeatureCard
              title="Lower Third"
              description="Professional overlays"
              delay={scene1End + 20}
            />
            <FeatureCard
              title="Data Charts"
              description="Animated visualizations"
              delay={scene1End + 25}
            />
          </div>
        </div>
      )}
      
      {frame >= scene2End && frame < scene3End && (
        <AnimatedChart
          title="Creator Growth"
          data={creatorGrowthData}
          unit="views"
          delay={scene2End + 10}
        />
      )}
      
      {frame >= scene3End && frame < scene4End && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: motionTokens.spacing.xl,
          }}
        >
          <div
            style={{
              fontSize: designTokens.typography.heading.fontSize,
              fontWeight: designTokens.typography.heading.fontWeight,
              color: designTokens.colors.foreground,
              opacity: interpolate(frame, [scene3End, scene3End + 15], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            Why MotionKit?
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: motionTokens.spacing.md,
              maxWidth: 800,
            }}
          >
            {[
              'Type-safe motion components',
              'Frame-based deterministic animation',
              'Reusable design tokens',
              'Clean separation of concerns',
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  fontSize: designTokens.typography.body.fontSize,
                  color: designTokens.colors.muted,
                  opacity: interpolate(frame, [scene3End + 15 + index * 5, scene3End + 20 + index * 5], [0, 1], {
                    extrapolateRight: 'clamp',
                    extrapolateLeft: 'clamp',
                  }),
                  display: 'flex',
                  alignItems: 'center',
                  gap: motionTokens.spacing.sm,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: designTokens.colors.accent,
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {frame >= scene4End && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: motionTokens.spacing.xl,
          }}
        >
          <Logo />
          <div
            style={{
              fontSize: designTokens.typography.body.fontSize,
              color: designTokens.colors.muted,
              opacity: interpolate(frame, [scene4End, scene4End + 15], [0, 1], {
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
              opacity: interpolate(frame, [scene4End + 10, scene4End + 25], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            Get started at motionkit.dev
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
