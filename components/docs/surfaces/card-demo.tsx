'use client'

import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'ui'

export default function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Report</CardTitle>
        <CardDescription>Financial summary for June</CardDescription>
      </CardHeader>
      <CardContent>
        The monthly financial report shows a 15% increase in revenue compared to last month.
      </CardContent>
      <CardFooter>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  )
}
