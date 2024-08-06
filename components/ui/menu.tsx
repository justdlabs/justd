'use client'

import * as React from 'react'

import { PopoverContent } from './popover'
import { IconBulletFill, IconCheck, IconChevronLgRight } from '@irsyadadl/paranoid'
import type {
  ButtonProps,
  MenuItemProps as MenuItemPrimitiveProps,
  MenuProps as MenuPrimitiveProps,
  PopoverProps,
  SeparatorProps
} from 'react-aria-components'
import {
  Button,
  composeRenderProps,
  Header,
  Menu as MenuPrimitive,
  MenuItem as MenuItemPrimitive,
  MenuTrigger as MenuTriggerPrimitive,
  Separator,
  SubmenuTrigger as SubmenuTriggerPrimitive
} from 'react-aria-components'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { DropdownItemDetails, dropdownItemStyles, DropdownSection } from './dropdown'
import { Keyboard } from './keyboard'
import { cn } from './primitive'

interface MenuContextProps {
  respectScreen: boolean
}

const MenuContext = React.createContext<MenuContextProps>({ respectScreen: true })

export const useMenuContext = () => React.useContext(MenuContext)

interface MenuProps extends MenuTriggerProps {
  respectScreen?: boolean
}

const Menu = ({ respectScreen = true, ...props }: MenuProps) => {
  return (
    <MenuContext.Provider value={{ respectScreen }}>
      <MenuTriggerPrimitive {...props}>
        <>{props.children}</>
      </MenuTriggerPrimitive>
    </MenuContext.Provider>
  )
}

const SubMenu = ({ delay = 0, ...props }) => (
  <SubmenuTriggerPrimitive {...props} delay={delay}>
    {props.children}
  </SubmenuTriggerPrimitive>
)

const MenuSection = DropdownSection
const MenuItemDetails = DropdownItemDetails

const menuStyles = tv({
  slots: {
    menu: 'z32kk max-h-[inherit] overflow-auto rounded-xl p-1 outline outline-0 [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]',
    popover: 'z-50 min-w-40 p-0 outline-none shadow-sm',
    trigger:
      'inline text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 pressed:outline-none'
  }
})

const { menu, popover, trigger } = menuStyles()

interface MenuTriggerProps extends ButtonProps {
  className?: string
}

const MenuTrigger = ({ className, ...props }: MenuTriggerProps) => (
  <Button className={trigger({ className })} {...props} />
)

export interface MenuContentProps<T>
  extends Omit<PopoverProps, 'children' | 'style'>,
    MenuPrimitiveProps<T> {
  className?: string
  popoverClassName?: string
  showArrow?: boolean
  respectScreen?: boolean
}

const MenuContent = <T extends object>({
  className,
  showArrow = false,
  popoverClassName,
  offset = 4,
  ...props
}: MenuContentProps<T>) => {
  const { respectScreen } = useMenuContext()
  return (
    <PopoverContent
      respectScreen={respectScreen}
      showArrow={showArrow}
      className={popover({ className: popoverClassName })}
      {...props}
    >
      <MenuPrimitive className={menu({ className })} {...props} />
    </PopoverContent>
  )
}

interface MenuItemProps
  extends Omit<MenuItemPrimitiveProps, 'isDanger'>,
    VariantProps<typeof dropdownItemStyles> {
  isDanger?: boolean
}

const MenuItem = ({ className, isDanger = false, children, ...props }: MenuItemProps) => {
  return (
    <MenuItemPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        dropdownItemStyles({
          ...renderProps,
          className
        })
      )}
      data-danger={isDanger ? 'true' : undefined}
      {...props}
    >
      {(values) => (
        <>
          {typeof children === 'function' ? children(values) : children}
          {values.hasSubmenu && <IconChevronLgRight className="gpfw ml-auto size-3.5" />}
        </>
      )}
    </MenuItemPrimitive>
  )
}

export interface MenuHeaderProps extends React.ComponentProps<typeof Header> {
  inset?: boolean
  separator?: boolean
}

const MenuHeader = ({ className, inset, separator = false, ...props }: MenuHeaderProps) => (
  <Header
    className={cn(
      'p-2 text-base font-semibold sm:text-sm',
      inset && 'pl-8',
      separator && '-mx-1 border-b border-b-border px-3 pb-[0.625rem]',
      className
    )}
    {...props}
  />
)

const MenuSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator className={cn('-mx-1 my-1 h-px ms bg-muted', className)} {...props} />
)

const MenuKeyboard = Keyboard

const MenuCheckboxItem = ({ className, children, ...props }: MenuItemProps) => (
  <MenuItem className={cn('pr-8', className)} {...props}>
    {(values) => (
      <>
        <span className="absolute right-2 flex size-4 items-center animate-in justify-center">
          {values.isSelected && <IconCheck className="size-4" />}
        </span>

        {typeof children === 'function' ? children(values) : children}
      </>
    )}
  </MenuItem>
)

const MenuRadioItem = ({ className, children, ...props }: MenuItemProps) => (
  <MenuItem className={cn('pr-8', className)} {...props}>
    {(values) => (
      <>
        <span className="absolute right-2 flex size-2.5 items-center animate-in justify-center">
          {values.isSelected && <IconBulletFill className="size-2.5" />}
        </span>
        {typeof children === 'function' ? children(values) : children}
      </>
    )}
  </MenuItem>
)

export {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuItemPrimitive,
  MenuKeyboard,
  MenuPrimitive,
  MenuRadioItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
  SubMenu,
  MenuItemDetails,
  type MenuItemProps
}
