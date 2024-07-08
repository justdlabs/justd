'use client'

import { Badge, badgeIntents, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from 'ui'

export default function TableOfBadges() {
  const colors = Object.keys(badgeIntents).map((i) => {
    return {
      color: i
    }
  })
  return (
    <div className="not-prose rounded-xl border">
      <Table aria-label="Available Badge Colors">
        <TableHeader>
          <TableColumn id="props">Props</TableColumn>
          <TableColumn id="name">Name</TableColumn>
          <TableColumn />
        </TableHeader>
        <TableBody items={colors}>
          {(item) => (
            <TableRow id={item.color}>
              <TableCell>
                <code>color</code>
              </TableCell>
              <TableCell>
                <code>{item.color}</code>
              </TableCell>
              <TableCell>
                <Badge intent={item.color as any}>Label</Badge>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
