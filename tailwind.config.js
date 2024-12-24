const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),],
    
  theme: {
    extend: {
      colors: {
        'dark-blue': '#001f3d',  // Customize your dark blue color
        'light-blue': '#F2F5FF', // Added the light blue color
        'softYellow' : '#FFD599',
      },
      animation: {
        'line-appear': 'line-appear 2.75s infinite',
        'slowBounce': 'bounce 2.5s infinite',
      },
      keyframes: {
        'line-appear': {
          '0%, 100%': { opacity: '0' },
          '45%, 55%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')  // Correct way to import the plugin
  ],
};
