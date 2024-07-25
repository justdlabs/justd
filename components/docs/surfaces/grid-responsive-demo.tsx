'use client'

import { Grid, GridItem } from 'ui'

export default function GridResponsiveDemo() {
  return (
    <Grid
      columns={{
        initial: 3,
        sm: 4,
        md: 5,
        xl: 6
      }}
      gap={{
        initial: 2,
        sm: 3,
        lg: 4
      }}
    >
      <GridItem>
        <div className="p-4 border h-32" />
      </GridItem>
      <GridItem>
        <div className="p-4 border h-32" />
      </GridItem>
      <GridItem>
        <div className="p-4 border h-32" />
      </GridItem>
      <GridItem>
        <div className="p-4 border h-32" />
      </GridItem>
      <GridItem>
        <div className="p-4 border h-32" />
      </GridItem>
      <GridItem>
        <div className="p-4 border h-32" />
      </GridItem>
    </Grid>
  )
}
