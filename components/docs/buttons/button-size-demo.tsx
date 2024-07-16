'use client'

import { NextLogo } from '@/components/logo'
import { Button } from '@/components/ui'

export default function ButtonSizeDemo() {
    return (
        <div className='flex gap-2'>
            <Button size='sm'>Small</Button>
            <Button>Medium (Default)</Button>
            <Button size='lg'>Large</Button>
            <Button size='icon'>
                <NextLogo />
            </Button>
        </div>
    )
}
