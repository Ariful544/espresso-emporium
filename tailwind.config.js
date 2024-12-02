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
      fontFamily:{
        'raleway': ["Raleway", "sans-serif"],
      }
    },
  },
  plugins: [
    flowbite.plugin(),
    require('daisyui'),
    require('tailwindcss-textshadow'),
  ],
}
