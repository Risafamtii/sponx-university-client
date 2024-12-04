const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};

//custom colour used for the background, use this blue for all page backgrounds
module.exports = {
  theme: {
    extend: {
      colors: {
        customBlue: '#e8f1ff', // A color between blue-50 and blue-100
      },
    },
  },
};
