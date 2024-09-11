"use client"

import * as React from "react"

import type { ModalOverlayProps } from "react-aria-components"
import {
  type DialogProps,
  DialogTrigger as DialogTriggerPrimitive,
  Modal,
  ModalOverlay,
  OverlayArrow,
  Popover as PopoverPrimitive,
  PopoverContext,
  type PopoverProps as PopoverPrimitiveProps,
  useSlottedContext
} from "react-aria-components"
import { twJoin } from "tailwind-merge"
import { tv } from "tailwind-variants"

import { Dialog } from "./dialog"
import { cn, cr, useMediaQuery } from "./primitive"

const Popover = ({ children, ...props }: { children: React.ReactNode }) => {
  return <DialogTriggerPrimitive {...props}>{children}</DialogTriggerPrimitive>
}

const Title = ({ level = 2, className, ...props }: React.ComponentProps<typeof Dialog.Title>) => (
  <Dialog.Title
    className={cn("sm:leading-none", level === 2 && "sm:text-lg", className)}
    {...props}
  />
)

const Header = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <Dialog.Header className={cn("p-0 sm:pt-0", className)} {...props} />
)

const Footer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <Dialog.Footer className={cn("pt-4 pb-0 sm:pb-0", className)} {...props} />
)

const Body = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <Dialog.Body className={cn("p-0", className)} {...props} />
)

const popoverContentStyles = tv({
  base: [
    "max-w-xs min-w-80 p-4 rounded-xl border bg-overlay bg-clip-padding text-overlay-fg shadow-sm dark:backdrop-blur-2xl dark:backdrop-saturate-200 lg:text-sm sm:max-w-3xl forced-colors:bg-[Canvas]"
  ],
  variants: {
    isMenu: {
      true: {
        true: "p-0"
      }
    },
    isEntering: {
      true: [
        "duration-50 ease-out animate-in fade-in placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1"
      ]
    },
    isExiting: {
      true: "duration-50 ease-in animate-out fade-out placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 placement-top:slide-out-to-bottom-1 placement-bottom:slide-out-to-top-1"
    }
  }
})

const drawerStyles = tv({
  base: [
    "fixed max-h-full bottom-0 top-auto z-50 w-full bg-overlay max-w-2xl border border-b-transparent outline-none"
  ],
  variants: {
    isMenu: {
      true: "p-0 [&_[role=dialog]]:px-0 rounded-t-xl",
      false: "py-4 rounded-t-3xl"
    },
    isEntering: {
      true: [
        "[will-change:transform] [transition:transform_0.5s_cubic-bezier(0.32,_0.72,_0,_1)]",
        "animate-in duration-200 fade-in-0 slide-in-from-bottom-56",
        "[transition:translate3d(0,_100%,_0)]",
        "sm:slide-in-from-bottom-auto sm:slide-in-from-top-[20%]"
      ]
    },
    isExiting: {
      true: "duration-200 ease-in animate-out slide-out-to-bottom-56"
    }
  }
})

interface PopoverProps
  extends Omit<React.ComponentProps<typeof Modal>, "children">,
    Omit<PopoverPrimitiveProps, "children" | "className">,
    ModalOverlayProps {
  children: React.ReactNode
  className?: string | ((values: any & { defaultClassName?: string }) => string)
  showArrow?: boolean
  style?: React.CSSProperties
  respectScreen?: boolean
  "aria-label"?: DialogProps["aria-label"]
  "aria-labelledby"?: DialogProps["aria-labelledby"]
}

const Content = ({
  respectScreen = true,
  children,
  showArrow = true,
  className,
  ...props
}: PopoverProps) => {
  const isMobile = useMediaQuery("(max-width: 600px)")
  const popoverContext = useSlottedContext(PopoverContext)!
  const isMenuTrigger = popoverContext?.trigger === "MenuTrigger"
  const isSubmenuTrigger = popoverContext?.trigger === "SubmenuTrigger"
  const isMenu = isMenuTrigger || isSubmenuTrigger
  const offset = showArrow ? 12 : 8
  const effectiveOffset = isSubmenuTrigger ? offset - 5 : offset
  return isMobile && respectScreen ? (
    <ModalOverlay
      className={twJoin(
        "fixed left-0 top-0 bg-overlay/10 isolate z-50 h-[--visual-viewport-height] w-full [--visual-viewport-vertical-padding:16px]",
        isSubmenuTrigger ? "bg-overlay/10" : ""
      )}
      {...props}
      isDismissable
    >
      <Modal
        className={cr(className, (className, renderProps) =>
          drawerStyles({ ...renderProps, isMenu, className })
        )}
      >
        <Dialog
          aria-label={isMenu ? "Menu" : props["aria-label"]}
          className="focus:outline-none touch-none"
        >
          {children}
        </Dialog>
      </Modal>
    </ModalOverlay>
  ) : (
    <PopoverPrimitive
      offset={effectiveOffset}
      {...props}
      className={cr(className, (className, renderProps) =>
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

const Picker = ({ children, className, ...props }: PopoverProps) => {
  return (
    <PopoverPrimitive
      {...props}
      className={cr(className, (className, renderProps) =>
        popoverContentStyles({
          ...renderProps,
          className: cn("max-h-72 overflow-y-auto min-w-[--trigger-width] p-0", className)
        })
      )}
    >
      {children}
    </PopoverPrimitive>
  )
}

Popover.Primitive = PopoverPrimitive
Popover.Trigger = Dialog.Trigger
Popover.Close = Dialog.Close
Popover.Content = Content
Popover.Description = Dialog.Description
Popover.Body = Body
Popover.Footer = Footer
Popover.Header = Header
Popover.Picker = Picker
Popover.Title = Title

export { Popover, drawerStyles, popoverContentStyles }
