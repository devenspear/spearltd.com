/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a472a", // Deep green - primary brand color
          light: "#2e6e44", // Lighter green for hover states
        },
        secondary: "#14395b", // Deep blue - secondary brand color
        accent: "#c0a062", // Gold accent - luxury feel
        background: "#f8f9fa", // Light background
        foreground: "#333333", // Dark text for readability
        muted: "#6c757d", // Muted text color
        border: "#dee2e6", // Light border color
        card: "#ffffff", // Card background
        "card-foreground": "#333333", // Card text color
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
};
