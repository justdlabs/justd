'use client'

import * as React from 'react'

import { type ClassValue, clsx } from 'clsx'
import { composeRenderProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string
): string | ((v: T) => string) {
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

function pickBy<T extends object>(
  object: T,
  predicate: (value: T[keyof T], key: keyof T) => boolean = (value) => value !== undefined && value !== ''
): Partial<T> {
  return Object.keys(object).reduce((acc: Partial<T>, key: string) => {
    const typedKey = key as keyof T
    if (predicate(object[typedKey], typedKey)) {
      acc[typedKey] = object[typedKey]
    }
    return acc
  }, {})
}

function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(false)

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
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

export { cn, composeTailwindRenderProps, cr, ctr, focusRing, focusStyles, pickBy, tm, twMerge, useMediaQuery }
