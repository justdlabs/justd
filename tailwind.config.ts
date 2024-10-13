import tt from '@tailwindcss/typography'
import { withTV } from 'tailwind-variants/transformer'
import type { Config } from 'tailwindcss'
import ta from 'tailwindcss-animate'
import trac from 'tailwindcss-react-aria-components'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = withTV({
  darkMode: ['class'],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx,md,mdx}',
    './resources/**/*.{ts,tsx,md,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.sans]
      },
      colors: {
        light: 'hsl(var(--light))',
        dark: 'hsl(var(--dark))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        toggle: 'hsl(var(--toggle))',
        bg: 'hsl(var(--bg))',
        fg: 'hsl(var(--fg))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          fg: 'hsl(var(--primary-fg))',
          '50': 'hsl(204.7 99% 97%)',
          '100': 'hsl(206.15 100% 92%)',
          '200': 'hsl(206.57 99% 86%)',
          '300': 'hsl(204.41 100% 77%)',
          '400': 'hsl(206.02 100% 66%)',
          '500': 'hsl(210.99 100% 57.99%)',
          '600': 'hsl(215.79 98% 52%)',
          '700': 'hsl(218.8 90% 48%)',
          '800': 'hsl(220.35 84% 40%)',
          '900': 'hsl(218.91 76% 33%)',
          '950': 'hsl(220.26 68% 21%)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          fg: 'hsl(var(--secondary-fg))'
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
          fg: 'hsl(var(--tertiary-fg))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          fg: 'hsl(var(--accent-fg))',
          subtle: 'hsl(var(--accent-subtle))',
          'subtle-fg': 'hsl(var(--accent-subtle-fg))'
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          fg: 'hsl(var(--success-fg))'
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          fg: 'hsl(var(--info-fg))'
        },
        danger: {
          DEFAULT: 'hsl(var(--danger))',
          fg: 'hsl(var(--danger-fg))'
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          fg: 'hsl(var(--warning-fg))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          fg: 'hsl(var(--muted-fg))'
        },
        overlay: {
          DEFAULT: 'hsl(var(--overlay))',
          fg: 'hsl(var(--overlay-fg))'
        }
      },
      borderRadius: {
        '3xl': 'calc(var(--radius) + 7.5px)',
        '2xl': 'calc(var(--radius) + 5px)',
        xl: 'calc(var(--radius) + 2.5px)',
        lg: 'calc(var(--radius))',
        md: 'calc(var(--radius) - 2.5px)',
        sm: 'calc(var(--radius) - 5px)'
      },
      keyframes: {
        blink: {
          '0%': { opacity: '0.2' },
          '20%': { opacity: '1' },
          '100% ': { opacity: '0.2' }
        }
      },
      animation: {
        blink: 'blink 1.4s both infinite'
      }
    }
  },
  plugins: [ta, tt, trac]
}) satisfies Config

export default config
