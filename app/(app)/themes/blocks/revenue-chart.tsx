"use client"

import { IconChartTrending } from "justd-icons"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Card, Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "ui"

const data = [
  { month: "Jan", satisfaction: 70, engagement: 60 },
  { month: "Feb", satisfaction: 85, engagement: 75 },
  { month: "Mar", satisfaction: 95, engagement: 50 },
  { month: "Apr", satisfaction: 80, engagement: 70 },
  { month: "May", satisfaction: 90, engagement: 65 },
  { month: "Jun", satisfaction: 75, engagement: 80 },
  { month: "Jul", satisfaction: 65, engagement: 55 },
  { month: "Aug", satisfaction: 85, engagement: 90 },
  { month: "Sep", satisfaction: 95, engagement: 85 },
  { month: "Oct", satisfaction: 70, engagement: 60 },
  { month: "Nov", satisfaction: 80, engagement: 75 },
  { month: "Dec", satisfaction: 100, engagement: 95 }
]

const chartConfig = {
  satisfaction: {
    label: "Customer Satisfaction",
    color: "hsl(var(--chart-1))"
  },
  engagement: {
    label: "Customer Engagement",
    color: "hsl(var(--chart-2))"
  }
} satisfies ChartConfig

export function RevenueChart() {
  return (
    <Card>
      <Card.Header title="Customer Satisfaction" description="Satisfaction and engagement levels throughout the year" />
      <Card.Content>
        <Chart config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={data}
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
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillSatisfaction" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-satisfaction)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-satisfaction)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillEngagement" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-engagement)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-engagement)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="engagement"
              type="natural"
              fill="url(#fillEngagement)"
              fillOpacity={0.4}
              stroke="var(--color-engagement)"
              stackId="a"
            />
            <Area
              dataKey="satisfaction"
              type="natural"
              fill="url(#fillSatisfaction)"
              fillOpacity={0.4}
              stroke="var(--color-satisfaction)"
              stackId="a"
            />
          </AreaChart>
        </Chart>
      </Card.Content>
      <Card.Footer>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Satisfaction increased by 3.2% this year <IconChartTrending />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-fg">
              January - December {new Date().getFullYear() - 1}
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card>
  )
}
