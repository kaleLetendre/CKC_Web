/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./public/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#05445e",
        secondary: "#189ab4",
        accent: "#75e6da",
        light: "#ffffff",
      },
    },
  },
  plugins: [],
};
