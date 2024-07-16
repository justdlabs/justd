'use client'

import React from 'react'

import { Snippet, Tabs } from 'ui'

interface InstallProps {
    items?: string[]
}

const DocInstallation: React.FC<InstallProps> = ({
    items = ['react-aria-components']
}) => {
    const getInstallCommand = (packageManager: string) => {
        switch (packageManager) {
            case 'bun':
                return `bun add ${items.join(' ')}`
            case 'yarn':
                return `yarn add ${items.join(' ')}`
            case 'pnpm':
                return `pnpm add ${items.join(' ')}`
            case 'npm':
            default:
                return `npm i ${items.join(' ')}`
        }
    }

    return (
        <Tabs aria-label='Packages'>
            <Tabs.List>
                <Tabs.Label className='font-mono' id='bun'>
                    bun
                </Tabs.Label>
                <Tabs.Label className='font-mono' id='yarn'>
                    yarn
                </Tabs.Label>
                <Tabs.Label className='font-mono' id='pnpm'>
                    pnpm
                </Tabs.Label>
                <Tabs.Label className='font-mono' id='npm'>
                    npm
                </Tabs.Label>
            </Tabs.List>
            <Tabs.Content id='bun'>
                <Snippet
                    className='bg-[#0e0e10] text-zinc-200'
                    text={getInstallCommand('bun')}
                />
            </Tabs.Content>
            <Tabs.Content id='yarn'>
                <Snippet
                    className='bg-[#0e0e10] text-zinc-200'
                    text={getInstallCommand('yarn')}
                />
            </Tabs.Content>
            <Tabs.Content id='pnpm'>
                <Snippet
                    className='bg-[#0e0e10] text-zinc-200'
                    text={getInstallCommand('pnpm')}
                />
            </Tabs.Content>
            <Tabs.Content id='npm'>
                <Snippet
                    className='bg-[#0e0e10] text-zinc-200'
                    text={getInstallCommand('npm')}
                />
            </Tabs.Content>
        </Tabs>
    )
}

export { DocInstallation }
