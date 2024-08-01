'use client'

import React, { ComponentPropsWithoutRef, useRef, useState } from 'react'

import { IconChevronLeft } from '@irsyadadl/paranoid'
import type { AccordionItemAriaProps, AriaAccordionProps } from '@react-aria/accordion'
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
  const domRef = useRef<HTMLDivElement>(null)
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
      'flex items-center focus-visible:text-fg justify-between cursor-pointer focus:outline-none w-full py-3',
      '[&_[data-slot=icon]]:transition [&_[data-slot=icon]]:duration-200 [&_[data-slot=icon]]:size-5'
    ],
    itemContentStyles: [
      'relative transition-all leading-relaxed block text-sm font-normal ic max-h-0 animate-accordion-down overflow-y-hidden'
    ]
  }
})

const { baseStyles, itemButtonStyles, itemContentStyles } = accordionStyles()

const accordionItemStyles = tv({
  base: [
    'flex flex-col font-medium border-b shadow-inner w-full relative outline-none hover:text-fg text-muted-fg focus-visible:bg-secondary'
  ],
  variants: {
    isSelected: {
      true: 'text-fg [&_.ic]:mr-auto [&_.ic]:max-h-[initial] [&_.ic]:pb-4',
      false: '[&_.ic]:animate-accordion-down'
    }
  }
})

interface AccordionItemProps<T> extends AccordionItemAriaProps<T> {
  state: TreeState<T>
  hideIndicator?: boolean
  title?: string | React.ReactNode
}

const AccordionItemPrimitive = <T extends object>(props: AccordionItemProps<T>) => {
  const domRef = useRef<HTMLButtonElement>(null)
  const { state, item } = props
  const { buttonProps, regionProps } = useAccordionItem(props, state, domRef)

  const isDisabled = state.disabledKeys.has(item.key)
  const { isFocusVisible } = useFocusVisible()
  const [isFocused, setIsFocused] = useState(false)
  const { focusProps } = useFocus({ isDisabled, onFocusChange: setIsFocused })
  const { isHovered, hoverProps } = useHover({ isDisabled })
  const isSelected = state.expandedKeys.has(item.key)
  const { hideIndicator } = React.useContext(AccordionContext)
  return (
    <div
      className={accordionItemStyles({ isSelected })}
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
          {item.props.title}
          {!hideIndicator && (
            <span role="img" aria-hidden="true" aria-label="accordion item indicator">
              <IconChevronLeft className={twJoin(isSelected ? '-rotate-90' : '')} />
            </span>
          )}
        </button>
      </Heading>
      <div {...regionProps} className={itemContentStyles()}>
        {item.props.children}
      </div>
    </div>
  )
}

type AccordionPrimitiveProps<T> = AriaAccordionProps<T> & ComponentPropsWithoutRef<'div'>

interface AccordionProps<T> extends AccordionPrimitiveProps<T> {
  hideIndicator?: boolean
}

const AccordionContext = React.createContext<{
  hideIndicator?: boolean
}>({})

const Accordion = <T extends object>({
  className,
  hideIndicator = false,
  ...props
}: AccordionProps<T>) => {
  return (
    <AccordionContext.Provider value={{ hideIndicator }}>
      <AccordionPrimitive className={baseStyles()} {...props}>
        {props.children}
      </AccordionPrimitive>
    </AccordionContext.Provider>
  )
}

const AccordionItem = Item

export { Accordion, AccordionItem, type AccordionProps, type AccordionItemProps }
