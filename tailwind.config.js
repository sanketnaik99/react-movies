module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        reactflix: {
          start: "#1E9AFE",
          end: "#60DFCD",
        },
      },
      fontFamily: {
        heading: ["Raleway"],
      },
    },
  },
  variants: {
    scrollbar: ["dark", "rounded"],
    backgroundOpacity: ["dark"],
  },
  plugins: [require("tailwind-scrollbar")],
};
