import React from 'react';
import {AbsoluteFill} from 'remotion';
import {designTokens, motionTokens} from '../../design/tokens';
import {interpolate} from 'remotion';

export type TransitionType = 'fade' | 'slide' | 'wipe' | 'zoom' | 'push' | 'mask';

export type TransitionDirection = 'left' | 'right' | 'up' | 'down';

export type SceneTransitionProps = {
  type: TransitionType;
  direction?: TransitionDirection;
  children: React.ReactNode;
  progress: number;
  duration?: number;
};

export const SceneTransition: React.FC<SceneTransitionProps> = ({
  type,
  direction = 'left',
  children,
  progress,
  duration = motionTokens.duration.normal,
}) => {
  const getTransform = () => {
    const slideDistance = 200;
    
    switch (type) {
      case 'fade': {
        return {
          opacity: interpolate(progress, [0, 0.5, 1], [0, 1, 0]),
        };
      }
      
      case 'slide': {
        const slideProgress = interpolate(progress, [0, 1], [slideDistance, -slideDistance]);
        const axis = direction === 'left' || direction === 'right' ? 'X' : 'Y';
        const sign = direction === 'left' || direction === 'up' ? 1 : -1;
        return {
          transform: `translate${axis}(${sign * slideProgress}px)`,
          opacity: interpolate(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
        };
      }
      
      case 'wipe': {
        const wipeProgress = interpolate(progress, [0, 1], [0, 100]);
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
      
      case 'push': {
        const pushProgress = interpolate(progress, [0, 1], [0, slideDistance]);
        const axis = direction === 'left' || direction === 'right' ? 'X' : 'Y';
        const sign = direction === 'left' || direction === 'up' ? -1 : 1;
        return {
          transform: `translate${axis}(${sign * pushProgress}px)`,
        };
      }
      
      case 'mask': {
        const maskProgress = interpolate(progress, [0, 1], [0, 100]);
        const maskAxis = direction === 'left' || direction === 'right' ? 'X' : 'Y';
        const maskSign = direction === 'left' || direction === 'up' ? -1 : 1;
        return {
          clipPath: `circle(${100 - maskProgress}% at ${maskAxis === 'X' ? (maskSign === 1 ? '100%' : '0%') : '50%'} ${maskAxis === 'Y' ? (maskSign === 1 ? '100%' : '0%') : '50%'})`,
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
