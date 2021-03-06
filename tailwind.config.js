module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "active-cyan": "#9BE3E2",
        cyan: "hsl(180, 66%, 49%)",
        "dark-violet": "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        "very-light-gray": "hsl(0, 0%, 95%)",
        "light-gray": "hsl(0, 0%, 75%)",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "very-dark-blue": "hsl(255, 11%, 22%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
      },
      backgroundImage: {
        "shorten-mobile": "url('src/assets/bg-shorten-mobile.svg')",
        "boost-mobile": "url('src/assets/bg-boost-mobile.svg')",
        "shorten-desktop": "url('src/assets/bg-shorten-desktop.svg')",
        "boost-desktop": "url('src/assets/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
