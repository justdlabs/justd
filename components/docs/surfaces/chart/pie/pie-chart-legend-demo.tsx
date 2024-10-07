"use client"

import { Pie, PieChart } from "recharts"
import { Card, Chart, ChartConfig } from "ui"

const data = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" }
]

const config = {
  visitors: {
    label: "Visitors"
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--primary-chart))"
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--secondary-chart))"
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--tertiary-chart))"
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--highlight-chart))"
  },
  other: {
    label: "Other",
    color: "hsl(var(--accent-chart))"
  }
} satisfies ChartConfig

export default function PieChartLegendDemo() {
  return (
    <Card className="flex flex-col">
      <Card.Header className="items-center pb-0">
        <Card.Title>Pie Chart - Legend</Card.Title>
        <Card.Description>January - June 2024</Card.Description>
      </Card.Header>
      <Card.Content className="flex-1 pb-0">
        <Chart className="min-h-[300px] mx-auto aspect-square max-h-[300px] w-full" config={config}>
          <PieChart>
            <Pie data={data} dataKey="visitors" />
            <Chart.Legend
              content={<Chart.LegendContent nameKey="browser" />}
              className="-translate-y-2 gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
