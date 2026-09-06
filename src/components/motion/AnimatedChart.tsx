import React from 'react';
import {useCurrentFrame} from 'remotion';
import {designTokens, motionTokens} from '../../design/tokens';
import {fadeIn, slideIn, stagger} from '../../utils/animation';
import {Counter} from './Counter';
import {formatCompactNumber} from '../../utils/numbers';

export type ChartDataPoint = {
  label: string;
  value: number;
};

export type AnimatedChartProps = {
  title: string;
  data: ChartDataPoint[];
  unit?: string;
  delay?: number;
  duration?: number;
};

export const AnimatedChart: React.FC<AnimatedChartProps> = ({
  title,
  data,
  delay = 0,
  duration = motionTokens.duration.slow,
}) => {
  const frame = useCurrentFrame();
  
  const titleOpacity = fadeIn(frame, delay, motionTokens.duration.normal);
  const titleSlide = slideIn(frame, 'up', 40, delay, motionTokens.duration.normal);
  
  const chartDelay = delay + 15;
  const chartOpacity = fadeIn(frame, chartDelay, duration);
  
  const maxValue = Math.max(...data.map((d) => d.value));
  const barWidth = 80;
  const barGap = motionTokens.spacing.lg;
  const chartHeight = 400;
  
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: motionTokens.spacing.xl,
  };
  
  const titleStyle: React.CSSProperties = {
    fontSize: designTokens.typography.heading.fontSize,
    fontWeight: designTokens.typography.heading.fontWeight,
    lineHeight: designTokens.typography.heading.lineHeight,
    color: designTokens.colors.foreground,
    opacity: titleOpacity,
    transform: `translateY(${titleSlide}px)`,
    textAlign: 'center',
  };
  
  const chartContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: motionTokens.spacing.md,
    opacity: chartOpacity,
  };
  
  const barsContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: barGap,
    height: chartHeight,
    padding: motionTokens.spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: designTokens.borderRadius.lg,
    border: `1px solid ${designTokens.colors.border}`,
  };
  
  const axisStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: motionTokens.spacing.md,
  };
  
  const axisLabelStyle: React.CSSProperties = {
    fontSize: designTokens.typography.label.fontSize,
    fontWeight: designTokens.typography.label.fontWeight,
    color: designTokens.colors.muted,
    width: barWidth,
    textAlign: 'center',
  };
  
  return (
    <div style={containerStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={chartContainerStyle}>
        <div style={barsContainerStyle}>
          {data.map((point, index) => {
            const barDelay = chartDelay + stagger(index, 8);
            const barDuration = 25;
            const barHeight = (point.value / maxValue) * (chartHeight - 40);
            
            const barOpacity = fadeIn(frame, barDelay, barDuration);
            const barScale = slideIn(frame, 'up', barHeight, barDelay, barDuration);
            
            const barStyle: React.CSSProperties = {
              width: barWidth,
              height: barHeight - barScale,
              backgroundColor: designTokens.colors.accent,
              borderRadius: designTokens.borderRadius.sm,
              opacity: barOpacity,
              position: 'relative',
            };
            
            const valueStyle: React.CSSProperties = {
              position: 'absolute',
              top: -40,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: designTokens.typography.numeric.fontSize,
              fontWeight: designTokens.typography.numeric.fontWeight,
              color: designTokens.colors.foreground,
            };
            
            return (
              <div key={index} style={barStyle}>
                <div style={valueStyle}>
                  <Counter
                    value={point.value}
                    delay={barDelay}
                    duration={barDuration}
                    format={formatCompactNumber}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div style={axisStyle}>
          {data.map((point, index) => (
            <div key={index} style={axisLabelStyle}>
              {point.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
