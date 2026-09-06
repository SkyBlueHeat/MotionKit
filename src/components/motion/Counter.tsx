import React from 'react';
import {useCurrentFrame} from 'remotion';
import {animateValue} from '../../utils/numbers';

export type CounterProps = {
  value: number;
  delay?: number;
  duration?: number;
  format?: (num: number) => string;
};

export const Counter: React.FC<CounterProps> = ({
  value,
  delay = 0,
  duration = 30,
  format = (num) => num.toString(),
}) => {
  const frame = useCurrentFrame();
  
  const currentValue = animateValue(frame, delay, delay + duration, 0, value);
  
  return <span>{format(Math.round(currentValue))}</span>;
};
