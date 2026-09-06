export const motionTokens = {
  duration: {
    fast: 10,
    normal: 18,
    slow: 30,
    extraSlow: 45,
  },
  spacing: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
    xxl: 64,
  },
  easing: {
    easeOut: (t: number) => 1 - Math.pow(1 - t, 3),
    easeIn: (t: number) => t * t * t,
    easeInOut: (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    sharp: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  },
};

export type MotionTheme = {
  background: string;
  foreground: string;
  accent: string;
  accentSecondary: string;
  muted: string;
  border: string;
};

export const themes: Record<string, MotionTheme> = {
  default: {
    background: '#0a0a0f',
    foreground: '#f5f5f7',
    accent: '#6366f1',
    accentSecondary: '#8b5cf6',
    muted: '#3f3f46',
    border: '#27272a',
  },
  light: {
    background: '#ffffff',
    foreground: '#0a0a0f',
    accent: '#6366f1',
    accentSecondary: '#8b5cf6',
    muted: '#71717a',
    border: '#e4e4e7',
  },
};

export const designTokens = {
  colors: themes.default,
  typography: {
    display: {
      fontSize: 96,
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: -0.02,
    },
    heading: {
      fontSize: 64,
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: -0.01,
    },
    subheading: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    body: {
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    label: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: 0.01,
    },
    numeric: {
      fontSize: 56,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: -0.02,
    },
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.3)',
    md: '0 4px 16px rgba(0, 0, 0, 0.4)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.5)',
  },
};

export type AccentColor = 'violet' | 'blue' | 'emerald' | 'rose';

export const accentColors: Record<AccentColor, string> = {
  violet: '#8b5cf6',
  blue: '#3b82f6',
  emerald: '#10b981',
  rose: '#f43f5e',
};
