/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#7c6aff',
          light: '#a096ff',
          dark: '#5a48e0',
        },
        coral: '#ff6b6b',
        teal: '#4ecdc4',
        dark: {
          bg: '#0a0a0f',
          surface: '#111118',
          border: '#1e1e2e',
          text: '#e2e0f0',
          muted: '#6e6d85',
        },
        light: {
          bg: '#f5f4f0',
          surface: '#ffffff',
          border: '#e5e3df',
          text: '#1a1a2e',
          muted: '#6b6b80',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
