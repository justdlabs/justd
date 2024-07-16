'use client'

import React from 'react'

import { Description, Switch } from '@/components/ui'

export default function SwitchControlledDemo() {
    const [darkMode, setDarkMode] = React.useState(false)
    return (
        <>
            <Switch isSelected={darkMode} onChange={setDarkMode} value='dark_mode'>
                Enable Dark Mode
            </Switch>

            <Description className='mt-2 block [&>strong]:text-foreground'>
                Dark Mode is <strong>{darkMode ? 'enabled' : 'disabled'}</strong>
            </Description>
        </>
    )
}
