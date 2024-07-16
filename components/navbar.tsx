'use client'

import React, { useEffect, useId, useState } from 'react'

import { CommandPalette, type OpenCloseProps } from '@/components/command-palette'
import {
    AdobeLogo,
    DLogo,
    FramerLogo,
    GithubLogo,
    Logo,
    LucideLogo,
    ShadcnLogo,
    TailwindLogo
} from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn, useMediaQuery } from '@/lib/utils'
import { LayoutGroup, motion } from 'framer-motion'
import {
    ChevronDownIcon,
    ComputerIcon,
    HomeIcon,
    MenuIcon,
    MoonIcon,
    PaletteIcon,
    SearchIcon,
    SmileIcon,
    StickyNoteIcon,
    SunIcon
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { Collection, type LinkProps } from 'react-aria-components'
import { Button, Keyboard, Link, Menu, Separator, Sheet } from 'ui'

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
                <div className='sticky top-0 z-30 hidden overflow-hidden pb-1 sm:block'>
                    <nav className='border-b bg-background/60 py-2 backdrop-blur-xl'>
                        <div className='mx-auto max-w-screen-2xl px-4'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-x-6'>
                                    <NavbarDropdown />
                                    <Separator orientation='vertical' className='h-6' />
                                    <Collection items={menuItems}>
                                        <NavLink isActive={pathname === '/'} href='/'>
                                            Home
                                        </NavLink>
                                        <NavLink
                                            isActive={pathname?.startsWith('/docs')}
                                            href='/docs/getting-started/introduction'
                                        >
                                            Components
                                        </NavLink>
                                    </Collection>
                                </div>

                                <div className='flex items-center gap-x-2'>
                                    <>
                                        <Button
                                            onPress={() =>
                                                setOpen((open: boolean) => !open)
                                            }
                                            variant='outline'
                                            aria-label='Open command palette'
                                        >
                                            <SearchIcon />
                                            <Keyboard
                                                className='-mr-2 [&_kbd]:min-w-[3ch]'
                                                keys='⌘K'
                                            />
                                        </Button>
                                        <ThemeToggle />
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

export function NavLink({
    href,
    isActive,
    ...props
}: LinkProps & { isActive?: boolean }) {
    return (
        <Link
            href={href}
            className={cn(
                'relative flex items-center gap-x-3 py-2 text-sm transition-colors focus:outline-none sm:py-3',
                isActive ? 'text-accent' : 'text-foreground hover:text-accent',
                props.className
            )}
            {...props}
        >
            <>
                {props.children}
                {isActive && (
                    <motion.span
                        layoutId='current-indicator-navlink'
                        className='absolute inset-x-0 bottom-[-0.550rem] h-0.5 w-full rounded bg-accent'
                    />
                )}
            </>
        </Link>
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
        <nav className='relative z-10 sm:hidden'>
            {!isDesktop && <CommandPalette setOpen={setOpen} open={open} />}
            <div className={cn('-mb-2 flex items-center justify-between pl-4 pr-2 pt-2')}>
                <Button
                    aria-label='Open Menu'
                    className='-ml-2 [&_[data-slot=icon]]:text-foreground'
                    variant='outline'
                    size='icon'
                    onPress={() => setOpenAside((openAside) => !openAside)}
                >
                    <MenuIcon />
                </Button>
                <Link
                    className='rounded focus:outline-none focus:ring-1 focus:ring-primary/20'
                    href='/'
                    aria-label='Logo'
                >
                    <Logo className='size-7' />
                </Link>
                <div className='flex items-center gap-x-1'>
                    <Button
                        // @ts-expect-error
                        onPress={() => setOpen((open: boolean) => !open)}
                        size='icon'
                        variant='outline'
                        aria-label='Open command palette'
                    >
                        <SearchIcon />
                        <Menu.Keyboard className='-mr-2 [&_kbd]:min-w-[3ch]' keys='⌘K' />
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
            {!isDesktop && (
                <Sheet isOpen={openAside} onOpenChange={setOpenAside}>
                    <Sheet.Trigger className='hidden'>Open</Sheet.Trigger>
                    <Sheet.Overlay>
                        <Sheet.Content side='left' closeButton={true}>
                            <Sheet.Header className='mb-4 flex flex-row justify-between py-2'>
                                <NavbarDropdown />
                            </Sheet.Header>
                            <LayoutGroup id={id}>
                                <AsideLink href='/'>
                                    <HomeIcon />
                                    Home
                                </AsideLink>
                                <AsideLink href='/docs/getting-started/introduction'>
                                    <StickyNoteIcon /> Docs
                                </AsideLink>
                                <AsideLink
                                    href='https://github.com/dqnahdliyan'
                                    target='_blank'
                                >
                                    <GithubLogo /> Github
                                </AsideLink>
                            </LayoutGroup>
                        </Sheet.Content>
                    </Sheet.Overlay>
                </Sheet>
            )}
        </nav>
    )
}

export function AsideLink(props: LinkProps) {
    const pathname = usePathname()
    const current = pathname === props.href
    return (
        <Link
            className={cn(
                'relative flex items-center gap-x-3 py-2 text-muted-foreground transition-colors hover:text-foreground focus:outline-none sm:text-sm',
                current && 'text-foreground',
                props.className
            )}
            {...props}
        >
            <>
                {props.children}
                {current && (
                    <motion.span
                        layoutId='sidebar-current-indicator'
                        className='absolute inset-y-2 -left-4 w-0.5 rounded-full bg-foreground'
                    />
                )}
            </>
        </Link>
    )
}

export function NavbarDropdown() {
    const { theme, setTheme } = useTheme()
    return (
        <Menu>
            <Button
                aria-label='Menu'
                variant='ghost'
                className='group -ml-1 [&_svg]:size-5'
            >
                <span className='flex items-center gap-x-2'>
                    <Logo className='-ml-1 size-6' />
                    <span className='font-mono text-base tracking-tight sm:text-sm'>
                        Cleon UI
                    </span>
                    <ChevronDownIcon className='-mr-2 ml-1 size-4 text-muted-foreground transition duration-300 group-hover:text-foreground group-pressed:rotate-180 group-pressed:text-foreground' />
                    <span className='sr-only'>Open menu</span>
                </span>
            </Button>
            <Menu.Content placement='bottom' className='w-64'>
                <Menu.Section>
                    <Menu.Item href='https://github.com/dqnahdliyan' target='_blank'>
                        <GithubLogo />
                        Github
                    </Menu.Item>
                </Menu.Section>
                <Menu.Separator />
                <Menu.Section>
                    <Menu.Header separator>Refs</Menu.Header>
                    <Menu.Item
                        href='https://react-spectrum.adobe.com/react-aria/components.html'
                        target='_blank'
                    >
                        <AdobeLogo />
                        RAC
                    </Menu.Item>
                    <Menu.Item href='https://d.irsyad.co' target='_blank'>
                        <DLogo />
                        D.
                    </Menu.Item>
                    <Menu.Item href='https://ui.shadcn.com' target='_blank'>
                        <ShadcnLogo />
                        Shadcn UI
                    </Menu.Item>
                    <Menu.Item href='https://www.jollyui.dev' target='_blank'>
                        <SmileIcon />
                        Jolly UI
                    </Menu.Item>
                    <Menu.Item href='https://tailwindcss.com/' target='_blank'>
                        <TailwindLogo />
                        Tailwind CSS
                    </Menu.Item>
                    <Menu.Item href='https://irsyad.co/colors' target='_blank'>
                        <PaletteIcon />
                        Colors
                    </Menu.Item>
                    <Menu.Item href='https://lucide.dev/icons' target='_blank'>
                        <LucideLogo />
                        Lucide Icons
                    </Menu.Item>
                    <Menu.Item href='https://www.framer.com/motion/' target='_blank'>
                        <FramerLogo />
                        Framer Motion
                    </Menu.Item>
                </Menu.Section>
                <Menu.Separator />
                <Menu.SubTrigger>
                    <Menu.Item aria-label='Switch Theme'>
                        {theme === 'system' ? (
                            <ComputerIcon />
                        ) : theme === 'dark' ? (
                            <MoonIcon />
                        ) : (
                            <SunIcon />
                        )}
                        <span>Switch Theme</span>
                    </Menu.Item>
                    <Menu.Content aria-labelledby='switch-theme'>
                        <Menu.Item onAction={() => setTheme('system')}>
                            <ComputerIcon />
                            <span>System</span>
                        </Menu.Item>
                        <Menu.Item onAction={() => setTheme('dark')}>
                            <MoonIcon />
                            <span>Dark</span>
                        </Menu.Item>
                        <Menu.Item onAction={() => setTheme('light')}>
                            <SunIcon />
                            <span>Light</span>
                        </Menu.Item>
                    </Menu.Content>
                </Menu.SubTrigger>
            </Menu.Content>
        </Menu>
    )
}
