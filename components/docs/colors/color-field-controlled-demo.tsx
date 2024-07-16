import React from 'react'

import { ColorField } from '@/components/ui'
import { type Color, parseColor } from '@react-stately/color'

export default function ColorFieldControlledDemo() {
    const [color, setColor] = React.useState(parseColor('#FAFAFA'))
    const handleColorChange = (newColor: Color | null) => {
        if (newColor) {
            setColor(newColor)
        }
    }
    return (
        <ColorField
            value={color}
            onChange={handleColorChange}
            label='Color'
            placeholder='#FAFAFA'
            description={`Current color value: ${color.toString('hex')}`}
        />
    )
}
