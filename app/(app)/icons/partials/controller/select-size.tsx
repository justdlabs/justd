import React from 'react'

import type { Key } from 'react-aria-components'
import { Select, SelectItem } from 'ui'

interface SelectSizeProps {
  selectedKey: Key
  onSelectionChange: (key: Key) => void
}

const sizes = [
  { id: 'size-4', name: 'Size 4' },
  { id: 'size-5', name: 'Size 5' },
  { id: 'size-6', name: 'Size 6' }
]

export function SelectSize({ selectedKey, onSelectionChange }: SelectSizeProps) {
  return (
    <Select
      className="max-w-28 sm:max-w-40"
      aria-label="Select Icon Size"
      placeholder="Select a size"
      selectedKey={selectedKey}
      items={sizes}
      onSelectionChange={(key) => onSelectionChange(key as Key)}
    >
      {(item) => (
        <SelectItem textValue={item.name}>
          {item.name}
          <span className="sm:inline hidden">
            / {item.name === 'Size 4' ? '20px' : item.name === 'Size 5' ? '24px' : '28px'}
          </span>
        </SelectItem>
      )}
    </Select>
  )
}
