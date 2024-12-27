import { LucideIcon } from 'lucide-react'

export type BadgeVariant = 'default' | 'outline' | 'secondary'
export type BadgeSize = 'sm' | 'md' | 'lg'

export interface BadgeConfig {
    color: string
    icon?: LucideIcon
}

export interface BadgeProps {
    type: string
    variant?: BadgeVariant
    size?: BadgeSize
    className?: string
    onClick?: () => void
}
