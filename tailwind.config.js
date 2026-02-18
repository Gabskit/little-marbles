/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flyonui/dist/js/*.js" // Crucial para la interactividad 2026
  ],
  flyonui: {
    themes: ["light", "dark", "gourmet", "luxury"] // Temas premium de la última versión
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ]
}