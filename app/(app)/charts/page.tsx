import React from "react"

import { Charts } from "@/app/(app)/charts/partials/charts"
import { Header } from "@/components/header"

export default function Page() {
  return (
    <div>
      <Header>
        <span className="text-fg">Cha</span>
        <span className="text-muted-fg">rts</span>
      </Header>
      <Charts />
    </div>
  )
}
