'use client'

import { Slider } from '@/components/ui'

export default function SliderRangeDemo() {
    return <Slider defaultValue={[25, 75]} label='Your budget' />
}
