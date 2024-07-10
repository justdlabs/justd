import { parseColor } from '@react-stately/color'
import React from 'react'
import { ColorArea, ColorThumb } from 'ui'

export default function ColorAreaControlledDemo() {
  const [value, setValue] = React.useState(parseColor('hsl(0, 100%, 50%)'))

  return (
    <ColorArea value={value} onChange={setValue}>
      <ColorThumb />
    </ColorArea>
  )
}
