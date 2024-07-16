'use client'

import React from 'react'

import { GithubLogo } from '@/components/logo'
import {
    Avatar,
    Button,
    Checkbox,
    Description,
    Menu,
    Modal,
    Select,
    Sheet,
    TextField
} from '@/components/ui'
import {
    BookKey,
    Filter,
    Heart,
    LogOut,
    MessageCircle,
    Settings,
    User
} from 'lucide-react'
import { Group, Menu as PrimitiveMenu } from 'react-aria-components'

export default function SheetMenuDemo() {
    const [isOpen, setIsOpen] = React.useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    return (
        <>
            <Modal.Overlay isOpen={isOpen} onOpenChange={setIsOpen}>
                <Modal.Content>
                    <Modal.Header>
                        <Modal.Title>Edit status</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='space-y-4'>
                            <TextField
                                prefix={<GithubLogo className='size-4' />}
                                label='Status'
                                placeholder="What's your status?"
                            />
                            <Group>
                                <Checkbox>Busy</Checkbox>
                                <Description>
                                    When others mention you, assign you, or request your
                                    review, GitHub will let them know that you have
                                    limited availability.
                                </Description>
                            </Group>
                            <Select label='Clear Status'>
                                <Select.Item>Never</Select.Item>
                                <Select.Item>in 30 Minutes</Select.Item>
                                <Select.Item>in 1 Hour</Select.Item>
                                <Select.Item>in 8 Hours</Select.Item>
                                <Select.Item>after Today</Select.Item>
                                <Select.Item>after a Week</Select.Item>
                                <Select.Item>after a Month</Select.Item>
                            </Select>
                            <Select label='Visible to'>
                                <Select.Item>Everyone</Select.Item>
                                <Select.Item>Organization</Select.Item>
                                <Select.Item>Public</Select.Item>
                            </Select>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Modal.Close>Clear Status</Modal.Close>
                        <Button onPress={closeModal}>Set Status</Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal.Overlay>
            <Sheet>
                <Sheet.Trigger aria-labelledby='open' aria-label='Open menu'>
                    <Avatar
                        initials='DQ'
                        alt='DQ'
                        src='https://github.com/dqnahdliyan.png'
                    />
                </Sheet.Trigger>
                <Sheet.Overlay>
                    <Sheet.Content closeButton={false}>
                        <Sheet.Header className='mb-2 flex flex-row items-center gap-x-3'>
                            <Avatar
                                initials='DQ'
                                alt='DQ'
                                src='https://github.com/dqnahdliyan.png'
                            />
                            <div>
                                <Sheet.Title>dqnahdliyan</Sheet.Title>
                                <Sheet.Description>Diqi Nahdliyan</Sheet.Description>
                            </div>
                        </Sheet.Header>
                        <PrimitiveMenu aria-labelledby='Sheet'>
                            <Menu.Item onAction={openModal}>
                                <GithubLogo className='size-4' />
                                Edit Status
                            </Menu.Item>
                            <Menu.Separator />
                            <Menu.Section>
                                <Menu.Item>
                                    <User />
                                    Your profile
                                </Menu.Item>
                                <Menu.Item>
                                    <BookKey /> Your repositories
                                </Menu.Item>
                                <Menu.Item>
                                    <Heart />
                                    Your sponsors
                                </Menu.Item>
                            </Menu.Section>
                            <Menu.Separator />
                            <Menu.Section>
                                <Menu.Item>
                                    <Filter /> Feature preview
                                </Menu.Item>
                                <Menu.Item>
                                    <Settings />
                                    Settings
                                </Menu.Item>
                            </Menu.Section>
                            <Menu.Separator />
                            <Menu.Section>
                                <Menu.Item>
                                    <BookKey /> GitHub Docs
                                </Menu.Item>
                                <Menu.Item>
                                    <User /> GitHub Support
                                </Menu.Item>
                                <Menu.Item>
                                    <MessageCircle /> GitHub Community
                                </Menu.Item>
                            </Menu.Section>
                            <Menu.Separator />
                            <Menu.Item isDanger>
                                <LogOut /> Sign out
                            </Menu.Item>
                        </PrimitiveMenu>
                    </Sheet.Content>
                </Sheet.Overlay>
            </Sheet>
        </>
    )
}
