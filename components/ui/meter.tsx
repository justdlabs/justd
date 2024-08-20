"use client"

import { IconCircleInfo, IconTriangleInfo } from "justd-icons"
import type { MeterProps as MeterPrimitiveProps } from "react-aria-components"
import { Meter as MeterPrimitive } from "react-aria-components"

import { Label } from "./field"
import { cn, ctr } from "./primitive"

export interface MeterProps extends MeterPrimitiveProps {
  label?: string
}

export function Meter({
  label,
  positive,
  informative,
  ...props
}: MeterProps &
  (
    | {
        positive?: true
        informative?: never
      }
    | { positive?: never; informative?: true }
  )) {
  return (
    <MeterPrimitive {...props} className={ctr(props.className, "flex flex-col gap-1")}>
      {({ percentage, valueText }) => (
        <>
          <div className="flex justify-between gap-2">
            <Label>{label}</Label>
            <span className="text-sm text-muted-fg">
              {percentage >= 90 ? (
                <IconTriangleInfo
                  aria-label="Alert"
                  className="inline-block size-4 animate-in slide-in-from-left align-text-bottom fill-danger/20 mr-1 text-danger"
                />
              ) : percentage >= 80 ? (
                <IconCircleInfo
                  aria-label="Alert"
                  className="inline-block size-4 animate-in slide-in-from-left align-text-bottom fill-warning/20 mr-1 text-warning"
                />
              ) : null}
              <span className="w-10 bg-red-500 inline-block">{valueText}</span>
            </span>
          </div>
          <div className="relative h-2 w-64 overflow-hidden rounded-full bg-secondary outline outline-1 -outline-offset-1 outline-transparent">
            <div
              className={cn("absolute left-0 top-0 mr-1 h-full rounded-full", getColor(percentage))}
              style={{ width: percentage + "%" }}
            />
          </div>
        </>
      )}
    </MeterPrimitive>
  )
}

const getColor = (percentage: number) => {
  if (percentage < 50) {
    return "#0d6efd" // Green
  }

  if (percentage < 70) {
    return "#ffc107" // Yellow
  }

  if (percentage < 80) {
    return "#f97316" // Orange
  }

  return "#e11d48" // Red
}
