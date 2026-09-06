import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import {AnimatedTitle} from '../components/motion/AnimatedTitle';
import {Counter} from '../components/motion/Counter';
import {designTokens, motionTokens} from '../design/tokens';
import {formatCompactNumber} from '../utils/numbers';

export type CreatorStatsProps = {
  creatorName: string;
  followersBefore: number;
  followersAfter: number;
  views: number;
  engagement: number;
};

export const CreatorStats: React.FC<CreatorStatsProps> = ({
  creatorName,
  followersBefore,
  followersAfter,
  views,
  engagement,
}) => {
  const frame = useCurrentFrame();
  
  const growth = followersAfter - followersBefore;
  const growthPercent = Math.round((growth / followersBefore) * 100);
  
  const StatCard = ({
    label,
    value,
    unit,
    delay,
  }: {
    label: string;
    value: number;
    unit: string;
    delay: number;
  }) => {
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
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: designTokens.typography.label.fontSize,
            fontWeight: designTokens.typography.label.fontWeight,
            color: designTokens.colors.muted,
            marginBottom: motionTokens.spacing.sm,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: designTokens.typography.numeric.fontSize,
            fontWeight: designTokens.typography.numeric.fontWeight,
            color: designTokens.colors.foreground,
          }}
        >
          <Counter value={value} delay={delay + 10} duration={20} format={formatCompactNumber} />
          <span style={{fontSize: 24, marginLeft: 4}}>{unit}</span>
        </div>
      </div>
    );
  };
  
  return (
    <AbsoluteFill style={{backgroundColor: designTokens.colors.background}}>
      {frame < 60 && (
        <AnimatedTitle
          title={`${creatorName}'s Stats`}
          subtitle="Creator analytics recap"
          direction="up"
          delay={10}
        />
      )}
      
      {frame >= 60 && frame < 180 && (
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
              opacity: interpolate(frame, [60, 75], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            Growth Overview
          </div>
          <div
            style={{
              display: 'flex',
              gap: motionTokens.spacing.lg,
              width: '100%',
              maxWidth: 1000,
              padding: `0 ${motionTokens.spacing.xl}`,
            }}
          >
            <StatCard
              label="Followers Growth"
              value={growth}
              unit="+"
              delay={80}
            />
            <StatCard
              label="Total Views"
              value={views}
              unit=""
              delay={90}
            />
            <StatCard
              label="Engagement Rate"
              value={engagement}
              unit="%"
              delay={100}
            />
          </div>
        </div>
      )}
      
      {frame >= 180 && (
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
              opacity: interpolate(frame, [180, 195], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            {growthPercent}% Growth
          </div>
          <div
            style={{
              fontSize: designTokens.typography.body.fontSize,
              color: designTokens.colors.muted,
              opacity: interpolate(frame, [190, 205], [0, 1], {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
              }),
            }}
          >
            From {formatCompactNumber(followersBefore)} to {formatCompactNumber(followersAfter)} followers
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};

export const CreatorStatsDemo: React.FC = () => {
  return (
    <CreatorStats
      creatorName="Alex"
      followersBefore={12500}
      followersAfter={48700}
      views={1200000}
      engagement={8.4}
    />
  );
};
