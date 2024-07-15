import { Grid, GridItem } from 'ui'

export default function GridBasicDemo() {
  return (
    <div>
      <Grid columns={6}>
        <GridItem>
          <div className="p-4 border-l border-y h-32" />
        </GridItem>
        <GridItem>
          <div className="p-4 border-l border-y h-32" />
        </GridItem>
        <GridItem>
          <div className="p-4 border-l border-y h-32" />
        </GridItem>
        <GridItem>
          <div className="p-4 border-l border-y h-32" />
        </GridItem>
        <GridItem>
          <div className="p-4 border-l border-y h-32" />
        </GridItem>
        <GridItem>
          <div className="p-4 border-l border-y h-32 border-r" />
        </GridItem>
      </Grid>
    </div>
  )
}
