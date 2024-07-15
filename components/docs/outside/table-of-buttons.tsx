'use client'

import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from 'ui'

export function TableOfButtons() {
  return (
    <Card className="not-prose">
      <Table aria-label="The list of button variations">
        <TableHeader>
          <TableColumn>Variant</TableColumn>
          <TableColumn>Options</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Intent</TableCell>
            <TableCell className="flex gap-1">
              <Badge>primary</Badge>
              <Badge>secondary</Badge>
              <Badge>success</Badge>
              <Badge>light/dark</Badge>
              <Badge>dark</Badge>
              <Badge>light</Badge>
              <Badge>info</Badge>
              <Badge>warning</Badge>
              <Badge>danger</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Appearance</TableCell>
            <TableCell className="flex gap-1">
              <Badge>solid</Badge>
              <Badge>outline</Badge>
              <Badge>plain</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Size</TableCell>
            <TableCell>square-petite, extra-small, small, medium, large</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Shape</TableCell>
            <TableCell className="flex gap-1">
              <Badge>square</Badge>
              <Badge>circle</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Default Variants</TableCell>
            <TableCell>
              intent: primary, appearance: solid, size: medium, shape: square
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}
