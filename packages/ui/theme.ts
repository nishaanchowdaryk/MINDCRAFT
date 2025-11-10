export const colors = {
  primary: '#000000',
  bg: '#ffffff',
  surface: '#f5f5f5',
  text: '#000000',
  muted: '#6b6b6b',
  danger: '#e53935',
  success: '#16a34a',
  border: '#e6e6e6'
};

export const radii = {
  md: 12
};

export const shadows = {
  card: '0 6px 18px rgba(0,0,0,0.04)'
};

export const spacing = [4, 8, 12, 16, 20, 24];

export const transition = '200ms';

export const applyCssVars = (): string => {
  const spacingVars = spacing
    .map((value, index) => [`--mc-spacing-${index}`, `${value}px`] as const)
    .reduce<Record<string, string>>((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  const entries: Record<string, string> = {
    '--mc-primary': colors.primary,
    '--mc-bg': colors.bg,
    '--mc-surface': colors.surface,
    '--mc-text': colors.text,
    '--mc-muted': colors.muted,
    '--mc-danger': colors.danger,
    '--mc-success': colors.success,
    '--mc-border': colors.border,
    '--mc-radius-md': `${radii.md}px`,
    '--mc-shadow-card': shadows.card,
    '--mc-transition': transition,
    ...spacingVars
  };

  const declarations = Object.entries(entries)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n');

  return `:root {\n${declarations}\n}`;
};
