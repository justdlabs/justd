import React from 'react'

import { SearchField } from 'ui'

interface SearchProps {
  value: string
  onChange: (value: string) => void
}

export function Search({ value, onChange }: SearchProps) {
  return (
    <SearchField
      value={value}
      onChange={onChange}
      aria-label="Search icons"
      placeholder="Search icons..."
    />
  )
}
