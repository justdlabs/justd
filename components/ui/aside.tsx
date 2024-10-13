'use client'

import * as React from 'react'

import { IconChevronDown, IconHamburger } from 'justd-icons'
import type { DisclosureProps, LinkProps } from 'react-aria-components'
import {
  Link,
  UNSTABLE_Disclosure as Disclosure,
  UNSTABLE_DisclosurePanel as DisclosurePanel
} from 'react-aria-components'
import { twJoin } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { Button, ButtonPrimitive } from './button'
import { cr, useMediaQuery } from './primitive'
import { Sheet } from './sheet'

const aside = tv({
  slots: {
    root: 'sticky 2xl:border-l 2xl:border-border border-transparent top-0 bg-tertiary w-[17rem] h-screen max-lg:hidden',
    content: 'flex h-full min-h-0 flex-col',
    body: 'flex flex-col overflow-y-auto gap-y-6 p-4 [&>section+section]:mt-8',
    section: 'flex flex-col gap-y-0.5',
    header: 'flex flex-col border-b p-4 [&>section+section]:mt-2.5',
    footer: 'flex flex-col mt-auto border-t p-4 [&>section+section]:mt-2.5',
    responsive: 'flex gap-x-0.5',
    layout: 'isolate flex max-w-screen-2xl mx-auto w-full h-screen max-lg:flex-col overflow-y-auto'
  }
})

const { root, body, content, header, footer, responsive, layout } = aside()

interface LayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  aside: React.ReactNode
  navbar: React.ReactNode
  side?: 'left' | 'right'
  isStack?: boolean
  closeButton?: boolean
  isBlurred?: boolean
  'aria-label'?: string
}

const Layout = ({
  isStack = true,
  side = 'left',
  isBlurred = false,
  closeButton = true,
  aside,
  navbar,
  children,
  className,
  ...props
}: LayoutProps) => {
  const [openAside, setOpenAside] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  return (
    <div className={layout({ className })}>
      <Aside>{aside}</Aside>
      {!isDesktop && (
        <Sheet.Content
          aria-label={props['aria-label'] ?? 'Main navigation'}
          {...{ closeButton, isStack, side, isBlurred }}
          isOpen={openAside}
          onOpenChange={() => setOpenAside(false)}
          classNames={{ content: '[&_[role=dialog]]:p-0' }}
        >
          {aside}
        </Sheet.Content>
      )}

      <header className="flex fixed z-10 w-full items-center border-b bg-tertiary/80 backdrop-blur shadow-sm justify-between py-2 sm:px-6 px-4 lg:px-10 lg:hidden">
        <div>
          <Button
            appearance="plain"
            size="square-petite"
            className="-ml-3"
            onPress={() => setOpenAside(true)}
            aria-label="Open navigation"
          >
            <IconHamburger />
          </Button>
        </div>
        <div>{navbar}</div>
      </header>

      <main className="flex flex-1 pt-12 lg:pt-0 flex-col lg:min-w-0">
        <div className="grow sm:p-6 p-4 lg:p-10 relative lg:ring-1 lg:ring-border">
          <div>{children}</div>
        </div>
      </main>
    </div>
  )
}

interface AsideProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className'> {
  children: React.ReactNode
  classNames?: {
    content?: string
    root?: string
  }
}

const Aside = ({ classNames, ...props }: AsideProps) => (
  <aside {...props} className={root({ className: classNames?.root })} {...props}>
    <nav className={content({ className: classNames?.content })}>{props.children}</nav>
  </aside>
)

const Content = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div aria-label="Main navigation" {...props} className={body({ className })}>
    {children}
  </div>
)

const itemStyles = tv({
  base: 'grid [&>[data-slot=icon]]:mr-2 [&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:shrink-0 grid-cols-subgrid col-span-full items-center [&>[data-slot=icon]]:text-muted-fg relative rounded-lg px-3 py-2 lg:text-sm leading-6',
  variants: {
    isFocused: {
      true: 'outline-none'
    },
    isFocusVisible: {
      true: 'bg-secondary [&:focus-visible_[slot=label]]:text-accent-fg [&:focus-visible_[slot=description]]:text-accent-fg/70 text-secondary-fg'
    },
    isHovered: {
      true: 'bg-secondary [&:focus-visible_[slot=label]]:text-accent-fg [&:focus-visible_[slot=description]]:text-accent-fg/70 text-secondary-fg [&_.text-muted-fg]:text-secondary-fg/80'
    },
    isCurrent: {
      true: [
        '[&_[data-slot=icon]]:text-accent-fg [&_[data-slot=label]]:text-accent-fg [&_.text-muted-fg]:text-accent-fg/80 bg-accent text-accent-fg',
        '[&_.bdx]:bg-accent-fg/20 [&_.bdx]:ring-accent-fg/30'
      ]
    },
    isDisabled: {
      true: 'opacity-70 cursor-default text-muted-fg'
    }
  }
})

interface ItemProps extends LinkProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  badge?: string | number | undefined
  isCurrent?: boolean
}

const Item = ({ isCurrent, children, className, icon: Icon, ...props }: ItemProps) => {
  return (
    <Link
      className={cr(className, (className, renderProps) =>
        itemStyles({
          ...renderProps,
          isCurrent,
          className
        })
      )}
      {...props}
    >
      {(values) => (
        <>
          {Icon && <Icon data-slot="icon" />}
          <span className="col-start-2">
            {typeof children === 'function' ? children(values) : children}
            {props.badge && (
              <div className="bdx h-[1.30rem] px-1 rounded-md text-muted-fg text-xs font-medium ring-1 ring-fg/20 grid place-content-center w-auto inset-y-1/2 -translate-y-1/2 absolute right-1.5 bg-fg/[0.02] dark:bg-fg/10">
                {props.badge}
              </div>
            )}
          </span>
        </>
      )}
    </Link>
  )
}

const AsideHeader = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => (
  <header {...props} className={header({ className })} {...props} />
)
const Footer = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={footer({ className })} {...props} />
)

const Responsive = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={responsive({ className })} {...props} />
)

interface CollapsibleProps extends DisclosureProps {
  children: React.ReactNode
  title?: string
  collapsible?: boolean
  defaultExpanded?: boolean
}

const Section = ({ title, collapsible, defaultExpanded, ...props }: CollapsibleProps) => {
  const isExpanded = title ? (collapsible ? (defaultExpanded ?? true) : true) : true
  return (
    <Disclosure defaultExpanded={isExpanded} {...props}>
      {(values) => (
        <>
          {typeof title === 'string' && (
            <>
              {collapsible ? (
                <ButtonPrimitive
                  slot="trigger"
                  className={twJoin(
                    'w-full focus:outline-none flex items-center justify-between text-sm text-muted-fg px-3 py-2 has-[.idctr]:pr-0 [&>.idctr]:size-6 [&>.idctr]:duration-200',
                    values.isExpanded && '[&>.idctr]:rotate-180'
                  )}
                >
                  {title}
                  <IconChevronDown className="idctr" />
                </ButtonPrimitive>
              ) : (
                <h4 className="text-sm text-muted-fg px-3 py-2">{title}</h4>
              )}
            </>
          )}
          <DisclosurePanel>
            <div className="grid grid-cols-[auto_1fr]">{props.children}</div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

Aside.Responsive = Responsive
Aside.Footer = Footer
Aside.Header = AsideHeader
Aside.Content = Content
Aside.Item = Item
Aside.Section = Section
Aside.Layout = Layout

export { Aside }
