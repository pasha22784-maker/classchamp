/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070C18',
          900: '#0F172A',
          800: '#172554',
          700: '#1E293B',
        },
        velvet: {
          950: '#110E2E',
          900: '#1E1B4B',
          800: '#312E81',
          700: '#3730A3',
        },
        champGold: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          glow: '#FEF3C7',
          dark: '#B45309',
        },
        emeraldGlow: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        crimsonAlert: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#B91C1C',
        },
        pearl: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
