'use client'

import { XLogo } from '@/components/logo'
import { TextField } from '@/components/ui'

export default function TextFieldDemo() {
    return (
        <div className='flex flex-col gap-4'>
            <TextField label='Twitter' suffix={<XLogo className='h-4 w-4' />} />
            <TextField label='Sites' prefix='https://' suffix='.com' />
        </div>
    )
}
