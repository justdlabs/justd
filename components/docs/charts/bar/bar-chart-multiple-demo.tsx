"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card, Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "ui"

const chartData = [
  { month: "Jan", sales: 1200, expenses: 900 },
  { month: "Feb", sales: 1400, expenses: 1100 },
  { month: "Mar", sales: 1300, expenses: 1050 },
  { month: "Apr", sales: 1500, expenses: 1250 },
  { month: "May", sales: 1600, expenses: 1300 },
  { month: "Jun", sales: 1700, expenses: 1400 },
  { month: "Jul", sales: 1800, expenses: 1450 },
  { month: "Aug", sales: 1900, expenses: 1500 },
  { month: "Sep", sales: 2000, expenses: 1600 },
  { month: "Oct", sales: 2100, expenses: 1700 },
  { month: "Nov", sales: 2200, expenses: 1800 },
  { month: "Dec", sales: 2300, expenses: 1900 }
]

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)"
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)"
  }
} satisfies ChartConfig

export default function BarChartMultipleDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Bar Chart - Sales vs Expenses</Card.Title>
        <Card.Description>Jan - Dec 2024</Card.Description>
      </Card.Header>
      <Card.Content>
        <Chart config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
            <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
            <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
