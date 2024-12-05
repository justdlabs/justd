"use client"

import * as React from "react"

import { IconChevronDown, IconChevronRight, IconHamburger, IconSidebarFill } from "justd-icons"
import type { DisclosureProps, LinkProps } from "react-aria-components"
import { composeRenderProps, Disclosure, DisclosurePanel, Link } from "react-aria-components"
import { tv } from "tailwind-variants"

import { Button, ButtonPrimitive } from "./button"
import { cn, useMediaQuery } from "./primitive"
import { Sheet } from "./sheet"
import { Tooltip } from "./tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "17rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  isOpenOnMobile: boolean
  setIsOpenOnMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a Sidebar.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    isOpen?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(({ style, defaultOpen = true, isOpen: openProp, onOpenChange: setOpenProp, className, children, ...props }, ref) => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [openMobile, setOpenMobile] = React.useState(false)

  const [internalOpenState, setInternalOpenState] = React.useState(defaultOpen)
  const open = openProp ?? internalOpenState
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value

      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        setInternalOpenState(openState)
      }

      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      isOpenOnMobile: openMobile,
      setIsOpenOnMobile: setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style
          } as React.CSSProperties
        }
        className={cn(
          "[--sidebar-accent:color-mix(in_oklab,var(--color-sidebar)_95%,black_5%)]",
          "dark:[--sidebar-accent:color-mix(in_oklab,var(--color-sidebar)_85%,white_15%)]",
          "group/sidebar-wrapper flex min-h-svh w-full text-sidebar-fg dark:has-data-[intent=inset]:data-[intent=inset]:bg-bg has-data-[intent=inset]:has-data-[intent=inset]:bg-sidebar",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
})
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = ({
  side = "left",
  intent = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  intent?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "dock" | "none"
}) => {
  const { isMobile, state, isOpenOnMobile, setIsOpenOnMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-collapsible="none"
        className={cn("flex h-full peer w-(--sidebar-width) flex-col border-r bg-sidebar text-sidebar-fg ", className)}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet isOpen={isOpenOnMobile} onOpenChange={setIsOpenOnMobile} {...props}>
        <Sheet.Content
          aria-label="Sidebar"
          data-slot="sidebar"
          data-mobile="true"
          classNames={{
            content: "bg-sidebar text-sidebar-fg [&>button]:hidden"
          }}
          isStack={intent === "floating"}
          side={side}
        >
          <Sheet.Body className="px-0">{children}</Sheet.Body>
        </Sheet.Content>
      </Sheet>
    )
  }
  return (
    <div
      className="group peer hidden md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-intent={intent}
      data-side={side}
    >
      <div
        className={cn(
          "duration-200 relative h-svh w-(--sidebar-width) bg-transparent transition-[width] ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          intent === "floating" || intent === "inset"
            ? "group-data-[collapsible=dock]:w-[calc(var(--sidebar-width-icon)+calc(var(--spacing)*4))]"
            : "group-data-[collapsible=dock]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        className={cn(
          "duration-200 fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          intent === "floating" || intent === "inset"
            ? "p-2 group-data-[collapsible=dock]:w-[calc(var(--sidebar-width-icon)+calc(var(--spacing)*4)+2px)]"
            : "group-data-[collapsible=dock]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=left]:border-(--sidebar-border) [--sidebar-border:color-mix(in_oklch,var(--color-border)_95%,black_5%)] group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-slot="sidebar"
          className={cn(
            "flex h-full w-full flex-col bg-sidebar text-sidebar-fg group-data-[intent=inset]:bg-transparent group-data-[intent=floating]:rounded-lg group-data-[intent=floating]:border group-data-[intent=floating]:border-border",
            intent === "inset" || state === "collapsed"
              ? "**:data-[slot=sidebar-header]:border-transparent **:data-[slot=sidebar-footer]:border-transparent"
              : "**:data-[slot=sidebar-header]:border-b **:data-[slot=sidebar-footer]:border-t"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

const itemStyles = tv({
  base: [
    "group/sidebar-item grid cursor-pointer *:data-[slot=icon]:size-4 col-span-full *:data-[slot=icon]:shrink-0 items-center *:data-[slot=icon]:text-muted-fg relative rounded-lg lg:text-sm leading-6",
    "forced-colors:text-[MenuLink] text-sidebar-fg",
    "grid-cols-subgrid *:data-[slot=icon]:mr-2 px-2.5 py-1.5"
  ],
  variants: {
    collapsed: {
      true: "flex"
    },
    isFocused: {
      true: "outline-hidden"
    },
    isFocusVisible: {
      true: "bg-(--sidebar-accent) text-sidebar-fg"
    },
    isHovered: {
      true: [
        "bg-(--sidebar-accent) text-sidebar-fg **:data-[slot=icon]:text-sidebar-fg **:[.text-muted-fg]:text-sidebar-fg/80"
      ]
    },
    isCurrent: {
      true: [
        "bg-primary text-primary-fg",
        "**:data-[slot=icon]:text-primary-fg [&_.text-muted-fg]:text-primary-fg/80",
        "**:data-[slot=sidebar-badge]:bg-sidebar-primary-fg/20 **:data-[slot=sidebar-badge]:ring-sidebar-primary-fg/30"
      ]
    },
    isDisabled: {
      true: "cursor-default"
    }
  }
})

interface SidebarItemProps extends LinkProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  badge?: string | number | undefined
  isCurrent?: boolean
}

const SidebarItem = ({ isCurrent, children, className, icon: Icon, ...props }: SidebarItemProps) => {
  const { state, isMobile } = React.useContext(SidebarContext)!
  return state === "collapsed" && !isMobile ? (
    <Tooltip closeDelay={0} delay={0}>
      <Link
        className={cn(
          "col-span-full rounded-lg size-9 grid place-content-center",
          "data-hovered:bg-(--sidebar-accent) data-hovered:text-sidebar-accent-fg text-sidebar-accent-fg",
          "data-current:bg-primary data-current:text-primary-fg",
          "data-focused:outline-hidden"
        )}
        {...props}
      >
        {(values) => (
          <>
            {Icon && <Icon data-slot="icon" />}
            <span className="sr-only">{typeof children === "function" ? children(values) : children}</span>
          </>
        )}
      </Link>
      <Tooltip.Content intent="inverse" showArrow={false} placement="right">
        {children as string}
      </Tooltip.Content>
    </Tooltip>
  ) : (
    <Link
      isDisabled={isCurrent}
      data-slot="sidebar-item"
      aria-current={isCurrent ? "page" : undefined}
      className={composeRenderProps(className, (className, renderProps) =>
        itemStyles({
          ...renderProps,
          collapsed: state === "collapsed",
          isCurrent,
          className
        })
      )}
      {...props}
    >
      {(values) => (
        <>
          {Icon && <Icon data-slot="icon" />}
          <span className="col-start-2 group-data-[collapsible=dock]:hidden">
            {typeof children === "function" ? children(values) : children}
            {props.badge && (
              <div
                data-slot="sidebar-badge"
                className="h-[1.30rem] px-1 rounded-md text-muted-fg text-xs font-medium ring-1 ring-fg/20 grid place-content-center w-auto inset-y-1/2 -translate-y-1/2 absolute right-1.5 bg-fg/[0.02] dark:bg-fg/10"
              >
                {props.badge}
              </div>
            )}
          </span>
        </>
      )}
    </Link>
  )
}

const SidebarContent = ({ className, ...props }: React.ComponentProps<"div">) => {
  const { state } = useSidebar()
  return (
    <div
      data-slot="sidebar-content"
      className={cn([
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=dock]:overflow-hidden",
        state === "collapsed" ? "gap-y-6" : "gap-y-2",
        className
      ])}
      {...props}
    />
  )
}

const navStyles = tv({
  base: "md:w-full justify-between sm:justify-start h-[3.57rem] px-4 border-b flex items-center gap-x-2",
  variants: {
    isSticky: {
      true: "sticky top-0 z-40"
    }
  }
})

interface SidebarNavProps extends React.ComponentProps<"nav"> {
  isSticky?: boolean
}

const SidebarNav = ({ isSticky = false, className, ...props }: SidebarNavProps) => {
  return <nav data-slot="sidebar-nav" {...props} className={navStyles({ isSticky, className })} />
}

const SidebarTrigger = ({ className, onPress, ...props }: React.ComponentProps<typeof Button>) => {
  const { toggleSidebar } = useSidebar()
  return (
    <Button
      aria-label={props["aria-label"] || "Toggle Sidebar"}
      data-slot="sidebar-trigger"
      appearance="plain"
      size="square-petite"
      className={className}
      onPress={(event) => {
        onPress?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <IconSidebarFill className="md:inline hidden" />
      <IconHamburger className="md:hidden inline" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

const header = tv({
  base: "flex flex-col mb-2",
  variants: {
    collapsed: {
      false: "px-5 py-[calc(var(--spacing)*4)]",
      true: "px-5 py-4 md:p-0 md:size-9 mt-1 group-data-[intent=floating]:mt-2 md:rounded-lg md:hover:bg-(--sidebar-accent) md:mx-auto md:justify-center md:items-center"
    }
  }
})

const SidebarHeader = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const { state } = React.useContext(SidebarContext)!
  return (
    <div
      data-slot="sidebar-header"
      {...props}
      className={header({ collapsed: state === "collapsed", className })}
      {...props}
    />
  )
}

const footer = tv({
  base: [
    "flex flex-col mt-auto p-2",
    "**:data-[slot=menu-trigger]:rounded-lg **:data-[slot=menu-trigger]:shrink-0",
    "**:data-[slot=menu-trigger]:outline-hidden **:data-[slot=menu-trigger]:w-full **:data-[slot=menu-trigger]:cursor-default **:data-[slot=menu-trigger]:data-hovered:bg-(--sidebar-accent) **:data-[slot=menu-trigger]:p-2 **:data-[slot=menu-trigger]:items-center lg:**:data-[slot=menu-trigger]:text-sm **:data-[slot=menu-trigger]:flex **:data-[slot=menu-trigger]:gap-x-2",
    "**:data-[slot=menu-trigger]:**:data-[slot=avatar]:size-6 **:data-[slot=menu-trigger]:**:data-[slot=avatar]:*:size-6"
  ],
  variants: {
    collapsed: {
      false:
        "**:data-[slot=menu-trigger]:**:data-[slot=chevron]:transition-transform **:data-[slot=menu-trigger]:data-pressed:**:data-[slot=chevron]:rotate-180 **:data-[slot=menu-trigger]:**:data-[slot=chevron]:ml-auto",
      true: [
        "**:data-[slot=menu-label]:hidden **:data-[slot=chevron]:hidden",
        "**:data-[slot=menu-trigger]:size-8 **:data-[slot=menu-trigger]:grid **:data-[slot=menu-trigger]:place-content-center"
        // "size-12 p-1 **:data-[slot=menu-trigger]:size-9 justify-center items-center",
      ]
    }
  }
})

const SidebarFooter = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const { state } = React.useContext(SidebarContext)!
  return (
    <div
      {...props}
      data-slot="sidebar-footer"
      className={footer({ collapsed: state === "collapsed", className })}
      {...props}
    />
  )
}

interface CollapsibleProps extends DisclosureProps {
  children: React.ReactNode
  title?: string
  collapsible?: boolean
  defaultExpanded?: boolean
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const SidebarSection = ({ title, className, collapsible, icon: Icon, defaultExpanded, ...props }: CollapsibleProps) => {
  const { state, isMobile } = useSidebar()

  const isExpanded = state === "collapsed" || (title ? (collapsible ? (defaultExpanded ?? true) : true) : true)
  return (
    <Disclosure
      data-slot="sidebar-section"
      className={cn(
        "col-span-full px-2 w-full min-w-0",
        state === "collapsed" && [title && "px-0", !isMobile && "px-0"],
        state === "expanded" && [
          "**:data-[slot=sidebar-section]:px-0",
          title && [
            Icon
              ? "mt-0.5 **:data-[slot=sidebar-section-panel]:px-6 [&_[data-slot=sidebar-section-panel]_[data-slot=icon]]:-ml-0.5"
              : "my-2.5"
          ]
        ],
        className
      )}
      defaultExpanded={isExpanded}
      {...props}
    >
      {({ isExpanded }) => (
        <>
          {typeof title === "string" && (
            <span className="group-data-[collapsible=dock]:opacity-0 group-data-[collapsible=dock]:hidden">
              {collapsible ? (
                <ButtonPrimitive
                  slot="trigger"
                  className={({ isHovered }) =>
                    cn(
                      "w-full data-focused:outline-hidden flex leading-6 items-center justify-between *:data-[slot=chevron]:size-6 *:data-[slot=chevron]:duration-200",
                      Icon
                        ? "text-sidebar-fg lg:text-sm py-2 lg:py-1.5 px-3 **:data-[slot=chevron]::text-muted-fg has-[[data-slot=chevron]]:pr-0.5"
                        : "text-sm text-muted-fg py-2 px-3 has-[[data-slot=chevron]]:pr-0",
                      isHovered &&
                        Icon &&
                        "bg-(--sidebar-accent) *:data-[slot=icon]:shrink-0 items-center *:data-[slot=icon]:text-muted-fg relative rounded-lg lg:text-sm leading-6",
                      isExpanded && !Icon && "*:data-[slot=chevron]:rotate-180",
                      isExpanded && Icon && "*:data-[slot=chevron]:rotate-90"
                    )
                  }
                >
                  <span className="flex items-center *:data-[slot=icon]:text-muted-fg *:data-[slot=icon]:mr-2">
                    {Icon && <Icon data-slot="icon" />}
                    {title}
                  </span>
                  {Icon && <IconChevronRight data-slot="chevron" />}
                  {!Icon && <IconChevronDown data-slot="chevron" />}
                </ButtonPrimitive>
              ) : (
                <h4 className="text-sm text-muted-fg px-3 py-2">{title}</h4>
              )}
            </span>
          )}
          <DisclosurePanel>
            <div
              data-slot="sidebar-section-panel"
              className={cn(
                "grid gap-y-0.5 group-data-[collapsible=dock]:place-content-center",
                state === "collapsed"
                  ? "group-data-[collapsible=dock]:place-content-center"
                  : "grid-cols-[auto_1fr] [&_[data-slot=sidebar-item]:first-child]:mt-0.5"
              )}
            >
              {props.children}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

const SidebarInset = ({ className, ...props }: React.ComponentProps<"main">) => {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn([
        [
          "relative **:data-[slot=navbar-nav]:shadow-none flex min-h-svh max-w-full flex-1 flex-col bg-bg",
          "peer-data-[collapsible=none]:**:data-[slot=sidebar-trigger]:hidden",
          "md:peer-data-[intent=inset]:ml-0 md:peer-data-[intent=inset]:bg-bg md:peer-data-[intent=inset]:text-sidebar-fg md:peer-data-[intent=inset]:rounded-xl",
          "peer-data-[intent=inset]:overflow-hidden peer-data-[intent=inset]:border peer-data-[intent=inset]:min-h-[calc(100svh-calc(var(--spacing)*4))] md:peer-data-[intent=inset]:my-2 md:peer-data-[intent=inset]:mr-2",
          "peer-data-[intent=floating]:**:data-[slot=sidebar-nav]:bg-bg peer-data-[intent=floating]:**:data-[slot=sidebar-nav]:border-none"
        ],
        className
      ])}
      {...props}
    />
  )
}

const SidebarRail = ({ className, ...props }: React.ComponentProps<"button">) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px]data-hovered:after:bg-transparent group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-secondary",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarProvider,
  SidebarInset,
  SidebarHeader,
  SidebarNav,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  SidebarSection,
  SidebarRail,
  SidebarTrigger,
  useSidebar
}
