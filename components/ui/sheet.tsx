'use client'

import * as React from 'react'
import {
  Button,
  type DialogProps,
  DialogTrigger as DialogTriggerPrimitive,
  Modal,
  ModalOverlay,
  type ModalOverlayProps
} from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'
import { Dialog } from './dialog'
import { CloseButtonIndicator, ModalClose, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from './modal'
import { cn } from './primitive'

const Sheet = DialogTriggerPrimitive
const SheetTrigger = Button
const SheetClose = ModalClose
const SheetFooter = ModalFooter
const SheetHeader = ModalHeader
const SheetTitle = ModalTitle
const SheetDescription = ModalDescription

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
      bottom: 'inset-x-0 bottom-0 rounded-t-2xl border-t entering:slide-in-from-bottom exiting:slide-out-to-bottom',
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

const SheetOverlay = ({ className, isDismissable = true, ...props }: ModalOverlayProps) => (
  <ModalOverlay
    isDismissable={isDismissable}
    className={(values) =>
      cn(
        'fixed inset-0 z-50 bg-black/50 entering:animate-in entering:fade-in-0 exiting:duration-300 exiting:animate-out exiting:fade-out-0',
        typeof className === 'function' ? className(values) : className
      )
    }
    {...props}
  />
)

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
  role,
  closeButton = true,
  isStack = true,
  ...props
}: SheetContentProps) => {
  return (
    <Modal className={sheetStyles({ side, isStack, className })} {...props}>
      <Dialog aria-label="Sheet" role={role} className="h-full outline-none">
        {(values) => (
          <>
            {typeof children === 'function' ? children(values) : children}
            {closeButton && <CloseButtonIndicator className="top-2.5 right-2.5" close={values.close} />}
          </>
        )}
      </Dialog>
    </Modal>
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
