/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2EF297',
        'secondary': '#161616'
      }
    },
    fontFamily: {
      'Roboto': ['roboto', 'sans-serif'],
    },
  },
  plugins: [],
}

