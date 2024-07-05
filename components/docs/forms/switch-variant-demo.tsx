'use client'

import { OptionPreview } from '@/components/docs/docs-c/option-preview'
import React from 'react'
import { Select, SelectItem, Switch } from 'ui'

const items = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'].map((item) => ({
  value: item,
  label: item
}))
export default function SwitchVariantDemo() {
  const [intent, setIntent] = React.useState('primary')

  return (
    <>
      <OptionPreview>
        <Select items={items} selectedKey={intent} onSelectionChange={(v) => setIntent(v as any)}>
          {(item) => (
            <SelectItem id={item.value} textValue={item.value}>
              {item.label}
            </SelectItem>
          )}
        </Select>
      </OptionPreview>
      <Switch defaultSelected intent={intent as any}>
        Label
      </Switch>
    </>
  )
}
