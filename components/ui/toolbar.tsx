'use client'

import React from 'react'

import type { ToolbarProps } from 'react-aria-components'
import { Toolbar as ToolbarPrimitive, composeRenderProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'

const toolbarStyles = tv({
  base: 'flex gap-2',
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col items-start'
    }
  }
})

const Toolbar = (props: ToolbarProps) => {
  return (
    <ToolbarPrimitive
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        toolbarStyles({ ...renderProps, className })
      )}
    />
  )
}

export { Toolbar }
