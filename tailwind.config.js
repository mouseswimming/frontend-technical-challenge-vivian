/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#038851",
      },
      backgroundImage: {
        "logo-pattern": "url('assets/logo-pattern.png')",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
