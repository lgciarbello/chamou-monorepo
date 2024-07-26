/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bioRhyme': ['BioRhyme', 'sans-serif'],
        'cutive': ['Cutive', 'sans-serif'],
      },
      dropShadow: {
        'title': '1px 1px rgba(0, 0, 0, 0.15)',
        'card': '0 1px 1px rgba(0, 0, 0, 0.25)',
        'bottom-navbar': '0 -1px 1px rgba(0, 0, 0, 0.25)',
        'modal': '-2px 3px 2px rgba(0, 0, 0, 0.25)',
        'cart-item': '0 0 1px rgba(0, 0, 0, 0.35)',
        'cart-price': '0 0 1px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}

