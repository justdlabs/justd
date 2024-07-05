'use client'

import { Switch as SwitchPrimitive, type SwitchProps as SwitchPrimitiveProps } from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn, focusRing } from './primitive'

const trackStyles = tv({
  extend: focusRing,
  base: 'mr-2 h-5 w-8 cursor-pointer rounded-full border-2 border-transparent bg-zinc-400 dark:bg-zinc-600 transition duration-200',
  variants: {
    intent: {
      primary: 'group-selected:bg-primary',
      secondary: 'group-selected:bg-zinc-500',
      success: 'group-selected:bg-success',
      danger: 'group-selected:bg-danger',
      warning: 'group-selected:bg-amber-500',
      info: 'group-selected:bg-lime-500 dark:group-selected:bg-lime-600'
    }
  },
  defaultVariants: {
    intent: 'primary'
  }
})

interface SwitchProps extends SwitchPrimitiveProps, VariantProps<typeof trackStyles> {}

const Switch = ({ children, intent, className, ...props }: SwitchProps) => {
  return (
    <SwitchPrimitive
      {...props}
      className={(values) =>
        cn(
          'group inline-flex touch-none lg:text-sm items-center disabled:opacity-60 forced-colors:disabled:text-[GrayText]',
          typeof className === 'function' ? className(values) : className
        )
      }
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {(values) => (
        <>
          <span className={trackStyles({ intent: intent })}>
            <span className="forced-colors:disabled:outline-[GrayText] group-selected:ml-3 group-selected:group-data-[pressed]:ml-2 group-pressed:w-5 block size-4 origin-right rounded-full bg-white shadow transition-all duration-200" />
          </span>
          {typeof children === 'function' ? children(values) : children}
        </>
      )}
    </SwitchPrimitive>
  )
}

export { Switch }
