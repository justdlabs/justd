'use client'

import React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'
import { cn } from './primitive'

const gridCols = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
  none: 'grid-cols-none',
  subgrid: 'grid-cols-subgrid'
}

const colSpan = {
  auto: 'col-auto	',
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
  full: 'col-span-full'
}

const colStart = {
  1: 'col-start-1',
  2: 'col-start-2',
  3: 'col-start-3',
  4: 'col-start-4',
  5: 'col-start-5',
  6: 'col-start-6',
  7: 'col-start-7',
  8: 'col-start-8',
  9: 'col-start-9',
  10: 'col-start-10',
  11: 'col-start-11',
  12: 'col-start-12',
  13: 'col-start-13',
  auto: 'col-start-auto'
}

const colEnd = {
  1: 'col-end-1',
  2: 'col-end-2',
  3: 'col-end-3',
  4: 'col-end-4',
  5: 'col-end-5',
  6: 'col-end-6',
  7: 'col-end-7',
  8: 'col-end-8',
  9: 'col-end-9',
  10: 'col-end-10',
  11: 'col-end-11',
  12: 'col-end-12',
  13: 'col-end-13',
  auto: 'col-end-auto'
}

const gridRows = {
  1: 'grid-rows-1',
  2: 'grid-rows-2',
  3: 'grid-rows-3',
  4: 'grid-rows-4',
  5: 'grid-rows-5',
  6: 'grid-rows-6',
  7: 'grid-rows-7',
  8: 'grid-rows-8',
  9: 'grid-rows-9',
  10: 'grid-rows-10',
  11: 'grid-rows-11',
  12: 'grid-rows-12',
  none: 'grid-rows-none',
  subgrid: 'grid-rows-subgrid'
}

const rowSpan = {
  auto: 'row-auto',
  1: 'row-span-1',
  2: 'row-span-2',
  3: 'row-span-3',
  4: 'row-span-4',
  5: 'row-span-5',
  6: 'row-span-6',
  7: 'row-span-7',
  8: 'row-span-8',
  9: 'row-span-9',
  10: 'row-span-10',
  11: 'row-span-11',
  12: 'row-span-12',
  full: 'row-span-full'
}

const rowStart = {
  1: 'row-start-1',
  2: 'row-start-2',
  3: 'row-start-3',
  4: 'row-start-4',
  5: 'row-start-5',
  6: 'row-start-6',
  7: 'row-start-7',
  8: 'row-start-8',
  9: 'row-start-9',
  10: 'row-start-10',
  11: 'row-start-11',
  12: 'row-start-12',
  13: 'row-start-13',
  auto: 'row-start-auto'
}

const rowEnd = {
  1: 'row-end-1',
  2: 'row-end-2',
  3: 'row-end-3',
  4: 'row-end-4',
  5: 'row-end-5',
  6: 'row-end-6',
  7: 'row-end-7',
  8: 'row-end-8',
  9: 'row-end-9',
  10: 'row-end-10',
  11: 'row-end-11',
  12: 'row-end-12',
  13: 'row-end-13',
  auto: 'row-end-auto'
}

const gridFlow = {
  row: 'grid-flow-row',
  col: 'grid-flow-col',
  rowDense: 'grid-flow-row-dense',
  colDense: 'grid-flow-col-dense',
  dense: 'grid-flow-dense'
}

const autoCols = {
  auto: 'auto-cols-auto',
  min: 'auto-cols-min',
  max: 'auto-cols-max',
  fr: 'auto-cols-fr'
}

const autoRows = {
  auto: 'auto-rows-auto',
  min: 'auto-rows-min',
  max: 'auto-rows-max',
  fr: 'auto-rows-fr'
}

const gap = {
  0: 'gap-0',
  x: 'gap-x-0',
  y: 'gap-y-0',
  px: 'gap-px',
  0.5: 'gap-0.5',
  x0_5: 'gap-x-0.5',
  y0_5: 'gap-y-0.5',
  1: 'gap-1',
  x1: 'gap-x-1',
  y1: 'gap-y-1',
  1_5: 'gap-1.5',
  x1_5: 'gap-x-1.5',
  y1_5: 'gap-y-1.5',
  2: 'gap-2',
  x2: 'gap-x-2',
  y2: 'gap-y-2',
  2_5: 'gap-2.5',
  x2_5: 'gap-x-2.5',
  y2_5: 'gap-y-2.5',
  3: 'gap-3',
  x3: 'gap-x-3',
  y3: 'gap-y-3',
  3_5: 'gap-3.5',
  x3_5: 'gap-x-3.5',
  y3_5: 'gap-y-3.5',
  4: 'gap-4',
  x4: 'gap-x-4',
  y4: 'gap-y-4',
  5: 'gap-5',
  x5: 'gap-x-5',
  y5: 'gap-y-5',
  6: 'gap-6',
  x6: 'gap-x-6',
  y6: 'gap-y-6',
  7: 'gap-7',
  x7: 'gap-x-7',
  y7: 'gap-y-7',
  8: 'gap-8',
  x8: 'gap-x-8',
  y8: 'gap-y-8',
  9: 'gap-9',
  x9: 'gap-x-9',
  y9: 'gap-y-9',
  10: 'gap-10',
  x10: 'gap-x-10',
  y10: 'gap-y-10',
  11: 'gap-11',
  x11: 'gap-x-11',
  y11: 'gap-y-11',
  12: 'gap-12',
  x12: 'gap-x-12',
  y12: 'gap-y-12',
  14: 'gap-14',
  x14: 'gap-x-14',
  y14: 'gap-y-14',
  16: 'gap-16',
  x16: 'gap-x-16',
  y16: 'gap-y-16',
  20: 'gap-20',
  x20: 'gap-x-20',
  y20: 'gap-y-20',
  24: 'gap-24',
  x24: 'gap-x-24',
  y24: 'gap-y-24',
  28: 'gap-28',
  x28: 'gap-x-28',
  y28: 'gap-y-28',
  32: 'gap-32',
  x32: 'gap-x-32',
  y32: 'gap-y-32',
  36: 'gap-36',
  x36: 'gap-x-36',
  y36: 'gap-y-36',
  40: 'gap-40',
  x40: 'gap-x-40',
  y40: 'gap-y-40',
  44: 'gap-44',
  x44: 'gap-x-44',
  y44: 'gap-y-44',
  48: 'gap-48',
  x48: 'gap-x-48',
  y48: 'gap-y-48',
  52: 'gap-52',
  x52: 'gap-x-52',
  y52: 'gap-y-52',
  56: 'gap-56',
  x56: 'gap-x-56',
  y56: 'gap-y-56',
  60: 'gap-60',
  x60: 'gap-x-60',
  y60: 'gap-y-60',
  64: 'gap-64',
  x64: 'gap-x-64',
  y64: 'gap-y-64',
  72: 'gap-72',
  x72: 'gap-x-72',
  y72: 'gap-y-72',
  80: 'gap-80',
  x80: 'gap-x-80',
  y80: 'gap-y-80',
  96: 'gap-96',
  x96: 'gap-x-96',
  y96: 'gap-y-96'
}

const gridVariants = tv({
  base: ['grid'],
  variants: {
    cols: gridCols,
    rows: gridRows,
    flow: gridFlow,
    gap: gap,
    autoCols: autoCols,
    autoRows: autoRows
  },

  defaultVariants: {
    cols: 1
  },
  compoundVariants: [
    {
      cols: 1,
      class: 'grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1'
    },
    {
      cols: 2,
      class: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'
    },
    {
      cols: 3,
      class: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'
    },
    {
      cols: 4,
      class: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'
    },
    {
      cols: 5,
      class: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
    },
    {
      cols: 6,
      class: 'grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'
    }
  ]
})

export interface GridProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridVariants> {}

const Grid: React.FC<GridProps> = ({ className, cols, rows, flow, gap, autoCols, autoRows, ...props }) => {
  return <div className={cn(gridVariants({ cols, rows, flow, gap, autoCols, autoRows }), className)} {...props} />
}

Grid.displayName = 'Grid'

const gridCellVariants = tv({
  base: [],
  variants: {
    colSpan: colSpan,
    rowSpan: rowSpan,
    colStart: colStart,
    colEnd: colEnd,
    rowStart: rowStart,
    rowEnd: rowEnd
  },
  defaultVariants: {
    colSpan: 1,
    rowSpan: 1
  }
})

export interface GridCellProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridCellVariants> {}

const GridCell: React.FC<GridCellProps> = ({
  className,
  colSpan,
  rowSpan,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  ...props
}) => {
  return (
    <div
      className={cn(
        gridCellVariants({
          colSpan,
          rowSpan,
          colStart,
          colEnd,
          rowStart,
          rowEnd
        }),
        className
      )}
      {...props}
    />
  )
}

GridCell.displayName = 'GridCell'

export { Grid, GridCell, gridCellVariants, gridVariants }
