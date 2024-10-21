"use client"

import { Link } from "ui"

export default function LinkIntentDemo() {
  return (
    <div className="flex gap-4">
      <Link intent="primary" href="#intent-1">
        Label
      </Link>
      <Link intent="secondary" href="#intent-2">
        Label
      </Link>
      <Link intent="lad/primary" href="#intent-3">
        Label
      </Link>
      <Link intent="danger" href="#intent-4">
        Label
      </Link>
      <Link href="#intent-5">Label</Link>
    </div>
  )
}
