'use client'

import React from 'react'

import { docs } from '@/.velite'
import { useMediaQuery } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import { Command } from 'ui'

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
        <Command.Modal isOpen={open} onOpenChange={setOpen}>
            <Command.Input autoFocus={isDesktop} placeholder='Search Component' />
            <Command.List>
                <Command.Empty>No results found.</Command.Empty>
                <Command.Group heading='Components'>
                    {docs.map((item, i) => (
                        <Command.Item
                            key={i}
                            onSelect={() => router.push(`/${item.slug}`)}
                        >
                            {item.title}
                        </Command.Item>
                    ))}
                </Command.Group>
            </Command.List>
        </Command.Modal>
    )
}
