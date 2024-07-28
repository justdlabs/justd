'use client'

import { IconLoader } from '@irsyadadl/paranoid'
import { useAsyncList } from '@react-stately/data'
import { Card, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from 'ui'

interface Character {
  title: string
  director: number
  producer: number
  release_date: number
}

export default function TableSortingDemo() {
  const list = useAsyncList<Character>({
    async load({ signal }) {
      const res = await fetch(`https://swapi.py4e.com/api/films`, {
        signal
      })
      const json = await res.json()
      return {
        items: json.results
      }
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          // @ts-ignore
          const first = a[sortDescriptor.column]
          // @ts-ignore
          const second = b[sortDescriptor.column]
          let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1
          }
          return cmp
        })
      }
    }
  })
  return (
    <Card>
      <Table aria-label="Movies" selectionMode="multiple" sortDescriptor={list.sortDescriptor} onSortChange={list.sort}>
        <TableHeader>
          <TableColumn id="title" isRowHeader allowsSorting>
            Title
          </TableColumn>
          <TableColumn id="director" allowsSorting>
            Director
          </TableColumn>
          <TableColumn id="producer" allowsSorting>
            Producer
          </TableColumn>
          <TableColumn id="release_date" allowsSorting>
            Release Date
          </TableColumn>
        </TableHeader>
        <TableBody
          items={list.items}
          renderEmptyState={() => (
            <div className="grid place-content-center p-10">
              <IconLoader className="animate-spin" />
            </div>
          )}
        >
          {(item) => (
            <TableRow id={item.title}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.director}</TableCell>
              <TableCell>{item.producer}</TableCell>
              <TableCell>{item.release_date}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Card>
  )
}

const movies = [
  { id: '1', name: 'The Matrix', genre: 'Sci-Fi', releaseYear: 1999, director: 'Wachowskis', rating: 8.7 },
  { id: '2', name: 'Inception', genre: 'Sci-Fi', releaseYear: 2010, director: 'Christopher Nolan', rating: 8.8 },
  { id: '3', name: 'The Godfather', genre: 'Crime', releaseYear: 1972, director: 'Francis Ford Coppola', rating: 9.2 },
  { id: '4', name: 'Pulp Fiction', genre: 'Crime', releaseYear: 1994, director: 'Quentin Tarantino', rating: 8.9 },
  { id: '5', name: 'The Dark Knight', genre: 'Action', releaseYear: 2008, director: 'Christopher Nolan', rating: 9.0 },
  { id: '6', name: 'Fight Club', genre: 'Drama', releaseYear: 1999, director: 'David Fincher', rating: 8.8 },
  { id: '7', name: 'Forrest Gump', genre: 'Drama', releaseYear: 1994, director: 'Robert Zemeckis', rating: 8.8 }
]
