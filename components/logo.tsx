import { type SVGProps } from 'react'
import { cn } from 'ui'

interface Props extends SVGProps<SVGSVGElement> {}

const Logo = ({ className, ...props }: Props) => (
  <svg
    className={cn('size-6 shrink-0', className)}
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={1} y={1} width={24} height={24} rx={4} fill="#09090B" />
    <rect x={0.5} y={0.5} width={25} height={25} rx={4.5} stroke="white" strokeOpacity={0.2} />
  </svg>
)

export { Logo }
