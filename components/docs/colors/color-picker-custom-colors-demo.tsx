import React from 'react'

import { ColorPicker, defaultColor } from '@/components/ui'

export default function ColorPickerCustomColorsDemo() {
    const [color, setColor] = React.useState(defaultColor)
    return (
        <ColorPicker
            enableColorFormatSelection
            enableColorSwatch
            colors={[
                '#eef8ff',
                '#d8eeff',
                '#b9e0ff',
                '#89cfff',
                '#52b4ff',
                '#2a91ff',
                '#0d6efd',
                '#0c5ae9',
                '#1149bc',
                '#144194',
                '#11295a'
            ]}
            value={color}
            onChange={setColor}
        />
    )
}
