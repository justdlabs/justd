'use client'

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from 'ui'

export const bands = [
  { id: '1', name: 'Nirvana', genre: 'Grunge', latestAlbum: 'In Utero' },
  {
    id: '2',
    name: 'Radiohead',
    genre: 'Alternative Rock',
    latestAlbum: 'A Moon Shaped Pool'
  },
  { id: '3', name: 'Foo Fighters', genre: 'Rock', latestAlbum: 'Medicine at Midnight' },
  {
    id: '4',
    name: 'Arctic Monkeys',
    genre: 'Indie Rock',
    latestAlbum: 'Tranquility Base Hotel & Casino'
  },
  { id: '5', name: 'The Strokes', genre: 'Indie Rock', latestAlbum: 'The New Abnormal' },
  {
    id: '6',
    name: 'Red Hot Chili Peppers',
    genre: 'Funk Rock',
    latestAlbum: 'Unlimited Love'
  },
  { id: '7', name: 'Green Day', genre: 'Punk Rock', latestAlbum: 'Father of All...' }
]

export default function TableDemo() {
  return (
    <Table aria-label="Bands" selectionMode="multiple">
      <TableHeader>
        <TableColumn>#</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Genre</TableColumn>
        <TableColumn>Latest Album</TableColumn>
      </TableHeader>
      <TableBody items={bands}>
        {(item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.genre}</TableCell>
            <TableCell>{item.latestAlbum}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
