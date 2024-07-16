'use client'

import { Button, Card } from '@/components/ui'

export default function CardDemo() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Teerakat UI</Card.Title>
                <Card.Description>UI Library for your react project</Card.Description>
            </Card.Header>
            <Card.Content>
                Make beautiful websites regardless of your design experience.
            </Card.Content>
            <Card.Footer>
                <Button>View Details</Button>
            </Card.Footer>
        </Card>
    )
}
