"use client"

import { cn } from "./ui/primitive"

const dots = "mx-[1px] inline-block size-[0.3125rem] animate-blink rounded-md"

export const LoadingDots = ({ className }: { className: string }) => {
  return (
    <span className="inline-flex items-center mx-2">
      <span className={cn(dots, className)} />
      <span className={cn(dots, "animation-delay-[200ms]", className)} />
      <span className={cn(dots, "animation-delay-[400ms]", className)} />
    </span>
  )
}
