module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        wun: {
          50: "#F2FFFC",
          100: "#E6FFFA",
          200: "#C1F0E7",
          300: "#9AEDDF",
          400: "#4FD1C5",
          500: "#38B2AC",
          600: "#319795",
          700: "#298482",
          800: "#337074",
          900: "#285E61",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
