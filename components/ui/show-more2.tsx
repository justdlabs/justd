'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import { useSeparator } from 'react-aria'
import type { SeparatorProps as SeparatorPrimitiveProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'

const showMoreStyles = tv({
  base: 'text-sm leading-6 after:border-muted before:border-muted',
  variants: {
    orientation: {
      vertical: 'mx-1 h-auto self-stretch',
      horizontal: 'my-0.5 h-px w-full self-stretch'
    }
  },
  compoundVariants: [
    {
      orientation: 'vertical',
      className:
        'mx-2 flex flex-col items-center before:border-l before:flex-1 before:mb-2 after:border-r after:flex-1 after:mt-2'
    },
    {
      orientation: 'horizontal',
      className:
        'self-stretch my-2 flex items-center before:border-t before:flex-1 before:mr-2 after:border-t after:flex-1 after:ml-2'
    }
  ],
  defaultVariants: {
    orientation: 'horizontal'
  }
})

interface ShowMoreProps extends Omit<SeparatorPrimitiveProps, 'slot'> {
  children: React.ReactNode | ((props: { isExpanded: boolean }) => React.ReactElement)
  slot?: string
  isExpanded?: boolean
  onExpandChange?: (isExpanded: boolean) => void
  className?: string
  orientation?: 'horizontal' | 'vertical'
  as?: 'div' | 'button'
}

const ShowMore = ({
  as = 'div',
  orientation = 'horizontal',
  className,
  slot = 'showMore',
  isExpanded: controlledIsExpanded,
  onExpandChange,
  children,
  ...props
}: ShowMoreProps) => {
  const { separatorProps } = useSeparator({ orientation })
  const [internalIsExpanded, setInternalIsExpanded] = React.useState(false)
  const isControlled = controlledIsExpanded !== undefined
  const isExpanded = isControlled ? controlledIsExpanded : internalIsExpanded

  const toggleExpand = () => {
    const newIsExpanded = !isExpanded
    if (!isControlled) {
      setInternalIsExpanded(newIsExpanded)
    }
    if (onExpandChange) {
      onExpandChange(newIsExpanded)
    }
  }
  const Element = as === 'button' ? 'button' : 'div'
  return (
    <Element {...separatorProps} className={showMoreStyles({ orientation, className })} {...props}>
      {as === 'button' ? (
        <Button appearance="outline" size="small" shape="circle" onPress={toggleExpand}>
          {typeof children === 'function' ? children({ isExpanded }) : children}
        </Button>
      ) : typeof children === 'function' ? (
        children({ isExpanded })
      ) : (
        children
      )}
    </Element>
  )
}

export { ShowMore, type ShowMoreProps }
