'use client'

import {
  Switch as SwitchPrimitive,
  type SwitchProps as SwitchPrimitiveProps
} from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

import { focusRing } from './primitive'

const trackStyles = tv({
  extend: focusRing,
  base: 'mr-2 h-5 w-8 cursor-pointer rounded-full border-2 border-transparent bg-muted-fg/50 transition duration-200',
  variants: {
    isDisabled: { true: 'opacity-50 cursor-default' },
    intent: {
      primary: 'group-selected:bg-primary',
      secondary: 'group-selected:bg-muted-fg',
      success: 'group-selected:bg-success',
      danger: 'group-selected:bg-danger',
      warning: 'group-selected:bg-warning',
      info: 'group-selected:bg-info'
    }
  },
  defaultVariants: {
    intent: 'primary'
  }
})

const switchStyles = tv({
  slots: {
    base: 'group inline-flex touch-none lg:text-sm items-center',
    ball: 'forced-colors:disabled:outline-[GrayText] group-selected:ml-3 group-selected:group-data-[pressed]:ml-2 group-pressed:w-5 block size-4 origin-right rounded-full bg-white shadow transition-all duration-200'
  }
})

const { base, ball } = switchStyles()

interface SwitchProps extends SwitchPrimitiveProps, VariantProps<typeof trackStyles> {}

const Switch = ({ children, intent, className, ...props }: SwitchProps) => {
  return (
    <SwitchPrimitive
      {...props}
      className={(values) =>
        base({ className: typeof className === 'function' ? className(values) : className })
      }
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {(values) => (
        <>
          <span
            className={trackStyles({
              isFocused: props.isFocused,
              isInvalid: props.isInvalid,
              isDisabled: props.isDisabled,
              intent
            })}
          >
            <span className={ball()} />
          </span>
          {typeof children === 'function' ? children(values) : children}
        </>
      )}
    </SwitchPrimitive>
  )
}

export { Switch }
