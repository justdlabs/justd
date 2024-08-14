import React from 'react'
import ColorPickerDemo from '@/components/docs/colors/color-picker-demo'
import ColorPickerCombinationDemo from '@/components/docs/colors/color-picker-combination-demo'
import ColorPickerEnableSwatchDemo from '@/components/docs/colors/color-picker-enable-swatch-demo'
import ColorAreaDemo from '@/components/docs/colors/color-area-demo'
import DatePickerDemo from '@/components/docs/date-and-time/date-picker-demo'

export default function Page() {
  return <div className="grid sm:grid-cols-5 gap-4">
    <DatePickerDemo/>
    <ColorPickerEnableSwatchDemo/>
    <ColorPickerDemo/>
    <ColorPickerCombinationDemo/>
  </div>
}
