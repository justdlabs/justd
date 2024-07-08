'use client'

import { useSlotId } from '@react-aria/utils'
import * as React from 'react'
import {
  composeRenderProps,
  type LabelProps,
  SliderOutput as SliderOutputPrimitive,
  type SliderOutputProps as SliderOutputPrimitiveProps,
  Slider as SliderPrimitive,
  type SliderProps as SliderPrimitiveProps,
  SliderStateContext as SliderStateContextPrimitive,
  SliderThumb as SliderThumbPrimitive,
  type SliderThumbProps as SliderThumbPrimitiveProps,
  SliderTrack as SliderTrackPrimitive,
  type SliderTrackProps as SliderTrackPrimitiveProps,
  TextContext as TextContextPrimitive,
  type TextProps
} from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'
import { Description, Label } from './field'

const sliderStyles = tv({
  slots: {
    root: 'flex disabled:opacity-50 flex-col gap-2 orientation-horizontal:w-full orientation-vertical:h-64 orientation-vertical:items-center',
    track: [
      'relative group/track rounded-full bg-zinc-200 dark:bg-zinc-800 cursor-pointer disabled:cursor-default disabled:bg-bg-disabled',
      'grow orientation-vertical:flex-1 orientation-vertical:w-2 orientation-horizontal:w-full orientation-horizontal:h-2'
    ],
    filler: [
      'rounded-full bg-primary group-disabled/track:bg-bg-disabled',
      'pointer-events-none absolute group-orientation-horizontal/top-0 group-orientation-vertical/track:w-full group-orientation-vertical/track:bottom-0 group-orientation-horizontal/track:h-full'
    ],
    thumb: [
      'outline-none focus:ring-4 focus:ring-primary/20 focus:outline-none forced-colors:outline-[Highlight]',
      'rounded-full bg-white shadow-md transition-[width,height]',
      'absolute left-[50%] top-[50%] block !-translate-x-1/2 !-translate-y-1/2',
      'disabled:bg-bg-disabled disabled:border disabled:border-bg',
      'orientation-vertical:w-2 orientation-horizontal:h-2',
      'size-4 dragging:size-5'
    ],
    valueLabel: 'text-muted-fg text-sm'
  }
})

const { filler, thumb, root } = sliderStyles()

interface SliderProps extends SliderRootProps, VariantProps<typeof sliderStyles> {
  label?: LabelProps['children']
  description?: TextProps['children']
  showValue?: boolean | ((value: number[]) => string)
}
const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive>, SliderProps>(
  ({ label, description, showValue = true, ...props }, ref) => (
    <SliderRoot ref={ref} {...props}>
      <div className="flex items-center justify-between gap-2">
        {label && <Label>{label}</Label>}
        {(showValue || typeof showValue === 'function') && (
          <SliderValueLabel>
            {({ state }) => (typeof showValue === 'function' ? showValue(state.values) : undefined)}
          </SliderValueLabel>
        )}
      </div>
      <SliderControls />
      {description && <Description>{description}</Description>}
    </SliderRoot>
  )
)
Slider.displayName = 'Slider'

type SliderRootProps = SliderPrimitiveProps
const SliderRoot = React.forwardRef((props: SliderRootProps, ref: React.Ref<HTMLDivElement>) => {
  const descriptionId = useSlotId()
  return (
    <TextContextPrimitive.Provider value={{ slots: { description: { id: descriptionId } } }}>
      <SliderPrimitive
        ref={ref}
        aria-describedby={descriptionId}
        {...props}
        className={composeRenderProps(props.className, (className) => root({ className }))}
      />
    </TextContextPrimitive.Provider>
  )
})
SliderRoot.displayName = 'SliderRoot'

type SliderControlsProps = SliderTrackProps & VariantProps<typeof sliderStyles>
const SliderControls = (props: SliderControlsProps) => {
  const { values } = React.useContext(SliderStateContextPrimitive)
  return (
    <SliderTrack {...props}>
      <SliderFiller />
      {values.map((_, i) => (
        <SliderThumb key={i} index={i} />
      ))}
    </SliderTrack>
  )
}

type SliderTrackProps = SliderTrackPrimitiveProps & VariantProps<typeof sliderStyles>
const SliderTrack = (props: SliderTrackProps) => {
  const { track } = sliderStyles()
  return (
    <SliderTrackPrimitive
      {...props}
      className={composeRenderProps(props.className, (className) => track({ className }))}
    />
  )
}

type SliderFillerProps = React.HTMLAttributes<HTMLDivElement>
const SliderFiller = (props: SliderFillerProps) => {
  const { orientation, getThumbPercent, values } = React.useContext(SliderStateContextPrimitive)
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

type SliderThumbProps = SliderThumbPrimitiveProps & VariantProps<typeof sliderStyles>
const SliderThumb = (props: SliderThumbProps) => {
  return (
    <SliderThumbPrimitive
      {...props}
      className={composeRenderProps(props.className, (className) => thumb({ className }))}
    />
  )
}

type SliderValueLabelProps = SliderOutputPrimitiveProps
const SliderValueLabel = (props: SliderValueLabelProps) => {
  const { valueLabel } = sliderStyles()
  return (
    <SliderOutputPrimitive
      {...props}
      className={composeRenderProps(props.className, (className) => valueLabel({ className }))}
    >
      {composeRenderProps(
        props.children,
        (children, { state }) => children ?? state.values.map((_, i) => state.getThumbValueLabel(i)).join(' - ')
      )}
    </SliderOutputPrimitive>
  )
}

export { Slider, SliderControls, SliderFiller, SliderRoot, SliderThumb, SliderTrack, SliderValueLabel }
