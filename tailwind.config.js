/** @type {import('tailwindcss').Config} */
export default {
  //index.html을 포함한 src경로 내부에 자바스크립트,

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        22: "5.5rem",
        23: "5.8rem",
        29: "7.25rem",
        50: "12.5rem",
        70: "17.5rem",
        125: "31.25rem",
        140: "35rem",
      },
      height: {
        22: "5.5rem",
        130: "32.5rem",
      },
      colors: {

        "main-color": "#124E77",
        "light-blue": "#4D80A3",
        "deep-blue": "#001D31",
        "light-gray": "#F5F5F5",
        "light-yellow": "#FEF4D0",
        "deep-yellow": "#F9D966",
      },
      primary: {
        DEFAULT: "#2bca43",
      },
      borderRadius: {
        30: "1.875rem",

      },
    },
  },
  plugins: [],
};
