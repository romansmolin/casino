import { cn } from '@/shared/lib/css'
import { Badge } from '@/shared/ui/badge'
import { getTranslations } from 'next-intl/server'
import React from 'react'

const bonusTypesColors: Record<string, string> = {
    'noDepositBonus': 'bg-[#dd6030]',
    'bestOfTheMonth': 'bg-[#3030dd]',
}

const BonusTypeBadge = async ({ type }: { type: string }) => {
    const t = await getTranslations('common')
    return (
        <Badge className={cn('h-8 cursor-pointer', bonusTypesColors[type])}>
            {t(type)}
        </Badge>
    )
}

export default BonusTypeBadge
