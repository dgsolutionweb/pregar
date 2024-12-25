/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#D4AF37',
          DEFAULT: '#C5A572',
          dark: '#996515',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',
          darker: '#141414',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'cormorant': ['Cormorant', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(to right, #D4AF37, #C5A572, #996515)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(197, 165, 114, 0.2)',
        'gold-lg': '0 10px 25px -3px rgba(197, 165, 114, 0.3)',
      },
    },
  },
  plugins: [],
}
