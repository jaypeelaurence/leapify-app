/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {},
    colors: {
      // utils
        white: '#FFFFFF',
        disabled: '#D0DEEA',
        transparent: 'transparent',

      // branding
        primary: "#23CC67",
        'primary-dark': "#20BA49", 
        secondary: "#022641",
        'secondary-dark': "#002641",
        tertiary: "#F9FAFC",
        blue: '#0786E3',
        'blue-dark': '#1973E8',

      // alerts
        danger: "#E22323",
        success: "#20BA49",
        warning: "#FFAB26",
        idle: "#E4F0F8",
    },
    fontFamily: {
      sans: ['var(--font-sans)'],
    }
  },
  plugins: [],
}
