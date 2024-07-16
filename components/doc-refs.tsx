'use client'

import type { FC, SVGProps } from 'react'

import {
    AdobeLogo,
    AstroLogo,
    CmdkLogo,
    FramerLogo,
    GithubLogo,
    InertiaLogo,
    LaravelLogo,
    Logo,
    LucideLogo,
    NextLogo,
    RemixLogo,
    TailwindLogo,
    ViteLogo
} from '@/components/logo'
import { cn } from '@/lib/utils'
import { BellIcon } from 'lucide-react'
import { Menu, MenuItem } from 'react-aria-components'
import { buttonVariants } from 'ui'

export function DocRefs({ references }: any) {
    const urls = references.map((url: string) => {
        let title = ''
        let icon: FC<SVGProps<SVGSVGElement>>

        switch (true) {
            case url.includes('react-spectrum'):
                title = 'Props Reference'
                icon = AdobeLogo
                break
            case url.includes('laravel'):
                title = 'Laravel'
                icon = LaravelLogo
                break
            case url.includes('vite'):
                title = 'Vite'
                icon = ViteLogo
                break
            case url.includes('inertia'):
                title = 'Inertia.Js'
                icon = InertiaLogo
                break
            case url.includes('remix.run'):
                title = 'Remix'
                icon = RemixLogo
                break
            case url.includes('nextjs'):
                title = 'Next.Js'
                icon = NextLogo
                break
            case url.includes('astro'):
                title = 'Astro'
                icon = AstroLogo
                break
            case url.includes('paranoid'):
                title = 'Paranoid'
                icon = FramerLogo
                break
            case url.includes('framer'):
                title = 'Framer Motion'
                icon = FramerLogo
                break
            case url.includes('docs/components'):
                title = 'Internal'
                icon = Logo
                break
            case url.includes('tailwind'):
                title = 'Tailwind CSS'
                icon = TailwindLogo
                break
            case url.includes('github'):
                title = 'Github'
                icon = GithubLogo
                break
            case url.includes('lucide'):
                title = 'Lucide Icon'
                icon = LucideLogo
                break
            case url.includes('cmdk'):
                title = 'CMDK'
                icon = CmdkLogo
                break
            case url.includes('sonner'):
                title = 'Sonner'
                icon = BellIcon
                break
            default:
                icon = () => null
        }

        return {
            url,
            title,
            icon
        }
    })

    return (
        <Menu
            className='not-prose flex gap-x-2'
            aria-label='Link References'
            items={urls}
        >
            {(item: any) => (
                <MenuItem
                    target='_blank'
                    className={cn(
                        buttonVariants({
                            variant: 'outline',
                            size: 'sm',
                            className: 'focus:outline-0'
                        })
                    )}
                    id={item.url}
                    href={item.url}
                >
                    <item.icon />
                    {item.title === 'Props Reference' ? (
                        <span>
                            Props <span className='hidden sm:inline'>Reference</span>
                        </span>
                    ) : (
                        <span>{item.title}</span>
                    )}
                </MenuItem>
            )}
        </Menu>
    )
}
