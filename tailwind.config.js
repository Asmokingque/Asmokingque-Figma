import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bbq-black': '#090909',
        charcoal: '#1B1B1B',
        'smoke-dark': '#2B2B2B',
        'smoke-gray': '#494949',
        white: '#FEFEFE',
        'off-white': '#FEFEFE',
        'bone-white': '#E8E8E8',
        crimson: '#93160C',
        'deep-red': '#6E1D17',
        'ember-red': '#BD0F24',
        'premium-gold': '#C8A24A',
        'soft-gold': '#E2C76E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(200, 162, 74, 0.2), 0 12px 36px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
