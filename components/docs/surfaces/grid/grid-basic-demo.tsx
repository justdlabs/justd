"use client"

import { Grid } from "ui"

export default function GridBasicDemo() {
  return (
    <Grid columns={6}>
      <Grid.Item>
        <div className="p-4 h-32 border-l border-y" />
      </Grid.Item>
      <Grid.Item>
        <div className="p-4 h-32 border-l border-y" />
      </Grid.Item>
      <Grid.Item>
        <div className="p-4 h-32 border-l border-y" />
      </Grid.Item>
      <Grid.Item>
        <div className="p-4 h-32 border-l border-y" />
      </Grid.Item>
      <Grid.Item>
        <div className="p-4 h-32 border-l border-y" />
      </Grid.Item>
      <Grid.Item>
        <div className="p-4 h-32 border-r border-l border-y" />
      </Grid.Item>
    </Grid>
  )
}
