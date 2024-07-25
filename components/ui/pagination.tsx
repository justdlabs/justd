'use client'

import * as React from 'react'

import {
  IconChevronLgLeft,
  IconChevronLgRight,
  IconChevronsLgLeft,
  IconChevronsLgRight,
  IconDotsHorizontal
} from '@irsyadadl/paranoid'
import type { GridListItemProps, GridListProps } from 'react-aria-components'
import { GridList, GridListItem, Separator } from 'react-aria-components'

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

const PaginationList = <T extends object>({ className, ...props }: GridListProps<T>) => {
  const ariaLabel = props['aria-label'] || 'Pagination'
  return (
    <GridList
      aria-label={ariaLabel}
      layout="grid"
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
}

const extractTextValue = (children: React.ReactNode): string | undefined => {
  let text = ''
  React.Children.forEach(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      text += child.toString()
    } else if (React.isValidElement(child) && child.props.children) {
      text += extractTextValue(child.props.children) || ''
    }
  })
  return text || undefined
}

interface PaginationItemProps extends GridListItemProps {
  children?: React.ReactNode
  className?: string
  intent?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'light/dark' | 'success' | 'light' | 'dark'
  size?: 'medium' | 'large' | 'square-petite' | 'extra-small' | 'small'
  shape?: 'square' | 'circle'
  appearance?: 'solid' | 'outline' | 'plain'
  isCurrent?: boolean
  role?: 'label' | 'segment' | 'separator' | 'ellipsis' | 'default' | 'last' | 'first' | 'previous' | 'next'
}

const PaginationItem = ({ role = 'default', className, size, isCurrent, children, ...props }: PaginationItemProps) => {
  const effectiveSize = role === 'segment' ? 'small' : 'square-petite'
  const effectiveAppearance = role === 'segment' ? 'plain' : isCurrent ? 'solid' : 'outline'
  const renderPaginationIcon = (indicator: React.ReactNode) => (
    <GridListItem
      textValue={role}
      aria-current={isCurrent ? 'page' : undefined}
      isDisabled={isCurrent}
      className={cn(
        buttonStyles({
          appearance: 'outline',
          size: 'square-petite'
        }),
        className
      )}
      {...props}
    >
      {indicator}
    </GridListItem>
  )
  const textValue =
    typeof children === 'string' ? children : typeof children === 'number' ? children.toString() : undefined

  switch (role) {
    case 'label':
      return (
        <GridListItem
          textValue={textValue}
          className={cn('h-9 px-3.5 grid place-content-center', className)}
          {...props}
        >
          {children}
        </GridListItem>
      )
    case 'separator':
      return (
        <GridListItem textValue="Separator" className="h-9 grid place-content-center" {...props}>
          <Separator
            orientation="vertical"
            className="h-5 w-[1.5px] bg-zinc-300 dark:bg-zinc-700 rotate-[14deg] shrink-0"
          />
        </GridListItem>
      )
    case 'ellipsis':
      return (
        <GridListItem textValue="More pages" className={cn('flex items-center justify-center', className)} {...props}>
          <span aria-hidden className={cn('flex size-9 items-center justify-center', className)}>
            <IconDotsHorizontal />
          </span>
        </GridListItem>
      )
    case 'previous':
      return renderPaginationIcon(<IconChevronLgLeft />)
    case 'next':
      return renderPaginationIcon(<IconChevronLgRight />)
    case 'first':
      return renderPaginationIcon(<IconChevronsLgLeft />)
    case 'last':
      return renderPaginationIcon(<IconChevronsLgRight />)
    default:
      return (
        <GridListItem
          textValue={textValue}
          aria-current={isCurrent ? 'page' : undefined}
          isDisabled={isCurrent}
          className={cn(
            buttonStyles({
              appearance: effectiveAppearance,
              size: effectiveSize,
              className:
                role === 'segment'
                  ? 'p-0 gap-0'
                  : 'cursor-pointer rounded-lg disabled:cursor-default disabled:opacity-100'
            }),
            className
          )}
          {...props}
        >
          {children}
        </GridListItem>
      )
  }
}

export { Pagination, PaginationList, PaginationItem }
