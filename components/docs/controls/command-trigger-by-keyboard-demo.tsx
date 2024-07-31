'use client'

import React from 'react'

import {
  IconCreditCard,
  IconCube,
  IconGear,
  IconHome2,
  IconNotes,
  IconShield
} from '@irsyadadl/paranoid'
import Link from 'next/link'
import {
  Command,
  CommandInput,
  CommandItem,
  CommandKeyboard,
  CommandList,
  CommandSection
} from 'ui'

export default function CommandTriggerByKeyboardDemo() {
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
      <Command isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Quick search..." />
        <CommandList>
          <CommandSection separator heading="Pages">
            <CommandItem asChild>
              <Link href="#">
                <IconHome2 /> Home
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link href="#">
                <IconNotes /> Docs
                <CommandKeyboard keys="⌘k" />
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link href="#">
                <IconCube /> Components
              </Link>
            </CommandItem>
          </CommandSection>
          <CommandSection heading="Dashboard">
            <CommandItem asChild>
              <Link href="#">
                <IconCreditCard /> Billing
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link href="#">
                <IconGear /> Settings
                <CommandKeyboard keys="⌘s" />
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link href="#">
                <IconShield /> Security
              </Link>
            </CommandItem>
          </CommandSection>
        </CommandList>
      </Command>
    </>
  )
}
