'use client'

import React from 'react'
import ColorPickerDemo from '@/components/docs/colors/color-picker-demo'
import ColorPickerCombinationDemo from '@/components/docs/colors/color-picker-combination-demo'
import ColorPickerEnableSelectionFormatDemo from '@/components/docs/colors/color-picker-enable-selection-format-demo'
import DatePickerDemo from '@/components/docs/date-and-time/date-picker-demo'
import DateRangePickerControlledDemo from '@/components/docs/date-and-time/date-range-picker-controlled-demo'

export default function Page() {
  return <div className='grid gap-4 grid-cols-4'>
    <ColorPickerDemo/>
    <ColorPickerCombinationDemo/>
    <ColorPickerEnableSelectionFormatDemo/>
    <ColorPickerEnableSelectionFormatDemo/>
    <DatePickerDemo/>
    <DateRangePickerControlledDemo/>
  </div>
}
