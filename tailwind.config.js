/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryWhite: "#FFFFFF",
        primaryBlack: "#111111",
        primaryGray: "#CCD3DB",
        secondaryBlack: "#000000",
        secondaryGray: "#E0E5EB",
        paragraphGray: "#999999",
        backgroundGray: "#F5F7FA",
        statsGray: "#B9C1CC",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        'sm': '425px',
        'md': '768px',
        'lg': '1024px',
        'xlg': '1440px',
      },
    },
  },
  plugins: [],
};
