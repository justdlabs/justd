import React from 'react'

import { SearchField } from 'ui'

interface SearchProps {
  value: string
  onChange: (value: string) => void
}

export function Search({ value, onChange }: SearchProps) {
  return (
    <SearchField
      aria-label="Search icons"
      value={value}
      onChange={onChange}
      placeholder="Search icons..."
    />
  )
}
