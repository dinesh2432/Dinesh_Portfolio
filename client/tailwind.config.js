/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#2563EB', // Blue 600
          light: '#3B82F6',   // Blue 500
          dark: '#1D4ED8',    // Blue 700
        },
        coral: '#EF4444',     // Use a sharper red if needed
        teal: '#10B981',      // Emerald green
        dark: {
          bg: '#09090B',      // Zinc 950
          surface: '#18181B', // Zinc 900
          border: '#27272A',  // Zinc 800
          text: '#FAFAFA',    // Zinc 50
          muted: '#A1A1AA',   // Zinc 400
        },
        light: {
          bg: '#FAFAFA',      // Zinc 50
          surface: '#FFFFFF', // White
          border: '#E4E4E7',  // Zinc 200
          text: '#09090B',    // Zinc 950
          muted: '#71717A',   // Zinc 500
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
