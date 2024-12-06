"use client"

import React from "react"

import { getLocalTimeZone, today } from "@internationalized/date"
import { RangeCalendar } from "ui"

export default function RangeCalendarControlledDemo() {
  const now = today(getLocalTimeZone())
  const tomorrowWeek = today(getLocalTimeZone()).add({ days: 20 })
  const [value, setValue] = React.useState({
    start: now,
    end: tomorrowWeek
  })
  return (
    <RangeCalendar
      className="**:data-[slot=calendar-header]:items-center"
      aria-label="Date range (controlled)"
      value={value}
      onChange={setValue}
    />
  )
}