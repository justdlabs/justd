'use client'

import * as React from 'react'

import {
  Button,
  composeRenderProps,
  Dialog,
  type DialogProps,
  DialogTrigger,
  Modal,
  OverlayArrow,
  Popover as PopoverPrimitive,
  PopoverContext,
  type PopoverProps as PopoverPrimitiveProps,
  useSlottedContext
} from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

import type { DialogTitleProps } from './dialog'
import {
  DialogBody,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from './dialog'
import { cn, useMediaQuery } from './primitive'

const Popover = DialogTrigger
const PopoverTrigger = Button
const PopoverClose = DialogClose
const PopoverDescription = DialogDescription

const PopoverTitle = ({ className, ...props }: DialogTitleProps) => (
  <DialogTitle className={cn('leading-none', className)} {...props} />
)

const PopoverHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <DialogHeader className={cn('p-0', className)} {...props} />
)

const PopoverFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <DialogFooter className={cn('pt-4 pb-0', className)} {...props} />
)

const PopoverBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <DialogBody className={cn('p-0', className)} {...props} />
)

const popoverContentStyles = tv({
  base: [
    'max-w-xs min-w-80 p-4 rounded-lg border bg-overlay bg-clip-padding text-overlay-fg shadow-lg dark:backdrop-blur-2xl dark:backdrop-saturate-200 lg:text-sm sm:max-w-3xl forced-colors:bg-[Canvas]'
  ],
  variants: {
    isEntering: {
      true: [
        'duration-200 ease-out animate-in fade-in lg:placement-left:slide-in-from-right-1 lg:placement-right:slide-in-from-left-1 lg:placement-top:slide-in-from-bottom-1 lg:placement-bottom:slide-in-from-top-1'
      ]
    },
    isExiting: {
      true: 'duration-150 ease-in animate-out fade-out placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 placement-top:slide-out-to-bottom-1 placement-bottom:slide-out-to-top-1'
    }
  }
})

const drawerStyles = tv({
  base: [
    'fixed max-h-full bottom-0 p-4 top-auto z-50 w-full bg-overlay max-w-2xl rounded-t-xl border border-b-transparent outline-none',
    'entering:animate-in entering:fade-in-0 entering:slide-in-from-bottom-1/2 entering:[transition-timing-function:ease-out',
    'exiting:animate-out exiting:fade-out-0 exiting:slide-out-to-bottom-1/2 exiting:[transition-timing-function:ease]'
  ]
})

interface PopoverProps
  extends Omit<DialogProps, 'children' | 'className' | 'style'>,
    Omit<PopoverPrimitiveProps, 'children' | 'className'>,
    Omit<VariantProps<typeof drawerStyles>, 'className'> {
  className?: string | DialogProps['className'] | PopoverPrimitiveProps['className']
  children: React.ReactNode
  showArrow?: boolean
  style?: React.CSSProperties
}

const PopoverContent = ({ children, showArrow = true, className, ...props }: PopoverProps) => {
  const popoverContext = useSlottedContext(PopoverContext)!
  const isSubmenu = popoverContext?.trigger === 'SubmenuTrigger'
  let offset = showArrow ? 12 : 8
  offset = isSubmenu ? offset - 6 : offset
  const isMobile = useMediaQuery('(max-width: 600px)')
  return isMobile ? (
    <Modal {...props} isDismissable className={cn(drawerStyles(), className)}>
      <Dialog className="focus:outline-none">{children}</Dialog>
    </Modal>
  ) : (
    <PopoverPrimitive
      offset={offset}
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        popoverContentStyles({
          ...renderProps,
          className
        })
      )}
    >
      {showArrow && (
        <OverlayArrow className="group">
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            className="block fill-overlay stroke-border group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]"
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      {children}
    </PopoverPrimitive>
  )
}

const PopoverPicker = ({ children, className, ...props }: PopoverProps) => {
  return (
    <PopoverPrimitive
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        popoverContentStyles({
          ...renderProps,
          className: cn('max-h-72 overflow-y-auto min-w-[--trigger-width] p-0', className)
        })
      )}
    >
      {children}
    </PopoverPrimitive>
  )
}

const PopoverContentPrimitive = PopoverPrimitive

export {
  Popover,
  PopoverBody,
  PopoverClose,
  PopoverContent,
  PopoverContentPrimitive,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverPicker,
  PopoverTitle,
  PopoverTrigger
}
