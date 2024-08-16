"use client"

import React, { useState } from "react"

export default function CommandBasicDemo() {
  const [open, setOpen] = useState(false)
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "e") {
        e.preventDefault()
        setOpen((open: boolean) => !open)
      }
    }

    document.addEventListener("keydown", down)

    return () => document.removeEventListener("keydown", down)
  }, [])
  return <>{/*  */}</>
}
