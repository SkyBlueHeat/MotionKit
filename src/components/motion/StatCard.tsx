import React from 'react';
import {useCurrentFrame} from 'remotion';
import {designTokens, motionTokens} from '../../design/tokens';
import {fadeIn, slideIn, scaleIn} from '../../utils/animation';
import {Counter} from './Counter';
import {formatCompactNumber} from '../../utils/numbers';

export type StatCardVariant = 'compact' | 'large';
export type TrendDirection = 'up' | 'down' | 'neutral';

export type StatCardProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label?: string;
  icon?: string;
  trend?: TrendDirection;
  trendValue?: number;
  variant?: StatCardVariant;
  delay?: number;
  duration?: number;
  accentColor?: string;
};

export const StatCard: React.FC<StatCardProps> = ({
  value,
  prefix = '',
  suffix = '',
  label,
  icon,
  trend = 'neutral',
  trendValue,
  variant = 'large',
  delay = 0,
  duration = motionTokens.duration.normal,
  accentColor = designTokens.colors.accent,
}) => {
  const frame = useCurrentFrame();
  
  const opacity = fadeIn(frame, delay, duration);
  const scale = scaleIn(frame, delay, duration, 0.95);
  const slide = slideIn(frame, 'up', 40, delay, duration);
  
  const isCompact = variant === 'compact';
  
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: isCompact ? 'flex-start' : 'center',
    gap: motionTokens.spacing.sm,
    padding: isCompact ? motionTokens.spacing.md : motionTokens.spacing.lg,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: `1px solid ${designTokens.colors.border}`,
    borderRadius: designTokens.borderRadius.lg,
    opacity,
    transform: `translateY(${slide}px) scale(${scale})`,
    minWidth: isCompact ? 200 : 280,
  };
  
  const valueStyle: React.CSSProperties = {
    fontSize: isCompact 
      ? designTokens.typography.heading.fontSize 
      : designTokens.typography.display.fontSize,
    fontWeight: designTokens.typography.numeric.fontWeight,
    color: designTokens.colors.foreground,
    lineHeight: 1,
    display: 'flex',
    alignItems: 'baseline',
    gap: 4,
  };
  
  const prefixStyle: React.CSSProperties = {
    fontSize: isCompact ? 32 : 48,
    fontWeight: 500,
    color: designTokens.colors.muted,
  };
  
  const suffixStyle: React.CSSProperties = {
    fontSize: isCompact ? 24 : 36,
    fontWeight: 500,
    color: designTokens.colors.muted,
  };
  
  const labelStyle: React.CSSProperties = {
    fontSize: designTokens.typography.label.fontSize,
    fontWeight: designTokens.typography.label.fontWeight,
    color: designTokens.colors.muted,
    textAlign: isCompact ? 'left' : 'center',
  };
  
  const trendStyle: React.CSSProperties = {
    fontSize: designTokens.typography.label.fontSize,
    fontWeight: 600,
    color: trend === 'up' ? '#10b981' : trend === 'down' ? '#f43f5e' : designTokens.colors.muted,
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  };
  
  const iconStyle: React.CSSProperties = {
    fontSize: 32,
    color: accentColor,
    marginBottom: motionTokens.spacing.xs,
  };
  
  return (
    <div style={containerStyle}>
      {icon && <div style={iconStyle}>{icon}</div>}
      <div style={valueStyle}>
        {prefix && <span style={prefixStyle}>{prefix}</span>}
        <Counter 
          value={value} 
          delay={delay + 5} 
          duration={duration - 5} 
          format={formatCompactNumber} 
        />
        {suffix && <span style={suffixStyle}>{suffix}</span>}
      </div>
      {trend !== 'neutral' && trendValue !== undefined && (
        <div style={trendStyle}>
          {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'}
          {Math.abs(trendValue)}%
        </div>
      )}
      {label && <div style={labelStyle}>{label}</div>}
    </div>
  );
};
