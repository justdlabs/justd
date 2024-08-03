'use client'

import { books } from '@/components/docs/collections/table-bulk-demo'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from 'ui'

export function TableDemo() {
  return (
    <Table aria-label="Books">
      <TableHeader>
        <TableColumn>#</TableColumn>
        <TableColumn isRowHeader>Title</TableColumn>
        <TableColumn>Author</TableColumn>
        <TableColumn>Genre</TableColumn>
        <TableColumn>Published</TableColumn>
      </TableHeader>
      <TableBody items={books.slice(0, 6)}>
        {(item) => (
          <TableRow id={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.author}</TableCell>
            <TableCell>{item.genre}</TableCell>
            <TableCell>{item.publishedYear}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
