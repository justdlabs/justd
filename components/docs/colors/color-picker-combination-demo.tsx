import React from 'react'

import { type Color } from 'react-aria-components'
import { ColorPicker } from 'ui'

export default function ColorPickerCombinationDemo() {
  const [color, setColor] = React.useState('')

  const handleChange = (value: Color) => {
    setColor(value as unknown as string)
  }
  return <ColorPicker enableColorFormatSelection enableColorSwatch defaultValue={color} onChange={handleChange} />
}
