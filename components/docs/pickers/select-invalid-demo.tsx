'use client'

import { Select, SelectItem } from 'ui'

const software = [
  { id: 1, name: 'Adobe Photoshop' }
  //...
]

export default function SelectInvalidDemo() {
  return (
    <Select label="Design software" isInvalid placeholder="Select a software" items={software}>
      {(item) => (
        <SelectItem id={item.id} textValue={item.name}>
          {item.name}
        </SelectItem>
      )}
    </Select>
  )
}
