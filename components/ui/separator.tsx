import { useSeparator } from 'react-aria'
import type { SeparatorProps as SeparatorPrimitiveProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'

const separatorStyles = tv({
  base: 'text-sm/6',
  variants: {
    children: {
      true: 'after:border-muted before:border-muted before:content-[""] after:content-[""]'
    },
    orientation: {
      vertical: 'mx-1 h-auto self-stretch',
      horizontal: 'my-0.5 h-px w-full self-stretch'
    }
  },
  compoundVariants: [
    {
      children: true,
      orientation: 'vertical',
      className: 'mx-2 flex flex-col items-center before:border-l before:flex-1 before:mb-2 after:border-r after:flex-1 after:mt-2'
    },
    {
      children: true,
      orientation: 'horizontal',
      className: 'self-stretch my-2 flex items-center before:border-t before:flex-1 before:mr-2 after:border-t after:flex-1 after:ml-2'
    },
    {
      children: false,
      orientation: 'horizontal',
      className: 'border-b'
    },
    {
      children: false,
      orientation: 'vertical',
      className: 'border-l'
    }
  ],
  defaultVariants: {
    children: false,
    orientation: 'horizontal'
  }
})

interface SeparatorProps extends Omit<SeparatorPrimitiveProps, 'slot'>, Omit<React.HTMLAttributes<HTMLDivElement>, 'slot'> {
  children?: React.ReactNode
  slot?: string // Ensure this matches HTML standard if it's intended for slotting
}

const Separator = ({ orientation = 'horizontal', className, children, ...props }: SeparatorProps) => {
  const { separatorProps } = useSeparator({ orientation })
  return (
    <div
      {...separatorProps}
      className={separatorStyles({
        children: !!children,
        orientation,
        className
      })}
      {...props}
    >
      {children}
    </div>
  )
}

export { Separator }
