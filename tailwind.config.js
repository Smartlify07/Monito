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
        "gray-10": "#3F3F46",
        white: "#f2f2f2",
        cream: "#FAE2AE",
        primary: "#0B4937",
      },

      fontFamily: {
        intertight: "Inter Tight, sans-serif",
        plusjarkatasans: "Plus Jakarta Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
