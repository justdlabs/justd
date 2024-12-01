import React from "react"

import TableDemo from "@/components/docs/collections/table/table-demo"
import { Card, Grid } from "ui"

export default function Page() {
  return (
    <div className="space-y-6 lg:space-y-10">
      <h1 className="font-semibold text-2xl mb-2 lg:mb-4">Overview</h1>

      <Grid className="divide-y lg:divide-y-0 lg:divide-x lg:border-x" columns={{ initial: 1, lg: 4 }}>
        {Object.values(data).map((item, index) => (
          <Card key={index} className="border-y-0 shadow-none border-x-0 rounded-none py-4 lg:px-6">
            <Card.Header className="p-0" title={item.value} description={item.description} />
          </Card>
        ))}
      </Grid>
      <div>
        <Card.Header
          className="px-0 pt-0"
          title="Products"
          description="A list of the latest products added to the store."
        />
        <TableDemo />
      </div>
    </div>
  )
}

const data = {
  revenue: {
    title: "Total Revenue",
    value: "$1,200,000",
    description: "The total revenue generated over the past year."
  },
  income: {
    title: "Net Income",
    value: "$300,000",
    description: "The total income after all expenses have been deducted."
  },
  expenses: {
    title: "Total Expenses",
    value: "$900,000",
    description: "The total expenses incurred over the past year."
  },
  profitMargin: {
    title: "Profit Margin",
    value: "25%",
    description: "The percentage of revenue that represents profit."
  }
}
