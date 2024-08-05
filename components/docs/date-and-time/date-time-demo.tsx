'use client'

import React from 'react'

import { getLocalTimeZone, now, parseZonedDateTime } from '@internationalized/date'
import { DatePicker } from 'ui'

export default function DateTimeDemo() {
  const today = parseZonedDateTime(now(getLocalTimeZone()).toString())
  const [value, setValue] = React.useState(today)

  return <DatePicker hideTimeZone hourCycle={24} className="max-w-xs" value={value} onChange={setValue} label="Event date" />
}
