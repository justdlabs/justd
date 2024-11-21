"use client"

import React from "react"

import { getLocalTimeZone, now, parseZonedDateTime } from "@internationalized/date"
import { DateField } from "ui"

export default function DateTimeFieldDemo() {
  const today = parseZonedDateTime(now(getLocalTimeZone()).toString())
  const [value, setValue] = React.useState(today)
  return (
    <DateField
      hideTimeZone
      hourCycle={24}
      value={value}
      onChange={(newValue) => setValue(newValue!)}
      label="Event date"
    />
  )
}
