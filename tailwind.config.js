/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./asset/svg/bubbles.svg')",
        'hero-background': "url('./asset/svg/background.svg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}