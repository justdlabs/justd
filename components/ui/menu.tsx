'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Check, ChevronsRight } from 'lucide-react'
import * as Primitive from 'react-aria-components'
import type { VariantProps } from 'tailwind-variants'

import { dropdownItemStyles } from './dropdown'

interface MenuSubComponents {
    CheckboxItem: typeof MenuCheckboxItem
    Content: typeof MenuContent
    Header: typeof MenuHeader
    Item: typeof MenuItem
    Keyboard: typeof MenuKeyboard
    RadioItem: typeof MenuRadioItem
    Section: typeof MenuSection
    Separator: typeof MenuSeparator
    Trigger: typeof MenuTrigger
    SubTrigger: typeof SubmenuTrigger
}

type MenuComponent = React.FC<Primitive.MenuTriggerProps> & MenuSubComponents

const Menu: MenuComponent = (props: Primitive.MenuTriggerProps) => (
    <Primitive.MenuTrigger {...props}>{props.children}</Primitive.MenuTrigger>
)
const MenuTrigger = ({ className, ...props }: Primitive.ButtonProps) => (
    <Primitive.Button
        aria-label='Open Menu'
        className={cn(
            'inline text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/20 pressed:outline-none',
            className
        )}
        {...props}
    />
)

const SubmenuTrigger = Primitive.SubmenuTrigger

const MenuSection = Primitive.Section

export interface MenuContentProps<T>
    extends Omit<Primitive.PopoverProps, 'children' | 'style'>,
        Primitive.MenuProps<T> {
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
    const popoverContext = Primitive.useSlottedContext(Primitive.PopoverContext)!
    const isSubmenu = popoverContext?.trigger === 'SubmenuTrigger'
    let currentOffset = showArrow ? 12 : 8
    currentOffset = isSubmenu ? currentOffset - 6 : currentOffset
    return (
        <Primitive.Popover
            offset={currentOffset}
            className={cn(
                'z-50 min-w-40 rounded-xl border bg-background text-foreground outline-none data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 entering:animate-in entering:fade-in-0 exiting:animate-out exiting:fade-out-0 exiting:zoom-out-95',
                popoverClassName
            )}
            {...props}
        >
            {showArrow && (
                <Primitive.OverlayArrow className='group'>
                    <svg
                        width={12}
                        height={12}
                        viewBox='0 0 12 12'
                        className='block fill-popover stroke-border group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180'
                    >
                        <path d='M0 0 L6 6 L12 0' />
                    </svg>
                </Primitive.OverlayArrow>
            )}
            <Primitive.Menu
                className={cn(
                    'z32kk',
                    'max-h-[inherit] overflow-auto rounded-xl p-1 outline outline-0 [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]',
                    className
                )}
                {...props}
            />
        </Primitive.Popover>
    )
}

interface MenuItemProps
    extends Omit<Primitive.MenuItemProps, 'isDanger'>,
        VariantProps<typeof dropdownItemStyles> {
    inset?: boolean
    isDanger?: boolean
}

const MenuItem = ({
    className,
    isDanger = false,
    inset,
    children,
    ...props
}: MenuItemProps) => (
    <Primitive.MenuItem
        className={Primitive.composeRenderProps(className, (className, renderProps) =>
            dropdownItemStyles({
                ...renderProps,
                className: cn(inset && 'pl-8', className)
            })
        )}
        data-danger={isDanger ? 'true' : undefined}
        {...props}
    >
        {/*<MenuItemPrimitive className={cn(menuItemVariants({ intent }), className, inset && 'pl-8')} {...props}>*/}
        {(values) => (
            <>
                {typeof children === 'function' ? children(values) : children}
                {values.hasSubmenu && <ChevronsRight className='gpfw ml-auto size-3.5' />}
            </>
        )}
    </Primitive.MenuItem>
)

export interface MenuHeaderProps extends React.ComponentProps<typeof Primitive.Header> {
    inset?: boolean
    separator?: boolean
}

const MenuHeader = ({
    className,
    inset,
    separator = false,
    ...props
}: MenuHeaderProps) => (
    <Primitive.Header
        className={cn(
            'px-2 py-1.5 text-base font-semibold sm:text-sm',
            inset && 'pl-8',
            separator && '-mx-1 mb-1 border-b border-b-border px-3 pb-[0.625rem]',
            className
        )}
        {...props}
    />
)

const MenuSeparator = ({ className, ...props }: Primitive.SeparatorProps) => (
    <Primitive.Separator
        className={cn('-mx-1 my-1 h-px bg-muted', className)}
        {...props}
    />
)

interface MenuKeyboardProps extends React.HTMLAttributes<HTMLElement> {
    keys: string | string[]
}

const MenuKeyboard = ({ keys, className, ...props }: MenuKeyboardProps) => {
    return (
        <Primitive.Keyboard
            className={cn(
                '-mr-1 ml-auto hidden items-center gap-[0.170rem] px-1 lg:inline-flex',
                className
            )}
            {...props}
        >
            {(Array.isArray(keys) ? keys : keys.split('')).map((char, index) => (
                <kbd
                    key={index}
                    className={cn([
                        'min-w-[2ch] text-center font-sans capitalize text-muted-foreground group-focus:text-foreground',
                        'inline-grid min-h-5 min-w-5 place-content-center rounded bg-background font-sans text-[.75rem] uppercase text-foreground ring-1 ring-foreground/10 group-focus:opacity-60',
                        // Make sure key names that are longer than one character (like "Tab") have extra space
                        index > 0 && char.length > 1 && 'pl-1'
                    ])}
                >
                    {char}
                </kbd>
            ))}
        </Primitive.Keyboard>
    )
}

const MenuCheckboxItem = ({ className, children, ...props }: MenuItemProps) => (
    <MenuItem className={className} {...props}>
        {(values) => (
            <>
                <span className='absolute right-2 flex size-4 items-center justify-center'>
                    {values.isSelected && <Check className='size-4' />}
                </span>
                {typeof children === 'function' ? children(values) : children}
            </>
        )}
    </MenuItem>
)

const MenuRadioItem = ({ className, children, ...props }: MenuItemProps) => (
    <MenuItem className={className} {...props}>
        {(values) => (
            <>
                <span className='absolute right-2 flex size-4 items-center justify-center'>
                    {values.isSelected && <Check className='size-4' />}
                </span>
                {typeof children === 'function' ? children(values) : children}
            </>
        )}
    </MenuItem>
)

Menu.CheckboxItem = MenuCheckboxItem
Menu.Content = MenuContent
Menu.Header = MenuHeader
Menu.Item = MenuItem
Menu.Keyboard = MenuKeyboard
Menu.RadioItem = MenuRadioItem
Menu.Section = MenuSection
Menu.Separator = MenuSeparator
Menu.Trigger = MenuTrigger
Menu.SubTrigger = SubmenuTrigger

export { MenuKeyboard as Keyboard, Menu, type MenuItemProps }
