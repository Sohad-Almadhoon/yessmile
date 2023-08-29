/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0693e3",
        primaryDark: "#465af7",
        darkMode: "#1d1d24",
        darkModeSecondary: "#27272f",
        home: "#f5f6fa",
      },
    },
  },
  plugins: [],
};
