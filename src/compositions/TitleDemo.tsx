import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {AnimatedTitle} from '../components/motion/AnimatedTitle';
import {designTokens} from '../design/tokens';

export const TitleDemo: React.FC = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill style={{backgroundColor: designTokens.colors.background}}>
      {frame < 60 && (
        <AnimatedTitle
          title="Build Better Videos"
          subtitle="Motion systems powered by React"
          direction="up"
          delay={0}
        />
      )}
      {frame >= 60 && (
        <AnimatedTitle
          title="MotionKit"
          subtitle="Reusable motion components"
          direction="left"
          delay={60}
          accentText="Kit"
        />
      )}
    </AbsoluteFill>
  );
};
