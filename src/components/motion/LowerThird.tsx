import React from 'react';
import {useCurrentFrame} from 'remotion';
import {designTokens, motionTokens, accentColors, AccentColor} from '../../design/tokens';
import {fadeIn, slideIn, scaleIn} from '../../utils/animation';

export type LowerThirdProps = {
  name: string;
  role: string;
  company?: string;
  accent?: AccentColor;
  delay?: number;
  duration?: number;
  showAvatar?: boolean;
};

export const LowerThird: React.FC<LowerThirdProps> = ({
  name,
  role,
  company,
  accent = 'violet',
  delay = 0,
  duration = motionTokens.duration.normal,
  showAvatar = false,
}) => {
  const frame = useCurrentFrame();
  
  const accentColor = accentColors[accent];
  
  const lineOpacity = fadeIn(frame, delay, duration);
  const lineWidth = slideIn(frame, 'left', 200, delay, duration);
  
  const nameDelay = delay + 5;
  const nameOpacity = fadeIn(frame, nameDelay, duration);
  const nameSlide = slideIn(frame, 'left', 50, nameDelay, duration);
  
  const roleDelay = nameDelay + 5;
  const roleOpacity = fadeIn(frame, roleDelay, duration);
  const roleSlide = slideIn(frame, 'left', 50, roleDelay, duration);
  
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: motionTokens.spacing.xl,
    left: motionTokens.spacing.xl,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: motionTokens.spacing.md,
  };
  
  const lineStyle: React.CSSProperties = {
    width: lineWidth,
    height: 4,
    backgroundColor: accentColor,
    opacity: lineOpacity,
    borderRadius: designTokens.borderRadius.sm,
  };
  
  const textStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: motionTokens.spacing.xs,
  };
  
  const nameStyle: React.CSSProperties = {
    fontSize: designTokens.typography.heading.fontSize,
    fontWeight: designTokens.typography.heading.fontWeight,
    lineHeight: designTokens.typography.heading.lineHeight,
    color: designTokens.colors.foreground,
    opacity: nameOpacity,
    transform: `translateX(${nameSlide}px)`,
  };
  
  const roleStyle: React.CSSProperties = {
    fontSize: designTokens.typography.label.fontSize,
    fontWeight: designTokens.typography.label.fontWeight,
    lineHeight: designTokens.typography.label.lineHeight,
    color: accentColor,
    opacity: roleOpacity,
    transform: `translateX(${roleSlide}px)`,
  };
  
  const companyStyle: React.CSSProperties = {
    fontSize: designTokens.typography.label.fontSize,
    fontWeight: designTokens.typography.label.fontWeight,
    lineHeight: designTokens.typography.label.lineHeight,
    color: designTokens.colors.muted,
    opacity: roleOpacity,
    transform: `translateX(${roleSlide}px)`,
  };
  
  const avatarStyle: React.CSSProperties = {
    width: 64,
    height: 64,
    borderRadius: designTokens.borderRadius.md,
    backgroundColor: accentColor,
    opacity: nameOpacity,
    transform: `scale(${scaleIn(frame, nameDelay, duration, 0.8)})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    color: designTokens.colors.background,
    fontWeight: 600,
  };
  
  return (
    <div style={containerStyle}>
      {showAvatar && (
        <div style={avatarStyle}>
          {name.charAt(0)}
        </div>
      )}
      <div style={lineStyle} />
      <div style={textStyle}>
        <div style={nameStyle}>{name}</div>
        <div style={roleStyle}>{role}</div>
        {company && <div style={companyStyle}>{company}</div>}
      </div>
    </div>
  );
};
