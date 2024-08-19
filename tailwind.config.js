/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bright-orange": "hsl(31, 77%, 52%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "very-dark-cyan": "hsl(179, 100%, 13%)",
        "transparent-white": "hsla(0, 0%, 100%, 0.75)", // paragraphs
        "very-light-gray": "hsl(0, 0%, 95%)" // background, headings, buttons
      },
      fontFamily: {
        'heading':['"Big Shoulders Display"', 'sans-serif'],
        'text':['"Lexend Deca"', 'sans-serif']
      }
    },
  },
  plugins: [],
}