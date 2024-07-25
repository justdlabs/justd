'use client'

import { Grid, GridItem } from 'ui'

export default function GridItemDemo() {
  return (
    <Grid debug columns={3} gap={4}>
      <GridItem
        colSpan={{
          initial: 1,
          sm: 2
        }}
        className="w-full h-24 grid place-content-center"
      >
        1
      </GridItem>
      <GridItem className="w-full h-24 grid place-content-center">2</GridItem>
      <GridItem
        colSpan={{
          initial: 1,
          sm: 3
        }}
        className="w-full h-24 grid place-content-center"
      >
        3
      </GridItem>
    </Grid>
  )
}
