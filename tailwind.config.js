// start via cmd:
//
// npx tailwindcss -i ./input.css -o ./output.css --watch 
//


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      "main": "Inter"
    },
    fontWeight: {
      "normal": "400",
      "bold": "700",
      "very-bold": "800"
    },

    colors: {
      "soft-orage": "hsl(35, 77%, 62%)",
      "soft-red": "hsl(5, 85%, 63%)",

      "off-white":"hsl(36, 100%, 99%)",
      "grayish-blue":"hsl(233, 8%, 79%)",
      "dark-grayish-blue": "hsl(236, 13%, 42%)",
      "very-dark-blue": "hsl(240, 100%, 5%)"
    },
    extend: {},
  },
  plugins: [],
}

