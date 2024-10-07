"use client"

import * as React from "react"

import { Key } from "react-aria-components"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"
import { Card, Chart, type ChartConfig, Select } from "ui"

const data = [
  { month: "january", sales: 186, fill: "var(--color-january)" },
  { month: "february", sales: 305, fill: "var(--color-february)" },
  { month: "march", sales: 237, fill: "var(--color-march)" },
  { month: "april", sales: 173, fill: "var(--color-april)" },
  { month: "may", sales: 209, fill: "var(--color-may)" }
]

const config = {
  visitors: {
    label: "Visitors"
  },
  sales: {
    label: "Sales"
  },
  profit: {
    label: "Profit"
  },
  january: {
    label: "January",
    color: "hsl(var(--primary-chart))"
  },
  february: {
    label: "February",
    color: "hsl(var(--secondary-chart))"
  },
  march: {
    label: "March",
    color: "hsl(var(--tertiary-chart))"
  },
  april: {
    label: "April",
    color: "hsl(var(--highlight-chart))"
  },
  may: {
    label: "May",
    color: "hsl(var(--accent-chart))"
  }
} satisfies ChartConfig

export default function PieChartInteractiveDemo() {
  const id = "pie-interactive"
  const [activeMonth, setActiveMonth] = React.useState<Key>(data[0].month)

  const activeIndex = React.useMemo(
    () => data.findIndex((item) => item.month === activeMonth),
    [activeMonth]
  )
  const months = React.useMemo(() => data.map((item) => item.month), [])

  return (
    <Card data-chart={id} className="flex flex-col">
      <Chart.Style id={id} config={config} />
      <Card.Header className="flex-row items-start space-y-0 pb-0">
        <div className="grid w-full gap-1">
          <Card.Title>Pie Chart - Interactive</Card.Title>
          <Card.Description>January - June 2024</Card.Description>
        </div>
        <Select selectedKey={activeMonth} onSelectionChange={setActiveMonth}>
          <Select.Trigger
            className="ml-auto h-8 px-2 w-[130px] rounded-lg"
            aria-label="Select a value"
          />
          <Select.List className="rounded-xl">
            {months.map((key) => {
              const _config = config[key as keyof typeof config]

              if (!_config) {
                return null
              }

              return (
                <Select.Option key={key} id={key}>
                  <div className="flex items-center gap-2 text-xs">{_config?.label}</div>
                </Select.Option>
              )
            })}
          </Select.List>
        </Select>
      </Card.Header>
      <Card.Content className="flex flex-1 justify-center pb-0">
        <Chart id={id} config={config} className="mx-auto aspect-square w-full max-w-[315px]">
          <PieChart>
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent hideLabel />} />
            <Pie
              data={data}
              dataKey="sales"
              nameKey="month"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-fg text-3xl font-bold">
                          {data[activeIndex].sales.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-fg">
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
