'use client'

import { Badge, badgeVariants, Table } from '@/components/ui'

export default function TableOfBadges() {
    const colors = Object.keys(badgeVariants).map((i) => {
        return {
            color: i
        }
    })
    return (
        <div className='not-prose rounded-xl border'>
            <Table aria-label='Available Badge Colors'>
                <Table.Header>
                    <Table.Column id='props'>Props</Table.Column>
                    <Table.Column id='name'>Name</Table.Column>
                    <Table.Column />
                </Table.Header>
                <Table.Body items={colors}>
                    {(item) => (
                        <Table.Row id={item.color}>
                            <Table.Cell>
                                <code>color</code>
                            </Table.Cell>
                            <Table.Cell>
                                <code>{item.color}</code>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge variant={item.color as any}>Label</Badge>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </div>
    )
}
