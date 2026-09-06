import {interpolate} from 'remotion';

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  }
  return num.toString();
};

export const animateValue = (
  frame: number,
  startFrame: number,
  endFrame: number,
  startValue: number,
  endValue: number
): number => {
  if (frame < startFrame) return startValue;
  if (frame > endFrame) return endValue;
  
  return interpolate(frame, [startFrame, endFrame], [startValue, endValue], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });
};

export const formatCompactNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(num);
};
