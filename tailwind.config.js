export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        francoisOne: ["Francois One", "sans-serif"],
      },
      colors: {
        "speedo-primary": "#d8413c",
      },
    },
  },
  variants: {
    extend: {
      display: ["avatar-container-hover"],
    },
  },
  plugins: [require("daisyui")],
};
