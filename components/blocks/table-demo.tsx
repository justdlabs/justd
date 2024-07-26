'use client'

import { bands } from '@/components/docs/collections/table-demo'
import { IconDotsVertical } from '@irsyadadl/paranoid'
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from 'ui'

export function TableDemo() {
  return (
    <Table aria-label="Bands" selectionMode="multiple">
      <TableHeader>
        <TableColumn>#</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Genre</TableColumn>
        <TableColumn />
      </TableHeader>
      <TableBody items={bands.slice(0, 6)}>
        {(item) => (
          <TableRow>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.genre}</TableCell>
            <TableCell>
              <div className="flex justify-end">
                <Menu>
                  <MenuTrigger>
                    <IconDotsVertical />
                  </MenuTrigger>
                  <MenuContent aria-label="Actions" showArrow placement="left">
                    <MenuItem>View</MenuItem>
                    <MenuItem>Edit</MenuItem>
                    <MenuSeparator />
                    <MenuItem isDanger>Delete</MenuItem>
                  </MenuContent>
                </Menu>
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
