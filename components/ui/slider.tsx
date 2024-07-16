'use client'

import * as React from 'react'

import { useSlotId } from '@react-aria/utils'
import * as Primitive from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

import { Description, Label } from './field'

const sliderStyles = tv({
    slots: {
        root: 'flex flex-col gap-2 orientation-horizontal:w-full orientation-vertical:h-64 orientation-vertical:items-center disabled:opacity-70',
        track: [
            'group/track relative cursor-pointer rounded-full bg-secondary disabled:cursor-default disabled:bg-muted',
            'grow orientation-horizontal:h-2 orientation-horizontal:w-full orientation-vertical:w-2 orientation-vertical:flex-1'
        ],
        filler: [
            'rounded-full bg-primary group-disabled/track:bg-foreground',
            'group-orientation-horizontal/top-0 pointer-events-none absolute group-orientation-horizontal/track:h-full group-orientation-vertical/track:bottom-0 group-orientation-vertical/track:w-full'
        ],
        thumb: [
            'outline-none focus:outline-none focus:ring-4 focus:ring-primary/20',
            'rounded-full bg-white shadow-md transition-[width,height]',
            'absolute left-[50%] top-[50%] block !-translate-x-1/2 !-translate-y-1/2',
            'disabled:border disabled:border-secondary disabled:bg-secondary',
            'orientation-horizontal:h-2 orientation-vertical:w-2',
            'size-4 dragging:size-5'
        ],
        valueLabel: 'text-sm text-muted-foreground'
    }
})

const { filler, thumb, root } = sliderStyles()

interface SliderSubComponents {
    Controls: typeof SliderControls
    Filler: typeof SliderFiller
    Thumb: typeof SliderThumb
    Root: typeof SliderRoot
    Track: typeof SliderTrack
    ValueLabel: typeof SliderValueLabel
}

interface SliderProps extends SliderRootProps, VariantProps<typeof sliderStyles> {
    label?: Primitive.LabelProps['children']
    description?: Primitive.TextProps['children']
    showValue?: boolean | ((value: number[]) => string)
}

type SliderComponent = React.ForwardRefExoticComponent<SliderProps> & SliderSubComponents

const Slider: SliderComponent = React.forwardRef<
    React.ElementRef<typeof Primitive.Slider>,
    SliderProps
>(({ label, description, showValue = true, ...props }, ref) => (
    <SliderRoot ref={ref} {...props}>
        <div className='flex items-center justify-between gap-2'>
            {label && <Label>{label}</Label>}
            {(showValue || typeof showValue === 'function') && (
                <SliderValueLabel>
                    {({ state }) =>
                        typeof showValue === 'function'
                            ? showValue(state.values)
                            : undefined
                    }
                </SliderValueLabel>
            )}
        </div>
        <SliderControls />
        {description && <Description>{description}</Description>}
    </SliderRoot>
)) as SliderComponent
Slider.displayName = 'Slider'

type SliderRootProps = Primitive.SliderProps
const SliderRoot = React.forwardRef(
    (props: SliderRootProps, ref: React.Ref<HTMLDivElement>) => {
        const descriptionId = useSlotId()
        return (
            <Primitive.TextContext.Provider
                value={{ slots: { description: { id: descriptionId } } }}
            >
                <Primitive.Slider
                    ref={ref}
                    aria-describedby={descriptionId}
                    {...props}
                    className={Primitive.composeRenderProps(
                        props.className,
                        (className) => root({ className })
                    )}
                />
            </Primitive.TextContext.Provider>
        )
    }
)
SliderRoot.displayName = 'SliderRoot'

type SliderControlsProps = SliderTrackProps & VariantProps<typeof sliderStyles>
const SliderControls = (props: SliderControlsProps) => {
    const { values } = React.useContext(Primitive.SliderStateContext)
    return (
        <SliderTrack {...props}>
            <SliderFiller />
            {values.map((_, i) => (
                <SliderThumb key={i} index={i} />
            ))}
        </SliderTrack>
    )
}

type SliderTrackProps = Primitive.SliderTrackProps & VariantProps<typeof sliderStyles>
const SliderTrack = (props: SliderTrackProps) => {
    const { track } = sliderStyles()
    return (
        <Primitive.SliderTrack
            {...props}
            className={Primitive.composeRenderProps(props.className, (className) =>
                track({ className })
            )}
        />
    )
}

type SliderFillerProps = React.HTMLAttributes<HTMLDivElement>
const SliderFiller = (props: SliderFillerProps) => {
    const { orientation, getThumbPercent, values } = React.useContext(
        Primitive.SliderStateContext
    )
    return (
        <div
            {...props}
            style={
                values.length === 1
                    ? orientation === 'horizontal'
                        ? {
                              width: `${getThumbPercent(0) * 100}%`
                          }
                        : { height: `${getThumbPercent(0) * 100}%` }
                    : orientation === 'horizontal'
                      ? {
                            left: `${getThumbPercent(0) * 100}%`,
                            width: `${Math.abs(getThumbPercent(0) - getThumbPercent(1)) * 100}%`
                        }
                      : {
                            bottom: `${getThumbPercent(0) * 100}%`,
                            height: `${Math.abs(getThumbPercent(0) - getThumbPercent(1)) * 100}%`
                        }
            }
            className={filler({ className: props.className })}
        />
    )
}

type SliderThumbProps = Primitive.SliderThumbProps & VariantProps<typeof sliderStyles>
const SliderThumb = (props: SliderThumbProps) => {
    return (
        <Primitive.SliderThumb
            {...props}
            className={Primitive.composeRenderProps(props.className, (className) =>
                thumb({ className })
            )}
        />
    )
}

type LabelProps = Primitive.SliderOutputProps
const SliderValueLabel = (props: LabelProps) => {
    const { valueLabel } = sliderStyles()
    return (
        <Primitive.SliderOutput
            {...props}
            className={Primitive.composeRenderProps(props.className, (className) =>
                valueLabel({ className })
            )}
        >
            {Primitive.composeRenderProps(
                props.children,
                (children, { state }) =>
                    children ??
                    state.values.map((_, i) => state.getThumbValueLabel(i)).join(' - ')
            )}
        </Primitive.SliderOutput>
    )
}

Slider.Controls = SliderControls
Slider.Filler = SliderFiller
Slider.Thumb = SliderThumb
Slider.Root = SliderRoot
Slider.Track = SliderTrack
Slider.ValueLabel = SliderValueLabel

export { Slider }
