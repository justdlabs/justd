'use client'

import * as React from 'react'

import { IconX } from '@irsyadadl/paranoid'
import {
  Dialog as DialogPrimitive,
  type DialogProps,
  Heading,
  type HeadingProps,
  OverlayTriggerStateContext
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import type { ButtonProps } from './button'
import { Button } from './button'
import { useMediaQuery } from './primitive'

const dialogStyles = tv({
  slots: {
    root: [
      'group dlc peer relative flex max-h-[inherit] flex-col overflow-hidden outline-none peer',
      '[&:not(:has([data-slot=dialog-body]))]:px-6 [&:has([data-slot=dialog-body])_[data-slot=dialog-header]]:px-6 [&:has([data-slot=dialog-body])_[data-slot=dialog-footer]]:px-6'
    ],
    header: 'relative flex flex-col pb-3 pt-6',
    title: 'text-xl font-semibold leading-none tracking-tight lg:text-lg',
    description: 'text-sm text-muted-fg',
    body: [
      'flex flex-1 flex-col gap-2 overflow-auto px-6',
      'max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding)-var(--dialog-header-height,0px)-var(--dialog-footer-height,0px))]'
    ],
    footer:
      'mt-auto flex flex-col-reverse justify-between gap-3 group-data-[slot=body]:px-6 pb-6 pt-4 sm:flex-row',
    closeIndicator: 'close absolute right-2 top-2 size-6 z-50'
  }
})

const { root, header, title, description, body, footer, closeIndicator } = dialogStyles()

const Dialog = ({ role, className, ...props }: DialogProps) => {
  return <DialogPrimitive {...props} role={role ?? 'dialog'} className={root({ className })} />
}

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const headerRef = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    const header = headerRef.current
    if (!header) {
      return
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        header.parentElement?.style.setProperty(
          '--dialog-header-height',
          `${entry.target.clientHeight}px`
        )
      }
    })

    observer.observe(header)
    return () => {
      observer.unobserve(header)
    }
  }, [])

  return (
    <div data-slot="dialog-header" ref={headerRef} className={header({ className })}>
      {typeof props.children === 'string' ? <DialogTitle {...props} /> : props.children}
    </div>
  )
}

const DialogTitle = ({ className, ...props }: HeadingProps) => (
  <Heading slot="title" className={title({ className })} {...props} />
)

const DialogDescription = ({ className, ...props }: HeadingProps) => (
  <p className={description({ className })} {...props} />
)

const DialogBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div data-slot="dialog-body" className={body({ className })} {...props} />
)

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const footerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const footer = footerRef.current

    if (!footer) {
      return
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        footer.parentElement?.style.setProperty(
          '--dialog-footer-height',
          `${entry.target.clientHeight}px`
        )
      }
    })

    observer.observe(footer)
    return () => {
      observer.unobserve(footer)
    }
  }, [])
  return (
    <div ref={footerRef} data-slot="dialog-footer" className={footer({ className })} {...props} />
  )
}

const DialogClose = ({ className, ...props }: ButtonProps) => {
  const state = React.useContext(OverlayTriggerStateContext)!
  return (
    <Button className={className} appearance="outline" onPress={() => state.close()} {...props} />
  )
}

interface CloseButtonIndicatorProps {
  className?: string
  close: () => void
  isDismissable?: boolean | undefined
}

const DialogCloseIndicator = ({ className, ...props }: CloseButtonIndicatorProps) => {
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
      className={closeIndicator({ className })}
    >
      <IconX className="size-4" />
    </Button>
  ) : null
}

export {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
  DialogCloseIndicator
}
