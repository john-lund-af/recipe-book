/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Libre Caslon Text", "serif"],
        custom: ["EB Garamond", "serif"],
        input: ["Roboto", "sans-serif"]
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          secondary: 'var(--color-text-secondary)',
          inverted: 'var(--color-secondary)'
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-base)',
          secondary: 'var(--color-secondary)',
          'button-accent': 'var(--color-accent)',
          'button-action': 'var(--color-action)'
        }
      }
    }
  },
  plugins: [],
}

