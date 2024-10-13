'use client'

import React from 'react'

import type { CalendarDate } from '@internationalized/date'
import { getLocalTimeZone, today } from '@internationalized/date'
import type { RangeValue } from '@react-types/shared'
import { Card, RangeCalendar } from 'ui'

export function RangeCalendarBlocks() {
  const now = today(getLocalTimeZone())
  const tomorrowWeek = today(getLocalTimeZone()).add({ days: 12 })

  const [value, setValue] = React.useState<RangeValue<CalendarDate> | null>({
    start: now,
    end: tomorrowWeek
  })

  return (
    <Card className="grid place-content-center p-6">
      <RangeCalendar value={value} onChange={setValue} aria-label="Event date" />
    </Card>
  )
}
