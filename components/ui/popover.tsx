'use client'

import React from 'react'
import {
  Button,
  composeRenderProps,
  DialogTrigger,
  OverlayArrow,
  PopoverContext,
  Popover as PopoverPrimitive,
  type PopoverProps as PopoverPrimitiveProps,
  useSlottedContext
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { ModalBody, ModalClose, ModalDescription, ModalFooter, ModalHeader, ModalOverlay, ModalTitle } from './modal'

export interface PopoverProps extends Omit<PopoverPrimitiveProps, 'children'> {
  showArrow?: boolean
  children: React.ReactNode
}

const styles = tv({
  base: 'max-w-xs rounded-xl border bg-popover bg-clip-padding p-4 text-popover-fg shadow-lg dark:backdrop-blur-2xl dark:backdrop-saturate-200 sm:max-w-3xl forced-colors:bg-[Canvas]',
  variants: {
    isEntering: {
      true: 'duration-200 ease-out animate-in fade-in placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1'
    },
    isExiting: {
      true: 'duration-150 ease-in animate-out fade-out placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 placement-top:slide-out-to-bottom-1 placement-bottom:slide-out-to-top-1'
    }
  }
})

const Popover = DialogTrigger
const PopoverTrigger = Button
const PopoverClose = ModalClose
const PopoverOverlay = ModalOverlay
const PopoverFooter = ModalFooter
const PopoverHeader = ModalHeader
const PopoverTitle = ModalTitle
const PopoverDescription = ModalDescription
const PopoverBody = ModalBody

const PopoverContent = ({ children, showArrow = true, className, ...props }: PopoverProps) => {
  const popoverContext = useSlottedContext(PopoverContext)!
  const isSubmenu = popoverContext?.trigger === 'SubmenuTrigger'
  let offset = showArrow ? 12 : 8
  offset = isSubmenu ? offset - 6 : offset
  return (
    <PopoverPrimitive
      offset={offset}
      {...props}
      className={composeRenderProps(className, (className, renderProps) => styles({ ...renderProps, className }))}
    >
      {showArrow && (
        <OverlayArrow className="group">
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            className="block fill-popover stroke-border group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]"
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      {children}
    </PopoverPrimitive>
  )
}

const PopoverPicker = ({ showArrow = false, children, ...props }: PopoverProps) => {
  return (
    <PopoverContent showArrow={showArrow} className="max-h-72 overflow-y-auto min-w-[--trigger-width] p-0" {...props}>
      {children}
    </PopoverContent>
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
  PopoverOverlay,
  PopoverPicker,
  PopoverTitle,
  PopoverTrigger
}
