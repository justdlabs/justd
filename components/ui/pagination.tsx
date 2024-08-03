'use client'

import * as React from 'react'

import {
  IconChevronLgLeft,
  IconChevronLgRight,
  IconChevronsLgLeft,
  IconChevronsLgRight,
  IconDotsHorizontal
} from '@irsyadadl/paranoid'
import type { ListBoxItemProps, ListBoxProps, SectionProps } from 'react-aria-components'
import { ListBox, ListBoxItem, Section, Separator } from 'react-aria-components'

import { buttonStyles } from './button'
import { cn } from './primitive'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center gap-1', className)}
    {...props}
  />
)

const PaginationSection = <T extends object>({ className, ...props }: SectionProps<T>) => (
  <Section {...props} className={cn('flex h-9 gap-1', className)} />
)

const PaginationList = <T extends object>({ className, ...props }: ListBoxProps<T>) => {
  const ariaLabel = props['aria-label'] || 'Pagination'
  return (
    <ListBox
      orientation="horizontal"
      aria-label={ariaLabel}
      layout="grid"
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
}

const renderListItem = (
  props: ListBoxItemProps & {
    textValue?: string
    ariaCurrent?: string | undefined
    isDisabled?: boolean
    className?: string
  },
  children: React.ReactNode
) => <ListBoxItem {...props}>{children}</ListBoxItem>

interface PaginationItemProps extends ListBoxItemProps {
  children?: React.ReactNode
  className?: string
  intent?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light/dark'
    | 'success'
    | 'light'
    | 'dark'
  size?: 'medium' | 'large' | 'square-petite' | 'extra-small' | 'small'
  shape?: 'square' | 'circle'
  appearance?: 'solid' | 'outline' | 'plain'
  isCurrent?: boolean
  role?: 'label' | 'separator' | 'ellipsis' | 'default' | 'last' | 'first' | 'previous' | 'next'
}

const PaginationItem = ({
  role = 'default',
  size = 'square-petite',
  appearance = 'outline',
  intent,
  shape = 'square',
  className,
  isCurrent,
  children,
  ...props
}: PaginationItemProps) => {
  const textValue =
    typeof children === 'string'
      ? children
      : typeof children === 'number'
        ? children.toString()
        : undefined

  const renderPaginationIndicator = (indicator: React.ReactNode) =>
    renderListItem(
      {
        textValue: role,
        ariaCurrent: isCurrent ? 'page' : undefined,
        isDisabled: isCurrent,
        className: cn(
          buttonStyles({
            appearance: 'outline',
            size: 'square-petite',
            className:
              'focus-visible:border-primary focus-visible:bg-primary/10 dark:focus-visible:text-primary-100 dark:[&>[data-slot=icon]]:text-primary-100 focus-visible:text-primary-900 [&>[data-slot=icon]]:text-primary-960 focus-visible:ring-4 focus-visible:ring-primary/20'
          }),
          className
        ),
        ...props
      },
      indicator
    )

  switch (role) {
    case 'label':
      return renderListItem(
        {
          textValue: textValue,
          className: cn('h-9 px-3.5 grid place-content-center', className),
          ...props
        },
        children
      )
    case 'separator':
      return renderListItem(
        {
          textValue: 'Separator',
          className: 'h-9 grid place-content-center',
          ...props
        },
        <Separator
          orientation="vertical"
          className="h-5 w-[1.5px] bg-zinc-300 dark:bg-zinc-700 rotate-[14deg] shrink-0"
        />
      )
    case 'ellipsis':
      return renderListItem(
        {
          textValue: 'More pages',
          className: cn(
            'flex items-center justify-center focus-visible:border-primary rounded-lg border border-transparent focus:outline-none size-9 focus-visible:bg-primary/10 dark:focus-visible:text-primary-100 dark:[&>[data-slot=icon]]:text-primary-100 focus-visible:text-primary-900 [&>[data-slot=icon]]:text-primary-960 focus-visible:ring-4 focus-visible:ring-primary/20',
            className
          ),
          ...props
        },
        <span aria-hidden className={cn('flex size-9 items-center justify-center', className)}>
          <IconDotsHorizontal />
        </span>
      )
    case 'previous':
      return renderPaginationIndicator(<IconChevronLgLeft />)
    case 'next':
      return renderPaginationIndicator(<IconChevronLgRight />)
    case 'first':
      return renderPaginationIndicator(<IconChevronsLgLeft />)
    case 'last':
      return renderPaginationIndicator(<IconChevronsLgRight />)
    default:
      return renderListItem(
        {
          textValue: textValue,
          ariaCurrent: isCurrent ? 'page' : undefined,
          isDisabled: isCurrent,
          className: cn(
            buttonStyles({
              intent: isCurrent ? 'primary' : intent,
              appearance: isCurrent ? 'solid' : appearance,
              size,
              className:
                'focus-visible:border-primary focus-visible:bg-primary/10 dark:focus-visible:text-primary-100 dark:[&>[data-slot=icon]]:text-primary-100 focus-visible:text-primary-900 [&>[data-slot=icon]]:text-primary-960 focus-visible:ring-4 focus-visible:ring-primary/20 disabled:opacity-100'
            }),
            className
          ),
          ...props
        },
        children
      )
  }
}

export { Pagination, PaginationItem, PaginationList, PaginationSection }
