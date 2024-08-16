"use client"

import React from "react"

import { IconPin } from "justd-icons"
import { Toggle } from "ui"

export default function ToggleDisabledDemo() {
  return (
    <Toggle size="square-petite" isDisabled>
      <IconPin />
    </Toggle>
  )
}
