/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#100E0C',
        secondary: '#1a1510',
        surface: '#1c1712',
        'surface-light': '#2a2218',
        'dark-red': '#5c3a12',
        'dark-red-deep': '#3a250a',
        accent: '#f9dc5c',
        'accent-light': '#ffe27a',
        'accent-dark': '#e6c24a',
        coral: '#fea183',
        emerald: {
          glow: '#10b981',
        },
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(249, 220, 92, 0.18), transparent), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(254, 161, 131, 0.10), transparent)',
        'card-gradient': 'linear-gradient(135deg, rgba(28, 23, 18, 0.95) 0%, rgba(16, 14, 12, 0.98) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #f9dc5c 0%, #ffe27a 50%, #e6c24a 100%)',
        'red-gradient': 'linear-gradient(180deg, #1c1712 0%, #100E0C 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(249, 220, 92, 0.2)',
        'glow-lg': '0 0 60px rgba(249, 220, 92, 0.3)',
        'red-glow': '0 0 40px rgba(92, 58, 18, 0.5)',
        card: '0 4px 24px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.7), 0 0 24px rgba(249, 220, 92, 0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
