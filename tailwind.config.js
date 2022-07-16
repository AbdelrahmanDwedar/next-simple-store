/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}"
  ],
  theme: {
    colors: {
      'muted': '#00000095',
      'danger': '#F00',
      'primary': '#4646fc'
    },
    extend: {},
  },
  plugins: [],
}
