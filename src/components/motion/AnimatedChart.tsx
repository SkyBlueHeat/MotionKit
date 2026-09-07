import React from 'react';
import {useCurrentFrame} from 'remotion';
import {designTokens, motionTokens} from '../../design/tokens';
import {fadeIn, slideIn, stagger} from '../../utils/animation';
import {Counter} from './Counter';
import {formatCompactNumber} from '../../utils/numbers';
import {validateChartData} from '../../utils/validation';

export type ChartDataPoint = {
  label: string;
  value: number;
};

export type ChartType = 'vertical-bar' | 'horizontal-bar' | 'percentage';

export type AnimatedChartProps = {
  title: string;
  data: ChartDataPoint[];
  unit?: string;
  type?: ChartType;
  delay?: number;
  duration?: number;
  showLabels?: boolean;
  showValues?: boolean;
  precision?: number;
};

export const AnimatedChart: React.FC<AnimatedChartProps> = ({
  title,
  data,
  type = 'vertical-bar',
  delay = 0,
  duration = motionTokens.duration.slow,
  showLabels = true,
  showValues = true,
  precision = 0,
}) => {
  const frame = useCurrentFrame();
  
  // Validate data and provide fallback
  const validData = validateChartData(data) ? data : [{label: 'No Data', value: 0}];
  
  const titleOpacity = fadeIn(frame, delay, motionTokens.duration.normal);
  const titleSlide = slideIn(frame, 'up', 40, delay, motionTokens.duration.normal);
  
  const chartDelay = delay + 15;
  const chartOpacity = fadeIn(frame, chartDelay, duration);
  
  const maxValue = Math.max(...validData.map((d) => d.value), 1); // Prevent division by zero
  const barWidth = 80;
  const barGap = motionTokens.spacing.lg;
  const chartHeight = 400;
  const chartWidth = data.length * (barWidth + barGap) + barGap * 2;
  
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
  
  const renderVerticalBars = () => {
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
      <>
        <div style={barsContainerStyle}>
          {validData.map((point, index) => {
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
                {showValues && (
                  <div style={valueStyle}>
                    <Counter
                      value={point.value}
                      delay={barDelay}
                      duration={barDuration}
                      format={(num) => num.toFixed(precision)}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {showLabels && (
          <div style={axisStyle}>
            {validData.map((point, index) => (
              <div key={index} style={axisLabelStyle}>
                {point.label}
              </div>
            ))}
          </div>
        )}
      </>
    );
  };
  
  const renderHorizontalBars = () => {
    const barsContainerStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: motionTokens.spacing.md,
      padding: motionTokens.spacing.lg,
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      borderRadius: designTokens.borderRadius.lg,
      border: `1px solid ${designTokens.colors.border}`,
      minWidth: 600,
    };
    
    const barRowStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      gap: motionTokens.spacing.md,
    };
    
    const labelStyle: React.CSSProperties = {
      fontSize: designTokens.typography.label.fontSize,
      fontWeight: designTokens.typography.label.fontWeight,
      color: designTokens.colors.muted,
      width: 120,
      textAlign: 'right',
      flexShrink: 0,
    };
    
    const barTrackStyle: React.CSSProperties = {
      flex: 1,
      height: 32,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: designTokens.borderRadius.sm,
      position: 'relative',
      overflow: 'hidden',
    };
    
    const valueStyle: React.CSSProperties = {
      fontSize: designTokens.typography.label.fontSize,
      fontWeight: designTokens.typography.label.fontWeight,
      color: designTokens.colors.foreground,
      width: 80,
      textAlign: 'left',
      flexShrink: 0,
    };
    
    return (
      <div style={barsContainerStyle}>
        {validData.map((point, index) => {
          const barDelay = chartDelay + stagger(index, 8);
          const barDuration = 25;
          const barWidth = (point.value / maxValue) * 100;
          
          const barOpacity = fadeIn(frame, barDelay, barDuration);
          const barScale = slideIn(frame, 'left', 100, barDelay, barDuration);
          
          const barStyle: React.CSSProperties = {
            height: '100%',
            width: `${barWidth}%`,
            backgroundColor: designTokens.colors.accent,
            borderRadius: designTokens.borderRadius.sm,
            opacity: barOpacity,
            transform: `translateX(${-barScale}%)`,
          };
          
          return (
            <div key={index} style={barRowStyle}>
              {showLabels && <div style={labelStyle}>{point.label}</div>}
              <div style={barTrackStyle}>
                <div style={barStyle} />
              </div>
              {showValues && (
                <div style={valueStyle}>
                  <Counter
                    value={point.value}
                    delay={barDelay}
                    duration={barDuration}
                    format={(num) => num.toFixed(precision)}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };
  
  const renderPercentageChart = () => {
    const barsContainerStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: motionTokens.spacing.md,
      padding: motionTokens.spacing.lg,
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      borderRadius: designTokens.borderRadius.lg,
      border: `1px solid ${designTokens.colors.border}`,
      minWidth: 400,
    };
    
    const barRowStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      gap: motionTokens.spacing.md,
    };
    
    const labelStyle: React.CSSProperties = {
      fontSize: designTokens.typography.label.fontSize,
      fontWeight: designTokens.typography.label.fontWeight,
      color: designTokens.colors.muted,
      width: 120,
      textAlign: 'right',
      flexShrink: 0,
    };
    
    const barTrackStyle: React.CSSProperties = {
      flex: 1,
      height: 24,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: designTokens.borderRadius.sm,
      position: 'relative',
      overflow: 'hidden',
    };
    
    const percentageStyle: React.CSSProperties = {
      fontSize: designTokens.typography.label.fontSize,
      fontWeight: 600,
      color: designTokens.colors.foreground,
      width: 60,
      textAlign: 'left',
      flexShrink: 0,
    };
    
    return (
      <div style={barsContainerStyle}>
        {validData.map((point, index) => {
          const barDelay = chartDelay + stagger(index, 8);
          const barDuration = 25;
          const percentage = (point.value / maxValue) * 100;
          
          const barOpacity = fadeIn(frame, barDelay, barDuration);
          const barScale = slideIn(frame, 'left', 100, barDelay, barDuration);
          
          const barStyle: React.CSSProperties = {
            height: '100%',
            width: `${percentage}%`,
            backgroundColor: designTokens.colors.accent,
            borderRadius: designTokens.borderRadius.sm,
            opacity: barOpacity,
            transform: `translateX(${-barScale}%)`,
          };
          
          return (
            <div key={index} style={barRowStyle}>
              {showLabels && <div style={labelStyle}>{point.label}</div>}
              <div style={barTrackStyle}>
                <div style={barStyle} />
              </div>
              {showValues && (
                <div style={percentageStyle}>
                  <Counter
                    value={percentage}
                    delay={barDelay}
                    duration={barDuration}
                    format={(num) => `${num.toFixed(0)}%`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };
  
  return (
    <div style={containerStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={chartContainerStyle}>
        {type === 'vertical-bar' && renderVerticalBars()}
        {type === 'horizontal-bar' && renderHorizontalBars()}
        {type === 'percentage' && renderPercentageChart()}
      </div>
    </div>
  );
};
