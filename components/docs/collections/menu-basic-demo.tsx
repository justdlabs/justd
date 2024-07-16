'use client'

import { Menu } from '@/components/ui'

export default function MenuBasicDemo() {
    return (
        <Menu>
            <Menu.Trigger aria-labelledby='basic-menu-trigger'>Open</Menu.Trigger>
            <Menu.Content aria-labelledby='basic-menu-trigger' placement='bottom'>
                <Menu.Item>Inbox</Menu.Item>
                <Menu.Item>Sent</Menu.Item>
                <Menu.Item>New Message</Menu.Item>
                <Menu.Item isDanger>Spam</Menu.Item>
                <Menu.Item isDisabled>Outbox</Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
