'use client'

import * as React from 'react'

import { ControlledValues } from '@/components/docs/colors/controlled-values'
import { parseColor } from '@react-stately/color'
import { ColorSwatchPicker, ColorSwatchPickerItem } from 'ui'

export default function ColorSwatchPickerDemo() {
  const [value, setValue] = React.useState(parseColor('#0d6efd'))
  return (
    <div className="flex flex-col gap-4">
      <ColorSwatchPicker value={value} onChange={setValue} className="flex justify-center gap-2">
        <ColorSwatchPickerItem color="#f59e0b" />
        <ColorSwatchPickerItem color="#84cc16" />
        <ColorSwatchPickerItem color="#0d6efd" />
        <ColorSwatchPickerItem color="#ec4899" />
        <ColorSwatchPickerItem color="#f43f5e" />
      </ColorSwatchPicker>
      <ControlledValues color={value} />
    </div>
  )
}
