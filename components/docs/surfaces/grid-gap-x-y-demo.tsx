import { Grid, GridItem } from 'ui'

export default function GridGapXYDemo() {
  return (
    <Grid
      columns={{
        initial: 3,
        sm: 4,
        md: 6
      }}
      gapX={{
        initial: 2,
        sm: 4
      }}
      gapY={{
        initial: 4,
        sm: 6
      }}
    >
      <GridItem>
        <div className="p-4 border h-24" />
      </GridItem>
      <GridItem>
        <div className="p-4 border h-24" />
      </GridItem>
      <GridItem>
        <div className="p-4 border h-24" />
      </GridItem>
      <GridItem>
        <div className="p-4 border h-24" />
      </GridItem>
      <GridItem>
        <div className="p-4 border h-24" />
      </GridItem>
      <GridItem>
        <div className="p-4 border h-24" />
      </GridItem>
    </Grid>
  )
}
