/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A4991",   // Primary Colour from image
        secondary: "#17A3DC", // Secondary Colour from image
        textPrimary: "#0A4991", // Same as primary (used for headings)
        textSecondary: "#17A3DC", // Secondary text
        textSecondary2: "#FFFFFF", // White text for dark backgrounds
        buttonPrimary: "#0A4991",
        buttonSecondary: "#17A3DC",
        iconPrimary: "#0A4991",
        iconSecondary: "#17A3DC",
      },
      fontFamily: {
        primary: ["Jockey", "sans-serif"], // For Section Headers
        secondary: ["Nexa", "sans-serif"], // For Paragraph Text
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '40px',
        '3xl': '48px',
        '4xl': '56px',
        '5xl': '64px',
      },
      
    },
  },
  plugins: [],
});
