'use client'

import * as Primitive from 'react-aria-components'
import { tv } from 'tailwind-variants'

const styles = tv({
    base: [
        'inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-base font-medium ring-offset-background transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 pressed:outline-none disabled:pointer-events-none disabled:opacity-70 sm:text-sm [&_svg]:size-4'
    ],
    variants: {
        isSelected: {
            false: 'pressed:bg-muted-foreground hover:bg-muted',
            true: 'bg-secondary hover:bg-muted pressed:bg-muted-foreground'
        },
        isDisabled: {
            true: 'border-black/5 bg-background text-muted-foreground'
        }
    }
})

function ToggleButton(props: Primitive.ToggleButtonProps) {
    return (
        <Primitive.ToggleButton
            {...props}
            className={Primitive.composeRenderProps(
                props.className,
                (className, renderProps) => styles({ ...renderProps, className })
            )}
        />
    )
}

export { ToggleButton }
