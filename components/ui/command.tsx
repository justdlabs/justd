'use client'

import * as React from 'react'

import { cn, useMediaQuery } from '@/lib/utils'
import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'lucide-react'
import * as Primitive from 'react-aria-components'

import { Button } from './button'
import { Modal } from './modal'

interface CommandSubComponents {
    Modal: typeof CommandModal
    Input: typeof CommandInput
    List: typeof CommandList
    Empty: typeof CommandEmpty
    Group: typeof CommandSection
    Item: typeof CommandItem
    Shortcut: typeof CommandKeyboard
    Separator: typeof CommandSeparator
}

type CommandComponent = React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLDivElement>
> &
    React.RefAttributes<HTMLDivElement> &
    CommandSubComponents

const Command: CommandComponent = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
    <CommandPrimitive
        ref={ref}
        className={cn(
            [
                'flex h-svh w-full flex-col overflow-hidden rounded-md bg-background text-foreground sm:h-full',
                '[&_[cmdk-group-heading]]:ml-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-0 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:py-[0.70rem] [&_[cmdk-item]]:pl-3 [&_[cmdk-item]]:pr-4 [&_[cmdk-item]_svg]:mr-2 [&_[cmdk-item]_svg]:size-[1.10rem]'
            ],
            className
        )}
        {...props}
    />
)) as any
Command.displayName = CommandPrimitive.displayName

interface CommandModalProps extends Primitive.ModalOverlayProps {
    children: React.ReactNode
}

const CommandModal = ({ children, ...props }: CommandModalProps) => {
    const isDesktop = useMediaQuery('(min-width: 1024px)')
    return (
        <Modal.Overlay {...props}>
            <Primitive.Modal
                className={cn(
                    'fixed bottom-0 left-[50%] top-auto z-50 grid h-[calc(100vh-35%)] w-full max-w-full translate-x-[-50%] gap-4 overflow-hidden rounded-t-xl bg-background p-0 shadow-lg ring-1 ring-border sm:bottom-auto sm:top-[6rem] sm:h-auto sm:w-full sm:max-w-2xl sm:rounded-xl',
                    'sm:entering:slide-in-from-bottom-auto entering:duration-300 entering:animate-in entering:fade-in-0 entering:slide-in-from-bottom-1/2 entering:slide-in-from-left-1/2 entering:[transition-timing-function:ease-out] sm:entering:duration-300 sm:entering:slide-in-from-top-[2rem]',
                    'exiting:duration-300 exiting:animate-out exiting:fade-out-0 exiting:slide-out-to-bottom-1/2 exiting:slide-out-to-left-1/2 exiting:[transition-timing-function:ease] sm:exiting:slide-out-to-top-[4rem]'
                )}
            >
                <Primitive.Dialog aria-labelledby='Command'>
                    {({ close }) => (
                        <>
                            <Command>{children}</Command>
                            <Button
                                autoFocus={!isDesktop}
                                onPress={close}
                                variant='outline'
                                size='sm'
                                className='absolute right-1.5 top-1.5'
                            >
                                Esc
                            </Button>
                        </>
                    )}
                </Primitive.Dialog>
            </Primitive.Modal>
        </Modal.Overlay>
    )
}

const CommandInput = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Input>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => {
    return (
        <div className='flex items-center border-b px-3'>
            <Search className='mr-2 size-5 shrink-0 opacity-50' />
            <CommandPrimitive.Input
                ref={ref}
                className={cn(
                    'flex h-11 w-full rounded-md bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                    className
                )}
                {...props}
            />
        </div>
    )
})

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.List
        ref={ref}
        className={cn(
            'overflow-y-auto overflow-x-hidden px-2 md:max-h-[456px]',
            className
        )}
        {...props}
    />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Empty>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
    <CommandPrimitive.Empty
        ref={ref}
        className='py-6 text-center text-sm text-muted-foreground'
        {...props}
    />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandSection = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Group>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Group
        ref={ref}
        className={cn(
            'overflow-hidden px-0 py-2 text-foreground [&_[cmdk-group-heading]]:ml-0 [&_[cmdk-group-heading]]:select-none [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[0.8rem] [&_[cmdk-group-heading]]:text-muted-foreground',
            className
        )}
        {...props}
    />
))

CommandSection.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Separator
        ref={ref}
        className={cn('-mx-1 h-px bg-border', className)}
        {...props}
    />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Item
        ref={ref}
        className={cn(
            'relative flex cursor-default select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&[data-selected=true]_svg]:text-accent-foreground [&_svg]:shrink-0 [&_svg]:text-muted-foreground',
            className
        )}
        {...props}
    />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandKeyboard = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span
            className={cn(
                '-mr-1 ml-auto hidden items-center gap-1 px-1 opacity-60 lg:inline-flex',
                '[&_kbd]:inline-grid [&_kbd]:min-h-5 [&_kbd]:min-w-5 [&_kbd]:place-content-center [&_kbd]:rounded [&_kbd]:bg-background [&_kbd]:font-sans [&_kbd]:text-[.75rem] [&_kbd]:uppercase [&_kbd]:ring-1 [&_kbd]:ring-foreground/10',
                className
            )}
            {...props}
        />
    )
}
CommandKeyboard.displayName = 'CommandShortcut'

Command.Empty = CommandEmpty
Command.Group = CommandSection
Command.Input = CommandInput
Command.Item = CommandItem
Command.List = CommandList
Command.Separator = CommandSeparator
Command.Shortcut = CommandKeyboard
Command.Modal = CommandModal

export { Command }
