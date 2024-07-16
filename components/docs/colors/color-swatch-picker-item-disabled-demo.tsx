import * as React from 'react'

import { ColorSwatchPicker, ColorSwatchPickerItem } from '@/components/ui'
import { parseColor } from '@react-stately/color'

export default function ColorSwatchPickerDemo() {
    const [value, setValue] = React.useState(parseColor('#0d6efd'))
    return (
        <ColorSwatchPicker
            value={value}
            onChange={setValue}
            className='grid grid-cols-3 lg:grid-cols-6 gap-2'
        >
            <ColorSwatchPickerItem isDisabled color='#f59e0b' />
            <ColorSwatchPickerItem color='#84cc16' />
            <ColorSwatchPickerItem color='#0d6efd' />
            <ColorSwatchPickerItem isDisabled color='#ec4899' />
            <ColorSwatchPickerItem isDisabled color='#f43f5e' />
        </ColorSwatchPicker>
    )
}
