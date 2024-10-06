"use client"

import React from "react"

import { IconFloppyDisk } from "justd-icons"
import { Button, Loader } from "ui"

export default function ButtonPendingDemo() {
  const [isLoading, setLoading] = React.useState(false)

  const handlePress = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4500)
  }
  return (
    <Button onPress={handlePress} isPending={isLoading}>
      {({ isPending }) => (
        <>
          {isPending ? <Loader variant="spin" aria-label="Saving..." /> : <IconFloppyDisk />}
          {isPending ? <span>Saving...</span> : <span>Save</span>}
        </>
      )}
    </Button>
  )
}
