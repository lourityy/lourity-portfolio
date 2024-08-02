/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'mainalt-black': '#0d0d10',
          'mainhv-black': '#141416',
        },
      },
    },
   plugins: [require("daisyui")],
   daisyui: {
    themes: [],
  },
  }