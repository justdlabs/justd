'use client'

import { OptionPreview } from '@/components/docs/docs-c/option-preview'
import React from 'react'
import { Note, NoteDescription, NoteTitle, Select, SelectItem } from 'ui'

const notes = ['info', 'primary', 'secondary', 'warning', 'danger', 'success'].map((n) => ({
  name: n
}))
export default function NoteDemo() {
  const [selected, setSelected] = React.useState<any>('secondary')
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
      <Note intent={selected as any}>
        <NoteTitle>Note Title</NoteTitle>
        <NoteDescription>Note Description</NoteDescription>
      </Note>
    </>
  )
}
