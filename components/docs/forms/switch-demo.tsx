'use client'

import { Switch } from '@/components/ui'
import { useTheme } from 'next-themes'

export default function SwitchDemo() {
    const { resolvedTheme, setTheme } = useTheme()
    return (
        <Switch onChange={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}>
            Turn on the light
        </Switch>
    )
}
