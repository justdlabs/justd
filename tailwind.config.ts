import { withTV } from 'tailwind-variants/transformer'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx,.md,.mdx}', './src/**/*.{ts,tsx,.md,.mdx}'],
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
        border: 'hsl(var(--border))',
        link: 'hsl(var(--link))',
        input: 'hsl(var(--input))',
        toggle: 'hsl(var(--toggle))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        fg: 'hsl(var(--fg))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          fg: 'hsl(var(--primary-fg))',
          '50': '#eef8ff',
          '100': '#d8eeff',
          '200': '#b9e0ff',
          '300': '#89cfff',
          '400': '#52b4ff',
          '500': '#2a91ff',
          '600': '#0d6efd',
          '700': '#0c5ae9',
          '800': '#1149bc',
          '900': '#144194',
          '950': '#11295a'
        },
        blue: {
          '50': '#eef8ff',
          '100': '#d8eeff',
          '200': '#b9e0ff',
          '300': '#89cfff',
          '400': '#52b4ff',
          '500': '#2a91ff',
          '600': '#0d6efd',
          '700': '#0c5ae9',
          '800': '#1149bc',
          '900': '#144194',
          '950': '#11295a'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          fg: 'hsl(var(--secondary-fg))'
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
          fg: 'hsl(var(--tertiary-fg))'
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          fg: 'hsl(var(--success-fg))'
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
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          fg: 'hsl(var(--accent-fg))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          fg: 'hsl(var(--popover-fg))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          header: 'hsl(var(--card-header))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('tailwindcss-react-aria-components')
  ]
} satisfies Config

export default withTV(config)
