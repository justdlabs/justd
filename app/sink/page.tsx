import { AreaChartLegendBlock } from "@/app/sink/area-chart-legend-block"
import { BarChartBlock } from "@/app/sink/bar-chart-block"
import { LineChartBlock } from "@/app/sink/line-chart-block"
import { PieChartBlock } from "@/app/sink/pie-chart-block"

export default function Page() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-2">
        <BarChartBlock />
        <PieChartBlock />
        <AreaChartLegendBlock />
        <LineChartBlock />
      </div>
    </div>
  )
}
