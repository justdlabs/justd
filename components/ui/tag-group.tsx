'use client'

import React from 'react'

import type {
  TagGroupProps as TagGroupPrimitiveProps,
  TagListProps,
  TagProps as TagPrimitiveProps
} from 'react-aria-components'
import {
  Button,
  composeRenderProps,
  Tag as TagPrimitive,
  TagGroup as TagGroupPrimitive,
  TagList as TagListPrimitive
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { badgeIntents, badgeShapes, badgeStyles } from './badge'
import { Description, Label } from './field'
import { cn, ctr, focusStyles } from './primitive'

const intents = {
  primary: {
    base: [
      badgeIntents.primary,
      '[&_[slot=remove]:hover]:bg-primary [&_[slot=remove]:hover]:text-primary-fg'
    ],
    selected: [
      'bg-primary dark:hover:bg-primary dark:bg-primary hover:bg-primary ring-primary ring-inset text-primary-fg dark:text-primary-fg hover:text-primary-fg',
      '[&_[slot=remove]:hover]:bg-primary-fg/80 [&_[slot=remove]:hover]:text-primary'
    ]
  },
  secondary: {
    base: [
      badgeIntents.secondary,
      '[&_[slot=remove]:hover]:bg-fg [&_[slot=remove]:hover]:text-background'
    ],
    selected: [
      'bg-fg ring-fg/50 text-background dark:bg-fg/90 dark:text-secondary ring-inset',
      '[&_[slot=remove]:hover]:bg-background [&_[slot=remove]:hover]:text-secondary-fg'
    ]
  },
  success: {
    base: [
      badgeIntents.success,
      '[&_[slot=remove]:hover]:bg-success [&_[slot=remove]:hover]:text-success-fg'
    ],
    selected: [
      'bg-success dark:bg-success ring-success ring-inset dark:text-success-fg dark:hover:bg-success hover:bg-success text-success-fg hover:text-success-fg',
      '[&_[slot=remove]:hover]:bg-success-fg/80 [&_[slot=remove]:hover]:text-success'
    ]
  },
  info: {
    base: [
      badgeIntents.info,
      '[&_[slot=remove]:hover]:bg-info [&_[slot=remove]:hover]:text-background'
    ],
    selected: [
      'bg-info dark:bg-info dark:text-background/80 hover:bg-info dark:hover:bg-info',
      '[&_[slot=remove]:hover]:bg-background/80 [&_[slot=remove]:hover]:text-info'
    ]
  },
  warning: {
    base: badgeIntents.warning,
    selected:
      'bg-warning dark:hover:bg-warning dark:bg-warning dark:text-background hover:bg-warning text-warning-fg hover:text-warning-fg'
  },
  danger: {
    base: badgeIntents.danger,
    selected:
      'bg-danger dark:bg-danger dark:text-danger-fg dark:hover:bg-danger hover:bg-danger text-danger-fg hover:text-danger-fg'
  },
  light: {
    base: [
      badgeIntents.light,
      '[&_[slot=remove]:hover]:bg-black [&_[slot=remove]:hover]:text-white'
    ],
    selected: ['bg-white ring-white text-zinc-900 ring-inset ring-fg']
  },
  dark: {
    base: [
      badgeIntents.dark,
      '[&_[slot=remove]:hover]:bg-fg [&_[slot=remove]:hover]:text-background'
    ],
    selected: [
      'bg-dark hover:bg-dark text-dark-fg hover:text-dark-fg',
      '[&_[slot=remove]:hover]:bg-fg [&_[slot=remove]:hover]:text-background'
    ]
  },
  'light/dark': {
    base: [
      badgeIntents['light/dark'],
      '[&_[slot=remove]:hover]:bg-fg [&_[slot=remove]:hover]:text-background'
    ],
    selected: [
      'bg-fg text-background ring-inset ring-fg dark:bg-fg dark:text-background dark:ring-background dark:hover:bg-fg dark:hover:text-background',
      '[&_[slot=remove]:hover]:bg-background [&_[slot=remove]:hover]:text-fg'
    ]
  }
}

type Intent = keyof typeof badgeIntents

type Shape = keyof typeof badgeShapes

type TagGroupContextValue = {
  intent: Intent
  shape: Shape
}

const TagGroupContext = React.createContext<TagGroupContextValue>({
  intent: 'primary',
  shape: 'square'
})

export interface TagGroupProps extends TagGroupPrimitiveProps {
  intent?: Intent
  shape?: 'square' | 'circle'
  errorMessage?: string
  label?: string
  description?: string
}

const TagGroup = ({ children, ...props }: TagGroupProps) => {
  return (
    <TagGroupPrimitive
      {...props}
      className={twMerge('flex flex-wrap flex-col gap-1', props.className)}
    >
      <TagGroupContext.Provider
        value={{
          intent: props.intent || 'primary',
          shape: props.shape || 'square'
        }}
      >
        {props.label && <Label>{props.label}</Label>}
        {children}
        {props.description && <Description>{props.description}</Description>}
      </TagGroupContext.Provider>
    </TagGroupPrimitive>
  )
}

const TagList = <T extends object>(props: TagListProps<T>) => {
  return <TagListPrimitive {...props} className={ctr(props.className, 'flex flex-wrap gap-2')} />
}

const tagStyles = tv({
  extend: focusStyles,
  base: [badgeStyles.base, 'cursor-pointer'],
  variants: {
    isFocused: { true: 'ring-2' },
    isDisabled: { true: 'opacity-50 cursor-default' },
    allowsRemoving: { true: 'pr-1' }
  }
})

interface TagProps extends TagPrimitiveProps {
  intent?: Intent
  shape?: Shape
}

const Tag = ({ children, intent, shape, ...props }: TagProps) => {
  const textValue = typeof children === 'string' ? children : undefined
  const groupContext = React.useContext(TagGroupContext)

  return (
    <TagPrimitive
      textValue={textValue}
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        const finalIntent = intent || groupContext.intent
        const finalShape = shape || groupContext.shape

        return tagStyles({
          ...renderProps,
          className: cn([
            intents[finalIntent].base,
            renderProps.isSelected ? intents[finalIntent].selected : undefined,
            badgeShapes[finalShape]
          ])
        })
      })}
    >
      {({ allowsRemoving }) => {
        return (
          <>
            {children}
            {allowsRemoving && (
              <Button
                slot="remove"
                className={composeRenderProps('', (className, renderProps) => {
                  return twMerge(
                    'rounded focus:outline-none size-3.5 grid place-content-center -mr-0.5 focus-visible:ring-1 focus-visible:ring-primary',
                    className
                  )
                })}
              >
                <span className="rotate-45 text-base/4 -mr-px">+</span>
              </Button>
            )}
          </>
        )
      }}
    </TagPrimitive>
  )
}

export { Tag, TagGroup, TagList }
