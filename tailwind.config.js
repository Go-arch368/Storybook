/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/TS/JSX/TSX files inside src
      "./public/index.html", // Include index.html
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF", // Custom primary color (Blue-800)
          secondary: "#9333EA", // Custom secondary color (Purple-600)
          accent: "#F59E0B", // Custom accent color (Amber-500)
          dark: "#1F2937", // Dark mode background
          light: "#F3F4F6", // Light mode background
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          serif: ["Merriweather", "serif"],
        },
        spacing: {
          "128": "32rem",
          "144": "36rem",
        },
        borderRadius: {
          "xl": "1.5rem",
        },
      },
    },
    darkMode: "class", // Enables dark mode using the 'class' strategy
    plugins: [
      require("@tailwindcss/forms"), // Better form styling
      require("@tailwindcss/typography"), // Better text formatting
      require("@tailwindcss/aspect-ratio"), // Maintain aspect ratios for images/videos
    ],
  };
  