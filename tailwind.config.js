/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1976d2 ", // Example: Deep Blue
        secondary: "#F59E0B", // Example: Amber
        third: "#10B981", // Example: Emerald Green
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"], // Example: Modern clean font
        secondary: ["Roboto", "sans-serif"], // Example: For body text
        tertiary: ["Playfair Display", "serif"], // Example: Elegant titles
      },
    },
  },
  plugins: [],
});
