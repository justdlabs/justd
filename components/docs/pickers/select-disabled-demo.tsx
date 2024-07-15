'use client'

import { Select, SelectItem } from 'ui'

const software = [
  { id: 1, name: 'Adobe Photoshop' }
  //...
]

export default function SelectDisabledDemo() {
  return (
    <Select
      label="Design software"
      isDisabled
      placeholder="Select a software"
      items={software}
    >
      {(item) => (
        <SelectItem id={item.id} textValue={item.name}>
          {item.name}
        </SelectItem>
      )}
    </Select>
  )
}
