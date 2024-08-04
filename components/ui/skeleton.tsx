import React from 'react'

import { tv } from 'tailwind-variants'

const skeletonStyles = tv({
  base: 'animate-pulse shrink-0',
  variants: {
    intent: {
      muted: 'bg-muted/50',
      lighter: 'bg-secondary'
    },
    shape: {
      circle: 'rounded-full',
      square: 'rounded-lg'
    }
  },
  defaultVariants: {
    intent: 'muted',
    shape: 'square'
  }
})

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  intent?: 'muted' | 'lighter'
  shape?: 'circle' | 'square'
}
const Skeleton = ({ shape, intent, className, ...props }: SkeletonProps) => {
  return <div className={skeletonStyles({ shape, intent, className })} {...props} />
}

export { Skeleton }
