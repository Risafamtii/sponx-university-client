/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1DA1F2',
        customWhite: "rgba(255,255,255,0.18)"
      }
    },
  },
  plugins: [],
}