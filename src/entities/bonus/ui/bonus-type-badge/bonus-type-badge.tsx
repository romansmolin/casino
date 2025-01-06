import { cn } from '@/shared/lib/css'
import { Badge } from '@/shared/ui/badge'
import { getTranslations } from 'next-intl/server'
import React from 'react'
import { Trophy, Wallet } from 'lucide-react'
import { BadgeConfig, BadgeSize, BadgeVariant, BadgeProps } from './badge.types'

const sizeClasses: Record<BadgeSize, string> = {
    sm: 'h-6 text-xs',
    md: 'h-8 text-sm',
    lg: 'h-10 text-base'
}

const variantClasses: Record<BadgeVariant, string> = {
    default: '',
    outline: 'bg-transparent border-2',
    secondary: 'bg-opacity-10'
}

const BONUS_BADGE_CONFIG: Record<string, BadgeConfig> = {
    'no-deposit-bonuses': {
        color: 'bg-[#dd6030]',
        icon: Wallet
    },
    'best-of-the-month': {
        color: 'bg-[#3030dd]',
        icon: Trophy
    }
}

const BonusTypeBadge = async ({ 
    type,
    variant = 'default',
    size = 'md',
    className,
    onClick 
}: BadgeProps) => {
    const t = await getTranslations('common')
    const config = BONUS_BADGE_CONFIG
    const badgeConfig = config[type]
    const Icon = badgeConfig?.icon

    return (
        <Badge 
            className={cn(
                'cursor-pointer flex items-center justify-center gap-1',
                sizeClasses[size],
                variantClasses[variant],
                badgeConfig?.color,
                className
            )}
            onClick={onClick}
        >
            {Icon && <Icon className="w-4 h-4" />}
            {t(type)}
        </Badge>
    )
}

export default BonusTypeBadge
