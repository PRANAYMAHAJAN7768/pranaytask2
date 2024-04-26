/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          100: "#808080",
          200: "#7a7a7a",
          300: "#222",
          400: "#0d0d0d",
          500: "rgba(255, 255, 255, 0)",
          600: "rgba(255, 255, 255, 0.01)",
          700: "rgba(255, 255, 255, 0.5)",
          800: "rgba(255, 255, 255, 0.2)",
        },
        white: "#fff",
        silver: "#bbb",
        plum: "#b48cde",
      },
      spacing: {},
      fontFamily: {
        "body-small-tag": "'DM Sans'",
        "body-bold": "Inter",
      },
      borderRadius: {
        "3xs": "10px",
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        "35xl": "54px",
        "13xl": "32px",
        "24xl": "43px",
        lg: "18px",
        "3xl": "22px",
        "146xl": "165px",
        "22xl": "41px",
        "47xl": "66px",
        smi: "13px",
        inherit: "inherit",
      },
      screens: {
        lg: { max: "1200px" },
        mq1050: { raw: "screen and (max-width: 1050px)" },
        mq750: { raw: "screen and (max-width: 750px)" },
        mq450: { raw: "screen and (max-width: 450px)" },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};