import { tv } from "tailwind-variants"

import { Heading } from "./heading"

const card = tv({
  slots: {
    root: [
      "xrkr rounded-lg bg-bg xkd2 has-[table]:**:data-[slot=card-footer]:border-t **:data-[slot=table-header]:bg-muted/50 has-[table]:overflow-hidden border text-fg shadow-xs **:[table]:overflow-hidden",
    ],
    header: "flex flex-col gap-y-1 px-6 py-5",
    title: "sm:leading-6 leading-none font-semibold tracking-tight",
    description: "text-muted-fg text-sm",
    content:
      "px-6 pb-6 has-[[data-slot=table-header]]:bg-muted/40 has-[table]:p-0 [&:has(table)+[data-slot=card-footer]]:py-5 has-[table]:border-t **:data-[slot=table-cell]:px-6 **:data-[slot=table-column]:px-6",
    footer: "flex items-center p-6 pt-0",
  },
})

const { root, header, title, description, content, footer } = card()

const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div data-slot="card" className={root({ className })} {...props} />
}

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
}

const Header = ({ className, title, description, children, ...props }: HeaderProps) => (
  <div data-slot="card-header" className={header({ className })} {...props}>
    {title && <Title>{title}</Title>}
    {description && <Description>{description}</Description>}
    {!title && typeof children === "string" ? <Title>{children}</Title> : children}
  </div>
)

const Title = ({ className, level = 3, ...props }: React.ComponentProps<typeof Heading>) => {
  return (
    <Heading data-slot="card-title" level={level} className={title({ className })} {...props} />
  )
}

const Description = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} data-slot="description" className={description({ className })} {...props} />
  )
}

const Content = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div data-slot="card-content" className={content({ className })} {...props} />
}

const Footer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div data-slot="card-footer" className={footer({ className })} {...props} />
}

Card.Content = Content
Card.Description = Description
Card.Footer = Footer
Card.Header = Header
Card.Title = Title

export { Card }
