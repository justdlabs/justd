"use client"

import React, { useEffect, useState } from "react"

import { IconBrandJustd, IconBrandX, IconHamburger, IconSearch } from "justd-icons"
import { LayoutGroup } from "motion/react"
import { usePathname } from "next/navigation"
import { Button, Link, Sheet, buttonStyles } from "ui"

import { Aside } from "./aside"
import { CommandPalette } from "./command-palette"
import { NavbarDropdown } from "./navbar"
import { ThemeSwitcher } from "./theme-switcher"

export function ResponsiveAside({ openCmd, setOpenCmd }: { openCmd: boolean; setOpenCmd: (open: boolean) => void }) {
  const id = React.useId()
  const [openAside, setOpenAside] = useState(false)
  const pathname = usePathname()

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => setOpenAside(false), [pathname])

  return (
    <nav className="relative z-10 lg:hidden">
      <CommandPalette setOpen={setOpenCmd} openCmd={openCmd} />
      <div className="flex justify-between items-center pt-2 pr-2 pl-4 -mb-2">
        <Button
          aria-label="Open Menu."
          className="-ml-2 **:data-[slot=icon]:text-fg"
          appearance="outline"
          size="square-petite"
          onPress={() => {
            setOpenAside(true)
          }}
        >
          <IconHamburger />
        </Button>
        <Link className="-mr-6 rounded data-focused:outline-hidden" href="/" aria-label="Logo">
          <IconBrandJustd className="size-6" />
        </Link>
        <div className="flex gap-x-1 items-center">
          <Button
            onPress={() => setOpenCmd(true)}
            size="square-petite"
            appearance="outline"
            aria-label="Open command palette"
          >
            <IconSearch />
          </Button>
          <ThemeSwitcher />
          <Link
            href="https://x.com/irsyadadl"
            aria-label="Follow me on twitter"
            className={buttonStyles({ appearance: "outline", size: "square-petite" })}
          >
            <IconBrandX />
          </Link>
        </div>
      </div>
      <Sheet.Content
        aria-label="Docs Menu"
        isOpen={openAside}
        onOpenChange={setOpenAside}
        classNames={{ content: "w-[19rem]" }}
        side="left"
        closeButton={true}
      >
        <Sheet.Header className="flex flex-row justify-between py-2 mb-4">
          <NavbarDropdown />
        </Sheet.Header>
        <Sheet.Body className="px-2">
          <LayoutGroup id={id}>
            <Aside />
          </LayoutGroup>
        </Sheet.Body>
      </Sheet.Content>
    </nav>
  )
}
