'use client'

import { IconChevronDown, IconChevronUp, IconDotGrid2X3 } from '@irsyadadl/paranoid'
import {
  Button,
  Cell,
  type CellProps,
  Collection,
  Column,
  type ColumnProps,
  Row,
  type RowProps,
  Table as TablePrimitive,
  TableBody as TableBodyPrimitive,
  type TableBodyProps,
  TableHeader as TableHeaderPrimitive,
  type TableHeaderProps,
  type TableProps as TablePrimitiveProps,
  useTableOptions
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Checkbox } from './checkbox'
import { cn } from './primitive'

const table = tv({
  slots: {
    root: 'table w-full caption-bottom border-spacing-0 text-sm outline-none',
    column: 'whitespace-nowrap px-4 py-3 text-left font-medium outline-none [&:has([slot=selection])]:pr-0',
    header: 'border-b',
    row: 'tr group relative cursor-default border-b text-fg/70 outline-none ring-primary focus-visible:ring-1 selected:bg-primary/15',
    cell: 'whitespace-nowrap px-4 py-3 outline-none'
  }
})

const { root, header, column, row, cell } = table()

const TableBody = <T extends object>(props: TableBodyProps<T>) => (
  <TableBodyPrimitive {...props} className={cn('[&_.tr:last-child]:border-0')} />
)

interface TableProps extends TablePrimitiveProps {
  className?: string
}

const Table = ({ children, className, ...props }: TableProps) => (
  <div className="relative w-full overflow-auto">
    <TablePrimitive {...props} className={root({ className })}>
      {children}
    </TablePrimitive>
  </div>
)

const TableCell = ({ children, className, ...props }: CellProps & { className?: string }) => (
  <Cell {...props} className={cell({ className })}>
    {children}
  </Cell>
)

const TableColumn = ({ children, className, ...props }: ColumnProps & { className?: string }) => (
  <Column isRowHeader {...props} className={column({ className })}>
    {({ allowsSorting, sortDirection }) => (
      <div className="flex items-center gap-2">
        <>
          {children}
          {allowsSorting &&
            (sortDirection === undefined ? (
              <div className="w-6"></div>
            ) : sortDirection === 'ascending' ? (
              <IconChevronUp />
            ) : (
              <IconChevronDown />
            ))}
        </>
      </div>
    )}
  </Column>
)

const TableHeader = <T extends object>({
  children,
  className,
  columns,
  ...props
}: TableHeaderProps<T> & { className?: string }) => {
  const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()
  return (
    <TableHeaderPrimitive {...props} className={header({ className })}>
      {allowsDragging && <Column />}
      {selectionBehavior === 'toggle' && (
        <Column className="pl-4">{selectionMode === 'multiple' && <Checkbox slot="selection" />}</Column>
      )}
      <Collection items={columns}>{children}</Collection>
    </TableHeaderPrimitive>
  )
}

const TableRow = <T extends object>({
  children,
  className,
  columns,
  id,
  ...props
}: RowProps<T> & { className?: string }) => {
  const { selectionBehavior, allowsDragging } = useTableOptions()
  return (
    <Row
      id={id}
      {...props}
      className={row({
        className: 'href' in props ? cn('cursor-pointer hover:bg-secondary/50', className) : ''
      })}
    >
      {allowsDragging && (
        <Cell className="ring-primary">
          <Button
            className="cursor-pointer bg-transparent p-1.5 text-muted-fg pressed:cursor-grab pressed:text-fg"
            slot="drag"
          >
            <IconDotGrid2X3 className="size-5" />
          </Button>
        </Cell>
      )}
      {selectionBehavior === 'toggle' && (
        <Cell className="pl-4">
          <span aria-hidden className="absolute inset-y-0 left-0 hidden h-full w-0.5 bg-primary group-selected:block" />
          <Checkbox slot="selection" />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </Row>
  )
}

export { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, type TableProps }
