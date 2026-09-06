import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {LowerThird} from '../components/motion/LowerThird';
import {designTokens} from '../design/tokens';

export const LowerThirdDemo: React.FC = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill style={{backgroundColor: designTokens.colors.background}}>
      {frame < 75 && (
        <LowerThird
          name="Bora Aydin"
          role="Frontend Developer"
          company="MotionKit"
          accent="violet"
          delay={10}
          showAvatar={true}
        />
      )}
      {frame >= 75 && (
        <LowerThird
          name="Sarah Chen"
          role="Motion Designer"
          company="Creative Studio"
          accent="blue"
          delay={85}
          showAvatar={true}
        />
      )}
    </AbsoluteFill>
  );
};
