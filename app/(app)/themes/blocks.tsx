"use client"

import { Buttons } from "@/app/(app)/themes/blocks/buttons"
import { RangeCalendarBlocks } from "@/app/(app)/themes/blocks/range-calendar-blocks"
import { clsx } from "clsx"
import { twJoin } from "tailwind-merge"
import { cn, Tooltip } from "ui"

import { LoginForm } from "./blocks/login-form"

export function Blocks() {
  const colors = [
    "bg-primary",
    "bg-primary-fg",
    "bg-secondary",
    "bg-secondary-fg",
    "bg-tertiary",
    "bg-tertiary-fg",
    "bg-overlay",
    "bg-overlay-fg",
    "bg-muted",
    "bg-muted-fg",
    "bg-accent",
    "bg-accent-fg",
    "bg-accent-subtle",
    "bg-accent-subtle-fg"
  ]
  return (
    <div>
      <div className="flex sm:justify-center flex-wrap gap-2 sm:gap-3 [&_.clr]:size-6 text-xs font-mono mb-6 [&_.clr]:grid [&_.clr]:rounded-md [&>div]:place-content-center">
        {colors.map((color) => (
          <Tooltip key={color} delay={0}>
            <Tooltip.Trigger
              className={twJoin("clr ring-1 focus:ring-bg ring-fg/10 ring-inset", color)}
            />
            <Tooltip.Content>
              <span className="text-xs font-mono capitalize">
                {color.replace("bg-", "").replaceAll("-", " ").replace("fg", "foreground")}
              </span>
            </Tooltip.Content>
          </Tooltip>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <LoginForm />
        <RangeCalendarBlocks />
        <Buttons />
      </div>
    </div>
  )
}
