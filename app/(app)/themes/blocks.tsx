"use client"

import { Buttons } from "@/app/(app)/themes/blocks/buttons"
import { RangeCalendarBlocks } from "@/app/(app)/themes/blocks/range-calendar-blocks"
import { Tooltip } from "ui"

import { LoginForm } from "./blocks/login-form"

export function Blocks() {
  return (
    <div>
      <div className="flex justify-center flex-wrap gap-6 [&_.clr]:size-5 text-xs font-mono mb-6 [&_.clr]:grid [&_.clr]:rounded-xl [&>div]:place-content-center">
        <Tooltip delay={0}>
          <Tooltip.Trigger className="clr bg-primary text-primary-fg" />
          <Tooltip.Content>
            <span className="text-xs font-mono">Primary</span>
          </Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0}>
          <Tooltip.Trigger className="clr bg-secondary text-secondary-fg border" />
          <Tooltip.Content>
            <span className="text-xs font-mono">Secondary</span>
          </Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0}>
          <Tooltip.Trigger className="clr bg-tertiary text-tertiary-fg border" />
          <Tooltip.Content>
            <span className="text-xs font-mono">Tertiary</span>
          </Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0}>
          <Tooltip.Trigger className="clr bg-overlay text-overlay-fg border" />
          <Tooltip.Content>
            <span className="text-xs font-mono">Overlay</span>
          </Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0}>
          <Tooltip.Trigger className="clr bg-muted text-muted-fg" />
          <Tooltip.Content>
            <span className="text-xs font-mono">Muted</span>
          </Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0}>
          <Tooltip.Trigger className="clr bg-accent text-accent-fg border" />
          <Tooltip.Content>
            <span className="text-xs font-mono">Accent</span>
          </Tooltip.Content>
        </Tooltip>
        <Tooltip delay={0}>
          <Tooltip.Trigger className="clr bg-accent-subtle text-accent-subtle-fg border border-accent-subtle-fg/10" />
          <Tooltip.Content>
            <span className="text-xs font-mono">Accent Subtle</span>
          </Tooltip.Content>
        </Tooltip>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <LoginForm />
        <RangeCalendarBlocks />
        <Buttons />
      </div>
    </div>
  )
}
