/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#001f3d',  // Customize your dark blue color
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
  plugins: [],
};
