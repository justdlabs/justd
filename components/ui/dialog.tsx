'use client'

import { Dialog as DialogPrimitive, type DialogProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'

const dialogStyles = tv({
  base: 'dlc relative max-h-[inherit] focus:outline-none overflow-y-auto p-4 outline-0 [[data-placement]>&]:p-4'
})

const Dialog = ({ className, ...props }: DialogProps) => {
  return <DialogPrimitive {...props} className={dialogStyles({ className })} />
}

export { Dialog }
