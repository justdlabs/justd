'use client'

import React from 'react'

import { OptionPreview } from '@/components/docs/outside/option-preview'
import { Select, Switch } from 'ui'

const items = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'].map((item) => ({
  value: item,
  label: item
}))
export default function SwitchVariantDemo() {
  const [intent, setIntent] = React.useState('primary')

  return (
    <>
      <OptionPreview>
        <Select selectedKey={intent} onSelectionChange={(v) => setIntent(v as any)}>
          <Select.Trigger />
          <Select.List items={items}>
            {(item) => (
              <Select.Option id={item.value} textValue={item.value}>
                {item.label}
              </Select.Option>
            )}
          </Select.List>
        </Select>
      </OptionPreview>
      <Switch defaultSelected intent={intent as any}>
        Label
      </Switch>
    </>
  )
}
