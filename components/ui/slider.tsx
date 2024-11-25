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
    root: "flex disabled:opacity-50 flex-col gap-2 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-56 data-[orientation=vertical]:items-center",
    track: [
      "relative group/track rounded-full bg-zinc-200 dark:bg-zinc-800 cursor-pointer disabled:cursor-default disabled:bg-bg-disabled",
      "grow data-[orientation=vertical]:flex-1 data-[orientation=vertical]:w-1.5 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:h-1.5"
    ],
    filler: [
      "rounded-full bg-primary group-data-disabled/track:bg-bg-disabled",
      "pointer-events-none absolute group-data-[orientation=horizontal]/top-0 group-data-[orientation=vertical]/track:w-full group-data-[orientation=vertical]/track:bottom-0 group-data-[orientation=horizontal]/track:h-full"
    ],
    thumb: [
      "size-[1.15rem] outline-hidden data-focused:ring-4 border border-zinc-200 data-focused:ring-primary/20 data-focused:border-primary data-focused:outline-hidden forced-colors:outline-[Highlight]",
      "rounded-full bg-white transition-[width,height]",
      "absolute left-[50%] top-[50%] block -translate-x-1/2! -translate-y-1/2!",
      "data-[orientation=vertical]:w-2 data-[orientation=horizontal]:h-2",
      "data-dragging:cursor-grabbing data-dragging:size-[1.30rem] data-dragging:border-primary",
      "data-disabled:bg-bg-disabled data-disabled:border data-disabled:border-bg"
    ],
    valueLabel: "text-muted-fg tabular-nums text-sm"
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
  const state = React.useContext(SliderStateContext)
  return (
    <Track {...props}>
      <Filler />
      {state?.values.map((_, i) => <Thumb key={i} index={i} />)}
    </Track>
  )
}

const Track = (props: SliderTrackProps) => {
  return (
    <SliderTrack {...props} className={cr(props.className, (className) => track({ className }))} />
  )
}

const Filler = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const state = React.useContext(SliderStateContext)
  const { orientation, getThumbPercent, values } = state || {}

  const getStyle = () => {
    const percent0 = getThumbPercent ? getThumbPercent(0) * 100 : 0
    const percent1 = getThumbPercent ? getThumbPercent(1) * 100 : 0

    if (values?.length === 1) {
      return orientation === "horizontal" ? { width: `${percent0}%` } : { height: `${percent0}%` }
    }

    return orientation === "horizontal"
      ? { left: `${percent0}%`, width: `${Math.abs(percent0 - percent1)}%` }
      : { bottom: `${percent0}%`, height: `${Math.abs(percent0 - percent1)}%` }
  }

  return <div {...props} style={getStyle()} className={filler({ className: props.className })} />
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
