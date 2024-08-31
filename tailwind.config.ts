import tt from "@tailwindcss/typography"
import { withTV } from "tailwind-variants/transformer"
import type { Config } from "tailwindcss"
import ta from "tailwindcss-animate"
import trac from "tailwindcss-react-aria-components"
import { fontFamily } from "tailwindcss/defaultTheme"

const config = withTV({
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx,md,mdx}",
    "./resources/**/*.{ts,tsx,md,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.sans]
      },
      colors: {
        light: "oklch(var(--light) / <alpha-value>)",
        dark: "oklch(var(--dark) / <alpha-value>)",
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        toggle: "oklch(var(--toggle) / <alpha-value>)",
        bg: "oklch(var(--bg) / <alpha-value>)",
        fg: "oklch(var(--fg) / <alpha-value>)",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          fg: "oklch(var(--primary-fg) / <alpha-value>)",
          "50": "oklch(97.37% 0.014 238 / <alpha-value>)",
          "100": "oklch(93.81% 0.03280649558828209 241.06746081081621 / <alpha-value>)",
          "200": "oklch(88.9% 0.059 242.33 / <alpha-value>)",
          "300": "oklch(82.58% 0.09763750297234024 239.47890979942932 / <alpha-value>)",
          "400": "oklch(74.36% 0.142 244.63 / <alpha-value>)",
          "500": "oklch(65.63% 0.18687681791257255 253.9987240551966 / <alpha-value>)",
          "600": "oklch(57.82% 0.228 260.03 / <alpha-value>)",
          "700": "oklch(52.27% 0.227 261.8 / <alpha-value>)",
          "800": "oklch(45.04% 0.19 262.37 / <alpha-value>)",
          "900": "oklch(39.92% 0.145 261.36 / <alpha-value>)",
          "950": "oklch(29.38% 0.093 262.52 / <alpha-value>)"
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          fg: "oklch(var(--secondary-fg) / <alpha-value>)"
        },
        tertiary: {
          DEFAULT: "oklch(var(--tertiary) / <alpha-value>)",
          fg: "oklch(var(--tertiary-fg) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          fg: "oklch(var(--accent-fg) / <alpha-value>)",
          subtle: "oklch(var(--accent-subtle) / <alpha-value>)",
          "subtle-fg": "oklch(var(--accent-subtle-fg) / <alpha-value>)"
        },
        success: {
          DEFAULT: "oklch(var(--success) / <alpha-value>)",
          fg: "oklch(var(--success-fg) / <alpha-value>)"
        },
        info: {
          DEFAULT: "oklch(var(--info) / <alpha-value>)",
          fg: "oklch(var(--info-fg) / <alpha-value>)"
        },
        danger: {
          DEFAULT: "oklch(var(--danger) / <alpha-value>)",
          fg: "oklch(var(--danger-fg) / <alpha-value>)"
        },
        warning: {
          DEFAULT: "oklch(var(--warning) / <alpha-value>)",
          fg: "oklch(var(--warning-fg) / <alpha-value>)"
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          fg: "oklch(var(--muted-fg) / <alpha-value>)"
        },
        overlay: {
          DEFAULT: "oklch(var(--overlay) / <alpha-value>)",
          fg: "oklch(var(--overlay-fg) / <alpha-value>)"
        }
      },
      borderRadius: {
        "3xl": "calc(var(--radius) + 7.5px)",
        "2xl": "calc(var(--radius) + 5px)",
        xl: "calc(var(--radius) + 2.5px)",
        lg: "calc(var(--radius))",
        md: "calc(var(--radius) - 2.5px)",
        sm: "calc(var(--radius) - 5px)"
      },
      keyframes: {
        blink: {
          "0%": { opacity: "0.2" },
          "20%": { opacity: "1" },
          "100% ": { opacity: "0.2" }
        }
      },
      animation: {
        blink: "blink 1.4s both infinite"
      }
    }
  },
  plugins: [ta, tt, trac]
}) satisfies Config

export default config
