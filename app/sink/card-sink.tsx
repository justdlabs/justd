import { Card } from '@/components/ui'
import { cn } from '@/lib/utils'

interface BlockProps {
    className?: string
    children: React.ReactNode
}

export const Sink = ({ className, children }: BlockProps) => {
    return (
        <Card
            className={cn(
                'p-6 flex flex-col justify-center items-center gap-4',
                className
            )}
        >
            {children}
        </Card>
    )
}
