"use client"

import { createContext, use } from "react"

import { IconBulletFill, IconCheck, IconChevronLgRight } from "justd-icons"
import type {
  ButtonProps,
  MenuItemProps as MenuItemPrimitiveProps,
  MenuProps as MenuPrimitiveProps,
  MenuSectionProps,
  MenuTriggerProps as MenuTriggerPrimitiveProps,
  PopoverProps,
  SeparatorProps,
} from "react-aria-components"
import {
  Button,
  Collection,
  Header,
  MenuItem,
  Menu as MenuPrimitive,
  MenuSection,
  MenuTrigger as MenuTriggerPrimitive,
  Separator,
  SubmenuTrigger as SubmenuTriggerPrimitive,
  composeRenderProps,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

import { composeTailwindRenderProps } from "@/components/ui/primitive"
import { cn } from "@/utils/classes"
import { DropdownItemDetails, dropdownItemStyles, dropdownSectionStyles } from "./dropdown"
import { Keyboard } from "./keyboard"
import { Popover } from "./popover"

interface MenuContextProps {
  respectScreen: boolean
}

const MenuContext = createContext<MenuContextProps>({ respectScreen: true })

interface MenuProps extends MenuTriggerPrimitiveProps {
  respectScreen?: boolean
}

const Menu = ({ respectScreen = true, ...props }: MenuProps) => {
  return (
    <MenuContext value={{ respectScreen }}>
      <MenuTriggerPrimitive {...props}>{props.children}</MenuTriggerPrimitive>
    </MenuContext>
  )
}

const SubMenu = ({ delay = 0, ...props }) => (
  <SubmenuTriggerPrimitive {...props} delay={delay}>
    {props.children}
  </SubmenuTriggerPrimitive>
)

const menuStyles = tv({
  slots: {
    menu: "max-h-[calc(var(--visual-viewport-height)-10rem)] sm:max-h-[inherit] overflow-auto rounded-xl p-1 outline-hidden [clip-path:inset(0_0_0_0_round_calc(var(--radius-lg)-2px))]",
    popover: "z-50 sm:min-w-40 p-0 outline-hidden shadow-xs",
    trigger: [
      "inline relative text-left data-focused:outline-hidden data-focus-visible:ring-1 data-focus-visible:ring-primary data-pressed:outline-hidden",
    ],
  },
})

const { menu, popover, trigger } = menuStyles()

interface MenuTriggerProps extends ButtonProps {
  className?: string
}

const Trigger = ({ className, ...props }: MenuTriggerProps) => (
  <Button data-slot="menu-trigger" className={trigger({ className })} {...props}>
    {(values) => (
      <>{typeof props.children === "function" ? props.children(values) : props.children}</>
    )}
  </Button>
)

interface MenuContentProps<T>
  extends Omit<PopoverProps, "children" | "style">,
    MenuPrimitiveProps<T> {
  className?: string
  popoverClassName?: string
  showArrow?: boolean
  respectScreen?: boolean
}

const Content = <T extends object>({
  className,
  showArrow = false,
  popoverClassName,
  ...props
}: MenuContentProps<T>) => {
  const { respectScreen } = use(MenuContext)
  return (
    <Popover.Content
      respectScreen={respectScreen}
      showArrow={showArrow}
      className={popover({
        className: cn([
          showArrow && "data-[placement=left]:mt-[-0.38rem] data-[placement=right]:mt-[-0.38rem]",
          popoverClassName,
        ]),
      })}
      {...props}
    >
      <MenuPrimitive className={menu({ className })} {...props} />
    </Popover.Content>
  )
}

interface MenuItemProps extends MenuItemPrimitiveProps, VariantProps<typeof dropdownItemStyles> {
  isDanger?: boolean
}

const Item = ({ className, isDanger = false, children, ...props }: MenuItemProps) => {
  const textValue = props.textValue || (typeof children === "string" ? children : undefined)
  return (
    <MenuItem
      className={composeRenderProps(className, (className, renderProps) =>
        dropdownItemStyles({
          ...renderProps,
          className,
        }),
      )}
      textValue={textValue}
      data-danger={isDanger ? "true" : undefined}
      {...props}
    >
      {(values) => (
        <>
          {typeof children === "function" ? children(values) : children}
          {values.hasSubmenu && <IconChevronLgRight className="ml-auto gpfw size-3.5" />}
        </>
      )}
    </MenuItem>
  )
}

export interface MenuHeaderProps extends React.ComponentProps<typeof Header> {
  separator?: boolean
}

const MenuHeader = ({ className, separator = false, ...props }: MenuHeaderProps) => (
  <Header
    className={cn(
      "p-2 font-semibold text-base sm:text-sm",
      separator && "-mx-1 border-b px-4 py-3 sm:px-3 sm:pb-[0.625rem]",
      className,
    )}
    {...props}
  />
)

const MenuSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator className={cn("-mx-1 my-1 h-px border-b", className)} {...props} />
)

const Checkbox = ({ className, children, ...props }: MenuItemProps) => (
  <Item className={composeTailwindRenderProps(className, "relative pr-8")} {...props}>
    {(values) => (
      <>
        {typeof children === "function" ? children(values) : children}
        {values.isSelected && (
          <span className="flex absolute right-2 justify-center items-center size-4 shrink-0 animate-in">
            <IconCheck />
          </span>
        )}
      </>
    )}
  </Item>
)

const Radio = ({ children, ...props }: MenuItemProps) => (
  <Item {...props}>
    {(values) => (
      <>
        {typeof children === "function" ? children(values) : children}

        {values.isSelected && (
          <span
            data-slot="menu-radio"
            className="absolute right-3 flex animate-in items-center justify-center **:data-[slot=indicator]:size-2.5 **:data-[slot=indicator]:shrink-0"
          >
            <IconBulletFill data-slot="indicator" />
          </span>
        )}
      </>
    )}
  </Item>
)

const { section, header } = dropdownSectionStyles()

interface SectionProps<T> extends MenuSectionProps<T> {
  title?: string
}

const Section = <T extends object>({ className, ...props }: SectionProps<T>) => {
  return (
    <MenuSection className={section({ className })} {...props}>
      {"title" in props && <Header className={header()}>{props.title}</Header>}
      <Collection items={props.items}>{props.children}</Collection>
    </MenuSection>
  )
}

Menu.Primitive = MenuPrimitive
Menu.Content = Content
Menu.Header = MenuHeader
Menu.Item = Item
Menu.Content = Content
Menu.Keyboard = Keyboard
Menu.Checkbox = Checkbox
Menu.Radio = Radio
Menu.Section = Section
Menu.Separator = MenuSeparator
Menu.Trigger = Trigger
Menu.ItemDetails = DropdownItemDetails
Menu.Submenu = SubMenu

export { Menu, type MenuContentProps }
