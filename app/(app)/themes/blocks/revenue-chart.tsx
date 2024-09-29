"use client"

import { IconTrendingChart3 } from "justd-icons"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Card, Chart, type ChartConfig } from "ui"

export const description = "An area chart with gradient fill"

const chartData = [
  { month: "May", sales: 186, profit: 80 },
  { month: "June", sales: 305, profit: 200 },
  { month: "July", sales: 237, profit: 120 },
  { month: "August", sales: 73, profit: 190 },
  { month: "September", sales: 209, profit: 130 },
  { month: "October", sales: 214, profit: 140 }
]

const chartConfig = {
  sales: {
    label: "Sales",
    color: "oklch(var(--primary-chart))"
  },
  profit: {
    label: "Profit",
    color: "oklch(var(--secondary-chart))"
  }
} satisfies ChartConfig

export function RevenueChart() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Revenue</Card.Title>
        <Card.Description>Showing total revenue for the last 6 months</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent />} />
            <defs>
              <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-sales)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-sales)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-profit)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-profit)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="profit"
              type="natural"
              fill="url(#fillProfit)"
              fillOpacity={0.4}
              stroke="var(--color-profit)"
              stackId="a"
            />
            <Area
              dataKey="sales"
              type="natural"
              fill="url(#fillSales)"
              fillOpacity={0.4}
              stroke="var(--color-sales)"
              stackId="a"
            />
          </AreaChart>
        </Chart>
      </Card.Content>
      <Card.Footer>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <IconTrendingChart3 />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-fg">
              January - June 2024
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card>
  )
}
