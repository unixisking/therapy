// tailwind.config.js
module.exports = {
  future: {},
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0C77F8",
        secondary: "#66A3FF",
        grey: "#555555",
        borderfocuscolor: "#556AFE",
      },
    },
  },
  plugins: [],
}
