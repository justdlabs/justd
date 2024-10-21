import { BarChart } from "recharts"
import { Chart } from "ui"

export default function ChartAnatomy() {
  return (
    <Chart
      config={{
        sales: {
          label: "Sales",
          color: "hsl(var(--primary-chart))"
        }
      }}
    >
      <BarChart
        accessibilityLayer
        data={[
          { month: "January", sales: 5000 },
          { month: "February", sales: 7000 }
        ]}
      >
        <Chart.Tooltip cursor={false} content={<Chart.TooltipContent hideLabel />} />
      </BarChart>
    </Chart>
  )
}
