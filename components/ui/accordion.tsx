'use client'

import * as React from 'react'

import { cn, focusButtonStyles } from '@/components/ui/primitive'
import { IconChevronDown } from '@irsyadadl/paranoid'
import type { MotionProps } from 'framer-motion'
import { AnimatePresence, motion } from 'framer-motion'
import type { ButtonProps } from 'react-aria-components'
import { Button, composeRenderProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

interface AccordionContextType extends React.HtmlHTMLAttributes<HTMLDivElement> {
  hideBorder?: boolean
  hideIndicator?: boolean
  disabledKeys?: number[]
  defaultExpandedKeys?: number[] | string[]
}

const AccordionContext = React.createContext<AccordionContextType>({})
const useAccordion = () => React.useContext(AccordionContext)

interface AccordionProps extends AccordionContextType {
  children: React.ReactNode
}

const Accordion = ({
  children,
  disabledKeys,
  hideIndicator,
  hideBorder,
  defaultExpandedKeys,
  ...props
}: AccordionProps) => {
  return (
    <AccordionContext.Provider
      value={{ hideIndicator, defaultExpandedKeys, hideBorder, disabledKeys }}
    >
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  )
}

const accordionItemStyles = tv({
  base: 'zwx3ai flex group pb-3 relative w-full flex-col border-b'
})

interface AccordionItemContextProps {
  setExpanded?: (index: null | number | string) => void
  isOpen?: boolean
  currentId: number | string
}

const AccordionItemContext = React.createContext<AccordionItemContextProps | undefined>(undefined)
const useAccordionItem = () => {
  const context = React.useContext(AccordionItemContext)
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion')
  }
  return context
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  currentId: number | string
}

const AccordionItem = ({ className, children, currentId }: AccordionItemProps) => {
  const { defaultExpandedKeys, disabledKeys } = useAccordion()
  const [expanded, setExpanded] = React.useState<any>(
    // @ts-ignore - TS doesn't know that defaultExpandedKeys is an array of numbers
    defaultExpandedKeys?.includes(currentId) ? currentId : false
  )
  const isOpen = currentId === expanded
  const isLocked = disabledKeys?.includes(currentId as number)
  return (
    <AccordionItemContext.Provider value={{ setExpanded, isOpen, currentId }}>
      <div
        data-locked={isLocked ?? undefined}
        data-open={isOpen ?? undefined}
        className={accordionItemStyles({ className })}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const AccordionContent = ({ className, children }: AccordionContentProps) => {
  const { isOpen } = useAccordionItem()
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.section
          className={cn('overflow-hidden pr-6 dk32xd', className)}
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'initial' },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  )
}

const ButtonPrimitive = motion(Button)

interface AccordionTriggerProps
  extends Omit<ButtonProps & React.RefAttributes<HTMLButtonElement> & MotionProps, 'ref'> {
  children: React.ReactNode
}

const accordionTriggerStyles = tv({
  extend: focusButtonStyles,
  base: [
    'flex flex-1 text-muted-fg hover:text-fg [&>[data-slot=icon]]:size-6 items-center gap-x-2 pt-3 font-medium'
  ],
  variants: {
    isOpen: {
      true: 'pb-2 text-fg'
    },
    isDisabled: {
      true: 'opacity-50 cursor-default'
    }
  }
})

const AccordionTrigger = ({ className, children, ...props }: AccordionTriggerProps) => {
  const { setExpanded, isOpen, currentId } = useAccordionItem()
  const { hideIndicator, disabledKeys } = useAccordion()
  const isLocked = disabledKeys?.includes(currentId as number)

  const handlePress = () => {
    if (setExpanded) {
      setExpanded(isOpen ? null : currentId)
    }
  }

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown') {
      handlePress()
    }
  }

  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowUp') {
      handlePress()
    }
  }

  return (
    <ButtonPrimitive
      {...props}
      isDisabled={isLocked}
      onKeyUp={onKeyUpHandler}
      onKeyDown={onKeyDownHandler}
      initial={false}
      onPress={handlePress}
      className={composeRenderProps(className, (className, renderProps) =>
        accordionTriggerStyles({
          ...renderProps,
          isOpen,
          className
        })
      )}
    >
      {children}
      {!hideIndicator && (
        <IconChevronDown
          className={twMerge(
            'ml-auto transition duration-300 group-disabled:rotate-0',
            isOpen ? 'rotate-180' : 'rotate-0'
          )}
        />
      )}
    </ButtonPrimitive>
  )
}

export type { AccordionTriggerProps }
export { Accordion, AccordionItem, AccordionContent, AccordionTrigger }
