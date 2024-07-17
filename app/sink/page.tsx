'use client'

import CalendarDemo from '@/components/docs/date-and-time/calendar-demo'
import DatePickerControlledDemo from '@/components/docs/date-and-time/date-picker-controlled-demo'
import DateRangePickerControlledDemo from '@/components/docs/date-and-time/date-range-picker-controlled-demo'
import DateRangePickerDemo from '@/components/docs/date-and-time/date-range-picker-demo'
import RangeCalendarDemo from '@/components/docs/date-and-time/range-calendar-demo'
import TabsCollectionsDemo from '@/components/docs/navigation/tabs-collections-demo'
import TabsDisabledDemo from '@/components/docs/navigation/tabs-disabled-demo'
import TabsIconsDemo from '@/components/docs/navigation/tabs-icons-demo'
import { Container } from 'ui'

export default function Page() {
  return (
    <div className="p-6">
      <Container>
        <div className="flex gap-20">
          <RangeCalendarDemo />
          <CalendarDemo />

          <DateRangePickerControlledDemo />
        </div>
      </Container>
    </div>
  )
}
