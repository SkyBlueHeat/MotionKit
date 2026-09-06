import React from 'react';
import {AbsoluteFill} from 'remotion';
import {designTokens} from '../../design/tokens';
import {interpolate} from 'remotion';

export type TransitionType = 'fade' | 'slide' | 'wipe' | 'zoom';

export type TransitionDirection = 'left' | 'right' | 'up' | 'down';

export type SceneTransitionProps = {
  type: TransitionType;
  direction?: TransitionDirection;
  children: React.ReactNode;
  progress: number;
};

export const SceneTransition: React.FC<SceneTransitionProps> = ({
  type,
  direction = 'left',
  children,
  progress,
}) => {
  const getTransform = () => {
    switch (type) {
      case 'fade': {
        return {
          opacity: interpolate(progress, [0, 0.5, 1], [0, 1, 0]),
        };
      }
      
      case 'slide': {
        const slideDistance = 200;
        const slideProgress = interpolate(progress, [0, 1], [slideDistance, -slideDistance]);
        const axis = direction === 'left' || direction === 'right' ? 'X' : 'Y';
        const sign = direction === 'left' || direction === 'up' ? 1 : -1;
        return {
          transform: `translate${axis}(${sign * slideProgress}px)`,
          opacity: interpolate(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
        };
      }
      
      case 'wipe': {
        const wipeDistance = 100;
        const wipeProgress = interpolate(progress, [0, 1], [0, wipeDistance]);
        const wipeAxis = direction === 'left' || direction === 'right' ? 'X' : 'Y';
        const wipeSign = direction === 'left' || direction === 'up' ? -1 : 1;
        return {
          clipPath: `inset(0 ${wipeAxis === 'X' && wipeSign === 1 ? wipeProgress : 0}% ${wipeAxis === 'Y' && wipeSign === 1 ? wipeProgress : 0}% ${wipeAxis === 'X' && wipeSign === -1 ? wipeProgress : 0}%)`,
        };
      }
      
      case 'zoom': {
        const scale = interpolate(progress, [0, 0.5, 1], [0.8, 1, 0.8]);
        return {
          transform: `scale(${scale})`,
          opacity: interpolate(progress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
        };
      }
      
      default:
        return {};
    }
  };
  
  const transitionStyle: React.CSSProperties = {
    ...getTransform(),
    width: '100%',
    height: '100%',
  };
  
  return (
    <div style={transitionStyle}>
      {children}
    </div>
  );
};

export const TransitionWrapper: React.FC<{
  children: React.ReactNode;
  backgroundColor?: string;
}> = ({children, backgroundColor = designTokens.colors.background}) => {
  return (
    <AbsoluteFill style={{backgroundColor}}>
      {children}
    </AbsoluteFill>
  );
};
