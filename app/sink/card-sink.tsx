import { cn } from '@/lib/utils'
import { Card } from 'ui'

interface SinkProps {
  className?: string
  children: React.ReactNode
}

export function CardSink({ className, children }: SinkProps) {
  return (
    <Card
      className={cn('p-6 flex flex-col justify-center items-center gap-4', className)}
    >
      {children}
    </Card>
  )
}
