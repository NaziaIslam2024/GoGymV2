/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const fontFamily = {
  sans: ["Roboto", "sans-serif"],
  serif: ["Roboto Slab", "serif"],
  body: ["Roboto", "sans-serif"],
};
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
}) 
