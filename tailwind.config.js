/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      gray: "#b4b4b4",
      dark: "#515151",
      darkGray: "#262626",
      blueish: "#2b2a33",
      orange: "#c4933b",
    },
  },
  plugins: [],
};

// #b4b4b4
