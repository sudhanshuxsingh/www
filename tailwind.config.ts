import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        base: '0.9375rem',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      keyframes: {
        cloud: {
          '0%': {
            transform: 'translate(-350px, -350px)',
          },
          '25%': {
            transform: 'translate(350px, 350px)',
          },
          '50%': {
            transform: 'translate(600px, -350px)',
          },
          '75%': {
            transform: 'translate(-400px, 350px)',
          },
          '100%': {
            transform: 'translate(-350px, -350px)',
          },
        },
        marker: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: '1',
          },
          '35%': {
            transform: 'translate(-50%, -50%) scale(6)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(6)',
            opacity: '0',
          },
        },
        plane: {
          '0%': {
            transform: 'translate(50px, 350px) rotate(30deg)',
          },
          '40%': {
            transform: 'translate(300px, -60px) rotate(30deg)',
          },
          '100%': {
            transform: 'translate(300px, -60px) rotate(30deg)',
          },
        },
        'plane-shadow': {
          '0%': {
            transform: 'translate(50px, 410px) rotate(30deg)',
          },
          '40%': {
            transform: 'translate(300px, -20px) rotate(30deg)',
          },
          '100%': {
            transform: 'translate(300px, -20px) rotate(30deg)',
          },
        },
      },
      animation: {
        cloud: 'cloud 120s linear infinite',
        marker: 'marker 4s ease-out infinite',
        plane: 'plane 25s linear infinite',
        'plane-shadow': 'plane-shadow 25s linear infinite',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwindcss-animate'),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwindcss-content-visibility'),
  ],
} satisfies Config;
