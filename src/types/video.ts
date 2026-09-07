import {ChartDataPoint} from '../components/motion/AnimatedChart';

export interface VideoBrand {
  name: string;
  primaryColor: string;
  accentColor: string;
}

export interface VideoStats {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: number;
}

export interface VideoChart {
  title: string;
  data: ChartDataPoint[];
  type?: 'vertical-bar' | 'horizontal-bar' | 'percentage';
}

export interface VideoQuote {
  text: string;
  author: string;
  role?: string;
  source?: string;
}

export interface ExplainerVideoData {
  brand: VideoBrand;
  hook: {
    text: string;
    emphasis?: string[];
  };
  statistic: VideoStats;
  chapter: {
    number: string | number;
    title: string;
    subtitle?: string;
    category?: string;
  };
  chart: VideoChart;
  quote: VideoQuote;
  stats: VideoStats[];
  ending: {
    title: string;
    subtitle: string;
    cta: string;
  };
}
