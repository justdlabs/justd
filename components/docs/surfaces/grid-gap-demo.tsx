import { Grid, GridItem } from 'ui'

export default function GridGapDemo() {
  return (
    <Grid
      columns={{
        initial: 4,
        sm: 5,
        md: 6
      }}
      gap={{
        initial: 2,
        sm: 4
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
