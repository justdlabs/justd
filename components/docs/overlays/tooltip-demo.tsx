'use client'

import { FacebookLogo, GithubLogo } from '@/components/logo'
import { buttonVariants, Tooltip } from '@/components/ui'

export default function TooltipDemo() {
    return (
        <div className='flex gap-2'>
            <Tooltip>
                <Tooltip.Trigger
                    aria-label='Add My Facebook'
                    className={buttonVariants({
                        variant: 'outline',
                        size: 'icon'
                    })}
                >
                    <FacebookLogo className='h-4 w-4' />
                </Tooltip.Trigger>
                <Tooltip.Content>Add me on Facebook @DiqiNahdliyan</Tooltip.Content>
            </Tooltip>
            <Tooltip>
                <Tooltip.Trigger
                    aria-label='Follow My Github'
                    className={buttonVariants({
                        variant: 'outline',
                        size: 'icon'
                    })}
                >
                    <GithubLogo className='h-4 w-4' />
                </Tooltip.Trigger>
                <Tooltip.Content>Follow me on Github @dqnahdliyan</Tooltip.Content>
            </Tooltip>
        </div>
    )
}
