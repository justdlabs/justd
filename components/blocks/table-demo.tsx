'use client'

import { books } from '@/components/docs/collections/table-bulk-demo'
import { Table } from 'ui'

export function TableDemo() {
  return (
    <Table aria-label="Books">
      <Table.Header>
        <Table.Column>#</Table.Column>
        <Table.Column isRowHeader>Title</Table.Column>
        <Table.Column>Author</Table.Column>
        <Table.Column>Genre</Table.Column>
        <Table.Column>Published</Table.Column>
      </Table.Header>
      <Table.Body items={books.slice(0, 6)}>
        {(item) => (
          <Table.Row id={item.id}>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.title}</Table.Cell>
            <Table.Cell>{item.author}</Table.Cell>
            <Table.Cell>{item.genre}</Table.Cell>
            <Table.Cell>{item.publishedYear}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  )
}
