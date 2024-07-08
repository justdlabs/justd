'use client'

import {
  IconChevronLgLeft,
  IconChevronLgRight,
  IconChevronsLgLeft,
  IconChevronsLgRight,
  IconDotsHorizontal
} from '@irsyadadl/paranoid'
import Link from 'next/link'
import * as React from 'react'
import type { LabelProps } from 'react-aria-components'
import { type ButtonProps, buttonStyles } from './button'
import { Label } from './field'
import { cn } from './primitive'
import { Separator } from './separator'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
  )
)
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn(className)} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, 'size'> &
  Omit<React.ComponentProps<typeof Link>, 'size'>

const PaginationLink = ({ className, isActive, size = 'square-petite', ...props }: PaginationLinkProps) => (
  <Link
    scroll={false}
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
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="square-petite" className={cn('gap-1', className)} {...props}>
    <IconChevronLgLeft />

    <span className="sr-only">Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="square-petite" className={cn('gap-1', className)} {...props}>
    <span className="sr-only">Next</span>
    <IconChevronLgRight />
  </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

const PaginationLast = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="square-petite" className={cn('gap-1', className)} {...props}>
    <span className="sr-only">Last</span>
    <IconChevronsLgRight />
  </PaginationLink>
)
PaginationLast.displayName = 'PaginationLast'

const PaginationFirst = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="square-petite" className={cn('gap-1', className)} {...props}>
    <IconChevronsLgLeft />

    <span className="sr-only">First</span>
  </PaginationLink>
)
PaginationFirst.displayName = 'PaginationFirst'

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span aria-hidden className={cn('flex size-9 items-center justify-center', className)} {...props}>
    <IconDotsHorizontal className="size-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

const PaginationLabel = ({ className, ...props }: LabelProps) => (
  <Label aria-hidden className={cn('grid h-9 place-content-center px-3 text-sm font-normal', className)} {...props} />
)
PaginationLabel.displayName = 'PaginationLabel'

const PaginationSeparator = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <Separator aria-hidden className={cn('mx-1 h-5 w-px rotate-[14deg] self-center', className)} {...props}></Separator>
)
PaginationSeparator.displayName = 'PaginationSeparator'

export {
  Pagination,
  PaginationContent,
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
