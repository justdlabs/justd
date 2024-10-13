'use client'

import { Link } from 'ui'

export default function LinkDisabledDemo() {
  return (
    <div className="flex gap-4">
      <Link isDisabled intent="primary" href="#intent-1">
        Label
      </Link>
      <Link isDisabled intent="secondary" href="#intent-2">
        Label
      </Link>
      <Link isDisabled intent="lad/primary" href="#intent-3">
        Label
      </Link>
      <Link isDisabled intent="danger" href="#intent-4">
        Label
      </Link>
      <Link isDisabled href="#intent-5">
        Label
      </Link>
    </div>
  )
}
