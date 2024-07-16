'use client'

import { Table } from '@/components/ui'

export const presidents = [
    { id: '1', name: 'Soekarno', year: '1945 - 1965', terms: '20 Years' },
    { id: '2', name: 'Soeharto', year: '1965 - 1998', terms: '32 Years' },
    { id: '3', name: 'B.J. Habibie', year: '1998 - 1999', terms: '1 Year' },
    { id: '4', name: 'Abdurrahman Wahid', year: '1999 - 2001', terms: '2 Years' },
    { id: '5', name: 'Megawati Soekarnoputri', year: '2001 - 2004', terms: '3 Years' },
    { id: '6', name: 'Susilo Bambang Yudhoyono', year: '2004 - 2014', terms: '10 Years' },
    { id: '7', name: 'Joko Widodo', year: '2014 - 2024', terms: '10 Years' },
    { id: '8', name: 'Prabowo Subianto', year: '2024 - Now', terms: 'Not yet' }
]

export default function TableDemo() {
    return (
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
    )
}
