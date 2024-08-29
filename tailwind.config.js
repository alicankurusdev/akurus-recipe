/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes:{
        "trans-right":{
          "0%, 100%":{transform: "scale(1)"},
          "50%":{transform: "scale(1.1)"},
        }
      },animation:{"trans-right":"trans-right .4s ease-out"}
    },
  },
  plugins: [],
}

