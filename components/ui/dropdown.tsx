'use client'

import { IconCheck } from '@irsyadadl/paranoid'
import {
  Collection,
  composeRenderProps,
  Header,
  ListBoxItem as ListBoxItemPrimitive,
  type ListBoxItemProps,
  Section,
  type SectionProps
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

const dropdownItemStyles = tv({
  base: [
    'group flex cursor-default select-none items-center gap-x-1.5 rounded-md py-2 pl-2.5 pr-1 text-base outline outline-0 forced-color-adjust-none lg:text-sm',
    '[&_[data-slot=avatar]]:-mr-0.5 [&_[data-slot=avatar]]:size-6 sm:[&_[data-slot=avatar]]:size-5',
    '[&:focus_.text-muted-fg]:text-primary-fg/80',
    '[&_[data-slot=icon]]:size-4',
    'has-submenu:open:data-[danger=true]:bg-danger/20 has-submenu:open:data-[danger=true]:text-danger',
    'has-submenu:open:bg-primary has-submenu:open:text-primary-fg'
  ],
  variants: {
    isDisabled: {
      false: 'text-fg',
      true: 'text-muted-fg forced-colors:text-[GrayText]'
    },
    isFocused: {
      false: 'data-[danger=true]:text-danger',
      true: [
        'bg-primary text-primary-fg forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]',
        'data-[danger=true]:bg-danger data-[danger=true]:text-danger-fg'
      ]
    }
  },
  compoundVariants: [
    {
      isFocused: false,
      isOpen: true,
      className: 'bg-zinc-100 dark:bg-zinc-700/60'
    }
  ]
})

interface DropdownSectionProps<T> extends SectionProps<T> {
  title?: string
}

const DropdownSection = <T extends object>(props: DropdownSectionProps<T>) => {
  return (
    <Section className="after:block after:h-[5px] after:content-[''] first:-mt-[5px]">
      <Header className="dsh mb-0.5 px-2 text-sm text-muted-fg">{props.title}</Header>
      <Collection items={props.items}>{props.children}</Collection>
    </Section>
  )
}

const DropdownItem = (props: ListBoxItemProps) => {
  const textValue = props.textValue || (typeof props.children === 'string' ? props.children : undefined)
  return (
    <ListBoxItemPrimitive
      {...props}
      textValue={textValue}
      className={composeRenderProps(props.className, (className, renderProps) =>
        dropdownItemStyles({ ...renderProps, className })
      )}
    >
      {composeRenderProps(props.children, (children, { isSelected }) => (
        <>
          <span className="flex flex-1 items-center gap-2 truncate font-normal group-selected:font-semibold">
            {children}
          </span>
          <span className="flex w-5 items-center">{isSelected && <IconCheck className="h-4 w-4" />}</span>
        </>
      ))}
    </ListBoxItemPrimitive>
  )
}

// Note: This is not exposed component, but it's used in other components to render dropdowns.
export { DropdownItem, dropdownItemStyles, DropdownSection, type DropdownSectionProps }
