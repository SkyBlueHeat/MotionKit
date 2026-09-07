import React from 'react';
import {useCurrentFrame} from 'remotion';
import {designTokens, motionTokens, accentColors, AccentColor} from '../../design/tokens';
import {fadeIn, slideIn, scaleIn} from '../../utils/animation';

export type QuoteAlign = 'left' | 'center' | 'right';

export type QuoteCardProps = {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  accent?: AccentColor;
  align?: QuoteAlign;
  delay?: number;
  duration?: number;
  source?: string;
};

export const QuoteCard: React.FC<QuoteCardProps> = ({
  quote,
  author,
  role,
  avatar,
  accent = 'violet',
  align = 'center',
  delay = 0,
  duration = motionTokens.duration.slow,
  source,
}) => {
  const frame = useCurrentFrame();
  
  const accentColor = accentColors[accent];
  
  const quoteDelay = delay;
  const quoteOpacity = fadeIn(frame, quoteDelay, duration);
  const quoteSlide = slideIn(frame, 'up', 30, quoteDelay, duration);
  
  const authorDelay = delay + 15;
  const authorOpacity = fadeIn(frame, authorDelay, duration);
  const authorSlide = slideIn(frame, 'up', 20, authorDelay, duration);
  
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: align === 'center' ? 'center' : align === 'left' ? 'flex-start' : 'flex-end',
    gap: motionTokens.spacing.lg,
    maxWidth: 1000,
    padding: `0 ${motionTokens.spacing.xl}`,
  };
  
  const quoteMarkStyle: React.CSSProperties = {
    fontSize: 120,
    fontWeight: 700,
    color: accentColor,
    opacity: 0.2,
    lineHeight: 1,
    position: 'absolute',
    top: align === 'center' ? -40 : align === 'left' ? -60 : -40,
    left: align === 'left' ? -40 : align === 'right' ? 'auto' : 'auto',
    right: align === 'right' ? -40 : 'auto',
  };
  
  const quoteStyle: React.CSSProperties = {
    fontSize: designTokens.typography.heading.fontSize,
    fontWeight: designTokens.typography.heading.fontWeight,
    lineHeight: 1.3,
    color: designTokens.colors.foreground,
    opacity: quoteOpacity,
    transform: `translateY(${quoteSlide}px)`,
    textAlign: align,
    position: 'relative',
    fontStyle: 'italic',
  };
  
  const authorContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: align === 'center' ? 'column' : 'row',
    alignItems: 'center',
    gap: motionTokens.spacing.md,
    opacity: authorOpacity,
    transform: `translateY(${authorSlide}px)`,
  };
  
  const avatarStyle: React.CSSProperties = {
    width: 64,
    height: 64,
    borderRadius: designTokens.borderRadius.md,
    backgroundColor: accentColor,
    display: avatar ? 'none' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    color: designTokens.colors.background,
    fontWeight: 600,
    flexShrink: 0,
  };
  
  const authorInfoStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: motionTokens.spacing.xs,
  };
  
  const authorNameStyle: React.CSSProperties = {
    fontSize: designTokens.typography.body.fontSize,
    fontWeight: 600,
    color: designTokens.colors.foreground,
  };
  
  const authorRoleStyle: React.CSSProperties = {
    fontSize: designTokens.typography.label.fontSize,
    color: accentColor,
  };
  
  const sourceStyle: React.CSSProperties = {
    fontSize: designTokens.typography.label.fontSize,
    color: designTokens.colors.muted,
    opacity: authorOpacity,
    transform: `translateY(${authorSlide}px)`,
  };
  
  return (
    <div style={containerStyle}>
      <div style={quoteMarkStyle}>"</div>
      <div style={quoteStyle}>{quote}</div>
      <div style={authorContainerStyle}>
        {avatar ? (
          <img 
            src={avatar} 
            alt={author}
            style={{
              ...avatarStyle,
              display: 'block',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div style={avatarStyle}>{author.charAt(0)}</div>
        )}
        <div style={authorInfoStyle}>
          <div style={authorNameStyle}>{author}</div>
          {role && <div style={authorRoleStyle}>{role}</div>}
        </div>
      </div>
      {source && <div style={sourceStyle}>— {source}</div>}
    </div>
  );
};
