import Typography from '@/shared/components/typography/typography'
import { cn } from '@/shared/lib/css'
import { Badge } from '@/shared/ui/badge'
import { getLocale, getTranslations } from 'next-intl/server'
import Link from 'next/link'
import React from 'react'
import { CASINO_CATEGORIES_CONFIG } from '../const/config'
import { CasinoType } from '../model/casino.types'

const sizeClasses: Record<string, string> = {
    sm: 'h-6 text-xs',
    md: 'h-8 text-sm',
    lg: 'h-10 text-base',
}

const variantClasses: Record<string, string> = {
    default: '',
    outline: 'bg-transparent border-2',
    secondary: 'bg-opacity-10',
}

interface CasinoTypeBadge {
    type: CasinoType
    variant?: 'default' | 'outline' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
    className?: string
    onClick?: () => void
}

const CasinoTypeBadge: React.FC<CasinoTypeBadge> = async ({
    type,
    variant = 'default',
    size = 'md',
    className,
    onClick,
}) => {
    const t = await getTranslations('casino-category')
    const locale = await getLocale()
    const config = CASINO_CATEGORIES_CONFIG
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
            )}>
            <Link
                href={`/${locale}/casinos/${type}`}
                className="flex items-center justify-center gap-1 whitespace-nowrap">
                {Icon && <Icon className="w-4 h-4" />}
                <Typography as="p" variant="small" className="text-[12px]">
                    {t(type)}
                </Typography>
            </Link>
        </Badge>
    )
}

export default CasinoTypeBadge
