'use client'

import { IconX } from '@irsyadadl/paranoid'
import { createContext, useContext } from 'react'
import {
  Button,
  composeRenderProps,
  TagGroup as TagGroupPrimitive,
  type TagGroupProps as TagGroupPrimitiveProps,
  TagList,
  type TagListProps,
  Tag as TagPrimitive,
  type TagProps as TagPrimitiveProps,
  Text
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import { badgeIntents, badgeStyles } from './badge'
import { Description, Label } from './field'
import { cn, focusRing } from './primitive'

type Intent = keyof typeof badgeIntents
const IntentContext = createContext<Intent>('primary')

const emptyColors = Object.keys(badgeIntents).reduce(
  (acc, key) => {
    acc[key] = ''
    return acc
  },
  {} as Record<string, string>
)
const tagStyles = tv({
  base: [badgeStyles.base, 'cursor-pointer focus:outline-none select-none disabled:cursor-default'],
  variants: {
    intent: {
      ...emptyColors
    },
    shape: {
      ...badgeStyles.variants.shape
    },
    allowsRemoving: {
      true: 'pr-1'
    },
    isSelected: {
      true: 'border-transparent bg-primary-600 text-white forced-color-adjust-none forced-badgeIntents:bg-[Highlight] forced-badgeIntents:text-[HighlightText]'
    },
    isDisabled: {
      true: 'opacity-60 forced-badgeIntents:text-[GrayText]'
    }
  },

  defaultVariants: {
    shape: 'square'
  },
  compoundVariants: (Object.keys(badgeIntents) as Intent[]).map((intent) => ({
    isSelected: false,
    intent,
    className: badgeIntents[intent]
  }))
})

export interface TagGroupProps<T>
  extends Omit<TagGroupPrimitiveProps, 'children'>,
    Pick<TagListProps<T>, 'items' | 'children' | 'renderEmptyState'> {
  intent?: Intent
  label?: string
  description?: string
  errorMessage?: string
}

export interface TagProps extends TagPrimitiveProps {
  intent?: Intent
}

export function TagGroup<T extends object>({
  label,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  ...props
}: TagGroupProps<T>) {
  return (
    <TagGroupPrimitive {...props} className={twMerge('flex flex-col gap-1', props.className)}>
      <Label>{label}</Label>
      <IntentContext.Provider value={props.intent || 'primary'}>
        <TagList items={items} renderEmptyState={renderEmptyState} className="flex flex-wrap gap-1">
          {children}
        </TagList>
      </IntentContext.Provider>
      {description && <Description>{description}</Description>}
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-danger">
          {errorMessage}
        </Text>
      )}
    </TagGroupPrimitive>
  )
}

const removeButtonStyles = tv({
  extend: focusRing,
  base: 'flex cursor-default items-center justify-center rounded-full p-0.5 transition-[background-color] hover:bg-black/10 pressed:bg-black/20 dark:hover:bg-white/10 dark:pressed:bg-white/20'
})

export function Tag({ children, intent, ...props }: TagProps) {
  const textValue = typeof children === 'string' ? children : undefined
  const groupIntent = useContext(IntentContext)
  return (
    <TagPrimitive
      textValue={textValue}
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tagStyles({
          ...renderProps,
          className: cn('href' in props ? '' : 'focus:ring-1 focus:ring-primary-400', className),
          intent: intent || groupIntent
        })
      )}
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button slot="remove" className={removeButtonStyles}>
              <IconX aria-hidden className="h-3 w-3" />
            </Button>
          )}
        </>
      )}
    </TagPrimitive>
  )
}
