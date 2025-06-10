import { cn } from '@/shared/lib/css'
import { Badge } from '@/shared/ui/badge'
import { getLocale, getTranslations } from 'next-intl/server'
import React from 'react'
import { BadgeSize, BadgeVariant, BadgeProps } from './badge.types'
import { BONUS_CATEGORIES_CONFIG } from '../../model/consts'
import Typography from '@/shared/components/typography/typography'
import Link from 'next/link'

const sizeClasses: Record<BadgeSize, string> = {
    sm: 'h-6 text-xs',
    md: 'h-8 text-sm',
    lg: 'h-10 text-base',
}

const variantClasses: Record<BadgeVariant, string> = {
    default: '',
    outline: 'bg-transparent border-2',
    secondary: 'bg-opacity-10',
}

const BonusTypeBadge = async ({ type, variant = 'default', size = 'md', className, onClick }: BadgeProps) => {
    const t = await getTranslations('common')
    const locale = await getLocale()
    const config = BONUS_CATEGORIES_CONFIG
    const badgeConfig = config[type]
    const Icon = badgeConfig?.icon

    return (
        <Badge
            className={cn(
                'cursor-pointer',
                sizeClasses[size],
                variantClasses[variant],
                badgeConfig?.color,
                className
            )}
            onClick={onClick}>
            <Link
                href={`/${locale}/bonuses/${type}`}
                className="flex items-center justify-center gap-1 whitespace-nowrap">
                {Icon && <Icon className="w-4 h-4" />}
                <Typography as="p" variant="small" className="text-[12px]">
                    {t(type)}
                </Typography>
            </Link>
        </Badge>
    )
}

export default BonusTypeBadge
