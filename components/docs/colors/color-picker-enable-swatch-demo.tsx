import React from 'react'

import { type Color } from 'react-aria-components'
import { ColorPicker, defaultColor } from 'ui'

export default function ColorPickerEnableSwatchDemo() {
  const [color, setColor] = React.useState(defaultColor)
  const colorChangeHandler = (v: Color) => {
    // ['hex','rgb','rgba','hsb','hsba','hsl','hsla']
    console.log(v.toString('hex'))
    setColor(v)
  }
  return <ColorPicker enableColorSwatch value={color} onChange={(v) => colorChangeHandler(v)} />
}
