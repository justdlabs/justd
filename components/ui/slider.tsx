"use client"

import * as React from "react"

import { useSlotId } from "@react-aria/utils"
import type {
  LabelProps,
  SliderOutputProps,
  SliderProps as SliderPrimitiveProps,
  SliderThumbProps,
  SliderTrackProps,
  TextProps
} from "react-aria-components"
import {
  Slider as SliderPrimitive,
  SliderOutput,
  SliderStateContext,
  SliderThumb,
  SliderTrack,
  TextContext
} from "react-aria-components"
import { tv, type VariantProps } from "tailwind-variants"

import { Description, Label } from "./field"
import { cr } from "./primitive"

const sliderStyles = tv({
  slots: {
    root: "flex disabled:opacity-50 flex-col gap-2 orientation-horizontal:w-full orientation-vertical:h-56 orientation-vertical:items-center",
    track: [
      "relative group/track rounded-full bg-zinc-200 dark:bg-zinc-800 cursor-pointer disabled:cursor-default disabled:bg-bg-disabled",
      "grow orientation-vertical:flex-1 orientation-vertical:w-1.5 orientation-horizontal:w-full orientation-horizontal:h-1.5"
    ],
    filler: [
      "rounded-full bg-primary group-disabled/track:bg-bg-disabled",
      "pointer-events-none absolute group-orientation-horizontal/top-0 group-orientation-vertical/track:w-full group-orientation-vertical/track:bottom-0 group-orientation-horizontal/track:h-full"
    ],
    thumb: [
      "outline-none dragging:cursor-grabbing focus:ring-4 border border-zinc-200 focus:ring-primary/20 focus:border-primary focus:outline-none forced-colors:outline-[Highlight]",
      "rounded-full bg-white transition-[width,height]",
      "absolute left-[50%] top-[50%] block !-translate-x-1/2 !-translate-y-1/2",
      "disabled:bg-bg-disabled disabled:border disabled:border-bg",
      "orientation-vertical:w-2 orientation-horizontal:h-2",
      "size-[1.15rem] dragging:size-[1.30rem] dragging:border-primary"
    ],
    valueLabel: "text-muted-fg text-sm"
  }
})

const { track, filler, thumb, root, valueLabel } = sliderStyles()

type SliderRootProps = SliderPrimitiveProps

const Root = (props: SliderPrimitiveProps) => {
  const descriptionId = useSlotId()
  return (
    <TextContext.Provider value={{ slots: { description: { id: descriptionId } } }}>
      <SliderPrimitive
        data-slot="root"
        aria-describedby={descriptionId}
        {...props}
        className={cr(props.className, (className) => root({ className }))}
      />
    </TextContext.Provider>
  )
}

interface SliderProps extends SliderRootProps, VariantProps<typeof sliderStyles> {
  label?: LabelProps["children"]
  description?: TextProps["children"]
  showValue?: boolean | ((value: number[]) => string)
}

const Slider = ({ label, description, showValue = true, ...props }: SliderProps) => (
  <Root {...props}>
    <div className="flex items-center justify-between gap-2">
      {label && <Label>{label}</Label>}
      {(showValue || typeof showValue === "function") && (
        <Output>
          {({ state }) => (typeof showValue === "function" ? showValue(state.values) : undefined)}
        </Output>
      )}
    </div>
    <Controls />
    {description && <Description>{description}</Description>}
  </Root>
)

const Controls = (props: SliderTrackProps) => {
  const { values } = React.useContext(SliderStateContext)
  return (
    <Track {...props}>
      <Filler />
      {values.map((_, i) => (
        <Thumb key={i} index={i} />
      ))}
    </Track>
  )
}

const Track = (props: SliderTrackProps) => {
  return (
    <SliderTrack {...props} className={cr(props.className, (className) => track({ className }))} />
  )
}

const Filler = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { orientation, getThumbPercent, values } = React.useContext(SliderStateContext)
  return (
    <div
      {...props}
      style={
        values.length === 1
          ? orientation === "horizontal"
            ? { width: `${getThumbPercent(0) * 100}%` }
            : { height: `${getThumbPercent(0) * 100}%` }
          : orientation === "horizontal"
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

const Thumb = ({ className, ...props }: SliderThumbProps) => {
  return <SliderThumb {...props} className={cr(className, (className) => thumb({ className }))} />
}

const Output = ({ className, ...props }: SliderOutputProps) => {
  return (
    <SliderOutput {...props} className={cr(className, (className) => valueLabel({ className }))}>
      {cr(
        props.children,
        (children, { state }) =>
          children ?? state.values.map((_, i) => state.getThumbValueLabel(i)).join(" - ")
      )}
    </SliderOutput>
  )
}

Slider.Controls = Controls
Slider.Filler = Filler
Slider.Root = Root
Slider.Thumb = Thumb
Slider.Track = Track
Slider.Output = Output
export { Slider }
