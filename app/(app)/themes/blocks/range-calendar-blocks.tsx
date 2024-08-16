'use client'

import React from 'react'

import { getLocalTimeZone, parseDate, today } from '@internationalized/date'
import { useDateFormatter } from '@react-aria/i18n'
import { Button, Calendar, Card, Checkbox, Link, RangeCalendar, TextField } from 'ui'

export function RangeCalendarBlocks() {
  const now = today(getLocalTimeZone())
  const tomorrowWeek = today(getLocalTimeZone()).add({ days: 12 })

  const [value, setValue] = React.useState({
    start: now,
    end: tomorrowWeek
  })
  return (
    <Card className="grid place-content-center">
      <RangeCalendar value={value} onChange={setValue} aria-label="Event date" />
    </Card>
  )
}
