const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Add Flowbite content
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#EBF0F8", // Your custom color between blue-50 and blue-100
      },
    },
  },
  plugins: [
    flowbite.plugin(), // Add Flowbite plugin
  ],
};
