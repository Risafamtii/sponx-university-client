const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#001f3d',
        'softYellow': '#FFD599',
      },
      fontFamily: {
        mono: ['Menlo', 'Monaco', 'Courier New'],
      },
      animation: {
        'line-appear': 'line-appear 2.75s infinite',
        'slowBounce': 'bounce 2.5s infinite',
        // Add these new animations
        'progress': 'progress 1.5s ease-in-out infinite',
        'spin-slow': 'spin 2s linear infinite', // Optional: slower spin
      },
      keyframes: {
        'line-appear': {
          '0%, 100%': { opacity: '0' },
          '45%, 55%': { opacity: '1' },
        },
        // Add these new keyframes
        'progress': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        // Optional: If you want more control over spin animation
        'spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};