/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./home-page/src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'hp' : '350px',
      'ipad' : '750px',
      'laptop' : '1024px',
      'desktop' : '1280px'
    }
  },
  plugins: [require("daisyui")],
}