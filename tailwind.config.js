/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      primary: "#23CC67",
      'primary-dark': "#20BA49", 
      secondary: "#022641",
      'secondary-dark': "#002641",
      tertiary: "#F9FAFC",
      disabled: '#D0DEEA', 
      blue: '#0786E3',
      'blue-dark': '#1973E8',
      white: '#FFFFFF', 
      danger: "#E22323",
      success: "#20BA49",
      warning: "#FFAB26",
    },
    fontFamily: {
      sans: ['var(--font-sans)'],
    }
  },
  plugins: [],
}
