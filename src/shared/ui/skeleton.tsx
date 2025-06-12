import { cn } from '../lib/css'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn('animate-pulse rounded-md bg-muted dark:bg-foreground', className)}
            {...props}
        />
    )
}

export { Skeleton }
