import React from 'react';
import {AbsoluteFill} from 'remotion';
import {AnimatedChart} from '../components/motion/AnimatedChart';
import {creatorGrowthData} from '../data/chartData';
import {designTokens} from '../design/tokens';

export const ChartDemo: React.FC = () => {
  
  return (
    <AbsoluteFill style={{backgroundColor: designTokens.colors.background}}>
      <AnimatedChart
        title="Monthly Views"
        data={creatorGrowthData}
        unit="views"
        delay={10}
      />
    </AbsoluteFill>
  );
};
