'use client'

import { Button } from 'ui'

import { CardSink } from './card-sink'

export function Buttons() {
  return (
    <CardSink>
      <div className="flex gap-2">
        <Button>Button</Button>
        <Button intent="secondary">Primary</Button>
      </div>
      <div className="flex gap-2">
        <Button appearance="plain">Button</Button>
        <Button appearance="outline">Primary</Button>
      </div>
    </CardSink>
  )
}
