/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'lighter':'#F5FCFF',
      'light':'#DBF3FA',
      'blue':'#B7E9F7',
      'dark':'#92DFF3',
      'darker': '#7AD7F0'
    },
    width: {
      '1000': '1000px'
    },
    height: {
      '500px': '500px'
    },
    flex: {
      '2': '0 0 20%'
    },
    extend: {},
  },
  plugins: [],
}