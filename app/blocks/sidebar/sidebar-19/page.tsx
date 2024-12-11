import { Card, Heading } from "ui"

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <Heading level={1}>Latest Videos</Heading>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <Card key={index} className="aspect-video bg-secondary/50" />
        ))}
      </div>
    </div>
  )
}
