'use client'

import * as React from 'react'

import { type ClassValue, clsx } from 'clsx'
import { composeRenderProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

const composeTailwindRenderProps = <T,>(
  className: string | ((v: T) => string) | undefined,
  tw: string
): string | ((v: T) => string) => {
  return composeRenderProps(className, (className) => twMerge(tw, className))
}

const focusRing = tv({
  base: 'outline-none focus:outline-none forced-colors:outline-[Highlight]',
  variants: {
    isFocused: { false: 'ring-0', true: 'ring-4 ring-primary/20' },
    isInvalid: { true: 'ring-4 ring-danger/20' }
  }
})

const focusStyles = tv({
  extend: focusRing,
  variants: {
    isFocused: { true: 'border-primary' },
    isInvalid: { true: 'border-danger' }
  }
})

const useMediaQuery = (query: string) => {
  const [value, setValue] = React.useState(false)

  React.useEffect(() => {
    const onChange = (event: MediaQueryListEvent) => {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    result.addEventListener('change', onChange)
    setValue(result.matches)

    return () => result.removeEventListener('change', onChange)
  }, [query])

  return value
}

const ctr = composeTailwindRenderProps
const tm = twMerge
const cr = composeRenderProps

export { cn, composeTailwindRenderProps, cr, ctr, focusRing, focusStyles, tm, twMerge, useMediaQuery }
