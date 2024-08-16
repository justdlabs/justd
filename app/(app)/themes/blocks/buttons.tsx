'use client'

import { Button, Card, Checkbox, Switch } from 'ui'

export function Buttons() {
  return (
    <div className="gap-2 grid">
      <Card className="grid place-content-center gap-2">
        <div className="grid grid-cols-2 gap-2">
          <Button>Label</Button>
          <Button intent="secondary">Label</Button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button appearance="outline">Label</Button>
          <Button appearance="plain">Label</Button>
        </div>
      </Card>
      <Card className="grid place-content-center">
        <Checkbox isReadOnly defaultSelected>Remember me</Checkbox>
      </Card>
      <Card className="grid place-content-center">
        <Switch isReadOnly defaultSelected>Toggle Theme</Switch>
      </Card>
    </div>
  )
}
