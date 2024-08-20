"use client"

import type { ProgressBarProps as ProgressBarPrimitiveProps } from "react-aria-components"
import { ProgressBar as ProgressBarPrimitive } from "react-aria-components"

import { Label } from "./field"
import { cn, ctr } from "./primitive"

export interface ProgressBarProps extends ProgressBarPrimitiveProps {
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
            <div
              className={cn(
                "absolute top-0 h-full rounded-full bg-accent forced-colors:bg-[Highlight]",
                isIndeterminate
                  ? "left-full duration-1000 ease-out animate-in slide-out-to-right-full repeat-infinite [--tw-enter-translate-x:calc(-16rem-100%)]"
                  : "left-0 duration-300"
              )}
              style={{ width: (isIndeterminate ? 30 : percentage) + "%" }}
            />
          </div>
        </>
      )}
    </ProgressBarPrimitive>
  )
}

export { ProgressBar }
