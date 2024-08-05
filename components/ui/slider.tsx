'use client'

import * as React from 'react'

import { useSlotId } from '@react-aria/utils'
import {
  composeRenderProps,
  type LabelProps,
  Slider as SliderPrimitive,
  SliderOutput as SliderOutputPrimitive,
  type SliderOutputProps as SliderOutputPrimitiveProps,
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
    root: 'flex disabled:opacity-50 flex-col gap-2 orientation-horizontal:w-full orientation-vertical:h-56 orientation-vertical:items-center',
    track: [
      'relative group/track rounded-full bg-zinc-200 dark:bg-zinc-800 cursor-pointer disabled:cursor-default disabled:bg-bg-disabled',
      'grow orientation-vertical:flex-1 orientation-vertical:w-1.5 orientation-horizontal:w-full orientation-horizontal:h-1.5'
    ],
    filler: [
      'rounded-full bg-primary group-disabled/track:bg-bg-disabled',
      'pointer-events-none absolute group-orientation-horizontal/top-0 group-orientation-vertical/track:w-full group-orientation-vertical/track:bottom-0 group-orientation-horizontal/track:h-full'
    ],
    thumb: [
      'outline-none dragging:cursor-grabbing focus:ring-4 border border-zinc-200 focus:ring-primary/20 focus:border-primary focus:outline-none forced-colors:outline-[Highlight]',
      'rounded-full bg-white transition-[width,height]',
      'absolute left-[50%] top-[50%] block !-translate-x-1/2 !-translate-y-1/2',
      'disabled:bg-bg-disabled disabled:border disabled:border-bg',
      'orientation-vertical:w-2 orientation-horizontal:h-2',
      'size-[1.15rem] dragging:size-[1.30rem] dragging:border-primary'
    ],
    valueLabel: 'text-muted-fg text-sm'
  }
})

const { track, filler, thumb, root, valueLabel } = sliderStyles()

interface SliderProps extends SliderRootProps, VariantProps<typeof sliderStyles> {
  label?: LabelProps['children']
  description?: TextProps['children']
  showValue?: boolean | ((value: number[]) => string)
}

const Slider = ({ label, description, showValue = true, ...props }: SliderProps) => (
  <SliderRoot {...props}>
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

interface SliderRootProps extends SliderPrimitiveProps {}

const SliderRoot = (props: SliderRootProps) => {
  const descriptionId = useSlotId()
  return (
    <TextContextPrimitive.Provider value={{ slots: { description: { id: descriptionId } } }}>
      <SliderPrimitive
        data-slot="root"
        aria-describedby={descriptionId}
        {...props}
        className={composeRenderProps(props.className, (className) => root({ className }))}
      />
    </TextContextPrimitive.Provider>
  )
}

interface SliderControlsProps extends SliderTrackProps, VariantProps<typeof sliderStyles> {}

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

interface SliderTrackProps extends SliderTrackPrimitiveProps, VariantProps<typeof sliderStyles> {}

const SliderTrack = (props: SliderTrackProps) => {
  return (
    <SliderTrackPrimitive
      {...props}
      className={composeRenderProps(props.className, (className) => track({ className }))}
    />
  )
}

interface SliderFillerProps extends React.HTMLAttributes<HTMLDivElement> {}

const SliderFiller = (props: SliderFillerProps) => {
  const { orientation, getThumbPercent, values } = React.useContext(SliderStateContextPrimitive)
  return (
    <div
      {...props}
      style={
        values.length === 1
          ? orientation === 'horizontal'
            ? { width: `${getThumbPercent(0) * 100}%` }
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

interface SliderThumbProps extends SliderThumbPrimitiveProps, VariantProps<typeof sliderStyles> {}

const SliderThumb = ({ className, ...props }: SliderThumbProps) => {
  return (
    <SliderThumbPrimitive
      {...props}
      className={composeRenderProps(className, (className) => thumb({ className }))}
    />
  )
}

interface SliderValueLabelProps extends SliderOutputPrimitiveProps {}

const SliderValueLabel = ({ className, ...props }: SliderValueLabelProps) => {
  return (
    <SliderOutputPrimitive
      {...props}
      className={composeRenderProps(className, (className) => valueLabel({ className }))}
    >
      {composeRenderProps(
        props.children,
        (children, { state }) =>
          children ?? state.values.map((_, i) => state.getThumbValueLabel(i)).join(' - ')
      )}
    </SliderOutputPrimitive>
  )
}

export {
  Slider,
  SliderControls,
  SliderFiller,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValueLabel
}
