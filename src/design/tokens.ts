export const motionTokens = {
  duration: {
    instant: 5,
    fast: 10,
    normal: 18,
    slow: 30,
    extraSlow: 45,
  },
  delay: {
    short: 5,
    medium: 10,
    long: 15,
  },
  stagger: {
    tight: 3,
    normal: 5,
    relaxed: 8,
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
    standard: (t: number) => 1 - Math.pow(1 - t, 3),
    enter: (t: number) => 1 - Math.pow(1 - t, 3),
    exit: (t: number) => t * t * t,
    emphasized: (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    sharp: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  },
  patterns: {
    entrance: {
      soft: {duration: 18, easing: 'enter', delay: 0},
      emphasis: {duration: 24, easing: 'emphasized', delay: 0},
      quick: {duration: 10, easing: 'enter', delay: 0},
    },
    exit: {
      quick: {duration: 12, easing: 'exit', delay: 0},
      normal: {duration: 18, easing: 'exit', delay: 0},
    },
    reveal: {
      text: {duration: 18, easing: 'enter', stagger: 5},
      chart: {duration: 30, easing: 'enter', stagger: 8},
      list: {duration: 24, easing: 'enter', stagger: 6},
    },
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
  editorial: {
    background: '#f5f5f0',
    foreground: '#1a1a1a',
    accent: '#d97706',
    accentSecondary: '#b45309',
    muted: '#525252',
    border: '#d4d4d8',
  },
  ocean: {
    background: '#0c1929',
    foreground: '#e0f2fe',
    accent: '#06b6d4',
    accentSecondary: '#0891b2',
    muted: '#475569',
    border: '#1e293b',
  },
  forest: {
    background: '#052e16',
    foreground: '#f0fdf4',
    accent: '#22c55e',
    accentSecondary: '#16a34a',
    muted: '#4b5563',
    border: '#14532d',
  },
  sunset: {
    background: '#1a0a2e',
    foreground: '#fef3c7',
    accent: '#f97316',
    accentSecondary: '#ea580c',
    muted: '#6b7280',
    border: '#2d1b4e',
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
    caption: {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: 0,
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
