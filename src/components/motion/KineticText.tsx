import React from 'react';
import {useCurrentFrame} from 'remotion';
import {designTokens, motionTokens} from '../../design/tokens';
import {fadeIn, slideIn, scaleIn, stagger} from '../../utils/animation';
import {validateString} from '../../utils/validation';

export type KineticTextMode = 'words' | 'lines' | 'characters';
export type KineticTextEnter = 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'fade' | 'scale';
export type KineticTextAlign = 'left' | 'center' | 'right';

export type KineticTextProps = {
  text: string;
  mode?: KineticTextMode;
  emphasis?: string[];
  enter?: KineticTextEnter;
  align?: KineticTextAlign;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  emphasisColor?: string;
  maxWidth?: number;
};

export const KineticText: React.FC<KineticTextProps> = ({
  text,
  mode = 'words',
  emphasis = [],
  enter = 'slide-up',
  align = 'center',
  delay = 0,
  duration = motionTokens.duration.normal,
  staggerDelay = 5,
  fontSize = designTokens.typography.display.fontSize,
  fontWeight = designTokens.typography.display.fontWeight,
  color = designTokens.colors.foreground,
  emphasisColor = designTokens.colors.accent,
  maxWidth,
}) => {
  const frame = useCurrentFrame();
  
  // Validate text and provide fallback
  const validText = validateString(text, 1) ? text : 'MotionKit';
  
  const splitText = () => {
    if (mode === 'characters') {
      return validText.split('').map((char, i) => ({content: char, index: i}));
    }
    if (mode === 'lines') {
      return validText.split('\n').map((line, i) => ({content: line, index: i}));
    }
    // words mode
    return validText.split(' ').map((word, i) => ({content: word, index: i}));
  };
  
  const parts = splitText();
  
  const validEmphasis = emphasis.filter(emp => validText.includes(emp));
  
  const getTransform = (slideValue: number, scaleValue: number) => {
    switch (enter) {
      case 'slide-up':
        return `translateY(${slideValue}px) scale(${scaleValue})`;
      case 'slide-down':
        return `translateY(${-slideValue}px) scale(${scaleValue})`;
      case 'slide-left':
        return `translateX(${slideValue}px) scale(${scaleValue})`;
      case 'slide-right':
        return `translateX(${-slideValue}px) scale(${scaleValue})`;
      case 'fade':
        return `scale(${scaleValue})`;
      case 'scale':
        return `scale(${scaleValue})`;
    }
  };
  
  const getSlideDirection = () => {
    switch (enter) {
      case 'slide-up':
        return 'up';
      case 'slide-down':
        return 'down';
      case 'slide-left':
        return 'left';
      case 'slide-right':
        return 'right';
      default:
        return 'up';
    }
  };
  
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: mode === 'lines' ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: align === 'center' ? 'center' : align === 'left' ? 'flex-start' : 'flex-end',
    gap: mode === 'words' ? '0.25em' : mode === 'lines' ? motionTokens.spacing.md : 0,
    flexWrap: 'wrap',
    maxWidth: maxWidth || '100%',
  };
  
  return (
    <div style={containerStyle}>
      {parts.map((part, index) => {
        const partDelay = delay + stagger(index, staggerDelay);
        const opacity = fadeIn(frame, partDelay, duration);
        const scale = scaleIn(frame, partDelay, duration, enter === 'scale' ? 0.8 : 1);
        const slide = enter.includes('slide') 
          ? slideIn(frame, getSlideDirection() as any, 60, partDelay, duration)
          : 0;
        
        const isEmphasized = validEmphasis.includes(part.content);
        const partColor = isEmphasized ? emphasisColor : color;
        
        const partStyle: React.CSSProperties = {
          fontSize,
          fontWeight: isEmphasized ? fontWeight + 100 : fontWeight,
          color: partColor,
          opacity,
          transform: getTransform(slide, scale),
          whiteSpace: mode === 'characters' ? 'pre' : 'normal',
          lineHeight: 1.2,
        };
        
        return (
          <span key={index} style={partStyle}>
            {part.content}
            {mode === 'words' && index < parts.length - 1 && ' '}
          </span>
        );
      })}
    </div>
  );
};
