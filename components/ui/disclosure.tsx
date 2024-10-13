'use client'

import * as React from 'react'

import { IconChevronLeft } from 'justd-icons'
import type {
  ButtonProps,
  DisclosureGroupProps as DisclosureGroupPrimitiveProps,
  DisclosurePanelProps,
  DisclosureProps
} from 'react-aria-components'
import {
  Button,
  UNSTABLE_Disclosure as DisclosurePrimitive,
  UNSTABLE_DisclosureGroup as DisclosureGroupPrimitive,
  UNSTABLE_DisclosurePanel as DisclosurePanel
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn, cr, tm } from './primitive'

interface DisclosureGroupProps extends DisclosureGroupPrimitiveProps {
  hideBorder?: boolean
  hideIndicator?: boolean
}

const DisclosureGroupContext = React.createContext<DisclosureGroupProps>({})

const DisclosureGroup = ({
  children,
  hideIndicator,
  hideBorder,
  className,
  ...props
}: DisclosureGroupProps) => {
  return (
    <DisclosureGroupPrimitive
      {...props}
      className={({ isDisabled }) =>
        cn([
          isDisabled ? 'cursor-not-allowed opacity-75' : 'cursor-pointer',
          hideBorder
            ? '[&_[data-slot=accordion-item]]:border-none'
            : '[&_[data-slot=accordion-item]]:border-b',

          className
        ])
      }
    >
      {(values) => (
        <div data-slot="accordion-item-content">
          <DisclosureGroupContext.Provider value={{ hideIndicator, hideBorder }}>
            {typeof children === 'function' ? children(values) : children}
          </DisclosureGroupContext.Provider>
        </div>
      )}
    </DisclosureGroupPrimitive>
  )
}

const disclosureStyles = tv({
  base: 'flex group relative w-full flex-col',
  variants: {
    isDisabled: {
      true: 'cursor-not-allowed opacity-75'
    },
    isExpanded: {
      true: 'pb-3'
    },
    hideBorder: {
      true: '[&>[slot=trigger]]:py-2',
      false: '[&>[slot=trigger]]:py-3'
    }
  },
  compoundVariants: [
    {
      hideBorder: true,
      isExpanded: true,
      className: 'pb-2'
    }
  ]
})

const Disclosure = ({ className, ...props }: DisclosureProps) => {
  const { hideBorder } = React.useContext(DisclosureGroupContext)
  return (
    <DisclosurePrimitive
      data-slot="accordion-item"
      {...props}
      className={cr(className, (className, renderProps) =>
        disclosureStyles({ ...renderProps, hideBorder, className })
      )}
    >
      {props.children}
    </DisclosurePrimitive>
  )
}

const accordionTriggerStyles = tv({
  base: [
    'flex flex-1 group rounded-lg aria-expanded:text-fg text-muted-fg sm:text-sm items-center gap-x-2 font-medium'
  ],
  variants: {
    isFocused: {
      true: 'outline-none text-fg'
    },
    isOpen: {
      true: 'text-fg'
    },
    isDisabled: {
      true: 'opacity-50 cursor-default'
    }
  }
})

const Trigger = ({ className, ...props }: ButtonProps) => {
  const { hideIndicator } = React.useContext(DisclosureGroupContext)
  return (
    <Button
      {...props}
      slot="trigger"
      className={cr(className, (className, renderProps) =>
        accordionTriggerStyles({
          ...renderProps,
          className
        })
      )}
    >
      {(values) => (
        <>
          {typeof props.children === 'function' ? props.children(values) : props.children}
          {!hideIndicator && (
            <IconChevronLeft
              className={tm(
                'ml-auto transition shrink-0 duration-300 group-aria-expanded:-rotate-90'
              )}
            />
          )}
        </>
      )}
    </Button>
  )
}

const Panel = ({ className, ...props }: DisclosurePanelProps) => {
  return (
    <DisclosurePanel {...props} className={cn('sm:text-sm', className)}>
      {props.children}
    </DisclosurePanel>
  )
}

Disclosure.Trigger = Trigger
Disclosure.Panel = Panel

export { DisclosureGroup, Disclosure }
