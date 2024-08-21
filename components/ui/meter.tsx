"use client"

import * as React from "react"

import { motion } from "framer-motion"
import { IconTriangleInfo } from "justd-icons"
import type { MeterProps as AriaMeterProps } from "react-aria-components"
import { Meter as MeterPrimitive } from "react-aria-components"

import { Label } from "./field"
import { ctr } from "./primitive"

export interface MeterProps extends AriaMeterProps {
  label?: string
}

const Meter = ({ label, ...props }: MeterProps) => {
  return (
    <MeterPrimitive {...props} className={ctr(props.className, "flex flex-col gap-1")}>
      {({ percentage, valueText }) => (
        <>
          <div className="flex w-full justify-between gap-2">
            <Label>{label}</Label>
            <span className={`text-sm ${percentage >= 80 ? "text-danger" : "text-muted-fg"}`}>
              {percentage >= 80 && (
                <IconTriangleInfo
                  aria-label="Alert"
                  className="inline-block fill-danger/20 text-danger size-4 align-text-bottom"
                />
              )}
              {" " + valueText}
            </span>
          </div>
          <div className="relative h-2 min-w-64 rounded-full bg-muted outline outline-1 -outline-offset-1 outline-transparent">
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full forced-colors:bg-[Highlight]"
              initial={{ width: "0%", backgroundColor: getColor(0) }}
              animate={{
                width: `${percentage}%`,
                backgroundColor: getColor(percentage)
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </>
      )}
    </MeterPrimitive>
  )
}

const getColor = (percentage: number) => {
  if (percentage < 30) {
    return "hsl(var(--primary))" // Blue
  }

  if (percentage < 50) {
    return "hsl(var(--success))" // Green
  }

  if (percentage < 70) {
    return "#eab308" // Yellow
  }

  if (percentage < 80) {
    return "hsl(var(--warning))" // Orange
  }

  return "hsl(var(--danger))" // Red
}

export { Meter }
