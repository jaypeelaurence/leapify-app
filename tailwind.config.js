/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      primary: "#23CC67",
      secondary: "#022641",
      tertiary: "#F9FAFC",
      disabled: '#D0DEEA', 
      blue: '#0786E3', 
      white: '#FFFFFF' 
    },
    fontFamily: {
      sans: ['var(--font-sans)'],
    }
  },
  plugins: [],
}
