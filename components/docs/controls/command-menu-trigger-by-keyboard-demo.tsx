'use client'

import React from 'react'

import { IconCreditCard, IconCube, IconGear, IconHome2, IconNotes, IconShield } from '@irsyadadl/paranoid'
import Link from 'next/link'
import { CommandMenu, CommandMenuInput, CommandMenuItem, CommandMenuKeyboard, CommandMenuList, CommandMenuSection } from 'ui'

export default function CommandMenuTriggerByKeyboardDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === '/' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open: boolean) => !open)
      }
    }

    document.addEventListener('keydown', down)

    return () => document.removeEventListener('keydown', down)
  }, [setIsOpen])
  return (
    <>
      ⌘ /
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuInput placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuSection separator heading="Pages">
            <CommandMenuItem asChild>
              <Link href="#">
                <IconHome2 /> Home
              </Link>
            </CommandMenuItem>
            <CommandMenuItem asChild>
              <Link href="#">
                <IconNotes /> Docs
                <CommandMenuKeyboard keys="⌘k" />
              </Link>
            </CommandMenuItem>
            <CommandMenuItem asChild>
              <Link href="#">
                <IconCube /> Components
              </Link>
            </CommandMenuItem>
          </CommandMenuSection>
          <CommandMenuSection heading="Dashboard">
            <CommandMenuItem asChild>
              <Link href="#">
                <IconCreditCard /> Billing
              </Link>
            </CommandMenuItem>
            <CommandMenuItem asChild>
              <Link href="#">
                <IconGear /> Settings
                <CommandMenuKeyboard keys="⌘s" />
              </Link>
            </CommandMenuItem>
            <CommandMenuItem asChild>
              <Link href="#">
                <IconShield /> Security
              </Link>
            </CommandMenuItem>
          </CommandMenuSection>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}
