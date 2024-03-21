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
      'darker': '#7AD7F0',
      'folder': '#fff0db'
    },
    width: {
      '1000px': '1000px'
    },
    height: {
      '575px': '575px'
    },
    flex: {
      '2': '0 0 20%'
    },
    extend: {},
  },
  plugins: [],
}