'use client'

import { Button, Popover } from '@/components/ui'

export default function PopoverDemo() {
    return (
        <Popover>
            <Button variant='outline'>Forgot Password</Button>
            <Popover.Content className='w-[28rem]'>
                <Popover.Header>
                    <Popover.Title>Email</Popover.Title>
                    <Popover.Description>
                        We'll send you an email to log in.
                    </Popover.Description>
                </Popover.Header>
                <Popover.Footer>
                    <Button>Send Login Link</Button>
                </Popover.Footer>
            </Popover.Content>
        </Popover>
    )
}
