import {useCurrentFrame, useVideoConfig} from 'remotion';

export type VideoFormat = 'landscape' | 'vertical' | 'square';

export interface VideoDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

export const formatDimensions: Record<VideoFormat, VideoDimensions> = {
  landscape: {width: 1920, height: 1080, aspectRatio: 16/9},
  vertical: {width: 1080, height: 1920, aspectRatio: 9/16},
  square: {width: 1080, height: 1080, aspectRatio: 1},
};

export const getFormatFromDimensions = (width: number, height: number): VideoFormat => {
  const ratio = width / height;
  if (ratio > 1.2) return 'landscape';
  if (ratio < 0.8) return 'vertical';
  return 'square';
};

export const useVideoFormat = (): VideoFormat => {
  const {width, height} = useVideoConfig();
  return getFormatFromDimensions(width, height);
};

export const useFormatAware = () => {
  const format = useVideoFormat();
  const {width, height} = useVideoConfig();
  
  const isLandscape = format === 'landscape';
  const isVertical = format === 'vertical';
  const isSquare = format === 'square';
  
  return {
    format,
    isLandscape,
    isVertical,
    isSquare,
    width,
    height,
  };
};

export const getScaleFactor = (format: VideoFormat): number => {
  switch (format) {
    case 'landscape':
      return 1;
    case 'vertical':
      return 0.8;
    case 'square':
      return 0.85;
  }
};

export const scaleTypography = (fontSize: number, format: VideoFormat): number => {
  const scaleFactor = getScaleFactor(format);
  return Math.round(fontSize * scaleFactor);
};

export const scaleSpacing = (spacing: number, format: VideoFormat): number => {
  const scaleFactor = getScaleFactor(format);
  return Math.round(spacing * scaleFactor);
};

export const scalePadding = (padding: number, format: VideoFormat): number => {
  const scaleFactor = getScaleFactor(format);
  return Math.round(padding * scaleFactor);
};

export const getSafeZone = (format: VideoFormat): {top: number; bottom: number; left: number; right: number} => {
  switch (format) {
    case 'landscape':
      return {top: 100, bottom: 100, left: 100, right: 100};
    case 'vertical':
      return {top: 150, bottom: 150, left: 80, right: 80};
    case 'square':
      return {top: 120, bottom: 120, left: 80, right: 80};
  }
};

export const getMaxWidth = (format: VideoFormat, percentage: number = 0.8): number => {
  const {width} = formatDimensions[format];
  return Math.round(width * percentage);
};
