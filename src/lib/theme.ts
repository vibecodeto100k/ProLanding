/**
 * ProLanding Design System — Color Tokens & Theme Constants
 * 
 * Configured per PROMPT 03 specifications:
 * - Primary Background: Dark navy #080D1A
 * - Secondary Background: #101A2D
 * - Primary Accent: Electric blue #3B82F6
 * - Secondary Accent: Light blue #60A5FA
 * - Primary Text: White #FFFFFF
 * - Secondary Text: Muted gray #A3AEC2
 */

export const THEME_COLORS = {
  background: {
    primary: '#080D1A',
    secondary: '#101A2D',
    card: '#0D1527',
    elevated: '#131F37',
  },
  accent: {
    primary: '#3B82F6', // Electric blue
    secondary: '#60A5FA', // Light blue
    hover: '#2563EB',
    glow: 'rgba(59, 130, 246, 0.4)',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#A3AEC2',
    muted: '#6B7A99',
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.08)',
    medium: 'rgba(255, 255, 255, 0.14)',
    accent: 'rgba(59, 130, 246, 0.4)',
  },
  radius: {
    sm: '0.375rem', // 6px
    md: '0.5rem',   // 8px
    lg: '0.75rem',  // 12px
    xl: '1rem',     // 16px
    '2xl': '1.25rem', // 20px
    full: '9999px',
  },
  shadows: {
    subtle: '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
    blueGlow: '0 0 25px -4px rgba(59, 130, 246, 0.35)',
    glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  },
} as const;
