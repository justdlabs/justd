import { Card, Skeleton } from "ui"

export default function SkeletonAnatomy() {
  return (
    <Card className="p-4">
      <div className="flex gap-2">
        <Skeleton intent="lighter" shape="circle" className="size-8" />
        <div className="space-y-1">
          <Skeleton intent="muted" shape="circle" className="w-56 h-4" />
          <Skeleton intent="lighter" shape="circle" className="w-16 h-4" />
          <Skeleton intent="lighter" className="w-24 h-4" />
          <Skeleton intent="muted" className="w-32 h-4" />
        </div>
      </div>
    </Card>
  )
}
