"use client"

import { Link, buttonStyles } from "ui"

export default function ButtonLinkDemo() {
  return (
    <Link className={buttonStyles({ intent: "primary" })} href="/docs/components/collections/choicebox">
      Choicebox
    </Link>
  )
}
