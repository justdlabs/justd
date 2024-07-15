import React from 'react'

import { parseColor } from '@react-stately/color'
import { ColorArea, ColorThumb, Description } from 'ui'

export default function ColorAreaControlledDemo() {
  const [value, setValue] = React.useState(parseColor('hsl(0, 100%, 50%)'))

  return (
    <>
      <ColorArea value={value} onChange={setValue}>
        <ColorThumb />
      </ColorArea>
      <Description className="block mt-2">
        Current color value:{' '}
        <strong style={{ color: value.toString('hex') }}>{value.toString('hex')}</strong>
      </Description>
    </>
  )
}
