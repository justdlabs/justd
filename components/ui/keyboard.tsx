"use client"

import * as React from "react"

import { Keyboard as KeyboardPrimitive } from "react-aria-components"
import { tv } from "tailwind-variants"

const keyboardStyles = tv({
  slots: {
    base: "-mr-1 ml-auto hidden items-center gap-[0.25rem] px-1 lg:inline-flex",
    kbd: [
      "text-center font-sans capitalize text-muted-fg group-focus:text-fg forced-colors:group-focus:text-[HighlightText]",
      "inline-grid min-h-5 min-w-5 place-content-center rounded bg-bg font-sans text-[.75rem] uppercase text-fg ring-1 ring-fg/10 group-focus:opacity-60"
    ]
  }
})

const { base, kbd } = keyboardStyles()

interface KeyboardProps extends React.HTMLAttributes<HTMLElement> {
  keys: string | string[]
  classNames?: {
    base?: string
    kbd?: string
  }
}

const Keyboard = ({ keys, classNames, className, ...props }: KeyboardProps) => {
  return (
    <KeyboardPrimitive className={base({ className: classNames?.base ?? className })} {...props}>
      {(Array.isArray(keys) ? keys : keys.split("")).map((char, index) => (
        <kbd
          key={index}
          className={kbd({ className: index > 0 && char.length > 1 ? "pl-1" : classNames?.kbd })}
        >
          {char}
        </kbd>
      ))}
    </KeyboardPrimitive>
  )
}

export { Keyboard, type KeyboardProps }
