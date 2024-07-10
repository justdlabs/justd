'use client'

import { IconCubeFill } from '@irsyadadl/paranoid'
import { Link, buttonStyles } from 'ui'

export function ShowMore() {
  return (
    <div className="flex items-center justify-end">
      <Link className={buttonStyles()} href="/docs/getting-started/installation">
        <IconCubeFill /> Show More
      </Link>
    </div>
  )
}
