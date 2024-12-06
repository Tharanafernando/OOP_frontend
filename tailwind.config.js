/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        elements: ["Outfit", "sans-serif"],
        navbar:["Oswald", "sans-serif"]
      },

      margin:{
        '50rem':'50rem'
      }

    },
  },
  plugins: [],
}

