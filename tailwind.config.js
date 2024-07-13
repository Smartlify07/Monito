/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-1": "#EAEAEA",
        "gray-2": "#F4F4F5",
        "gray-3": "#A1A1AA",
        "gray-4": "#667479",
        "gray-5": "#CCD1D2",
        "gray-6": "#D4D4D8",
        "gray-10": "#3F3F46",
        white: "#f2f2f2",
        "white-2": "#fafafa",
        cream: "#FAE2AE",
        primary: "#0B4937",
        "red-1": "#FF564F",
        apricot: "#FFB672",
        "black-1": "#242B33",
        "black-2": "#00171F",
        silver: "#CECECE",
        tan: "#FFF7CE",
        red2: "#A31111",
      },

      fontFamily: {
        intertight: "Inter Tight, sans-serif",
        plusjarkatasans: "Plus Jakarta Sans, sans-serif",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@shrutibalasa/tailwind-grid-auto-fit")],
};
