const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["HakenGrotesk", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        lightred: "hsl(0, 100%, 67%)",
        orangeyyellow: "hsl(39, 100%, 56%)",
        greenteal: "hsl(166, 100%, 37%)",
        cobaltblue: "hsl(234, 85%, 45%)",
        paleblue: "hsl(221, 100%, 96%)",
        lightlavender: "hsl(241, 100%, 89%)",
        darkgrayblue: "hsl(224, 30%, 27%)",
        lightslateblue: "hsl(252, 100%, 64%)",
        lightroyalblue: "hsl(241, 81%, 54%)",
        violetblue: "hsla(256, 72%, 46%, 1)",
        persianblue: "hsla(241, 72%, 46%, 0)",
      },
    },
  },
  plugins: [],
};
