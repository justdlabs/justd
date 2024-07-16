'use client'

import React from 'react'

import { Button, Drawer } from '@/components/ui'

export default function DrawerBasicDemo() {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <>
            <Button onPress={() => setIsOpen(!isOpen)} variant='outline'>
                Open Drawer
            </Button>
            <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>Next Js</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body>
                        Next.js is an open-source web development framework created by the
                        private company Vercel providing React-based web applications with
                        server-side rendering and static website generation. React
                        documentation mentions Next.js among "Recommended Toolchains"
                        advising it to developers when "building a server-rendered website
                        with Node.js". Where traditional React apps can only render their
                        content in the client-side browser, Next.js extends this
                        functionality to include applications rendered on the server-side.
                        The copyright and trademarks for Next.js are owned by Vercel,
                        which also maintains and leads its open-source development.
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Drawer.Close>Close</Drawer.Close>
                    </Drawer.Footer>
                </Drawer.Content>
            </Drawer>
        </>
    )
}
