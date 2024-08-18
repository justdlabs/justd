"use client"

import * as React from "react"

import { motion } from "framer-motion"
import {
  ProgressBar as ProgressBarPrimitive,
  type ProgressBarProps as ProgressBarPrimitiveProps
} from "react-aria-components"

import { Label } from "./field"
import { ctr } from "./primitive"

interface ProgressBarProps extends ProgressBarPrimitiveProps {
  label?: string
}

const ProgressBar = ({ label, ...props }: ProgressBarProps) => {
  return (
    <ProgressBarPrimitive {...props} className={ctr(props.className, "flex flex-col gap-1")}>
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          <div className="flex justify-between gap-2">
            <Label>{label}</Label>
            <span className="text-sm text-muted-fg">{valueText}</span>
          </div>
          <div className="relative h-2 min-w-64 overflow-hidden rounded-full bg-secondary outline outline-1 -outline-offset-1 outline-transparent">
            {!isIndeterminate ? (
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full bg-primary forced-colors:bg-[Highlight]"
                initial={{ width: "0%" }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            ) : (
              <motion.div
                className="absolute top-0 h-full rounded-full bg-primary forced-colors:bg-[Highlight]"
                initial={{ left: "0%", width: "40%" }}
                animate={{ left: ["0%", "100%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
              />
            )}
          </div>
        </>
      )}
    </ProgressBarPrimitive>
  )
}

export { ProgressBar }
