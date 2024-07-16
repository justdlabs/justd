'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { OTPInput, OTPInputContext } from 'input-otp'
import { Circle } from 'lucide-react'

interface InputOTPSubComponents {
    Group: typeof InputOTPGroup
    Slot: typeof InputOTPSlot
    Separator: typeof InputOTPSeparator
}

type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput>
type InputOTPComponent = React.ForwardRefExoticComponent<InputOTPProps> &
    InputOTPSubComponents

const InputOTP: InputOTPComponent = React.forwardRef<
    React.ElementRef<typeof OTPInput>,
    React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
    <OTPInput
        data-1p-ignore
        ref={ref}
        containerClassName={cn(
            'flex items-center gap-2 has-[:disabled]:opacity-70',
            containerClassName
        )}
        className={cn('disabled:cursor-not-allowed', className)}
        {...props}
    />
)) as InputOTPComponent
InputOTP.displayName = 'InputOTP'

const InputOTPGroup = React.forwardRef<
    React.ElementRef<'div'>,
    React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center gap-x-1.5', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'

const InputOTPSlot = React.forwardRef<
    React.ElementRef<'div'>,
    React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext)
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

    return (
        <div
            ref={ref}
            className={cn(
                'relative flex size-10 items-center justify-center rounded-md border border-input text-sm transition-all',
                isActive && 'z-10 border-primary ring-4 ring-primary/20',
                className
            )}
            {...props}
        >
            {char}
            {hasFakeCaret && (
                <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
                    <div className='animate-caret-blink h-4 w-px bg-foreground duration-1000' />
                </div>
            )}
        </div>
    )
})
InputOTPSlot.displayName = 'InputOTPSlot'

const InputOTPSeparator = React.forwardRef<
    React.ElementRef<'div'>,
    React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
    <div ref={ref} role='separator' {...props}>
        <Circle className='size-2 fill-inherit' />
    </div>
))
InputOTPSeparator.displayName = 'InputOTPSeparator'

InputOTP.Group = InputOTPGroup
InputOTP.Slot = InputOTPSlot
InputOTP.Separator = InputOTPSeparator

export { InputOTP }
