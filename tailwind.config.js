/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(), // Add Flowbite content
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1DA1F2',
        customWhite: "rgba(255,255,255,0.18)",
      },
    },
  },
  plugins: [
    flowbite.plugin(), // Include Flowbite plugin
  ],
};
