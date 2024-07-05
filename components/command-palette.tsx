'use client'

import { docs } from '@/.velite'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { CommandEmpty, CommandInput, CommandItem, CommandList, CommandModal, CommandSection, useMediaQuery } from 'ui'

export interface OpenCloseProps {
  open: boolean
  setOpen?: (isOpen: boolean) => void
}
export function CommandPalette({ open, setOpen }: OpenCloseProps) {
  const router = useRouter()
  const pathname = usePathname()
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k') {
        e.preventDefault()
        // @ts-ignore
        setOpen((open: boolean) => !open)
      }
    }

    document.addEventListener('keydown', down)

    return () => document.removeEventListener('keydown', down)
  }, [pathname, setOpen])

  React.useEffect(() => {
    if (setOpen) {
      setOpen(false)
    }
  }, [pathname, setOpen])

  const isDesktop = useMediaQuery('(min-width: 1024px)')
  return (
    <CommandModal isOpen={open} onOpenChange={setOpen}>
      <CommandInput autoFocus={isDesktop} placeholder="Search Component" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandSection heading="Components">
          {docs.map((item, i) => (
            <CommandItem key={i} onSelect={() => router.push(`/${item.slug}`)}>
              {item.title}
            </CommandItem>
          ))}
        </CommandSection>
      </CommandList>
    </CommandModal>
  )
}
