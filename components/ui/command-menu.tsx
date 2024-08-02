'use client'

import * as React from 'react'

import { IconSearch, IconX } from '@irsyadadl/paranoid'
import { Command as CommandPrimitive } from 'cmdk'
import type { ModalOverlayProps, SeparatorProps, TextProps } from 'react-aria-components'
import { Button, Dialog, Modal, ModalOverlay, Text } from 'react-aria-components'
import { tv } from 'tailwind-variants'

import type { KeyboardProps } from './keyboard'
import { Keyboard } from './keyboard'
import { useMediaQuery } from './primitive'
import { Separator } from './separator'

const commandStyles = tv({
  slots: {
    command: [
      'flex h-svh w-full flex-col overflow-hidden rounded-md bg-popover text-popover-fg sm:h-full',
      '[&_[cmdk-group-heading]]:ml-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:-mb-1.5 [&_[cmdk-group-heading]]:text-muted-fg [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_[data-slot=icon]]:size-5 [&_[cmdk-input]]:h-12',
      // for specific properties, it has to be controlled by the command
      '[&_[cmdk-item]]:py-2.5 [&_[cmdk-item]]:pl-2.5 [&_[cmdk-item]]:pr-4'
    ],
    list: 'overflow-y-auto lg:pb-0 max-h-[calc(100vh-35%)] pb-16 [&:not(:has(.xda32kfseccmd))]:p-2 [&:not(:has(.xda32kfseccmd))_.s3xsprt]:my-2 overflow-x-hidden md:max-h-[456px]',
    input: [
      'flex w-full rounded-md bg-transparent text-base placeholder:text-muted-fg',
      'focus:outline-none',
      'disabled:opacity-50 disabled:cursor-not-allowed'
    ],
    section: [
      'xda32kfseccmd overflow-hidden py-2 px-2 text-fg',
      '[&_[cmdk-group-heading]]:select-none [&_[cmdk-group-heading]]:ml-[1px] [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[0.8rem] [&_[cmdk-group-heading]]:text-muted-fg'
    ],
    modalOverlay: [
      'fixed inset-0 max-h-[--visual-viewport-height] z-50 bg-black/60 entering:animate-in entering:fade-in-0 exiting:animate-in exiting:fade-out-0'
    ],
    modal: [
      'fixed bottom-0 left-[50%] top-auto z-50 grid h-[calc(100vh-35%)] w-full max-w-full translate-x-[-50%] gap-4 overflow-hidden rounded-t-xl bg-background shadow-lg ring-1 ring-border sm:bottom-auto sm:top-[6rem] sm:h-auto sm:w-full sm:max-w-2xl sm:rounded-xl',
      'sm:entering:slide-in-from-bottom-auto entering:duration-300 entering:animate-in entering:fade-in-0 entering:slide-in-from-bottom-1/2 entering:slide-in-from-left-1/2 entering:[transition-timing-function:ease-out] sm:entering:duration-300 sm:entering:slide-in-from-top-[2rem]',
      'exiting:duration-300 exiting:animate-out exiting:fade-out-0 exiting:slide-out-to-bottom-1/2 exiting:slide-out-to-left-1/2 exiting:[transition-timing-function:ease] sm:exiting:slide-out-to-top-[4rem]'
    ],
    closeButton: [
      'absolute right-3 top-1.5 [&>span>[data-slot=icon]]:text-muted-fg pressed:[&_[data-slot=icon]]:text-fg lg:top-3.5 rounded-full border lg:border-border border-transparent lg:bg-secondary/50 py-2.5 px-2.5 lg:py-0.5 text-xs transition-opacity data-[state=open]:bg-secondary data-[state=open]:text-muted-fg lg:focus:border-fg/70 focus:outline-none lg:focus:ring-2 lg:focus:ring-ring disabled:pointer-events-none',
      'focus:outline-none lg:focus:bg-primary/10 lg:focus:ring-2 lg:focus:ring-primary/20 lg:focus:border-primary/70',
      'disabled:pointer-events-none'
    ],
    empty: 'py-6 text-center text-sm text-muted-fg x3tmpy',
    kbdKeyboard: 'lg:block hidden group-data-[selected=true]:opacity-60',
    description:
      'sm:inline hidden text-sm group-data-[selected=true]:text-primary-fg/70 text-muted-fg ml-auto',
    item: [
      'group relative flex cursor-default select-none items-center rounded-lg py-2 text-sm outline-none',
      // selected
      'data-[selected=true]:bg-primary data-[selected=true]:text-primary-fg [&[data-selected=true]_[data-slot=icon]]:text-primary-fg',
      // danger
      'data-[danger=true]:text-danger data-[danger=true]:data-[selected=true]:bg-danger data-[danger=true]:data-[selected=true]:text-danger-fg',
      // disabled
      'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
      // icon
      '[&_[data-slot=icon]]:mr-2 [&_[data-slot=icon]]:size-[1.10rem] [&_[data-slot=icon]]:shrink-0 [&_[data-slot=icon]]:text-muted-fg',
      '[&_[data-slot=avatar]]:mr-2 [&_[data-slot=avatar]]:size-[1.10rem] [&_[data-slot=avatar]]:shrink-0'
    ]
  },

  variants: {
    isDanger: {
      true: 'text-danger data-[selected=true]:bg-danger data-[selected=true]:text-danger-fg [&[data-selected=true]_[data-slot=icon]]:text-danger-fg'
    }
  }
})

const {
  command,
  empty,
  section,
  list,
  item,
  closeButton,
  modal,
  input,
  modalOverlay,
  kbdKeyboard,
  description
} = commandStyles()

interface CommandMenuContextProps {
  hideSearchIndicator?: boolean
  hideCloseButton?: boolean
  messageOnEmpty?: boolean | string
}

const CommandMenuContext = React.createContext<CommandMenuContextProps>({})

interface CommandMenuProps extends ModalOverlayProps, CommandMenuContextProps {
  children: React.ReactNode
  value?: string
  messageOnEmpty?: boolean | string
  onValueChange?: (value: string) => void
}

const CommandMenu = ({
  hideSearchIndicator = false,
  hideCloseButton = false,
  messageOnEmpty,
  value,
  onValueChange,
  children,
  ...props
}: CommandMenuProps) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  return (
    <CommandMenuContext.Provider value={{ hideSearchIndicator, hideCloseButton, messageOnEmpty }}>
      <ModalOverlay isDismissable className={modalOverlay()} {...props}>
        <Modal className={modal()}>
          <Dialog className="outline-none" aria-label="Command Palette">
            {({ close }) => (
              <>
                <CommandPrimitive value={value} onValueChange={onValueChange} className={command()}>
                  {children}
                </CommandPrimitive>
                {!hideCloseButton && (
                  <Button autoFocus={!isDesktop} onPress={close} className={closeButton()}>
                    <span className="lg:block hidden">Esc</span>
                    <span className="lg:hidden -mr-2 block">
                      <IconX />
                      <span className="sr-only">Close command palette</span>
                    </span>
                  </Button>
                )}
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </CommandMenuContext.Provider>
  )
}

interface CommandMenuInputProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> {}

const CommandMenuInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  CommandMenuInputProps
>(({ className, ...props }, ref) => {
  const { hideSearchIndicator } = React.useContext(CommandMenuContext)
  return (
    <div className="flex border-b items-center px-3">
      {!hideSearchIndicator && <IconSearch className="mr-2 size-5 shrink-0 opacity-50" />}
      <CommandPrimitive.Input
        autoFocus
        ref={ref}
        className={input({ className: hideSearchIndicator ? 'pl-1' : className })}
        {...props}
      />
    </div>
  )
})

CommandMenuInput.displayName = CommandPrimitive.Input.displayName

interface CommandMenuListProps extends React.ComponentProps<typeof CommandPrimitive.List> {}

const CommandMenuList = ({ className, ...props }: CommandMenuListProps) => {
  const { messageOnEmpty } = React.useContext(CommandMenuContext)
  return (
    <CommandPrimitive.List className={list({ className })} {...props}>
      {messageOnEmpty !== false && (
        <CommandMenuEmpty>
          {typeof messageOnEmpty === 'string' ? messageOnEmpty : 'No results found.'}
        </CommandMenuEmpty>
      )}
      {props.children}
    </CommandPrimitive.List>
  )
}

interface CommandMenuEmptyProps extends React.ComponentProps<typeof CommandPrimitive.Empty> {}

const CommandMenuEmpty = ({ className, ...props }: CommandMenuEmptyProps) => {
  return <CommandPrimitive.Empty className={empty({ className })} {...props} />
}

interface CommandSectionProps extends React.ComponentProps<typeof CommandPrimitive.Group> {
  separator?: boolean
}

const CommandMenuSection = ({ className, separator, ...props }: CommandSectionProps) => {
  return (
    <>
      <CommandPrimitive.Group className={section({ className })} {...props}>
        {props.children}
        {separator && <CommandMenuSeparator className="mt-2" />}
      </CommandPrimitive.Group>
    </>
  )
}

const CommandMenuSeparator = ({ className, ...props }: SeparatorProps) => {
  return (
    <div className="-mx-4 s3xsprt">
      <Separator className={className} {...props} orientation="horizontal" />
    </div>
  )
}

interface CommandItemProps extends React.ComponentProps<typeof CommandPrimitive.Item> {
  isDanger?: boolean
}

const CommandMenuItem = ({ isDanger, className, ...props }: CommandItemProps) => {
  return (
    <CommandPrimitive.Item
      data-danger={isDanger ? 'true' : undefined}
      className={item({ isDanger, className })}
      {...props}
    />
  )
}

const CommandMenuDescription = ({ className, ...props }: TextProps) => {
  return <Text {...props} slot="description" className={description({ className })} />
}

const CommandMenuKeyboard = (props: KeyboardProps) => (
  <Keyboard classNames={{ kbd: kbdKeyboard(), base: '-mr-2.5' }} {...props} />
)

export {
  CommandMenuEmpty,
  CommandMenuInput,
  CommandMenuItem,
  CommandMenuKeyboard,
  CommandMenuList,
  CommandMenu,
  CommandMenuSection,
  CommandMenuSeparator,
  CommandMenuDescription
}
