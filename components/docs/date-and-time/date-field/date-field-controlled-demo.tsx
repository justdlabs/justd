'use client'

import React from 'react'

import { getLocalTimeZone, parseDate, today } from '@internationalized/date'
import { useDateFormatter } from '@react-aria/i18n'
import { DateField } from 'ui'

export default function DateFieldDisabledDemo() {
  const now = today(getLocalTimeZone())
  const [value, setValue] = React.useState(parseDate(now.toString()))

  const formatter = useDateFormatter({ dateStyle: 'full' })

  return (
    <div className="space-y-3">
      <div className="divide-y [&_p]:py-2">
        <p>{value ? formatter.format(value.toDate(getLocalTimeZone())) : '--'}</p>
        <p>{value ? value.toString() : '--'}</p>
      </div>
      <DateField value={value} onChange={setValue} label="Event date" />
    </div>
  )
}
