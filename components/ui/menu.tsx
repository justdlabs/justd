'use client'

import * as React from 'react'

import { IconBulletFill, IconCheck, IconChevronLgRight } from '@irsyadadl/paranoid'
import type {
  ButtonProps,
  MenuItemProps as MenuItemPrimitiveProps,
  MenuProps,
  PopoverProps,
  SeparatorProps
} from 'react-aria-components'
import {
  Button,
  composeRenderProps,
  Header,
  Keyboard,
  Menu as MenuPrimitive,
  MenuItem as MenuItemPrimitive,
  MenuTrigger as MenuTriggerPrimitive,
  OverlayArrow,
  Popover,
  PopoverContext,
  Section,
  Separator,
  SubmenuTrigger as SubmenuTriggerPrimitive,
  useSlottedContext
} from 'react-aria-components'
import { twJoin } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import { dropdownItemStyles } from './dropdown'
import { cn } from './primitive'

const Menu = MenuTriggerPrimitive
const MenuTrigger = ({ className, ...props }: ButtonProps) => (
  <Button
    aria-label="Open Menu"
    className={cn(
      'inline text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 pressed:outline-none',
      className
    )}
    {...props}
  />
)

const SubmenuTrigger = SubmenuTriggerPrimitive

const MenuSection = Section

export interface MenuContentProps<T> extends Omit<PopoverProps, 'children' | 'style'>, MenuProps<T> {
  className?: string
  popoverClassName?: string
  showArrow?: boolean
}

const MenuContent = <T extends object>({
  className,
  showArrow = false,
  popoverClassName,
  offset = 4,
  ...props
}: MenuContentProps<T>) => {
  const popoverContext = useSlottedContext(PopoverContext)!
  const isSubmenu = popoverContext?.trigger === 'SubmenuTrigger'
  let currentOffset = showArrow ? 12 : 8
  currentOffset = isSubmenu ? currentOffset - 6 : currentOffset
  return (
    <Popover
      offset={currentOffset}
      className={cn(
        'z-50 min-w-40 rounded-xl border bg-popover text-popover-fg outline-none entering:animate-in exiting:animate-out entering:fade-in-0 exiting:fade-out-0 exiting:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2',
        popoverClassName
      )}
      {...props}
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
      <MenuPrimitive
        className={cn(
          'z32kk',
          'max-h-[inherit] overflow-auto rounded-xl p-1 outline outline-0 [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]',
          className
        )}
        {...props}
      />
    </Popover>
  )
}

interface MenuItemProps extends Omit<MenuItemPrimitiveProps, 'isDanger'>, VariantProps<typeof dropdownItemStyles> {
  isDanger?: boolean
}

const MenuItem = ({ className, isDanger = false, children, ...props }: MenuItemProps) => (
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

export interface MenuHeaderProps extends React.ComponentProps<typeof Header> {
  inset?: boolean
  separator?: boolean
}

const MenuHeader = ({ className, inset, separator = false, ...props }: MenuHeaderProps) => (
  <Header
    className={cn(
      'px-2 py-1.5 text-base font-semibold sm:text-sm',
      inset && 'pl-8',
      separator && '-mx-1 mb-1 border-b border-b-border px-3 pb-[0.625rem]',
      className
    )}
    {...props}
  />
)

const MenuSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
)

interface MenuKeyboardProps extends React.HTMLAttributes<HTMLElement> {
  keys: string | string[]
}

const MenuKeyboard = ({ keys, className, ...props }: MenuKeyboardProps) => {
  return (
    <Keyboard
      className={cn('-mr-1 ml-auto hidden items-center gap-[0.170rem] px-1 lg:inline-flex', className)}
      {...props}
    >
      {(Array.isArray(keys) ? keys : keys.split('')).map((char, index) => (
        <kbd
          key={index}
          className={twJoin([
            'text-center font-sans capitalize text-muted-fg group-focus:text-fg forced-colors:group-focus:text-[HighlightText]',
            'inline-grid min-h-5 min-w-5 place-content-center rounded bg-background font-sans text-[.75rem] uppercase text-fg ring-1 ring-fg/10 group-focus:opacity-60',
            index > 0 && char.length > 1 && 'pl-1'
          ])}
        >
          {char}
        </kbd>
      ))}
    </Keyboard>
  )
}

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
  SubmenuTrigger,
  type MenuItemProps
}
