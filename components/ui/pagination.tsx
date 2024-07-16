'use client'

import * as React from 'react'

import {
  IconChevronLgLeft,
  IconChevronLgRight,
  IconChevronsLgLeft,
  IconChevronsLgRight,
  IconDotsHorizontal
} from '@irsyadadl/paranoid'
import type {
  GridListItemProps,
  GridListProps,
  LabelProps,
  LinkProps
} from 'react-aria-components'
import { GridList, GridListItem, Link } from 'react-aria-components'
import type { VariantProps } from 'tailwind-variants'

import { buttonStyles } from './button'
import { Label } from './field'
import { cn } from './primitive'
import { VisuallyHidden } from './visually-hidden'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)

const PaginationList = <T extends object>({ className, ...props }: GridListProps<T>) => {
  return (
    <GridList className={cn('flex flex-row items-center gap-1', className)} {...props} />
  )
}

const PaginationItem = ({ className, ...props }: GridListItemProps) => (
  <GridListItem className={cn(className)} {...props} />
)

interface PaginationLinkProps
  extends Omit<LinkProps, 'id'>,
    VariantProps<typeof buttonStyles> {
  isActive?: boolean
  className?: string
}

const PaginationLink = ({
  className,
  isActive,
  size = 'square-petite',
  ...props
}: PaginationLinkProps) => (
  <Link
    routerOptions={{
      scroll: false
    }}
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonStyles({
        appearance: isActive ? 'solid' : 'outline',
        size,
        className: 'rounded-lg'
      }),
      className
    )}
    {...props}
  />
)

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="square-petite"
    className={cn('gap-1', className)}
    {...props}
  >
    <IconChevronLgLeft />

    <span className="sr-only">Previous</span>
  </PaginationLink>
)

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="square-petite"
    className={cn('gap-1', className)}
    {...props}
  >
    <span className="sr-only">Next</span>
    <IconChevronLgRight />
  </PaginationLink>
)

const PaginationLast = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="square-petite"
    className={cn('gap-1', className)}
    {...props}
  >
    <span className="sr-only">Last</span>
    <IconChevronsLgRight />
  </PaginationLink>
)

const PaginationFirst = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="square-petite"
    className={cn('gap-1', className)}
    {...props}
  >
    <IconChevronsLgLeft />

    <span className="sr-only">First</span>
  </PaginationLink>
)

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex size-9 items-center justify-center', className)}
    {...props}
  >
    <IconDotsHorizontal className="size-4" />
    <span className="sr-only">More pages</span>
  </span>
)

const PaginationLabel = ({ className, ...props }: LabelProps) => (
  <Label
    aria-hidden
    className={cn('grid h-9 place-content-center px-3 text-sm font-normal', className)}
    {...props}
  />
)

const PaginationSeparator = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('mx-1 h-5 w-px rotate-[14deg] bg-border block self-center', className)}
    {...props}
  >
    <VisuallyHidden>Divider</VisuallyHidden>
  </span>
)

export {
  Pagination,
  PaginationList,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLabel,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationSeparator
}
