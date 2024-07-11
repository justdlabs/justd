'use client'

import { ModalClose } from '@/components/ui/modal'
import { composeRenderProps, DialogProps, Modal, PopoverProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { PopoverPicker } from './popover'
import { useMediaQuery } from './primitive'


const drawerStyles = tv({
  base: 'fixed bottom-0 top-auto z-50 w-full max-w-xl place-content-center gap-4 rounded-t-xl border border-b-transparent bg-background shadow-lg outline-none',
  variants: {
    isEntering: 'animate-in fade-in-0 slide-in-from-bottom-1/2 [transition-timing-function:ease-out]',
    isExiting: 'animate-out fade-out-0 slide-out-to-bottom-1/2 [transition-timing-function:ease]'
  }
})

interface OverlayProps
  extends Omit<DialogProps, 'children' | 'className' | 'style'>,
    Omit<PopoverProps, 'children' | 'className' | 'style'> {
  className?: string | DialogProps['className'] | PopoverProps['className']
  children: React.ReactNode
}

const DynamicOverlay = ({ className, children, ...props }: OverlayProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)')

  return isMobile ? (
    <Modal
      {...props}
      isDismissable
      className={composeRenderProps(className, (className, renderProps) => drawerStyles({ ...renderProps, className }))}
    >
      {children}

      <div className="pb-4 px-4 max-w-[inherit]">
        <ModalClose shape="circle" className="w-full">
          Close
        </ModalClose>
      </div>
    </Modal>
  ) : (
    <PopoverPicker {...props} className={className}>
      {children}
    </PopoverPicker>
  )
}

export { DynamicOverlay }
