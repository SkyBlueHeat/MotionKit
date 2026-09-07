import {ExplainerVideoData} from '../types/video';
import {ChartDataPoint} from '../components/motion/AnimatedChart';

export const saasAnalyticsPreset: ExplainerVideoData = {
  brand: {
    name: 'MetricFlow',
    primaryColor: '#3b82f6',
    accentColor: '#6366f1',
  },
  hook: {
    text: 'Data-driven decisions drive growth',
    emphasis: ['growth'],
  },
  statistic: {
    value: 47,
    suffix: '%',
    label: 'faster decision making with analytics',
    trend: 'up',
    trendValue: 23,
  },
  chapter: {
    number: '01',
    title: 'The Analytics Revolution',
    subtitle: 'How data transforms business',
    category: 'Chapter',
  },
  chart: {
    title: 'Revenue Growth Over Time',
    data: [
      {label: 'Q1', value: 120000},
      {label: 'Q2', value: 180000},
      {label: 'Q3', value: 280000},
      {label: 'Q4', value: 420000},
    ],
    type: 'vertical-bar',
  },
  quote: {
    text: 'Without data, you are just another person with an opinion.',
    author: 'W. Edwards Deming',
    role: 'Statistician',
    source: 'Quality Management',
  },
  stats: [
    {
      value: 340,
      suffix: '%',
      label: 'ROI Improvement',
      trend: 'up',
      trendValue: 45,
    },
    {
      value: 2800000,
      label: 'Data Points Processed',
      trend: 'up',
      trendValue: 67,
    },
    {
      value: 92,
      suffix: '%',
      label: 'Customer Satisfaction',
      trend: 'up',
      trendValue: 8,
    },
  ],
  ending: {
    title: 'MetricFlow',
    subtitle: 'Analytics that drive decisions',
    cta: 'metricflow.io',
  },
};

export const creatorGrowthPreset: ExplainerVideoData = {
  brand: {
    name: 'CreatorHub',
    primaryColor: '#10b981',
    accentColor: '#8b5cf6',
  },
  hook: {
    text: 'Creators are the new economy',
    emphasis: ['creators', 'economy'],
  },
  statistic: {
    value: 50,
    suffix: 'M',
    label: 'creators worldwide',
    trend: 'up',
    trendValue: 28,
  },
  chapter: {
    number: '02',
    title: 'The Creator Economy',
    subtitle: 'Building sustainable creator businesses',
    category: 'Chapter',
  },
  chart: {
    title: 'Creator Earnings Growth',
    data: [
      {label: '2021', value: 15000},
      {label: '2022', value: 32000},
      {label: '2023', value: 58000},
      {label: '2024', value: 95000},
    ],
    type: 'horizontal-bar',
  },
  quote: {
    text: 'The best way to predict the future is to create it.',
    author: 'Peter Drucker',
    role: 'Management Consultant',
    source: 'Innovation',
  },
  stats: [
    {
      value: 280,
      suffix: '%',
      label: 'Average Growth Rate',
      trend: 'up',
      trendValue: 35,
    },
    {
      value: 4500000,
      label: 'Total Views',
      trend: 'up',
      trendValue: 52,
    },
    {
      value: 125000,
      label: 'Active Subscribers',
      trend: 'up',
      trendValue: 18,
    },
  ],
  ending: {
    title: 'CreatorHub',
    subtitle: 'Empowering creators to thrive',
    cta: 'creatorhub.io',
  },
};

export const productLaunchPreset: ExplainerVideoData = {
  brand: {
    name: 'LaunchPad',
    primaryColor: '#f43f5e',
    accentColor: '#f59e0b',
  },
  hook: {
    text: 'Great products need great launches',
    emphasis: ['great'],
  },
  statistic: {
    value: 73,
    suffix: '%',
    label: 'of successful launches used data',
    trend: 'up',
    trendValue: 19,
  },
  chapter: {
    number: '03',
    title: 'The Launch Strategy',
    subtitle: 'Data-driven product launches',
    category: 'Chapter',
  },
  chart: {
    title: 'Launch Success Metrics',
    data: [
      {label: 'Awareness', value: 85},
      {label: 'Interest', value: 72},
      {label: 'Consideration', value: 64},
      {label: 'Conversion', value: 48},
    ],
    type: 'percentage',
  },
  quote: {
    text: 'A good product is not enough. You need a great launch.',
    author: 'Product Team',
    role: 'Launch Strategy',
    source: 'Product Management',
  },
  stats: [
    {
      value: 45000,
      label: 'Day 1 Signups',
      trend: 'up',
      trendValue: 120,
    },
    {
      value: 89,
      suffix: '%',
      label: 'User Retention',
      trend: 'up',
      trendValue: 12,
    },
    {
      value: 4.8,
      label: 'Average Rating',
      trend: 'up',
      trendValue: 15,
    },
  ],
  ending: {
    title: 'LaunchPad',
    subtitle: 'Launch products with confidence',
    cta: 'launchpad.io',
  },
};
