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
        backgroundPrimary: "#F0F4F8", // Light background
      },
      fontFamily: {
        primary: ["JockeyOne", "sans-serif"], // For Section Headers
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
       boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        DEFAULT: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
        md: "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)",
        lg: "0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)",
        xl: "0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)",
        "2xl": "0 25px 50px rgba(0,0,0,0.25)",
        "3xl": "0 20px 30px -6px rgba(0,0,0,0.3)",
        "4xl": "0 25px 40px -8px rgba(0,0,0,0.35)",
        "5xl": "0 30px 60px -10px rgba(0,0,0,0.4)",
        "6xl": "0 40px 80px -12px rgba(0,0,0,0.45)",
        "inner-xl": "inset 0 4px 8px rgba(0,0,0,0.2)", // inner shadow
        glow: "0 0 20px rgba(0, 200, 255, 0.6)", // neon glow style
      },
    },
  },
  plugins: [],
});
