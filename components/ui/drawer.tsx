"use client"

import * as React from "react"

import { tv } from "tailwind-variants"
import { type DialogProps, Drawer as DrawerPrimitive, Root } from "vaul"

import { buttonStyles } from "./button"

const drawer = tv({
  slots: {
    overlay: "fixed inset-0 z-50 bg-dark/15 dark:bg-dark/40",
    header:
      "grid gap-1.5 p-4 text-center sm:text-left peer-data-[vaul-drawer-direction=right]:text-left",
    footer: "mt-auto flex flex-col-reverse justify-between gap-3 p-4 sm:flex-row",
    title: "text-lg font-semibold leading-none tracking-tight",
    description: "text-sm text-muted-fg",
    notch: "mx-auto mt-2 h-1.5 w-20 rounded-full bg-muted",
    body: "px-4"
  }
})

const { overlay, header, body, footer, title, description, notch } = drawer()

interface DrawerContextProps {
  side?: "bottom" | "top" | "left" | "right"
  hideNotch?: boolean
  isCentered?: boolean
}

const DrawerContext = React.createContext<DrawerContextProps>({})

const useDrawer = () => {
  const context = React.useContext(DrawerContext)
  if (context === undefined) {
    throw new Error("useDrawer must be used within a Drawer")
  }
  return context
}

type DrawerProps = Omit<DialogProps, "open" | "fadeFromIndex" | "direction"> & {
  isOpen?: boolean
} & DrawerContextProps &
  (
    | { side?: "bottom" | "top"; isCentered?: boolean }
    | { side?: "left" | "right"; isCentered?: never }
  ) & {}

const Drawer = ({
  side = "bottom",
  isOpen,
  isCentered = true,
  hideNotch = false,
  shouldScaleBackground = true,
  ...props
}: DrawerProps) => {
  return (
    <DrawerContext.Provider value={{ side, hideNotch, isCentered }}>
      <Root
        {...props}
        direction={side}
        open={isOpen}
        shouldScaleBackground={shouldScaleBackground}
      />
    </DrawerContext.Provider>
  )
}

type OverlayProps = React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>

const Overlay = ({ className, ...props }: OverlayProps) => (
  <DrawerPrimitive.Overlay className={overlay({ className })} {...props} />
)

const content = tv({
  base: "fixed dark:ring-border z-50 flex h-auto flex-col ring-1 ring-dark/5 bg-overlay text-overlay-fg",
  variants: {
    hideNotch: {
      true: "[&>[data-slot=drawer-notch]]:hidden"
    },
    isCentered: {
      true: [
        "[&>[data-slot=drawer-header]]:w-full [&>[data-slot=drawer-footer]]:w-full  [&>[data-slot=drawer-body]]:w-full",
        "[&>[data-slot=drawer-header]]:mx-auto [&>[data-slot=drawer-footer]]:mx-auto  [&>[data-slot=drawer-body]]:mx-auto",
        "[&>[data-slot=drawer-header]]:max-w-md [&>[data-slot=drawer-footer]]:max-w-md  [&>[data-slot=drawer-body]]:max-w-md"
      ]
    },
    side: {
      bottom: "fixed inset-x-0 bottom-0 mt-24 rounded-t-3xl",
      top: "inset-x-0 top-0 mb-24 rounded-t-xl",
      left: "inset-y-0 left-0 h-full w-screen max-w-80",
      right: "inset-y-0 right-0 h-full w-screen max-w-80"
    }
  },
  defaultVariants: {
    side: "bottom"
  }
})

const Content = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>) => {
  const { side, hideNotch, isCentered } = useDrawer()
  return (
    <DrawerPrimitive.Portal>
      <Overlay />
      <DrawerPrimitive.Content
        className={content({ hideNotch, isCentered, side, className })}
        {...props}
      >
        {side === "bottom" && <div data-slot="drawer-notch" className={notch()} />}
        {children}
      </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
  )
}

type DrawerHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string
  description?: string
}

const Header = ({ className, ...props }: DrawerHeaderProps) => (
  <div data-slot="drawer-header" className={header({ className })}>
    {props.title && <Title>{props.title}</Title>}
    {props.description && <Description>{props.description}</Description>}
    {!props.title && typeof props.children === "string" ? <Title {...props} /> : props.children}
  </div>
)

const Body = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div data-slot="drawer-body" className={body({ className })} {...props} />
}

const Footer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div data-slot="drawer-footer" className={footer({ className })} {...props} />
)

const Title = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>) => (
  <DrawerPrimitive.Title className={title({ className })} {...props} />
)

const Description = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>) => (
  <DrawerPrimitive.Description className={description({ className })} {...props} />
)

interface DrawerCloseProps extends React.ComponentProps<typeof DrawerPrimitive.Close> {
  appearance?: "outline" | "solid"
  shape?: "square" | "circle"
  size?: "medium" | "large" | "square-petite" | "extra-small" | "small"
}

const Close = ({
  className,
  appearance = "outline",
  shape = "square",
  size = "medium",
  ...props
}: DrawerCloseProps) => (
  <DrawerPrimitive.Close
    {...props}
    className={buttonStyles({ appearance, shape, size, className })}
  />
)

Drawer.Trigger = DrawerPrimitive.Trigger
Drawer.Portal = DrawerPrimitive.Portal
Drawer.Close = Close
Drawer.Overlay = Overlay
Drawer.Content = Content
Drawer.Body = Body
Drawer.Header = Header
Drawer.Footer = Footer
Drawer.Title = Title
Drawer.Description = Description

export { Drawer }
