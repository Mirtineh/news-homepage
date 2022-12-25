/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "soft-orange": "hsl(35, 77%, 62%)",
      "sort-red": "hsl(5, 85%, 63%)",
      "Off-white": "hsl(36, 100%, 99%)",
      "grayish-blue": "hsl(233, 8%, 79%)",
      "dark-grayish-blue": "hsl(236, 13%, 42%)",
      "very-dark-blue": "hsl(240, 100%, 5%)",
    },
    fontFamily: {
      inter: ["Inter", "Sans"],
    },
    fontWeight: {
      normal: 400,
      medium: 700,
      bold: 800,
    },
    extend: {},
  },
  plugins: [],
};
