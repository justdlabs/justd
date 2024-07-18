'use client'

import React from 'react'

import { OptionPreview } from '@/components/docs/outside/option-preview'
import { Note, Select, SelectItem } from 'ui'

const notes = ['info', 'primary', 'secondary', 'warning', 'danger', 'success'].map((n) => ({
  name: n
}))
export default function NoteDemo() {
  const [selected, setSelected] = React.useState<any>('primary')
  return (
    <>
      <OptionPreview>
        <Select
          className="[&_button]:h-9"
          selectedKey={selected}
          onSelectionChange={setSelected}
          placeholder="Choose an intent"
          items={notes}
        >
          {(item) => (
            <SelectItem id={item.name} textValue={item.name}>
              {item.name}
            </SelectItem>
          )}
        </Select>
      </OptionPreview>
      <div className="max-w-md">
        <Note intent={selected as any}>
          We hook you up with top-tier migration services in our startup plan. Wanna roll with it? Hit us up here.
        </Note>
      </div>
    </>
  )
}
