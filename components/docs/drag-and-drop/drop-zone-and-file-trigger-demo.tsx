'use client'

import React from 'react'

import { type FileDropItem } from 'react-aria'
import { DropZone, FileTrigger, Label } from 'ui'


export default function DropZoneAndFileTriggerDemo() {
  const [files, setFiles] = React.useState<string[] | null>(null)

  const handleDrop = (e: { items: any[] }) => {
    const files = e.items.filter((file) => file.kind === 'file') as FileDropItem[]
    const filenames = files.map((file) => file.name)
    if (filenames.length > 0) {
      setFiles(filenames)
    }
  }

  const handleSelect = (files: FileList | null) => {
    const fileArray = Array.from(files ?? [])
    const filenames = fileArray.map((file) => file.name)
    setFiles(filenames)
  }
  return (
    <DropZone onDrop={handleDrop}>
      <FileTrigger allowsMultiple onSelect={(e) => handleSelect(e)}>
        Select files
      </FileTrigger>
      <Label slot="label">{files ? files.join(', ') : 'Toss your stuff here'}</Label>
    </DropZone>
  )
}
