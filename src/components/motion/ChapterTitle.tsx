import React from 'react';
import {useCurrentFrame} from 'remotion';
import {designTokens, motionTokens} from '../../design/tokens';
import {fadeIn, slideIn, scaleIn} from '../../utils/animation';

export type ChapterTitleAlign = 'left' | 'center' | 'right';

export type ChapterTitleProps = {
  chapterNumber: number | string;
  title: string;
  subtitle?: string;
  category?: string;
  align?: ChapterTitleAlign;
  delay?: number;
  duration?: number;
  accentColor?: string;
  showBackground?: boolean;
};

export const ChapterTitle: React.FC<ChapterTitleProps> = ({
  chapterNumber,
  title,
  subtitle,
  category,
  align = 'center',
  delay = 0,
  duration = motionTokens.duration.slow,
  accentColor = designTokens.colors.accent,
  showBackground = false,
}) => {
  const frame = useCurrentFrame();
  
  const numberDelay = delay;
  const numberOpacity = fadeIn(frame, numberDelay, duration);
  const numberScale = scaleIn(frame, numberDelay, duration, 0.5);
  
  const titleDelay = delay + 10;
  const titleOpacity = fadeIn(frame, titleDelay, duration);
  const titleSlide = slideIn(frame, 'up', 40, titleDelay, duration);
  
  const subtitleDelay = delay + 20;
  const subtitleOpacity = fadeIn(frame, subtitleDelay, duration);
  const subtitleSlide = slideIn(frame, 'up', 30, subtitleDelay, duration);
  
  const categoryDelay = delay + 5;
  const categoryOpacity = fadeIn(frame, categoryDelay, motionTokens.duration.fast);
  
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: align === 'center' ? 'center' : align === 'left' ? 'flex-start' : 'flex-end',
    gap: motionTokens.spacing.lg,
    padding: `0 ${motionTokens.spacing.xl}`,
    width: '100%',
  };
  
  const backgroundStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${designTokens.colors.background} 0%, ${accentColor}15 100%)`,
    opacity: fadeIn(frame, delay, duration),
  };
  
  const numberStyle: React.CSSProperties = {
    fontSize: designTokens.typography.display.fontSize * 1.5,
    fontWeight: designTokens.typography.display.fontWeight,
    color: accentColor,
    opacity: numberOpacity,
    transform: `scale(${numberScale})`,
    lineHeight: 1,
    letterSpacing: -0.05,
    position: 'relative',
  };
  
  const categoryStyle: React.CSSProperties = {
    fontSize: designTokens.typography.label.fontSize,
    fontWeight: 600,
    color: accentColor,
    textTransform: 'uppercase',
    letterSpacing: 0.1,
    opacity: categoryOpacity,
  };
  
  const titleStyle: React.CSSProperties = {
    fontSize: designTokens.typography.heading.fontSize,
    fontWeight: designTokens.typography.heading.fontWeight,
    lineHeight: 1.2,
    color: designTokens.colors.foreground,
    opacity: titleOpacity,
    transform: `translateY(${titleSlide}px)`,
    textAlign: align,
    maxWidth: 1200,
  };
  
  const subtitleStyle: React.CSSProperties = {
    fontSize: designTokens.typography.body.fontSize,
    fontWeight: 400,
    lineHeight: 1.5,
    color: designTokens.colors.muted,
    opacity: subtitleOpacity,
    transform: `translateY(${subtitleSlide}px)`,
    textAlign: align,
    maxWidth: 800,
  };
  
  const lineStyle: React.CSSProperties = {
    width: 120,
    height: 4,
    backgroundColor: accentColor,
    opacity: titleOpacity,
    transform: `translateY(${titleSlide}px)`,
    borderRadius: designTokens.borderRadius.sm,
  };
  
  return (
    <div style={containerStyle}>
      {showBackground && <div style={backgroundStyle} />}
      {category && <div style={categoryStyle}>{category}</div>}
      <div style={numberStyle}>
        {typeof chapterNumber === 'number' && chapterNumber < 10 ? `0${chapterNumber}` : chapterNumber}
      </div>
      <div style={lineStyle} />
      <div style={titleStyle}>{title}</div>
      {subtitle && <div style={subtitleStyle}>{subtitle}</div>}
    </div>
  );
};
