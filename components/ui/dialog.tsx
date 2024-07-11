'use client'

import { Dialog as DialogPrimitive, type DialogProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

const Dialog = ({ className, ...props }: DialogProps) => {
  return (
    <DialogPrimitive
      {...props}
      className={twMerge(
        'relative max-h-[inherit] overflow-y-auto p-4 focus:outline-none outline-0 [[data-placement]>&]:p-4 dlc',
        className
      )}
    />
  )
}

export { Dialog }
