import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {designTokens, motionTokens} from '../../design/tokens';
import {fadeIn, scaleIn, slideIn} from '../../utils/animation';

export type Direction = 'up' | 'down' | 'left' | 'right';

export type AnimatedTitleProps = {
  title: string;
  subtitle?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  accentText?: string;
};

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  title,
  subtitle,
  direction = 'up',
  delay = 0,
  duration = motionTokens.duration.normal,
  accentText,
}) => {
  const frame = useCurrentFrame();
  
  const opacity = fadeIn(frame, delay, duration);
  const scale = scaleIn(frame, delay, duration, 0.9);
  const slide = slideIn(frame, direction, 80, delay, duration);
  
  const subtitleDelay = delay + 8;
  const subtitleOpacity = fadeIn(frame, subtitleDelay, duration);
  const subtitleSlide = slideIn(frame, direction, 60, subtitleDelay, duration);
  
 const getTransform = (slideValue: number, scaleValue: number) => {
    switch (direction) {
      case 'up':
        return `translateY(${slideValue}px) scale(${scaleValue})`;
      case 'down':
        return `translateY(${-slideValue}px) scale(${scaleValue})`;
      case 'left':
        return `translateX(${slideValue}px) scale(${scaleValue})`;
      case 'right':
        return `translateX(${-slideValue}px) scale(${scaleValue})`;
    }
  };
  
  const titleStyle: React.CSSProperties = {
    fontSize: designTokens.typography.display.fontSize,
    fontWeight: designTokens.typography.display.fontWeight,
    lineHeight: designTokens.typography.display.lineHeight,
    letterSpacing: designTokens.typography.display.letterSpacing,
    color: designTokens.colors.foreground,
    opacity,
    transform: getTransform(slide, scale),
    textAlign: 'center',
  };
  
  const subtitleStyle: React.CSSProperties = {
    fontSize: designTokens.typography.body.fontSize,
    fontWeight: designTokens.typography.body.fontWeight,
    lineHeight: designTokens.typography.body.lineHeight,
    color: designTokens.colors.muted,
    opacity: subtitleOpacity,
    transform: getTransform(subtitleSlide, 1),
    textAlign: 'center',
    marginTop: motionTokens.spacing.md,
  };
  
  const accentStyle: React.CSSProperties = {
    color: designTokens.colors.accent,
  };
  
  const parts = title.split(accentText || '');
  
  return (
    <AbsoluteFill
      style={{
        backgroundColor: designTokens.colors.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: motionTokens.spacing.xl,
      }}
    >
      <div style={titleStyle}>
        {parts.map((part: string, i: number) => (
          <React.Fragment key={i}>
            {part}
            {i < parts.length - 1 && accentText && (
              <span style={accentStyle}>{accentText}</span>
            )}
          </React.Fragment>
        ))}
      </div>
      {subtitle && <div style={subtitleStyle}>{subtitle}</div>}
    </AbsoluteFill>
  );
};
