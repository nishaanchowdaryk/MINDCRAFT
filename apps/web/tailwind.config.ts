import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    '../../packages/ui/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--mc-primary)',
        bg: 'var(--mc-bg)',
        surface: 'var(--mc-surface)',
        text: 'var(--mc-text)',
        muted: 'var(--mc-muted)',
        danger: 'var(--mc-danger)',
        success: 'var(--mc-success)',
        border: 'var(--mc-border)'
      },
      borderRadius: {
        md: 'var(--mc-radius-md)'
      },
      boxShadow: {
        card: 'var(--mc-shadow-card)'
      },
      transitionDuration: {
        fast: '200ms'
      }
    }
  },
  plugins: []
};

export default config;
