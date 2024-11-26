"use client"

import React from "react"

import { ColorPicker } from "ui"

export default function ColorPickerAnatomy() {
  return (
    <ColorPicker label="Theme Color" description="Snag a color for the app theme" defaultValue="hsl(216, 98%, 52%)" />
  )
}
