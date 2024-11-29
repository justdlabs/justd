"use client"

import React from "react"

import type { SidebarItem } from "@/components/aside"
import sidebar from "@/resources/lib/sidebar.json"
import { IconBrandJustd, IconColors, IconColorSwatch, IconCube, IconHome, IconNotes } from "justd-icons"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { CommandMenu, useMediaQuery } from "ui"

export interface OpenCloseProps {
  openCmd: boolean
  setOpen?: (isOpen: boolean) => void
}

export function CommandPalette({ openCmd, setOpen }: OpenCloseProps) {
  const router = useRouter()
  const pathname = usePathname()
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        // @ts-ignore
        setOpen((open: boolean) => !open)
      }
    }

    document.addEventListener("keydown", down)

    return () => document.removeEventListener("keydown", down)
  }, [pathname, setOpen])

  React.useEffect(() => {
    if (setOpen) {
      setOpen(false)
    }
  }, [pathname, setOpen])

  const isDesktop = useMediaQuery("(min-width: 1024px)")

  return (
    <CommandMenu classNames={{ content: "backdrop-blur bg-overlay/90" }} isOpen={openCmd} onOpenChange={setOpen}>
      <CommandMenu.Input autoFocus={isDesktop} placeholder="Quick search..." />
      <CommandMenu.List>
        <CommandMenu.Section separator heading="Pages">
          <CommandMenu.Item value="home" asChild>
            <Link href="/">
              <IconHome /> Home
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="documenation" asChild>
            <Link href="/docs/getting-started/installation">
              <IconNotes /> Docs
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="components" asChild>
            <Link href="/components">
              <IconCube /> Components
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="colors" asChild>
            <Link href="/colors">
              <IconColors /> Colors
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="icons" asChild>
            <Link href="/icons">
              <IconBrandJustd /> Icons
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="themes" asChild>
            <Link href="/themes">
              <IconColorSwatch /> Themes
            </Link>
          </CommandMenu.Item>
        </CommandMenu.Section>
        {sidebar
          .filter((item) => item.title !== "Components")
          .map((item) => (
            <CommandMenu.Section key={item.slug || item.title} heading={item.title}>
              {item.children?.map((child: SidebarItem) => (
                <CommandMenu.Item
                  value={child.title}
                  className="pl-[2rem] flex justify-between items-center"
                  key={child.slug || child.title}
                  onSelect={() => router.push(`/${child.slug}`)}
                >
                  {child.title}
                </CommandMenu.Item>
              ))}
            </CommandMenu.Section>
          ))}

        {sidebar[3].children.map((item: SidebarItem) => (
          <CommandMenu.Section key={item.slug || item.title} heading={item.title}>
            {item.children?.map((child: SidebarItem) => (
              <CommandMenu.Item
                value={child.title}
                className="pl-[2rem] flex justify-between items-center"
                key={child.slug || child.title}
                onSelect={() => router.push(`/${child.slug}`)}
              >
                {child.title}
                {child.status && (
                  <CommandMenu.Description className="uppercase text-[0.65rem]">
                    {child?.status}
                  </CommandMenu.Description>
                )}
              </CommandMenu.Item>
            ))}
          </CommandMenu.Section>
        ))}
      </CommandMenu.List>
    </CommandMenu>
  )
}
