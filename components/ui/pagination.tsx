'use client'

import * as React from 'react'

import {
  IconChevronLgLeft,
  IconChevronLgRight,
  IconChevronsLgLeft,
  IconChevronsLgRight,
  IconDotsHorizontal
} from '@irsyadadl/paranoid'
import type { GridListItemProps, GridListProps, LabelProps, LinkProps } from 'react-aria-components'
import { GridList, GridListItem, Link } from 'react-aria-components'

import { buttonStyles } from './button'
import { Label } from './field'
import { cn } from './primitive'
import { VisuallyHidden } from './visually-hidden'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center gap-1', className)}
    {...props}
  />
)

const PaginationList = <T extends object>({ className, ...props }: GridListProps<T>) => {
  return <GridList className={cn('flex flex-row items-center gap-1', className)} {...props} />
}

const PaginationItem = ({ className, ...props }: GridListItemProps) => <GridListItem className={className} {...props} />

interface PaginationLinkProps extends Omit<LinkProps, 'id'> {
  isCurrent?: boolean
  className?: string
  intent?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'light/dark' | 'success' | 'light' | 'dark'
  size?: 'medium' | 'large' | 'square-petite' | 'extra-small' | 'small'
  shape?: 'square' | 'circle'
  appearance?: 'solid' | 'outline' | 'plain'
}

const PaginationLink = ({ className, isCurrent, size = 'square-petite', ...props }: PaginationLinkProps) => (
  <Link
    aria-current={isCurrent ? 'page' : undefined}
    isDisabled={isCurrent}
    className={cn(
      buttonStyles({
        appearance: isCurrent ? 'solid' : 'outline',
        size,
        className: 'rounded-lg disabled:cursor-default disabled:opacity-100'
      }),
      className
    )}
    {...props}
  />
)

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="square-petite"
    slot="previous"
    className={className}
    {...props}
  >
    <IconChevronLgLeft />

    <span className="sr-only">Previous</span>
  </PaginationLink>
)

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="square-petite" slot="next" className={className} {...props}>
    <span className="sr-only">Next</span>
    <IconChevronLgRight />
  </PaginationLink>
)

const PaginationLast = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="square-petite" className={className} {...props}>
    <span className="sr-only">Last</span>
    <IconChevronsLgRight />
  </PaginationLink>
)

const PaginationFirst = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="square-petite" className={className} {...props}>
    <IconChevronsLgLeft />

    <span className="sr-only">First</span>
  </PaginationLink>
)

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span aria-hidden className={cn('flex size-9 items-center justify-center', className)} {...props}>
    <IconDotsHorizontal />
    <span className="sr-only">More pages</span>
  </span>
)

const PaginationLabel = ({ className, ...props }: LabelProps) => (
  <Label aria-hidden className={cn('grid h-9 place-content-center px-3 text-sm font-normal', className)} {...props} />
)

const PaginationSeparator = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span aria-hidden className={cn('mx-1 block h-5 w-px rotate-[14deg] self-center bg-border', className)} {...props}>
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
