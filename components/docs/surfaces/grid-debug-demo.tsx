import { Grid, GridItem } from 'ui'

export default function GridDebugDemo() {
  return (
    <Grid debug columns={3} gap={4}>
      <GridItem className="w-full h-24" />
      <GridItem className="w-full h-24" />
      <GridItem className="w-full h-24" />
      <GridItem className="w-full h-24" />
      <GridItem className="w-full h-24" />
      <GridItem className="w-full h-24" />
      <GridItem className="w-full h-24" />
      <GridItem className="w-full h-24" />
      <GridItem className="w-full h-24" />
    </Grid>
  )
}
