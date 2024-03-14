/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'primary-20': '#4D0001',
        'primary-30': '#600C20',
        'primary-40': '#A61518',
        'primary-60': '#ED0000',
        'blue-50': '#0073DD'
      },
    },

  },
  plugins: [],
}

