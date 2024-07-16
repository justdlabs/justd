'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import * as Primitive from 'react-aria-components'

import { Label } from './field'

export interface ProgressProps extends Primitive.ProgressBarProps {
    label?: string
}

function Progress({ label, ...props }: ProgressProps) {
    return (
        <Primitive.ProgressBar
            {...props}
            className={cn(props.className, 'flex flex-col gap-1')}
        >
            {({ percentage, valueText, isIndeterminate }) => (
                <>
                    <div className='flex justify-between gap-2'>
                        <Label>{label}</Label>
                        <span className='text-sm text-muted-foreground'>{valueText}</span>
                    </div>
                    <div className='relative h-2 min-w-64 overflow-hidden rounded-full bg-secondary outline outline-1 -outline-offset-1 outline-transparent'>
                        {!isIndeterminate ? (
                            <motion.div
                                className='absolute left-0 top-0 h-full rounded-full bg-primary'
                                initial={{ width: '0%' }}
                                animate={{ width: `${percentage}%` }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            />
                        ) : (
                            <motion.div
                                className='absolute top-0 h-full rounded-full bg-primary'
                                initial={{ left: '0%', width: '40%' }}
                                animate={{ left: ['0%', '100%', '0%'] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: 'easeInOut'
                                }}
                            />
                        )}
                    </div>
                </>
            )}
        </Primitive.ProgressBar>
    )
}

export { Progress }
