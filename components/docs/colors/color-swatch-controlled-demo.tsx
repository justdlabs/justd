import * as React from 'react'

import { ColorSwatchPicker, ColorSwatchPickerItem, Description } from '@/components/ui'
import { parseColor } from '@react-stately/color'

export default function ColorSwatchPickerDemo() {
    const [value, setValue] = React.useState(parseColor('#0d6efd'))
    return (
        <div>
            <ColorSwatchPicker
                value={value}
                onChange={setValue}
                className='grid grid-cols-3 lg:grid-cols-6 gap-2'
            >
                <ColorSwatchPickerItem color='#f59e0b' />
                <ColorSwatchPickerItem color='#84cc16' />
                <ColorSwatchPickerItem color='#0d6efd' />
                <ColorSwatchPickerItem color='#ec4899' />
                <ColorSwatchPickerItem color='#f43f5e' />
            </ColorSwatchPicker>
            <Description className='block mt-2'>
                Current color value:{' '}
                <strong style={{ color: value.toString('hex') }}>
                    {value.toString('hex')}
                </strong>
            </Description>
        </div>
    )
}
