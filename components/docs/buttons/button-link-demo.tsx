'use client'

import { buttonStyles, Link } from 'ui'

export default function ButtonLinkDemo() {
  return (
    <Link className={buttonStyles({ intent: 'info' })} href="/docs/components/collections/choicebox">
      Choicebox
    </Link>
  )
}
