"use client"

import { IconChevronDown, IconChevronUp, IconHamburger } from "justd-icons"
import type {
  CellProps,
  ColumnProps,
  RowProps,
  TableBodyProps,
  TableHeaderProps,
  TableProps as TablePrimitiveProps
} from "react-aria-components"
import {
  Button,
  Cell,
  Collection,
  Column,
  Row,
  Table as TablePrimitive,
  TableBody,
  TableHeader,
  useTableOptions
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { Checkbox } from "./checkbox"
import { cn } from "./primitive"

const table = tv({
  slots: {
    root: "table w-full caption-bottom border-spacing-0 text-sm outline-none",
    column:
      "whitespace-nowrap allows-sorting:cursor-pointer px-3 py-3 text-left dragging:cursor-grabbing font-medium outline-none [&:has([slot=selection])]:pr-0",
    header: "border-b x32",
    row: "tr group relative cursor-default border-b text-fg/70 outline-none ring-primary focus-visible:ring-1 selected:bg-primary/15",
    cell: "whitespace-nowrap px-3 py-3 outline-none"
  }
})

const { root, header, column, row, cell } = table()

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

const Body = <T extends object>(props: TableBodyProps<T>) => (
  <TableBody {...props} className={cn("[&_.tr:last-child]:border-0")} />
)

interface TableCellProps extends CellProps {
  className?: string
}

const TableCell = ({ children, className, ...props }: TableCellProps) => (
  <Cell {...props} className={cell({ className })}>
    {children}
  </Cell>
)

interface TableColumnProps extends ColumnProps {
  className?: string
}

const TableColumn = ({ children, className, ...props }: TableColumnProps) => (
  <Column {...props} className={column({ className })}>
    {({ allowsSorting, sortDirection }) => (
      <div className="flex [&>[data-slot=icon]]:shrink-0 items-center gap-2">
        <>
          {children}
          {allowsSorting &&
            (sortDirection === undefined ? (
              <span>daf</span>
            ) : sortDirection === "ascending" ? (
              <IconChevronUp />
            ) : (
              <IconChevronDown />
            ))}
        </>
      </div>
    )}
  </Column>
)

interface HeaderProps<T extends object> extends TableHeaderProps<T> {
  className?: string
}

const Header = <T extends object>({ children, className, columns, ...props }: HeaderProps<T>) => {
  const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()
  return (
    <TableHeader {...props} className={header({ className })}>
      {allowsDragging && <Column />}
      {selectionBehavior === "toggle" && (
        <Column className="pl-4">
          {selectionMode === "multiple" && <Checkbox slot="selection" />}
        </Column>
      )}
      <Collection items={columns}>{children}</Collection>
    </TableHeader>
  )
}

interface TableRow<T extends object> extends RowProps<T> {
  className?: string
}

const TableRow = <T extends object>({
  children,
  className,
  columns,
  id,
  ...props
}: TableRow<T>) => {
  const { selectionBehavior, allowsDragging } = useTableOptions()
  return (
    <Row
      id={id}
      {...props}
      className={row({
        className: "href" in props ? cn("cursor-pointer hover:bg-secondary/50", className) : ""
      })}
    >
      {allowsDragging && (
        <Cell className="ring-primary pr-0 group cursor-grab dragging:cursor-grabbing">
          <Button
            className="bg-transparent pl-3.5 py-1.5 text-muted-fg pressed:text-fg"
            slot="drag"
          >
            <IconHamburger />
          </Button>
        </Cell>
      )}
      {selectionBehavior === "toggle" && (
        <Cell className="pl-4">
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 hidden h-full w-0.5 bg-primary group-selected:block"
          />
          <Checkbox slot="selection" />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </Row>
  )
}

Table.Body = Body
Table.Cell = TableCell
Table.Column = TableColumn
Table.Header = Header
Table.Row = TableRow

export { Table }
