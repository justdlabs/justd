'use client'

import * as React from 'react'

import { IconChevronLgLeft } from '@irsyadadl/paranoid'
import type {
  AccordionItemAriaProps as AccordionItemPrimitiveProps,
  AriaAccordionProps
} from '@react-aria/accordion'
import { useAccordion, useAccordionItem } from '@react-aria/accordion'
import { useFocus, useFocusVisible, useHover } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'
import { Item } from '@react-stately/collections'
import type { TreeState } from '@react-stately/tree'
import { useTreeState } from '@react-stately/tree'
import { Heading } from 'react-aria-components'
import { twJoin } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const AccordionPrimitive = <T extends object>({ className, ...props }: AccordionProps<T>) => {
  const domRef = React.useRef<HTMLDivElement>(null)
  const state = useTreeState<T>(props)
  const { accordionProps } = useAccordion(props, state, domRef)

  return (
    <div ref={domRef} className={className} {...accordionProps}>
      {[...state.collection].map((item) => (
        <AccordionItemPrimitive<T> key={item.key} item={item} state={state} />
      ))}
    </div>
  )
}

const accordionStyles = tv({
  slots: {
    baseStyles: 'flex flex-col gap-0 w-full',
    itemButtonStyles: [
      'flex items-center [&>[data-slot=icon]]:mr-2 focus-visible:text-fg group-focus-visible:text-muted-fg focus:outline-none w-full py-3',
      '[&_[data-slot=icon]]:transition [&_[data-slot=icon]]:duration-200 [&_[data-slot=icon]]:size-4'
    ],
    itemContentStyles: [
      'relative transition-all leading-relaxed block text-sm font-normal ic max-h-0 animate-accordion-down overflow-y-hidden'
    ]
  }
})

const { baseStyles, itemButtonStyles, itemContentStyles } = accordionStyles()

type AccordionPrimitiveProps<T> = AriaAccordionProps<T> & React.ComponentPropsWithoutRef<'div'>

type AccordionGlobalProps = {
  hideIndicator?: boolean
  hideBorder?: boolean
}

interface AccordionProps<T> extends AccordionPrimitiveProps<T>, AccordionGlobalProps {}

const AccordionContext = React.createContext<AccordionGlobalProps>({})

const Accordion = <T extends object>({
  className,
  hideIndicator = false,
  hideBorder = false,
  ...props
}: AccordionProps<T>) => {
  return (
    <AccordionContext.Provider value={{ hideIndicator, hideBorder }}>
      <AccordionPrimitive className={baseStyles()} {...props}>
        {props.children}
      </AccordionPrimitive>
    </AccordionContext.Provider>
  )
}

const accordionItemStyles = tv({
  base: [
    'group flex flex-col cursor-pointer shadow-inner w-full relative outline-none hover:text-fg text-muted-fg focus-visible:bg-secondary'
  ],
  variants: {
    isSelected: {
      true: 'text-fg [&_.ic]:mr-auto [&_.ic]:max-h-[initial] [&_.ic]:pb-4',
      false: '[&_.ic]:animate-accordion-down'
    },
    isDisabled: {
      true: 'text-muted-fg cursor-default hover:text-muted-fg opacity-80'
    }
  }
})

interface AccordionItemProps<T> extends AccordionItemPrimitiveProps<T> {
  state: TreeState<T>
  hideIndicator?: boolean
  title?: string | React.ReactNode
  className?: string
}

const AccordionItemPrimitive = <T extends object>({
  className,
  ...props
}: AccordionItemProps<T>) => {
  const domRef = React.useRef<HTMLButtonElement>(null)
  const { state, item } = props
  const { buttonProps, regionProps } = useAccordionItem(props, state, domRef)

  const isDisabled = state.disabledKeys.has(item.key)
  const { isFocusVisible } = useFocusVisible()
  const [isFocused, setIsFocused] = React.useState(false)
  const { focusProps } = useFocus({ isDisabled, onFocusChange: setIsFocused })
  const { isHovered, hoverProps } = useHover({ isDisabled })
  const isSelected = state.expandedKeys.has(item.key)
  const { hideIndicator, hideBorder } = React.useContext(AccordionContext)
  return (
    <div
      className={accordionItemStyles({
        isDisabled,
        isSelected,
        className: twJoin(hideBorder ? 'border-none' : 'border-b', className)
      })}
      data-selected={isSelected || undefined}
      data-disabled={isDisabled || undefined}
    >
      <Heading level={2}>
        <button
          {...mergeProps(buttonProps, hoverProps, focusProps)}
          className={itemButtonStyles()}
          ref={domRef}
          data-hovered={isHovered || undefined}
          data-focus-visible={(isFocused && isFocusVisible) || undefined}
          data-disabled={isDisabled || undefined}
        >
          <>
            {item.props.title}

            {!hideIndicator && (
              <span
                role="img"
                aria-hidden="true"
                className="ml-auto"
                aria-label="accordion item indicator"
              >
                <IconChevronLgLeft className={twJoin(isSelected ? '-rotate-90' : '')} />
              </span>
            )}
          </>
        </button>
      </Heading>
      <div {...regionProps} className={itemContentStyles()}>
        {item.props.children}
      </div>
    </div>
  )
}

const AccordionItem = Item

export { Accordion, AccordionItem, type AccordionProps, type AccordionItemProps }
