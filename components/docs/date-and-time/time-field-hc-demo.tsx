'use client'

import { OptionPreview } from '@/components/docs/docs-c/option-preview'
import { Time } from '@internationalized/date'
import React from 'react'
import { Switch, TimeField } from 'ui'

export default function TimeFieldHcDemo() {
  const [hc, setHc] = React.useState<12 | 24>(24)
  const [value, setValue] = React.useState(new Time(13, 45))
  return (
    <>
      <OptionPreview>
        <Switch isSelected={hc === 24} onChange={() => setHc((prevHc) => (prevHc === 24 ? 12 : 24))}>
          {hc} hour
        </Switch>
      </OptionPreview>
      <TimeField value={value} onChange={setValue} hourCycle={hc} label="Event time" />
    </>
  )
}
