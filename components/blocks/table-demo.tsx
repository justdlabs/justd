"use client"

import { books } from "@/components/docs/collections/table/table-bulk-demo"
import { Table } from "ui"

export function TableDemo() {
  return (
    <Table aria-label="Books">
      <Table.Header>
        <Table.Column>#</Table.Column>
        <Table.Column isRowHeader>Title</Table.Column>
        <Table.Column>Author</Table.Column>
        <Table.Column>Genre</Table.Column>
        <Table.Column className="flex justify-end">Published</Table.Column>
      </Table.Header>
      <Table.Body items={books.slice(1, 6)}>
        {(item) => (
          <Table.Row>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.title}</Table.Cell>
            <Table.Cell>{item.author}</Table.Cell>
            <Table.Cell>{item.genre}</Table.Cell>
            <Table.Cell className="text-right">
              {Math.floor(Math.random() * (7 - 1 + 1)) + 1} August , {item.publishedYear}
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  )
}
