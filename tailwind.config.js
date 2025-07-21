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
      fontSize: {
        sectionHeader: ["70px", { lineHeight: "100px" }],
        subSectionHeader: ["40px", { lineHeight: "auto" }],
        minorHeading: ["50px", { lineHeight: "auto" }],
        highlights: ["20px", { lineHeight: "30px" }],
        paragraphText: ["18px", { lineHeight: "42px" }],
        paragraph2: ["20px", { lineHeight: "42px" }],
        captions: ["20px", { lineHeight: "auto" }],
        paragraphSmall: ["16px", { lineHeight: "auto" }],
        paragraphMedium: ["18px", { lineHeight: "30px" }],
      },
    },
  },
  plugins: [],
});
