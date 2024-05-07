/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        20: "20px"
      },
      width: {
        800: "800px",
        300: "300px",
        200: "200px",
        100: "100px",
        80: "80px",
        20: "20px",
        10: "10px",

      },
      height: {
        400: "400px",
        200: "200px",
        80: "80px",
        20: "20px",
        10: "10px",

      },
      inset: {
        '160': "160px",
        '10': "10px"
      },

    },
  },
  plugins: [],
}

