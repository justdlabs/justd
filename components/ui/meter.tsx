'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { TriangleAlert } from 'lucide-react'
import * as Primitive from 'react-aria-components'

import { Label } from './field'

export interface MeterProps extends Primitive.MeterProps {
    label?: string
}

export function Meter({ label, ...props }: MeterProps) {
    return (
        <Primitive.Meter
            {...props}
            className={cn('flex flex-col gap-1', props.className)}
        >
            {({ percentage, valueText }) => (
                <>
                    <div className='flex w-full justify-between gap-2'>
                        <Label>{label}</Label>
                        <span
                            className={`text-sm ${percentage >= 80 ? 'text-danger' : 'text-muted-foreground'}`}
                        >
                            {percentage >= 80 && (
                                <TriangleAlert
                                    aria-label='Alert'
                                    className='inline-block size-4 align-text-bottom'
                                />
                            )}
                            {' ' + valueText}
                        </span>
                    </div>
                    <div className='relative h-2 min-w-64 rounded-full bg-muted outline outline-1 -outline-offset-1 outline-transparent'>
                        <motion.div
                            className='absolute left-0 top-0 h-full rounded-full'
                            initial={{ width: '0%', backgroundColor: getColor(0) }}
                            animate={{
                                width: `${percentage}%`,
                                backgroundColor: getColor(percentage)
                            }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </>
            )}
        </Primitive.Meter>
    )
}

function getColor(percentage: number) {
    if (percentage < 30) {
        return '#0d6efd' // Blue
    }

    if (percentage < 50) {
        return '#198754' // Green
    }

    if (percentage < 70) {
        return '#ffc107' // Yellow
    }

    if (percentage < 80) {
        return '#f97316' // Orange
    }

    return '#e11d48' // Red
}
