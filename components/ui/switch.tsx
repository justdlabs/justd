'use client'

import { cn } from '@/lib/utils'
import * as Primitive from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

const trackStyles = tv({
    base: 'mr-2 h-5 w-8 cursor-pointer rounded-full border-2 border-transparent bg-muted transition duration-200',
    variants: {
        variant: {
            primary: 'group-selected:bg-primary',
            secondary: 'group-selected:bg-secondary',
            success: 'group-selected:bg-success',
            danger: 'group-selected:bg-danger',
            warning: 'group-selected:bg-warning',
            info: 'group-selected:bg-info'
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
})

interface SwitchProps extends Primitive.SwitchProps, VariantProps<typeof trackStyles> {}

const Switch = ({ children, variant, className, ...props }: SwitchProps) => {
    return (
        <Primitive.Switch
            {...props}
            className={(values) =>
                cn(
                    'group inline-flex touch-none items-center disabled:opacity-70 lg:text-sm',
                    typeof className === 'function' ? className(values) : className
                )
            }
            style={{ WebkitTapHighlightColor: 'transparent' }}
        >
            {(values) => (
                <>
                    <span className={trackStyles({ variant: variant })}>
                        <span className='block size-4 origin-right rounded-full bg-white shadow transition-all duration-200 group-pressed:w-5 group-selected:ml-3 group-selected:group-data-[pressed]:ml-2' />
                    </span>
                    {typeof children === 'function' ? children(values) : children}
                </>
            )}
        </Primitive.Switch>
    )
}

export { Switch }
