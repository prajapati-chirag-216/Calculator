/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
