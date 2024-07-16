'use client'

import React, { useState } from 'react'

import { OptionPreview } from '@/components/docs/outside/option-preview'
import { FacebookLogo, XLogo } from '@/components/logo'
import { Avatar, Menu, Select, Switch } from '@/components/ui'
import type { Placement } from '@react-types/overlays'
import {
    ChevronsUpDown,
    Hash,
    Headphones,
    LogOut,
    Mail,
    MessageCircle,
    Plus,
    Settings,
    Share2,
    UserPlus
} from 'lucide-react'

import { placements } from './single-menu-demo'

export default function MenuWithIconDemo() {
    const [showArrow, setShowArrow] = useState(false)
    const [selected, setSelected] = React.useState<Placement>('bottom')
    return (
        <>
            <OptionPreview className='space-y-2'>
                <Switch isSelected={showArrow} onChange={() => setShowArrow(!showArrow)}>
                    Show arrow
                </Switch>
                <Select
                    aria-label='placement'
                    className='[&>.btr]:h-8'
                    selectedKey={selected}
                    onSelectionChange={(v) => setSelected(v as Placement)}
                    items={placements}
                >
                    {(item) => <Select.Item id={item.name}>{item.name}</Select.Item>}
                </Select>
            </OptionPreview>
            <Menu>
                <Menu.Trigger aria-labelledby='basic-menu-trigger'>
                    <Avatar className='size-10' initials='DQ' />
                </Menu.Trigger>
                <Menu.Content
                    showArrow={showArrow}
                    placement={selected}
                    className='min-w-64'
                >
                    <Menu.Section>
                        <Menu.Header separator>
                            <span className='block'>DQ Nahdliyan</span>
                            <span className='font-normal text-muted-foreground'>
                                @dqnahdliyan
                            </span>
                        </Menu.Header>
                    </Menu.Section>
                    <Menu.Item onAction={() => setShowArrow(!showArrow)}>
                        <ChevronsUpDown />
                        {showArrow ? 'Hide' : 'Show'} Arrow
                    </Menu.Item>
                    <Menu.Item>
                        <Settings />
                        Settings
                    </Menu.Item>
                    <Menu.Item href='#'>
                        <Plus />
                        Create Team
                    </Menu.Item>
                    <Menu.Item href='#'>
                        <Hash />
                        Command Menu
                        <Menu.Keyboard keys='⌘K' />
                    </Menu.Item>
                    <Menu.SubTrigger>
                        <Menu.Item>
                            <UserPlus />
                            <span>Invite users</span>
                        </Menu.Item>
                        <Menu.Content
                            aria-labelledby='basic-menu-trigger-submenu'
                            offset={8}
                        >
                            <Menu.Item>
                                <Mail />
                                <span>Email</span>
                            </Menu.Item>
                            <Menu.Item>
                                <MessageCircle />
                                <span>Message</span>
                            </Menu.Item>
                            <Menu.Separator />
                            <Menu.SubTrigger>
                                <Menu.Item>
                                    <Share2 />
                                    <span>Share</span>
                                </Menu.Item>
                                <Menu.Content
                                    aria-labelledby='basic-menu-trigger-submenu'
                                    offset={8}
                                >
                                    <Menu.Item>
                                        <XLogo className='size-4' />
                                        <span>Twitter</span>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <FacebookLogo className='size-4' />
                                        <span>Facebook</span>
                                    </Menu.Item>
                                </Menu.Content>
                            </Menu.SubTrigger>
                        </Menu.Content>
                    </Menu.SubTrigger>
                    <Menu.Separator />
                    <Menu.Item href='#'>
                        <Headphones />
                        Contact Support
                    </Menu.Item>
                    <Menu.Separator />
                    <Menu.Item>
                        <LogOut />
                        Log out
                    </Menu.Item>
                </Menu.Content>
            </Menu>
        </>
    )
}
