/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"   // ← ICI c'est parfait comme ça
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}