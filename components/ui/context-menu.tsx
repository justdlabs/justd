'use client'

import React, { useRef, useState } from 'react'

import { tv } from 'tailwind-variants'

import type { MenuContentProps } from './menu'
import {
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuItemDetails,
  MenuKeyboard,
  MenuSection,
  MenuSeparator
} from './menu'
import { focusButtonStyles } from './primitive'

interface ContextMenuTriggerContextType {
  buttonRef: React.RefObject<HTMLButtonElement>
  contextMenuOffset: { offset: number; crossOffset: number } | null
  setContextMenuOffset: React.Dispatch<
    React.SetStateAction<{ offset: number; crossOffset: number } | null>
  >
}

const ContextMenuTriggerContext = React.createContext<ContextMenuTriggerContextType | undefined>(
  undefined
)

const useContextMenuTrigger = () => {
  const context = React.useContext(ContextMenuTriggerContext)
  if (!context) {
    throw new Error('useContextMenuTrigger must be used within a ContextMenuTrigger')
  }
  return context
}

interface ContextMenuRootComponent {
  Trigger?: typeof ContextMenuTrigger
  Content?: typeof ContextMenuContent
  Item?: typeof MenuItem
  Separator?: typeof MenuSeparator
  ItemDetails?: typeof MenuItemDetails
  Section?: typeof MenuSection
  Header?: typeof MenuHeader
  Keyboard?: typeof MenuKeyboard
  children: React.ReactNode
}

const ContextMenuRoot = ({ children }: ContextMenuRootComponent) => {
  const [contextMenuOffset, setContextMenuOffset] = useState<{
    offset: number
    crossOffset: number
  } | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <ContextMenuTriggerContext.Provider
      value={{ buttonRef, contextMenuOffset, setContextMenuOffset }}
    >
      {children}
    </ContextMenuTriggerContext.Provider>
  )
}

const contextMenuTriggerStyles = tv({
  extend: focusButtonStyles,
  base: 'focus:outline-none cursor-default',
  variants: {
    isDisabled: {
      false: 'forced-colors:disabled:text-[GrayText]',
      true: 'cursor-default opacity-60 forced-colors:disabled:text-[GrayText]'
    }
  }
})

interface ContextMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ContextMenuTrigger = ({ className, ...props }: ContextMenuTriggerProps) => {
  const { buttonRef, setContextMenuOffset } = useContextMenuTrigger()

  const onContextMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const rect = e.currentTarget.getBoundingClientRect()
    setContextMenuOffset({
      offset: e.clientY - rect.bottom,
      crossOffset: e.clientX - rect.left
    })
  }
  return (
    <button
      className={contextMenuTriggerStyles({ isDisabled: props.disabled, className })}
      ref={buttonRef}
      aria-haspopup="menu"
      onContextMenu={onContextMenu}
      {...props}
    />
  )
}

interface ContextMenuContentProps<T>
  extends Omit<
    MenuContentProps<T>,
    'showArrow' | 'isOpen' | 'onOpenChange' | 'triggerRef' | 'placement' | 'shouldFlip'
  > {}

const ContextMenuContent = <T extends object>(props: ContextMenuContentProps<T>) => {
  const { contextMenuOffset, setContextMenuOffset, buttonRef } = useContextMenuTrigger()
  return contextMenuOffset ? (
    <MenuContent
      isOpen={!!contextMenuOffset}
      onOpenChange={() => setContextMenuOffset(null)}
      triggerRef={buttonRef}
      shouldFlip={false}
      placement="bottom left"
      offset={contextMenuOffset?.offset}
      crossOffset={contextMenuOffset?.crossOffset}
      onClose={() => setContextMenuOffset(null)}
      {...props}
    />
  ) : null
}

ContextMenuRoot.Trigger = ContextMenuTrigger
ContextMenuRoot.Content = ContextMenuContent
ContextMenuRoot.Item = MenuItem
ContextMenuRoot.Separator = MenuSeparator
ContextMenuRoot.ItemDetails = MenuItemDetails
ContextMenuRoot.Section = MenuSection
ContextMenuRoot.Header = MenuHeader
ContextMenuRoot.Keyboard = MenuKeyboard

const ContextMenu = ContextMenuRoot

export { ContextMenu }
