'use client'

import type { DialogProps, PopoverProps } from 'react-aria-components'
import { Modal } from 'react-aria-components'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { ModalClose } from './modal'
import { PopoverPicker } from './popover'
import { cn, useMediaQuery } from './primitive'

const drawerStyles = tv({
  base: [
    'fixed bottom-0 top-auto z-50 w-full max-w-xl place-content-center gap-4 rounded-t-xl border border-b-transparent bg-background shadow-lg outline-none',
    'entering:animate-in entering:fade-in-0 entering:slide-in-from-bottom-1/2 entering:[transition-timing-function:ease-out',
    'exiting:animate-out exiting:fade-out-0 exiting:slide-out-to-bottom-1/2 exiting:[transition-timing-function:ease]'
  ]
})

interface OverlayProps
  extends Omit<DialogProps, 'children' | 'className' | 'style'>,
    Omit<PopoverProps, 'children' | 'className' | 'style'>,
    Omit<VariantProps<typeof drawerStyles>, 'className'> {
  className?: string | DialogProps['className'] | PopoverProps['className']
  children: React.ReactNode
}

const DynamicOverlay = ({ className, children, ...props }: OverlayProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)')

  return isMobile ? (
    <Modal {...props} isDismissable className={cn(drawerStyles(), className)}>
      {children}

      <div className="pb-4 px-4 max-w-[inherit]">
        <ModalClose shape="circle" className="w-full">
          Close
        </ModalClose>
      </div>
    </Modal>
  ) : (
    <PopoverPicker {...props} className={cn('', className)}>
      {children}
    </PopoverPicker>
  )
}

export { DynamicOverlay, drawerStyles }
