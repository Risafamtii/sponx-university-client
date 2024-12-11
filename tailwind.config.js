/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Ensure flowbite-react content is included
    flowbite.content(), // Add Flowbite content
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1DA1F2', // Custom blue color
        customWhite: "rgba(255,255,255,0.18)", // Custom white color
        'dark-blue': '#001f3d', // Additional dark blue color
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
    flowbite.plugin(), // Include Flowbite plugin
  ],
};
