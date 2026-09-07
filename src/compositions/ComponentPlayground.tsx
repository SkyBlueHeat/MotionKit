import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {KineticText} from '../components/motion/KineticText';
import {StatCard} from '../components/motion/StatCard';
import {QuoteCard} from '../components/motion/QuoteCard';
import {ChapterTitle} from '../components/motion/ChapterTitle';
import {AnimatedChart} from '../components/motion/AnimatedChart';
import {designTokens, motionTokens} from '../design/tokens';
import {creatorGrowthData} from '../data/chartData';

export const ComponentPlayground: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Simple playground showing all components in a grid
  return (
    <AbsoluteFill style={{backgroundColor: designTokens.colors.background, padding: motionTokens.spacing.xl}}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          gap: motionTokens.spacing.lg,
          height: '100%',
          padding: motionTokens.spacing.xl,
        }}
      >
        {/* KineticText */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: designTokens.borderRadius.lg,
            padding: motionTokens.spacing.lg,
          }}
        >
          <KineticText
            text="Kinetic Typography"
            mode="words"
            emphasis={["Kinetic"]}
            enter="slide-up"
            align="center"
            delay={10}
            fontSize={designTokens.typography.heading.fontSize}
          />
        </div>
        
        {/* StatCard */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: designTokens.borderRadius.lg,
            padding: motionTokens.spacing.lg,
          }}
        >
          <StatCard
            value={42}
            suffix="%"
            label="Engagement"
            trend="up"
            trendValue={8}
            variant="compact"
            delay={10}
          />
        </div>
        
        {/* QuoteCard */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: designTokens.borderRadius.lg,
            padding: motionTokens.spacing.lg,
          }}
        >
          <QuoteCard
            quote="Motion communicates"
            author="MotionKit"
            role="Design System"
            accent="blue"
            align="center"
            delay={10}
            duration={motionTokens.duration.normal}
          />
        </div>
        
        {/* ChapterTitle */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: designTokens.borderRadius.lg,
            padding: motionTokens.spacing.lg,
          }}
        >
          <ChapterTitle
            chapterNumber="01"
            title="Component Library"
            subtitle="9 reusable components"
            category="Chapter"
            align="center"
            delay={10}
            duration={motionTokens.duration.normal}
            showBackground={false}
          />
        </div>
        
        {/* AnimatedChart */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: designTokens.borderRadius.lg,
            padding: motionTokens.spacing.lg,
            gridColumn: 'span 2',
          }}
        >
          <AnimatedChart
            title="Component Library"
            data={creatorGrowthData}
            type="vertical-bar"
            delay={10}
            duration={motionTokens.duration.normal}
            showLabels={true}
            showValues={true}
            precision={0}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
