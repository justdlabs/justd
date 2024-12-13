"use client"

import { Card, Skeleton } from "ui"

export default function SkeletonIntentDemo() {
  return (
    <Card className="p-4">
      <div className="flex gap-2">
        <Skeleton intent="lighter" className="size-8" />
        <div className="space-y-1">
          <Skeleton intent="muted" className="w-20 h-3.5" />
          <Skeleton intent="muted" className="w-48 h-3.5" />
        </div>
      </div>
    </Card>
  )
}
