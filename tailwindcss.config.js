/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./www/**/*.{html,ts}", // Important: this tells Tailwind where to find your classes
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["all"], // You can add or remove themes here
  },
}