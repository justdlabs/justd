"use client"

import React, { useState } from "react"

import { Description, FileTrigger } from "ui"

export default function FileTriggerDemo() {
  const [file, setFile] = useState<string[] | null>(null)
  return (
    <>
      <FileTrigger
        onSelect={(e) => {
          const files = Array.from(e ?? [])
          const filenames = files.map((file) => file.name)
          setFile(filenames)
        }}
      />
      {file && (
        <Description className="truncate max-w-60 [&>strong]:font-medium block [&>strong]:text-fg mt-2">
          Your file: <strong>{file}</strong>
        </Description>
      )}
    </>
  )
}
