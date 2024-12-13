"use client"

import { Card, Skeleton } from "ui"

export default function SkeletonDemo() {
  return (
    <Card className="p-4">
      <div className="flex gap-2">
        <Skeleton shape="circle" className="size-6" />
        <div className="space-y-1">
          <Skeleton className="w-56 h-3" />
          <Skeleton className="w-10 h-3" />
        </div>
      </div>
    </Card>
  )
}
