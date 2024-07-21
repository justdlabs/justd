'use client'

import { Button } from 'ui'

import { CardSink } from './card-sink'

export function Buttons() {
  return (
    <CardSink>
      <div className="flex gap-2">
        <Button>Label</Button>
        <Button intent="secondary">Label</Button>
        <Button intent="light/dark">Label</Button>
      </div>
      <div className="flex gap-2">
        <Button appearance="plain">Label</Button>
        <Button appearance="outline">Label</Button>
        <Button intent="light">Label</Button>
      </div>
      <div className="flex gap-2">
        <Button intent="danger">Label</Button>
        <Button intent="success">Label</Button>
        <Button intent="warning">Label</Button>
      </div>
    </CardSink>
  )
}
