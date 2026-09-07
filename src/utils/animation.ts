import {
  interpolate,
  spring,
} from 'remotion';
import {motionTokens} from '../design/tokens';

export const fadeIn = (frame: number, delay: number = 0, duration: number = motionTokens.duration.normal) => {
  const startFrame = delay;
  const endFrame = delay + duration;
  
  if (frame < startFrame) return 0;
  if (frame > endFrame) return 1;
  
  return interpolate(frame, [startFrame, endFrame], [0, 1], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });
};

export const slideIn = (
  frame: number,
  direction: 'up' | 'down' | 'left' | 'right',
  distance: number = 100,
  delay: number = 0,
  duration: number = motionTokens.duration.normal
) => {
  const startFrame = delay;
  const endFrame = delay + duration;
  
  if (frame < startFrame) return distance;
  if (frame > endFrame) return 0;
  
  return interpolate(frame, [startFrame, endFrame], [distance, 0], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
    easing: motionTokens.easing.enter,
  });
};

export const scaleIn = (
  frame: number,
  delay: number = 0,
  duration: number = motionTokens.duration.normal,
  fromScale: number = 0.9
) => {
  const startFrame = delay;
  const endFrame = delay + duration;
  
  if (frame < startFrame) return fromScale;
  if (frame > endFrame) return 1;
  
  return interpolate(frame, [startFrame, endFrame], [fromScale, 1], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
    easing: motionTokens.easing.enter,
  });
};

export const stagger = (index: number, staggerDelay: number = 5) => {
  return index * staggerDelay;
};

export const clampProgress = (progress: number) => {
  return Math.max(0, Math.min(1, progress));
};

export const useSpringAnimation = (
  frame: number,
  fps: number,
  delay: number = 0,
  config?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  }
) => {
  const effectiveFrame = Math.max(0, frame - delay);
  
  return spring({
    frame: effectiveFrame,
    fps,
    config: {
      stiffness: config?.stiffness ?? 100,
      damping: config?.damping ?? 15,
      mass: config?.mass ?? 1,
    },
  });
};

export const getSceneProgress = (
  frame: number,
  sceneStart: number,
  sceneDuration: number
) => {
  const relativeFrame = frame - sceneStart;
  return clampProgress(relativeFrame / sceneDuration);
};
