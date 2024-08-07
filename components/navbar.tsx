'use client'

import React, { useEffect, useId, useState } from 'react'

import { Aside } from '@/components/aside'
import { CommandPalette, type OpenCloseProps } from '@/components/command-palette'
import { TakeCurrentUrl } from '@/components/take-current-url'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { siteConfig } from '@/resources/config/site'
import { LayoutGroup } from 'framer-motion'
import {
  IconBrandAdobe,
  IconBrandD,
  IconBrandGithub,
  IconBrandParanoid,
  IconBrandTailwindcss,
  IconBrandX,
  IconChevronDown,
  IconColors,
  IconCube,
  IconDeviceDesktop,
  IconHamburger,
  IconHome,
  IconMoon,
  IconSearch,
  IconSun
} from 'justd-icons'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { Collection } from 'react-aria-components'
import {
  Button,
  buttonStyles,
  cn,
  Link,
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuKeyboard,
  MenuSection,
  MenuSeparator,
  Separator,
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SubMenu,
  useMediaQuery
} from 'ui'

import { NavLink } from './nav-item'

const menuItems = [
  { id: 1, label: 'Home', url: '/' },
  { id: 2, label: 'Components', url: '/docs/getting-started/introduction' }
]

export function Navbar() {
  const id = useId()
  const pathname = usePathname()

  const [open, setOpen] = React.useState(false)

  return (
    <>
      <CommandPalette setOpen={setOpen} open={open} />
      <LayoutGroup id={`navigation-${id}`}>
        <div className="sticky xnw2 top-0 z-30 hidden overflow-hidden pb-0 sm:block">
          <nav className="border-b bg-background/95 py-2 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-screen-2xl px-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-6">
                  <NavbarDropdown />
                  <Separator orientation="vertical" className="h-6" />
                  <Collection items={menuItems}>
                    <NavLink isNextLink isActive={pathname === '/'} href="/">
                      Home
                    </NavLink>
                    <NavLink
                      isNextLink
                      isActive={
                        pathname?.startsWith('/docs') && !pathname?.includes('/docs/components')
                      }
                      href="/docs/getting-started/introduction"
                    >
                      Docs
                    </NavLink>
                    <NavLink
                      isNextLink
                      isActive={
                        pathname?.startsWith('/docs/components') || pathname === '/components'
                      }
                      href="/components"
                    >
                      Components
                    </NavLink>
                    <NavLink isNextLink isActive={pathname === '/colors'} href="/colors">
                      Colors
                    </NavLink>
                    <NavLink isNextLink isActive={pathname === '/themes'} href="/themes">
                      Themes
                    </NavLink>
                    <NavLink href="/icons">Icons</NavLink>
                  </Collection>
                </div>

                <div className="flex items-center gap-x-1">
                  <>
                    <Button
                      onPress={() => setOpen((open: boolean) => !open)}
                      size="small"
                      appearance="outline"
                      className="h-9"
                      aria-label="Open command palette"
                    >
                      <IconSearch />

                      <span className="text-muted-fg">Search...</span>

                      <MenuKeyboard className="-mr-2" keys="⌘K" />
                    </Button>
                    <TakeCurrentUrl />
                    <ThemeSwitcher />

                    <Separator orientation="vertical" className="h-7 mx-2" />

                    <Link
                      aria-label="Github Repository"
                      className={buttonStyles({
                        appearance: 'outline',
                        size: 'square-petite',
                        className: '[&_[data-slot=icon]]:text-fg'
                      })}
                      href="/icons"
                    >
                      <IconBrandParanoid />
                    </Link>
                    <Link
                      aria-label="Github Repository"
                      className={buttonStyles({
                        appearance: 'outline',
                        size: 'square-petite',
                        className: '[&_[data-slot=icon]]:text-fg'
                      })}
                      target="_blank"
                      href={siteConfig.repo}
                    >
                      <IconBrandGithub />
                    </Link>
                    <Link
                      aria-label="Follow Update on X"
                      className={buttonStyles({
                        appearance: 'outline',
                        size: 'square-petite',
                        className: '[&_[data-slot=icon]]:text-fg'
                      })}
                      target="_blank"
                      href="https://x.com/irsyadadl"
                    >
                      <IconBrandX />
                    </Link>
                  </>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </LayoutGroup>
      <ResponsiveAside open={open} setOpen={setOpen} />
    </>
  )
}

export function ResponsiveAside({ open, setOpen }: OpenCloseProps) {
  const id = useId()
  const [openAside, setOpenAside] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpenAside(false)
  }, [pathname])

  const isDesktop = useMediaQuery('(min-width: 1024px)')
  return (
    <nav className="sm:hidden z-10 relative">
      {!isDesktop && <CommandPalette setOpen={setOpen} open={open} />}
      <div className={cn('flex items-center justify-between pl-4 pr-2 -mb-2 pt-2')}>
        <Button
          aria-label="Open Menu"
          className="-ml-2 [&_[data-slot=icon]]:text-fg"
          appearance="outline"
          size="square-petite"
          onPress={() => setOpenAside((open) => !open)}
        >
          <IconHamburger />
        </Button>
        <Link
          className="focus:outline-none -mr-6 focus:ring-1 focus:ring-primary-500 rounded"
          href="/"
          aria-label="Logo"
        >
          <IconBrandD className="size-6" />
        </Link>
        <div className="flex items-center gap-x-1">
          <Button
            // @ts-expect-error - TODO: fix types
            onPress={() => setOpen((open: boolean) => !open)}
            size="square-petite"
            appearance="outline"
            aria-label="Open command palette"
          >
            <IconSearch />
            <MenuKeyboard className="-mr-2 [&_kbd]:min-w-[3ch]" keys="⌘K" />
          </Button>
          <TakeCurrentUrl />
          <ThemeSwitcher />
        </div>
      </div>
      {!isDesktop && (
        <Sheet isOpen={openAside} onOpenChange={setOpenAside}>
          <SheetContent classNames={{ content: 'w-[19rem]' }} side="left" closeButton={true}>
            <SheetHeader className="mb-4 flex flex-row justify-between py-2">
              <NavbarDropdown />
            </SheetHeader>
            <SheetBody className="px-2">
              <LayoutGroup id={id}>
                <Aside />
              </LayoutGroup>
            </SheetBody>
          </SheetContent>
        </Sheet>
      )}
    </nav>
  )
}

export function NavbarDropdown() {
  const { theme, setTheme } = useTheme()
  return (
    <Menu>
      <Button aria-label="Menu" appearance="plain" className="group -ml-1 [&_svg]:size-5">
        <span className="flex items-center gap-x-2">
          <IconBrandD className="-ml-1 size-6" />
          <span className="font-mono text-base tracking-tight sm:text-sm">{siteConfig.name}</span>
          <IconChevronDown className="-mr-2 ml-1 size-4 text-muted-fg transition duration-300 group-hover:text-fg group-pressed:rotate-180 group-pressed:text-fg" />
          <span className="sr-only">Open menu</span>
        </span>
      </Button>
      <MenuContent placement="bottom" className="w-64">
        <MenuItem href="/">
          <IconHome />
          Home
        </MenuItem>
        <MenuItem href="/components">
          <IconCube />
          Components
        </MenuItem>
        <MenuItem href="/colors">
          <IconColors />
          Colors
        </MenuItem>
        <MenuSeparator />
        <MenuSection>
          <MenuItem href="https://x.com/intent/follow?screen_name=getjustdlabs" target="_blank">
            <IconBrandX />X / Twitter
          </MenuItem>
          <MenuItem href="https://github.com/justdlabs" target="_blank">
            <IconBrandGithub />
            Github
          </MenuItem>
        </MenuSection>
        <MenuSeparator />
        <MenuSection>
          <MenuHeader separator>Refs</MenuHeader>
          <MenuItem href="/icons">
            <IconBrandParanoid />
            Icons
          </MenuItem>
          <MenuItem
            href="https://react-spectrum.adobe.com/react-aria/components.html"
            target="_blank"
          >
            <IconBrandAdobe />
            RAC
          </MenuItem>
          <MenuItem href="https://tailwindcss.com" target="_blank">
            <IconBrandTailwindcss />
            Tailwind CSS
          </MenuItem>
        </MenuSection>
        <MenuSeparator />
        <SubMenu>
          <MenuItem>
            {theme === 'system' ? (
              <IconDeviceDesktop />
            ) : theme === 'dark' ? (
              <IconMoon />
            ) : (
              <IconSun />
            )}
            <span>Switch Theme</span>
          </MenuItem>
          <MenuContent>
            <MenuItem onAction={() => setTheme('system')}>
              <IconDeviceDesktop />
              <span>System</span>
            </MenuItem>
            <MenuItem onAction={() => setTheme('dark')}>
              <IconMoon />
              <span>Dark</span>
            </MenuItem>
            <MenuItem onAction={() => setTheme('light')}>
              <IconSun />
              <span>Light</span>
            </MenuItem>
          </MenuContent>
        </SubMenu>
      </MenuContent>
    </Menu>
  )
}
