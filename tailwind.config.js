/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      lightBlack: "#1c1d1f",
      white: "#ffffff",
      darkGray: "#6a6f73",
      lightGray: "#d1d7dc",
      bronzeOlive: "#3d3c0a",
      midYellow: "#eceb98",
      lightOrange: "rgb(255, 166, 0)",
      fantOrange: "#f3ca8c",
      darkOrange: "#b4690e",
      yellow: "#faaf00",
      lightViolet: "#cec0fc",
      midViolet: "#a435f0",
      darkViolet: "#8710d8"
    },
    fontFamily: {
      lora: ["Lora", "serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
      sans: ["sans-serif", "Arial", "Helvetica", "serif"],
      rubik: ["Rubik", "sans-serif"],
    },
    screens: {
      'xs': '340px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}