/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base colors
        dark: {
          DEFAULT: '#0b0f14',
          lighter: '#151b23',
          border: '#1f2937',
        },
        // Neon colors
        neon: {
          cyan: '#0ff6ff',
          violet: '#7b61ff',
          mint: '#00ffd5',
          pink: '#ff00ff',
          blue: '#00d4ff',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0ff6ff 0%, #7b61ff 100%)',
        'gradient-radial':
          'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-radial-top':
          'radial-gradient(circle at top, var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'texture-grain':
          'url(\'data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.05"/%3E%3C/svg%3E\')',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': [
          '2.25rem',
          { lineHeight: '1.2', letterSpacing: '-0.01em' },
        ],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 20px currentColor)',
          },
          '50%': {
            opacity: '0.8',
            filter: 'drop-shadow(0 0 30px currentColor)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-sm': '0 0 10px rgba(15, 246, 255, 0.5)',
        'neon-md':
          '0 0 20px rgba(15, 246, 255, 0.6), 0 0 40px rgba(123, 97, 255, 0.3)',
        'neon-lg':
          '0 0 30px rgba(15, 246, 255, 0.7), 0 0 60px rgba(123, 97, 255, 0.5)',
        'neon-violet': '0 0 20px rgba(123, 97, 255, 0.6)',
        'neon-mint': '0 0 20px rgba(0, 255, 213, 0.6)',
        glass: '0 8px 32px 0 rgba(15, 246, 255, 0.1)',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.glass': {
          background: 'rgba(15, 27, 35, 0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(15, 246, 255, 0.1)',
        },
        '.glass-strong': {
          background: 'rgba(15, 27, 35, 0.8)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(15, 246, 255, 0.2)',
        },
        '.neon-border': {
          border: '1px solid rgba(15, 246, 255, 0.5)',
          boxShadow: '0 0 10px rgba(15, 246, 255, 0.3)',
        },
        '.neon-border-violet': {
          border: '1px solid rgba(123, 97, 255, 0.5)',
          boxShadow: '0 0 10px rgba(123, 97, 255, 0.3)',
        },
        '.text-gradient': {
          background: 'linear-gradient(135deg, #0ff6ff 0%, #7b61ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
        '.text-gradient-mint': {
          background: 'linear-gradient(135deg, #00ffd5 0%, #0ff6ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
