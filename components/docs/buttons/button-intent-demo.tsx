'use client'

import { Button, Grid, GridItem } from 'ui'

export default function ButtonIntentDemo() {
  return (
    <Grid columns={{ lg: 3, sm: 2 }} gap={4}>
      <GridItem>
        <Button intent="light">Label</Button>
      </GridItem>
      <GridItem>
        <Button intent="secondary">Label</Button>
      </GridItem>
      <GridItem>
        <Button intent="danger">Label</Button>
      </GridItem>
      <GridItem>
        <Button intent="info">Label</Button>
      </GridItem>
      <GridItem>
        <Button intent="light/dark">Label</Button>
      </GridItem>
      <GridItem>
        <Button intent="success">Label</Button>
      </GridItem>
      <GridItem>
        <Button>Label</Button>
      </GridItem>
    </Grid>
  )
}
