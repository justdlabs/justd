'use client'

import React from 'react'

import { OptionPreview } from '@/components/docs/outside/option-preview'
import { Switch, TimeField } from '@/components/ui'
import { Time } from '@internationalized/date'

export default function TimeFieldHcDemo() {
    const [hc, setHc] = React.useState<12 | 24>(24)
    const [value, setValue] = React.useState(new Time(13, 45))
    return (
        <>
            <OptionPreview>
                <Switch
                    isSelected={hc === 24}
                    onChange={() => setHc((prevHc) => (prevHc === 24 ? 12 : 24))}
                >
                    {hc} hour
                </Switch>
            </OptionPreview>
            <TimeField
                value={value}
                onChange={setValue}
                hourCycle={hc}
                label='Event time'
            />
        </>
    )
}
