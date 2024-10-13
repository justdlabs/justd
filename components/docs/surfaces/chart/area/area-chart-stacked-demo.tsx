'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import { Card, Chart, type ChartConfig } from 'ui'

const data = [
  { month: 'January', organic: 50, paid: 20, referral: 10 },
  { month: 'February', organic: 100, paid: 50, referral: 100 },
  { month: 'March', organic: 60, paid: 20, referral: 30 },
  { month: 'April', organic: 200, paid: 30, referral: 140 },
  { month: 'May', organic: 160, paid: 90, referral: 100 },
  { month: 'June', organic: 100, paid: 100, referral: 170 },
  { month: 'July', organic: 80, paid: 20, referral: 160 },
  { month: 'August', organic: 120, paid: 140, referral: 180 },
  { month: 'September', organic: 60, paid: 60, referral: 100 },
  { month: 'October', organic: 100, paid: 120, referral: 220 },
  { month: 'November', organic: 120, paid: 60, referral: 40 },
  { month: 'December', organic: 240, paid: 120, referral: 160 }
]

const config = {
  organic: {
    label: 'Organic Traffic',
    color: 'hsl(var(--primary-chart))'
  },
  paid: {
    label: 'Paid Traffic',
    color: 'hsl(var(--secondary-chart))'
  },
  referral: {
    label: 'Referral Traffic',
    color: 'hsl(var(--tertiary-chart))'
  }
} satisfies ChartConfig

export default function AreaChartStackedTrafficSources() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Area Chart - Stacked</Card.Title>
        <Card.Description>
          Traffic data from various sources over the last 10 months
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart className="min-h-[250px] max-h-[250px] w-full" config={config}>
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 10,
              right: 10
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Chart.Tooltip cursor={false} content={<Chart.TooltipContent indicator="dot" />} />
            <Area
              dataKey="referral"
              type="natural"
              fill="var(--color-referral)"
              fillOpacity={0.4}
              stroke="var(--color-referral)"
              stackId="a"
            />
            <Area
              dataKey="paid"
              type="natural"
              fill="var(--color-paid)"
              fillOpacity={0.4}
              stroke="var(--color-paid)"
              stackId="a"
            />
            <Area
              dataKey="organic"
              type="natural"
              fill="var(--color-organic)"
              fillOpacity={0.4}
              stroke="var(--color-organic)"
              stackId="a"
            />
          </AreaChart>
        </Chart>
      </Card.Content>
      <Card.Footer>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Overall traffic increased by 15.5% this month
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-fg">
              January - October 2024
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card>
  )
}
