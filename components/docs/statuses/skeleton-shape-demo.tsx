"use client"

import { Card, Skeleton } from "ui"

export default function SkeletonShapeDemo() {
  return (
    <Card className="p-4">
      <div className="flex gap-2">
        <Skeleton intent="lighter" shape="circle" className="size-8" />
        <div className="space-y-1">
          <Skeleton intent="muted" shape="circle" className="w-56 h-4" />
          <Skeleton intent="muted" shape="circle" className="w-10 h-4" />
        </div>
      </div>
    </Card>
  )
}
