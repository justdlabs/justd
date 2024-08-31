"use client"

import * as React from "react"

import { IconHamburger } from "justd-icons"
import {
  Collection,
  Header,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  type ListBoxProps,
  Section,
  type SectionProps
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { Button } from "./button"
import { cr, useMediaQuery } from "./primitive"
import { Sheet } from "./sheet"

const aside = tv({
  slots: {
    root: "fixed inset-y-0 bg-tertiary left-0 w-[17rem] max-lg:hidden",
    content: "flex h-full min-h-0 flex-col",
    body: "flex flex-col overflow-y-auto p-4 [&>section+section]:mt-8",
    section: "flex flex-col gap-y-0.5",
    header: "flex flex-col border-b p-4 [&>section+section]:mt-2.5",
    footer: "flex flex-col mt-auto border-t p-4 [&>section+section]:mt-2.5",
    responsive: "flex gap-x-0.5"
  }
})

const { root, body, content, section, header, footer, responsive } = aside()

interface LayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  aside: React.ReactNode
  navbar: React.ReactNode
  side?: "left" | "right"
  isStack?: boolean
  closeButton?: boolean
  isBlurred?: boolean
  "aria-label"?: string
}

const Layout = ({
  isStack = true,
  side = "left",
  isBlurred = false,
  closeButton = true,
  aside,
  navbar,
  children,
  ...props
}: LayoutProps) => {
  const [openAside, setOpenAside] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  return (
    <div className="relative isolate flex min-h-svh w-full max-lg:flex-col">
      <Aside>{aside}</Aside>
      {!isDesktop && (
        <Sheet.Content
          aria-label={props["aria-label"] ?? "Main navigation"}
          {...{ closeButton, isStack, side, isBlurred }}
          isOpen={openAside}
          onOpenChange={() => setOpenAside(false)}
          classNames={{ content: "[&_[role=dialog]]:p-0" }}
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

      <main className="flex flex-1 pt-12 lg:pt-0 flex-col lg:min-w-0 lg:pl-[17rem]">
        <div className="grow sm:p-6 p-4 lg:p-10 relative lg:ring-1 lg:ring-border">
          <div className="mx-auto max-w-6xl">{children}</div>
        </div>
      </main>
    </div>
  )
}

interface AsideProps extends Omit<React.HTMLProps<HTMLDivElement>, "className"> {
  children: React.ReactNode
  classNames?: {
    content?: string
    root?: string
  }
}

const Aside = ({ classNames, ...props }: AsideProps) => (
  <div {...props} className={root({ className: classNames?.root })} {...props}>
    <div className={content({ className: classNames?.content })}>{props.children}</div>
  </div>
)

const Content = <T extends object>({ children, className, ...props }: ListBoxProps<T>) => (
  <ListBox aria-label="Main navigation" {...props} className={cr(className, body)}>
    {children}
  </ListBox>
)

interface AsideSectionProps<T> extends SectionProps<T> {
  title?: string
}

const AsideSection = <T extends object>({ className, ...props }: AsideSectionProps<T>) => {
  return (
    <Section className={section({ className })}>
      {props.title && (
        <Header slot="title" className="text-sm px-3 text-muted-fg">
          {props.title}
        </Header>
      )}
      <Collection items={props.items}>{props.children}</Collection>
    </Section>
  )
}

const itemStyles = tv({
  base: "flex items-center [&_[data-slot=icon]]:text-muted-fg [&_[data-slot=icon]]:size-4 [&_[data-slot=icon]]:-mx-0.5 relative rounded-lg gap-x-4 px-3 py-2 lg:text-sm leading-6",
  variants: {
    isFocused: {
      true: "outline-none"
    },
    isFocusVisible: {
      true: "bg-secondary [&:focus-visible_[slot=label]]:text-accent-fg [&:focus-visible_[slot=description]]:text-accent-fg/70 text-secondary-fg"
    },
    isHovered: {
      true: "bg-secondary [&:focus-visible_[slot=label]]:text-accent-fg [&:focus-visible_[slot=description]]:text-accent-fg/70 text-secondary-fg [&_.text-muted-fg]:text-secondary-fg/80"
    },
    isCurrent: {
      true: [
        "[&_[data-slot=icon]]:text-accent-fg [&_[data-slot=label]]:text-accent-fg [&_.text-muted-fg]:text-accent-fg/80 bg-accent text-accent-fg",
        "[&_.bdx]:bg-accent-fg/20 [&_.bdx]:ring-accent-fg/30"
      ]
    },
    isDisabled: {
      true: "opacity-70 cursor-default text-muted-fg"
    }
  }
})

interface ItemProps<T> extends ListBoxItemProps<T> {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  badge?: string | number | undefined
  isCurrent?: boolean
}

const Item = <T extends object>({
  isCurrent,
  children,
  className,
  icon: Icon,
  ...props
}: ItemProps<T>) => {
  const textValue = typeof children === "string" ? children : undefined

  return (
    <ListBoxItem
      textValue={textValue}
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
        <div className="flex items-center gap-2">
          <>
            {Icon && <Icon className="shrink-0 size-4" />}
            {typeof children === "function" ? children(values) : children}
            {props.badge && (
              <div className="bdx h-[1.30rem] px-1 rounded-md text-muted-fg text-xs font-medium ring-1 ring-fg/20 grid place-content-center w-auto inset-y-1/2 -translate-y-1/2 absolute right-1.5 bg-fg/[0.02] dark:bg-fg/10">
                {props.badge}
              </div>
            )}
          </>
        </div>
      )}
    </ListBoxItem>
  )
}

const AsideHeader = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={header({ className })} {...props} />
)
const Footer = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={footer({ className })} {...props} />
)

const Responsive = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={responsive({ className })} {...props} />
)

Aside.Responsive = Responsive
Aside.Footer = Footer
Aside.Header = AsideHeader
Aside.Content = Content
Aside.Section = AsideSection
Aside.Item = Item
Aside.Layout = Layout

export { Aside }
