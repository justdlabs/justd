'use client'

import React from 'react'

import { AsideLink } from '@/app/(app)/components/partials/on-this-page'
import AreaChartDemo from '@/components/docs/surfaces/chart/area/area-chart-demo'
import AreaChartGradientDemo from '@/components/docs/surfaces/chart/area/area-chart-gradient-demo'
import AreaChartLinearDemo from '@/components/docs/surfaces/chart/area/area-chart-linear-demo'
import AreaChartStackedDemo from '@/components/docs/surfaces/chart/area/area-chart-stacked-demo'
import BarChartAnalyticDemo from '@/components/docs/surfaces/chart/bar/bar-chart-analytic-demo'
import BarChartDemo from '@/components/docs/surfaces/chart/bar/bar-chart-demo'
import BarChartHorizontalDemo from '@/components/docs/surfaces/chart/bar/bar-chart-horizontal-demo'
import BarChartMixedDemo from '@/components/docs/surfaces/chart/bar/bar-chart-mixed-demo'
import BarChartMultipleDemo from '@/components/docs/surfaces/chart/bar/bar-chart-multiple-demo'
import LineChartDemo from '@/components/docs/surfaces/chart/line/line-chart-demo'
import LineChartDotsColorDemo from '@/components/docs/surfaces/chart/line/line-chart-dots-color-demo'
import LineChartDotsDemo from '@/components/docs/surfaces/chart/line/line-chart-dots-demo'
import LineChartLabelDemo from '@/components/docs/surfaces/chart/line/line-chart-label-demo'
import LineChartLinearDemo from '@/components/docs/surfaces/chart/line/line-chart-linear-demo'
import LineChartMultipleDemo from '@/components/docs/surfaces/chart/line/line-chart-multiple-demo'
import PieChartDemo from '@/components/docs/surfaces/chart/pie/pie-chart-demo'
import PieChartInteractiveDemo from '@/components/docs/surfaces/chart/pie/pie-chart-interactive-demo'
import PieChartLabelDemo from '@/components/docs/surfaces/chart/pie/pie-chart-label-demo'
import PieChartLegendDemo from '@/components/docs/surfaces/chart/pie/pie-chart-legend-demo'
import PieChartStackedDemo from '@/components/docs/surfaces/chart/pie/pie-chart-stacked-demo'
import RadarChartDemo from '@/components/docs/surfaces/chart/radar/radar-chart-demo'
import RadarChartDotsDemo from '@/components/docs/surfaces/chart/radar/radar-chart-dots-demo'
import RadarChartLineOnlyDemo from '@/components/docs/surfaces/chart/radar/radar-chart-line-only-demo'
import RadarChartMultipleDemo from '@/components/docs/surfaces/chart/radar/radar-chart-multiple-demo'
import RadialChartDemo from '@/components/docs/surfaces/chart/radial/radial-chart-demo'
import RadialChartGridDemo from '@/components/docs/surfaces/chart/radial/radial-chart-grid-demo'
import RadialChartShapeDemo from '@/components/docs/surfaces/chart/radial/radial-chart-shape-demo'
import RadialChartStackedDemo from '@/components/docs/surfaces/chart/radial/radial-chart-stacked-demo'
import RadialChartTextDemo from '@/components/docs/surfaces/chart/radial/radial-chart-text-demo'
import { useActiveItem } from '@/components/table-of-contents'
import { ListBox } from 'react-aria-components'
import { buttonStyles, Card, Container, Heading, Link, useMediaQuery } from 'ui'

export function Charts() {
  return (
    <div className="bg-muted/35 py-10 lg:py-16">
      <Container>
        <div className="flex lg:flex-row flex-col items-start gap-12">
          <OnThisPage />
          <div className="[&_.xlw32]:max-w-xl w-full space-y-16 [&_section]:scroll-mt-28 lg:[&_section>.grid]:grid-cols-2 [&_section>.grid]:gap-4">
            <section id="area">
              <Header
                title="Area Charts"
                description="Sorting in area charts is usually based on the x-axis, such as time or categories. Sorting helps ensure that the areas are plotted in a logical progression."
                docs="/docs/components/surfaces/chart#area-chart"
              />
              <div className="grid">
                <AreaChartDemo />
                <AreaChartStackedDemo />
                <AreaChartLinearDemo />
                <AreaChartGradientDemo />
              </div>
            </section>
            <section id="bar">
              <Header
                title="Bar Charts"
                description="A Bar Chart typically involves sorting based on the values of the bars. The bars can be ordered in ascending or descending order to make comparisons easier."
                docs="/docs/components/surfaces/chart#bar-chart"
              />
              <div className="grid">
                <BarChartDemo />
                <BarChartMultipleDemo />
                <BarChartHorizontalDemo />
                <BarChartAnalyticDemo />
                <BarChartMixedDemo />
              </div>
            </section>
            <section id="line">
              <Header
                title="Line Charts"
                description="Like area charts, line charts are typically sorted along the x-axis (e.g., time or other categories). Sorting ensures the data points are connected logically, allowing trends to be visible."
                docs="/docs/components/surfaces/chart#line-chart"
              />
              <div className="grid">
                <LineChartDemo />
                <LineChartMultipleDemo />
                <LineChartDotsDemo />
                <LineChartDotsColorDemo />
                <LineChartLabelDemo />
                <LineChartLinearDemo />
              </div>
            </section>
            <section id="pie">
              <Header
                title="Pie Charts"
                description="Sorting in pie charts is often done based on the size of each slice. The slices can be ordered from largest to smallest, which helps in visual clarity and emphasizing the most significant sections."
                docs="/docs/components/surfaces/chart#pie-chart"
              />
              <div className="grid">
                <PieChartDemo />
                <PieChartInteractiveDemo />
                <PieChartStackedDemo />
                <PieChartLegendDemo />
                <PieChartLabelDemo />
              </div>
            </section>
            <section id="radar">
              <Header
                title="Radar Charts"
                description="Radar charts don't typically involve sorting, as the points are plotted around a circular axis. However, sorting can be applied to reorder categories (axes) to make the chart easier to interpret by emphasizing specific patterns or values."
                docs="/docs/components/surfaces/chart#radar-chart"
              />
              <div className="grid">
                <RadarChartDemo />
                <RadarChartMultipleDemo />
                <RadarChartLineOnlyDemo />
                <RadarChartDotsDemo />
              </div>
            </section>
            <section id="radial">
              <Header
                title="Radial Charts"
                description="Similar to radar charts, radial charts generally do not involve sorting, as they are plotted radially. Sorting can be done based on the magnitude of values to arrange sections by size, from smallest to largest or vice versa"
                docs="/docs/components/surfaces/chart#radial-chart"
              />
              <div className="grid">
                <RadialChartDemo />
                <RadialChartStackedDemo />
                <RadialChartShapeDemo />
                <RadialChartTextDemo />
                <RadialChartGridDemo />
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}

const navigations = [
  {
    text: 'Area Charts',
    href: '#area',
    id: 'area'
  },
  {
    text: 'Bar Charts',
    href: '#bar',
    id: 'bar'
  },
  {
    text: 'Line Charts',
    href: '#line',
    id: 'line'
  },
  {
    text: 'Pie Charts',
    href: '#pie',
    id: 'pie'
  },
  {
    text: 'Radar Charts',
    href: '#radar',
    id: 'radar'
  },
  {
    text: 'Radial Charts',
    href: '#radial',
    id: 'radial'
  }
].map((x) => {
  return {
    text: x.text,
    href: x.href,
    id: x
  }
})

export function OnThisPage() {
  const activeId = useActiveItem(navigations.map((x) => x.href.split('#')[1]))
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  return (
    <>
      {isDesktop ? (
        <div className="w-1/6 pl-2 pt-0 pb-16 shrink-0 sticky top-28">
          <Heading level={2} className="mb-3 font-medium">
            On this Page
          </Heading>
          <ListBox aria-label="On this page">
            {navigations.map(({ text, href, id }) => (
              <AsideLink key={id.toString()} activeId={activeId || ''} text={text} href={href} />
            ))}
          </ListBox>
        </div>
      ) : null}
    </>
  )
}

interface HeaderProps {
  title: string
  description: string
  docs: string
}

export function Header({ title, description, docs }: HeaderProps) {
  return (
    <div className="flex items-center gap-2 justify-between">
      <Card.Header withoutPadding title={title} description={description} />
      <Link className={buttonStyles({ appearance: 'outline' })} href={docs}>
        View docs
      </Link>
    </div>
  )
}
