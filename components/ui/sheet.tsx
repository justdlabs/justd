'use client'

import * as React from 'react'

import { Button, type DialogProps, Modal as ModalPrimitive } from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

import { Dialog } from './dialog'
import {
  CloseButtonIndicator,
  Modal,
  ModalClose,
  ModalContext,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalOverlayContext,
  ModalTitle
} from './modal'

const Sheet = Modal
const SheetTrigger = Button
const SheetOverlay = ModalOverlay
const SheetFooter = ModalFooter
const SheetHeader = ModalHeader
const SheetTitle = ModalTitle
const SheetDescription = ModalDescription
const SheetClose = ModalClose

const generateCompoundVariants = (sides: Array<'top' | 'bottom' | 'left' | 'right'>) => {
  return sides.map((side) => ({
    side,
    isStack: true,
    className:
      side === 'top'
        ? 'top-2 inset-x-2 rounded-lg border'
        : side === 'bottom'
          ? 'bottom-2 inset-x-2 rounded-lg border'
          : side === 'left'
            ? 'left-2 inset-y-2 rounded-lg border'
            : 'right-2 inset-y-2 rounded-lg border'
  }))
}

const sheetStyles = tv({
  base: 'fixed z-50 grid gap-4 bg-popover text-popover-fg shadow-lg transition ease-in-out entering:duration-300 entering:animate-in exiting:duration-200 exiting:animate-out',
  variants: {
    side: {
      top: 'inset-x-0 top-0 rounded-b-2xl border-b entering:slide-in-from-top exiting:slide-out-to-top',
      bottom:
        'inset-x-0 bottom-0 rounded-t-2xl border-t entering:slide-in-from-bottom exiting:slide-out-to-bottom',
      left: 'inset-y-0 left-0 h-auto w-72 sm:w-3/4 overflow-y-auto border-r entering:slide-in-from-left exiting:slide-out-to-left sm:max-w-xs',
      right:
        'inset-y-0 right-0 h-auto w-72 sm:w-3/4 overflow-y-auto border-l entering:slide-in-from-right exiting:slide-out-to-right sm:max-w-xs'
    },
    isStack: {
      true: '',
      false: ''
    }
  },
  compoundVariants: generateCompoundVariants(['top', 'bottom', 'left', 'right'])
})

export interface SheetContentProps
  extends Omit<React.ComponentProps<typeof Modal>, 'children'>,
    VariantProps<typeof sheetStyles> {
  children?: DialogProps['children']
  role?: DialogProps['role']
  closeButton?: boolean
  className?: string
  isStack?: boolean
}

const SheetContent = ({
  className,
  children,
  side = 'right',
  role = 'dialog',
  closeButton = true,
  isStack = true,
  ...props
}: SheetContentProps) => {
  const { isDismissable: overlayIsDismissable } = React.useContext(ModalOverlayContext)
  const { isDismissable: modalIsDismissable } = React.useContext(ModalContext)

  const isDismissable =
    overlayIsDismissable !== undefined ? overlayIsDismissable : modalIsDismissable
  return (
    <ModalPrimitive className={sheetStyles({ side, isStack, className })} {...props}>
      <Dialog aria-label="Sheet" role={role} className="h-full">
        {(values) => (
          <>
            {typeof children === 'function' ? children(values) : children}
            {closeButton && (
              <CloseButtonIndicator
                className="top-2.5 right-2.5"
                close={values.close}
                isDismissable={isDismissable}
              />
            )}
          </>
        )}
      </Dialog>
    </ModalPrimitive>
  )
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger
}
