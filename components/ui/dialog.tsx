'use client'

import * as React from 'react'

import { IconX } from 'justd-icons'
import {
  Dialog as DialogPrimitive,
  type DialogProps as DialogPrimitiveProps,
  OverlayTriggerStateContext
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import type { ButtonProps } from './button'
import { Button } from './button'
import type { HeadingProps } from './heading'
import { Heading } from './heading'
import { useMediaQuery } from './primitive'

const dialogStyles = tv({
  slots: {
    root: [
      'dlc relative flex max-h-[inherit] [&::-webkit-scrollbar]:size-0.5 [scrollbar-width:thin] flex-col overflow-hidden outline-none',
      'sm:[&:not(:has([data-slot=dialog-body]))]:px-6 sm:[&:has([data-slot=dialog-body])_[data-slot=dialog-header]]:px-6 sm:[&:has([data-slot=dialog-body])_[data-slot=dialog-footer]]:px-6',
      '[&:not(:has([data-slot=dialog-body]))]:px-4 [&:has([data-slot=dialog-body])_[data-slot=dialog-header]]:px-4 [&:has([data-slot=dialog-body])_[data-slot=dialog-footer]]:px-4'
    ],
    header: 'relative flex flex-col pb-3 pt-4 sm:pt-6',
    title: 'flex flex-1 items-center',
    description: 'text-sm block text-muted-fg mt-0.5 sm:mt-1',
    body: [
      'flex flex-1 flex-col gap-2 overflow-auto px-4 sm:px-6 py-1',
      'max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding)-var(--dialog-header-height,0px)-var(--dialog-footer-height,0px))]'
    ],
    footer: 'mt-auto flex flex-col-reverse justify-between gap-3 pb-4 sm:pb-6 pt-4 sm:flex-row',
    closeIndicator: 'close absolute right-2 top-2 size-6 z-50'
  }
})

const { root, header, title, description, body, footer, closeIndicator } = dialogStyles()

const Dialog = ({ role, className, ...props }: DialogPrimitiveProps) => {
  return <DialogPrimitive {...props} role={role ?? 'dialog'} className={root({ className })} />
}

interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
}

const DialogHeader = ({ className, ...props }: DialogHeaderProps) => {
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
    return () => observer.unobserve(header)
  }, [])

  return (
    <div data-slot="dialog-header" ref={headerRef} className={header({ className })}>
      {props.title && <DialogTitle>{props.title}</DialogTitle>}
      {props.description && <DialogDescription>{props.description}</DialogDescription>}
      {!props.title && typeof props.children === 'string' ? (
        <DialogTitle {...props} />
      ) : (
        props.children
      )}
    </div>
  )
}

interface DialogTitleProps extends HeadingProps {
  className?: string
}

const DialogTitle = ({ tracking = 'tight', level = 2, className, ...props }: DialogTitleProps) => (
  <Heading
    slot="title"
    tracking={tracking}
    level={level}
    className={title({ className })}
    {...props}
  />
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

Dialog.Header = DialogHeader
Dialog.Title = DialogTitle
Dialog.Description = DialogDescription
Dialog.Body = DialogBody
Dialog.Footer = DialogFooter
Dialog.Close = DialogClose
Dialog.CloseIndicator = DialogCloseIndicator

export { Dialog }
