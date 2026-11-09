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
        primary: '#061016',
        secondary: '#0a1a20',
        surface: '#0d1f26',
        'surface-light': '#143039',
        'dark-red': '#0e4a4a',
        'dark-red-deep': '#083535',
        accent: '#00d9ca',
        'accent-light': '#3eefe3',
        'accent-dark': '#00b3a6',
        coral: '#ff4d6d',
        emerald: {
          glow: '#10b981',
        },
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(0, 217, 202, 0.18), transparent), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(255, 77, 109, 0.10), transparent)',
        'card-gradient': 'linear-gradient(135deg, rgba(13, 31, 38, 0.95) 0%, rgba(6, 16, 22, 0.98) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #00d9ca 0%, #3eefe3 50%, #00b3a6 100%)',
        'red-gradient': 'linear-gradient(180deg, #0d1f26 0%, #061016 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 217, 202, 0.2)',
        'glow-lg': '0 0 60px rgba(0, 217, 202, 0.3)',
        'red-glow': '0 0 40px rgba(14, 74, 74, 0.5)',
        card: '0 4px 24px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.7), 0 0 24px rgba(0, 217, 202, 0.12)',
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
