'use client'

import React from 'react'

import ColorPickerCombinationDemo from '@/components/docs/colors/color-picker-combination-demo'
import ColorPickerDemo from '@/components/docs/colors/color-picker-demo'
import ColorPickerEnableSelectionFormatDemo from '@/components/docs/colors/color-picker-enable-selection-format-demo'
import CalendarDemo from '@/components/docs/date-and-time/calendar-demo'
import DatePickerDemo from '@/components/docs/date-and-time/date-picker-demo'
import DateRangePickerControlledDemo from '@/components/docs/date-and-time/date-range-picker-controlled-demo'
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
