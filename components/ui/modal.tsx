'use client'

import * as React from 'react'

import { IconX } from '@irsyadadl/paranoid'
import type { DialogTriggerProps } from 'react-aria-components'
import {
  Button as ButtonPrimitive,
  type DialogProps,
  DialogTrigger as DialogTriggerPrimitive,
  Heading,
  type HeadingProps,
  Modal as ModalPrimitive,
  ModalOverlay as ModalOverlayPrimitive,
  type ModalOverlayProps as ModalOverlayPrimitiveProps,
  OverlayTriggerStateContext
} from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

import { Button, type ButtonProps } from './button'
import { Dialog } from './dialog'
import { cn, isIos, useMediaQuery } from './primitive'

const ModalContext = React.createContext<{ isDismissable?: boolean }>({
  isDismissable: true
})

const ModalOverlayContext = React.createContext<{ isDismissable?: boolean }>({
  isDismissable: true
})

const modalContentStyles = tv({
  base: [
    'fixed bottom-0 left-[50%] top-auto z-50 grid w-full max-w-full translate-x-[-50%] gap-4 rounded-t-xl border border-white dark:border-zinc-800 sm:border-b-white dark:sm:border-b-zinc-800 border-b-transparent bg-popover p-2 shadow-lg outline-none sm:bottom-auto sm:top-[40%] sm:translate-y-[-50%] sm:rounded-xl',
    'sm:entering:slide-in-from-bottom-auto entering:animate-in entering:fade-in-0 entering:slide-in-from-bottom-1/2 entering:slide-in-from-left-1/2 [transition:opacity_.35s_cubic-bezier(.4,0,.2,1)] [transform:.35s_cubic-bezier(.4,0,.2,1)] entering:[transition-timing-function:ease-out] sm:entering:slide-in-from-top-[58%]',
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

interface ModalProps extends DialogTriggerProps {
  isDismissable?: boolean
}

const Modal = ({ isDismissable = true, ...props }: ModalProps) => {
  return (
    <ModalContext.Provider value={{ isDismissable }}>
      <DialogTriggerPrimitive {...props}>{props.children}</DialogTriggerPrimitive>
    </ModalContext.Provider>
  )
}

const ModalTrigger = ButtonPrimitive

const modalOverlayStyles = tv({
  base: [
    'fixed top-0 data-[blur=true]:backdrop-blur-sm left-0 w-full h-[--visual-viewport-height] isolate z-50 flex items-center justify-center p-4'
  ],
  variants: {
    isEntering: {
      true: 'animate-in fade-in duration-200 ease-out'
    },
    isExiting: {
      true: 'animate-out fade-out duration-200 ease-in'
    }
  }
})

interface ModalOverlayProps extends ModalOverlayPrimitiveProps {
  isBlurred?: boolean
}

const ModalOverlay = ({ isBlurred, isDismissable, className, ...props }: ModalOverlayProps) => {
  const { isDismissable: defaultIsDismissable } = React.useContext(ModalContext)
  const effectiveIsDismissable = isDismissable !== undefined ? isDismissable : defaultIsDismissable
  const isIosDevice = isIos()
  const effectiveIsBlurred = isIosDevice || isBlurred
  return (
    <ModalOverlayContext.Provider value={{ isDismissable: effectiveIsDismissable }}>
      <ModalOverlayPrimitive
        data-blur={effectiveIsBlurred ? 'true' : 'false'}
        isDismissable={effectiveIsDismissable}
        className={modalOverlayStyles({
          className: cn(isIosDevice ? 'bg-black/15' : 'bg-black/40', className)
        })}
        {...props}
      />
    </ModalOverlayContext.Provider>
  )
}

interface ModalContentProps
  extends Omit<React.ComponentProps<typeof Modal>, 'children'>,
    VariantProps<typeof modalContentStyles> {
  children?: DialogProps['children']
  role?: DialogProps['role']
  closeButton?: boolean
  className?: string
}

const ModalContent = ({
  className,
  children,
  size,
  role,
  closeButton = true,
  ...props
}: ModalContentProps) => {
  const { isDismissable: overlayIsDismissable } = React.useContext(ModalOverlayContext)
  const { isDismissable: modalIsDismissable } = React.useContext(ModalContext)

  const isDismissable =
    overlayIsDismissable !== undefined ? overlayIsDismissable : modalIsDismissable

  return (
    <ModalPrimitive className={modalContentStyles({ size, className })} {...props}>
      <Dialog role={role}>
        {({ close }) => (
          <>
            {typeof children === 'function' ? children({ close }) : children}
            {closeButton && <CloseButtonIndicator close={close} isDismissable={isDismissable} />}
          </>
        )}
      </Dialog>
    </ModalPrimitive>
  )
}

interface CloseButtonIndicatorProps {
  className?: string
  close: () => void
  isDismissable?: boolean | undefined
}

const CloseButtonIndicator = ({ className, ...props }: CloseButtonIndicatorProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (isMobile && buttonRef.current) {
      buttonRef.current.focus()
    }
  }, [isMobile])
  return props.isDismissable ? (
    <Button
      ref={buttonRef}
      {...(isMobile ? { autoFocus: true } : {})}
      appearance="plain"
      size="square-petite"
      aria-label="Close"
      onPress={props.close}
      className={cn('close absolute right-1 size-6 top-1 z-50', className)}
    >
      <IconX className="size-4" />
    </Button>
  ) : null
}

const ModalHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('mb-6 flex flex-col gap-y-0.5 pr-1 text-center sm:pr-0 sm:text-left', className)}
    {...props}
  />
)

interface ModalCloseProps extends ButtonProps {}

const ModalClose = ({ className, ...props }: ModalCloseProps) => {
  const state = React.useContext(OverlayTriggerStateContext)!
  return (
    <Button className={className} appearance="outline" onPress={() => state.close()} {...props} />
  )
}

const ModalBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('pb-6', className)} {...props} />
)

const ModalFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-between', className)}
    {...props}
  />
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
  modalContentStyles,
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
  type ModalOverlayProps,
  type ModalContentProps,
  ModalContext,
  ModalOverlayContext
}
