import React from 'react'

import { ColorThumb, ColorWheel, ColorWheelTrack } from '@/components/ui'
import { parseColor } from '@react-stately/color'

export default function ColorWheelControlledDemo() {
    const [color, setColor] = React.useState(parseColor('hsl(0, 100%, 50%)'))
    return (
        <ColorWheel value={color} onChange={setColor} outerRadius={105} innerRadius={78}>
            <ColorWheelTrack />
            <ColorThumb />
        </ColorWheel>
    )
}
