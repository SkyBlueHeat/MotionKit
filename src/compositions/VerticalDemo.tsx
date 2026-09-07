import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {KineticText} from '../components/motion/KineticText';
import {StatCard} from '../components/motion/StatCard';
import {designTokens, motionTokens} from '../design/tokens';
import {useFormatAware, scaleTypography, scaleSpacing} from '../utils/format';

export const VerticalDemo: React.FC = () => {
  const frame = useCurrentFrame();
  const {format, isVertical} = useFormatAware();
  
  const titleDelay = 10;
  const statsDelay = 60;
  
  const scaledFontSize = scaleTypography(designTokens.typography.display.fontSize, format);
  const scaledSpacing = scaleSpacing(motionTokens.spacing.xl, format);
  
  return (
    <AbsoluteFill style={{backgroundColor: designTokens.colors.background}}>
      {frame < statsDelay && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: scaledSpacing,
            padding: scaledSpacing,
          }}
        >
          <KineticText
            text="Vertical Video"
            mode="words"
            emphasis={["Vertical"]}
            enter="slide-up"
            align="center"
            delay={titleDelay}
            fontSize={scaledFontSize}
          />
          <KineticText
            text="Format Support"
            mode="words"
            enter="slide-up"
            align="center"
            delay={titleDelay + 15}
            fontSize={scaleTypography(designTokens.typography.body.fontSize, format)}
          />
        </div>
      )}
      
      {frame >= statsDelay && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: scaleSpacing(motionTokens.spacing.lg, format),
            padding: scaledSpacing,
          }}
        >
          <StatCard
            value={82}
            suffix="%"
            label="Engagement"
            trend="up"
            trendValue={12}
            variant="compact"
            delay={statsDelay}
          />
          <StatCard
            value={2400000}
            label="Views"
            trend="up"
            trendValue={8}
            variant="compact"
            delay={statsDelay + 10}
          />
          <StatCard
            value={18000}
            label="Followers"
            trend="up"
            trendValue={15}
            variant="compact"
            delay={statsDelay + 20}
          />
        </div>
      )}
    </AbsoluteFill>
  );
};
