'use client'

import { IconX } from '@irsyadadl/paranoid'
import * as React from 'react'
import {
  Button as ButtonPrimitive,
  type DialogProps,
  DialogTrigger as DialogTriggerPrimitive,
  Heading,
  type HeadingProps,
  ModalOverlay as ModalOverlayPrimitive,
  type ModalOverlayProps,
  Modal as ModalPrimitive,
  OverlayTriggerStateContext
} from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'
import { Button, type ButtonProps } from './button'
import { Dialog } from './dialog'
import { cn, useMediaQuery } from './primitive'

export const modalVariants = tv({
  base: [
    'fixed bottom-0 left-[50%] top-auto z-50 grid w-full max-w-full translate-x-[-50%] gap-4 rounded-t-xl border border-b-transparent bg-background p-2 shadow-lg outline-none sm:bottom-auto sm:top-[40%] sm:translate-y-[-50%] sm:rounded-xl sm:border-b-border',
    'sm:entering:slide-in-from-bottom-auto entering:animate-in entering:fade-in-0 entering:slide-in-from-bottom-1/2 entering:slide-in-from-left-1/2 entering:[transition-timing-function:ease-out] sm:entering:slide-in-from-top-[58%]',
    'exiting:animate-out exiting:fade-out-0 exiting:slide-out-to-bottom-1/2 exiting:slide-out-to-left-1/2 exiting:[transition-timing-function:ease] sm:exiting:slide-out-to-top-[58%]'
  ],
  variants: {
    size: {
      xs: 'sm:max-w-xs',
      sm: 'sm:max-w-sm',
      md: 'sm:max-w-md',
      lg: 'sm:max-w-lg',
      xl: 'sm:max-w-xl',
      '2xl': 'sm:max-w-2xl',
      '3xl': 'sm:max-w-3xl',
      '4xl': 'sm:max-w-4xl',
      '5xl': 'sm:max-w-5xl'
    }
  },
  defaultVariants: {
    size: 'lg'
  }
})

const Modal = DialogTriggerPrimitive

const ModalTrigger = ButtonPrimitive

const ModalOverlayContext = React.createContext<{
  isDismissable?: boolean
}>({})

const ModalOverlay = ({ className, isDismissable = true, ...props }: ModalOverlayProps) => (
  <ModalOverlayContext.Provider value={{ isDismissable: isDismissable }}>
    <ModalOverlayPrimitive
      isDismissable={isDismissable}
      className={(values) =>
        cn(
          'fixed inset-0 z-50 bg-black/60 entering:animate-in entering:fade-in-0 exiting:animate-in exiting:fade-out-0',
          typeof className === 'function' ? className(values) : className
        )
      }
      {...props}
    />
  </ModalOverlayContext.Provider>
)

export interface ModalContentProps
  extends Omit<React.ComponentProps<typeof Modal>, 'children'>,
    VariantProps<typeof modalVariants> {
  children?: DialogProps['children']
  role?: DialogProps['role']
  closeButton?: boolean
  className?: string
}

interface CloseButtonIndicatorProps {
  desktop?: boolean
  className?: string
  close: () => void
  dismissable?: boolean | undefined
}

const CloseButtonIndicator = ({ className, ...props }: CloseButtonIndicatorProps) => {
  return (
    <Button
      appearance="plain"
      size="square-petite"
      aria-label="Close"
      autoFocus={!props.desktop}
      onPress={props.close}
      className={cn('close absolute right-1 size-6 top-1 z-50', className, props.dismissable === false && 'hidden')}
    >
      <IconX className="size-4" />
    </Button>
  )
}

const ModalContent = ({ className, children, size, role, closeButton = true, ...props }: ModalContentProps) => {
  const { isDismissable } = React.useContext(ModalOverlayContext)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  return (
    <ModalPrimitive className={modalVariants({ size, className })} {...props}>
      <Dialog role={role}>
        {(values) => (
          <>
            {typeof children === 'function' ? children(values) : children}
            {closeButton && (
              <CloseButtonIndicator desktop={isDesktop} close={values.close} dismissable={isDismissable} />
            )}
          </>
        )}
      </Dialog>
    </ModalPrimitive>
  )
}

const ModalHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mb-6 flex flex-col gap-y-0.5 pr-1 text-center sm:pr-0 sm:text-left', className)} {...props} />
)

interface ModalCloseProps extends ButtonProps {}

const ModalClose = ({ className, ...props }: ModalCloseProps) => {
  const state = React.useContext(OverlayTriggerStateContext)!
  return <Button className={className} appearance="outline" onPress={() => state.close()} {...props} />
}

const ModalBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('pb-6', className)} {...props} />
)

const ModalFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-between', className)} {...props} />
)

const ModalTitle = ({ className, ...props }: HeadingProps) => (
  <Heading
    slot="title"
    className={cn('text-xl font-semibold leading-none tracking-tight lg:text-lg', className)}
    {...props}
  />
)

const ModalDescription = ({ className, ...props }: HeadingProps) => (
  <p className={cn('text-sm text-muted-fg', className)} {...props} />
)

export {
  CloseButtonIndicator,
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  ModalTrigger,
  type ModalOverlayProps
}
