import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 4%)',
        foreground: 'hsl(0 0% 98%)',
        'muted-foreground': 'hsl(0 0% 63%)',
        primary: 'hsl(145 30% 65%)',
        'primary-dark': 'hsl(145 30% 50%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
