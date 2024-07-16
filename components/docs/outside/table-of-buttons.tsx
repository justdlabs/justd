'use client'

import { NextLogo } from '@/components/logo'
import { Button, Card, Table } from '@/components/ui'

export function TableOfButtons() {
    return (
        <Card className='not-prose'>
            <Table aria-label='The list of button variations'>
                <Table.Header>
                    <Table.Column>Variant</Table.Column>
                    <Table.Column>Options</Table.Column>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Intent</Table.Cell>
                        <Table.Cell className='flex gap-1'>
                            <Button variant='primary'>Primary</Button>
                            <Button variant='secondary'>Secondary</Button>
                            <Button variant='danger'>Danger</Button>
                            <Button variant='success'>Success</Button>
                            <Button variant='info'>Info</Button>
                            <Button variant='warning'>Warning</Button>
                            <Button variant='dark'>Dark</Button>
                            <Button variant='outline'>Outline</Button>
                            <Button variant='ghost'>Ghost</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Size</Table.Cell>
                        <Table.Cell className='flex gap-1'>
                            <Button size='sm'>Small</Button>
                            <Button>Default (Medium)</Button>
                            <Button size='lg'>Large</Button>
                            <Button size='icon'>
                                <NextLogo />
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Shape</Table.Cell>
                        <Table.Cell className='flex gap-1'>
                            <Button shape='square'>Square</Button>
                            <Button shape='circle'>Circle</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Default Variants</Table.Cell>
                        <Table.Cell>variant: primary, size: md, shape: square</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Card>
    )
}
