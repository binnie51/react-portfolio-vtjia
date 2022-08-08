/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '440px',
      // => @media (min-width: 440px) { ... }

      'md': '547px',
      // => @media (min-width: 547px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1680px) { ... }
    }
  },
  plugins: [],
}
