"use client"

import { Grid } from "ui"

export default function GridItemDemo() {
  return (
    <Grid debug columns={3} gap={4}>
      <Grid.Item
        colSpan={{
          initial: 1,
          sm: 2,
        }}
        className="grid place-content-center w-full h-24"
      >
        1
      </Grid.Item>
      <Grid.Item className="grid place-content-center w-full h-24">2</Grid.Item>
      <Grid.Item
        colSpan={{
          initial: 1,
          sm: 3,
        }}
        className="grid place-content-center w-full h-24"
      >
        3
      </Grid.Item>
    </Grid>
  )
}
