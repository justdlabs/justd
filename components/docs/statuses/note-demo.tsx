'use client'

import React from 'react'

import { Note } from 'ui'

const notes = ['info', 'primary', 'secondary', 'warning', 'danger', 'success'].map((n) => ({
  name: n
}))

export default function NoteDemo() {
  return (
    <Note>
      We hook you up with top-tier migration services in our startup plan. Wanna roll with it? Hit
      us up here.
    </Note>
  )
}
