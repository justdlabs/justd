import React from 'react'

import { InputOTP } from '@/components/ui'

export default function InputOtpControlledDemo() {
    const [value, setValue] = React.useState('')
    return (
        <div className='space-y-2'>
            <InputOTP maxLength={6} value={value} onChange={setValue}>
                <InputOTP.Group>
                    {[...Array(6)].map((_, index) => (
                        <InputOTP.Slot key={index} index={index} />
                    ))}
                </InputOTP.Group>
            </InputOTP>

            <div className='text-center text-sm'>
                {value === '' ? <>PIN</> : <>YOUR PIN: {value}</>}
            </div>
        </div>
    )
}
