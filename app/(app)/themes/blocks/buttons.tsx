"use client"

import React, { useState } from "react"

import { Button, Card, Checkbox, CheckboxGroup, Radio, RadioGroup, Switch } from "ui"

export function Buttons() {
  return (
    <div className="gap-2 grid">
      <Card className="grid py-4 place-content-center [&>div]:px-4 gap-2">
        <div className="grid grid-cols-2 gap-2">
          <Button>Primary</Button>
          <Button intent="secondary">Secondary</Button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button appearance="outline">Outline</Button>
          <Button appearance="plain">Plain</Button>
        </div>
      </Card>
      <Card className="grid place-content-center p-4">
        <Switch defaultSelected>Toggle Theme</Switch>
      </Card>
    </div>
  )
}
