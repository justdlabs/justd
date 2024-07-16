'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from 'ui'

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <Button
            variant='outline'
            size='icon'
            aria-label={
                'Switch to ' + resolvedTheme === 'light' ? 'dark' : 'light' + 'mode'
            }
            onPress={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        >
            <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </Button>
    )
}
