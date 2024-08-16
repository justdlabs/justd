"use client"

import * as React from "react"

import { ShowMore } from "ui"

export default function ShowMoreAsTextDemo() {
  return (
    <div className="py-6">
      <ShowMore as="text" text="Or continue with" />
    </div>
  )
}
