import { Button, Card, Grid } from "ui"

export default function Page() {
  return (
    <Grid columns={3} gap={3} className="p-4">
      <Card className="max-w-lg">
        <Card.Header>
          <Card.Title>Monthly Report</Card.Title>
          <Card.Description>Financial summary for June</Card.Description>
        </Card.Header>
        <Card.Content>
          The monthly financial report shows a 15% increase in revenue compared to last month.
        </Card.Content>
        <Card.Footer>
          <Button>View Details</Button>
        </Card.Footer>
      </Card>
      <Card className="max-w-lg">
        <Card.Header>
          <Card.Title>Monthly Report</Card.Title>
          <Card.Description>Financial summary for June</Card.Description>
        </Card.Header>
        <Card.Content>
          The monthly financial report shows a 15% increase in revenue compared to last month.
        </Card.Content>
        <Card.Footer>
          <Button>View Details</Button>
        </Card.Footer>
      </Card>
      <Card className="max-w-lg">
        <Card.Header>
          <Card.Title>Monthly Report</Card.Title>
          <Card.Description>Financial summary for June</Card.Description>
        </Card.Header>
        <Card.Content>
          The monthly financial report shows a 15% increase in revenue compared to last month.
        </Card.Content>
        <Card.Footer>
          <Button>View Details</Button>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
