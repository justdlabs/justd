'use client'

import React from 'react'
import CalendarDemo from '@/components/docs/date-and-time/calendar-demo'
import DatePickerDemo from '@/components/docs/date-and-time/date-picker-demo'
import DateRangePickerDemo from '@/components/docs/date-and-time/date-range-picker-demo'
import RangeCalendarDemo from '@/components/docs/date-and-time/range-calendar-demo'

export default function Page() {
  return (
    <div className="grid gap-10 lg:grid-cols-4">
      <DatePickerDemo />
      <DateRangePickerDemo />
      <CalendarDemo />
      <RangeCalendarDemo />
    </div>
  )
}
