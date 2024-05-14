/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blackLight: "#141516"
      },
      fontSize: {
        30: "30px",
        20: "20px",
        15: "15px",
      },
      width: {
        800: "800px",
        300: "300px",
        200: "200px",
        100: "100px",
        80: "80px",
        40: "40px",
        20: "20px",
        10: "10px",

      },
      height: {
        400: "400px",
        200: "200px",
        80: "80px",
        40: "40px",
        20: "20px",
        10: "10px",

      },
      inset: {
        '160': "160px",
        '10': "10px"
      },
      backgroundImage: {
        "Home": "url(https://i.pinimg.com/236x/90/8a/50/908a501fd5db1c55716ed99e812a805b.jpg)"
      }

    },
  },
  plugins: [],
}

