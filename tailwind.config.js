/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFF3E2',
        'primary-dark': '#FFE5CA',
        'secondary': '#FA9884',
        'secondary-dark': '#E74646'
      }
    },
  },
  plugins: [],
}

