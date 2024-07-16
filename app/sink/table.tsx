'use client'

import { presidents } from '@/components/docs/collections/table-demo'
import { Card, Table } from '@/components/ui'

export default function TableSink() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Presidents of Indonesia</Card.Title>
                <Card.Description>
                    List of the all President of Indonesia
                </Card.Description>
            </Card.Header>
            <Card.Content>
                <Table aria-label='President of Indonesia' selectionMode='multiple'>
                    <Table.Header>
                        <Table.Column>#</Table.Column>
                        <Table.Column>Name</Table.Column>
                        <Table.Column>Year</Table.Column>
                        <Table.Column>Terms</Table.Column>
                    </Table.Header>
                    <Table.Body items={presidents}>
                        {(item) => (
                            <Table.Row key={item.id}>
                                <Table.Cell>{item.id}</Table.Cell>
                                <Table.Cell>{item.name}</Table.Cell>
                                <Table.Cell>{item.year}</Table.Cell>
                                <Table.Cell>{item.terms}</Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </Card.Content>
        </Card>
    )
}
