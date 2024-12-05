/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "xxs": "370px",
      "xs": "480px",
      "sm": "640px",
      "md": "768px",
      "2md": "992px",
      "lg": "1024px",
      "xl": "1200px",
      "2xl": "1280px",
    },
  },
  plugins: [],
};
