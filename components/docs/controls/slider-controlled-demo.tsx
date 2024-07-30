'use client'

import React from 'react'

import { Description, Slider } from 'ui'

export default function SliderControlledDemo() {
  const [temperature, setTemperature] = React.useState<number>(31)
  const [saturation, setSaturation] = React.useState<number[]>([21, 86])
  return (
    <div className="space-y-6">
      <div>
        <Slider
          value={temperature}
          onChange={(v) => setTemperature(v as number)}
          label="Temperature"
        />
        <Description className="mt-2 block [&>strong]:text-fg">
          Current temperature: <strong>{temperature ?? '-'}</strong>
        </Description>
      </div>
      <div>
        <Slider
          value={saturation}
          onChange={(v) => setSaturation(v as number[])}
          label="Saturation"
        />
        <Description className="mt-2 block [&>strong]:text-fg">
          Current saturation: <strong>{saturation ?? '-'}</strong>
        </Description>
      </div>
    </div>
  )
}
