"use client"

import { Buttons } from "@/app/(app)/themes/blocks/buttons"
import { RangeCalendarBlocks } from "@/app/(app)/themes/blocks/range-calendar-blocks"

import { LoginForm } from "./blocks/login-form"

export function Blocks() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2">
      <LoginForm />
      <RangeCalendarBlocks />
      <Buttons />
    </div>
  )
}
