'use client'

import React from 'react'
import { Card, CardContent } from '@/shared/ui/card'
import Typography from '@/shared/components/typography/typography'
import { useLocale, useTranslations } from 'next-intl'
import { BadgeDollarSign, Bitcoin, Gem, RotateCcw, Trophy, Wallet } from 'lucide-react'
import { BadgeConfig } from '@/entities/bonus/ui/bonus-type-badge/badge.types'
import { useRouter } from 'next/navigation'
import { ScrollBar, ScrollArea } from '@/shared/ui/scroll-area'

//TODO: I was required to duplicate this const, since if I am importing it from consts.ts, next js throw weird error
const BONUS_CATEGORIES_CONFIG: Record<string, BadgeConfig> = {
    'no-deposit-bonuses': {
        color: 'bg-[#dd6030]',
        icon: Wallet,
    },
    'best-of-the-month': {
        color: 'bg-[#3030dd]',
        icon: Trophy,
    },
    'real-money-bonuses': {
        color: 'bg-[#fdd55e]',
        icon: BadgeDollarSign,
    },
    'cashback-bonuses': {
        color: 'bg-[#77bd58]',
        icon: RotateCcw,
    },
    'welcome-bonuses': {
        color: 'bg-[#c90076]',
        icon: Gem,
    },
    'crypto-bonuses': {
        icon: Bitcoin,
        color: 'bg-[#44a8f3]',
    },
}

const BonusCategories = () => {
    const t = useTranslations('common')
    const locale = useLocale()
    const router = useRouter()

    const categories = Object.keys(BONUS_CATEGORIES_CONFIG)

    return (
        <div className="relative w-[calc(100%+1.25rem)] md:w-[unset]">
            <ScrollArea>
                <div className="flex flex-row  md:[width:unset] md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {categories.map((category) => {
                        const { icon: Icon, color } = BONUS_CATEGORIES_CONFIG[category]
                        return (
                            <Card
                                key={category as keyof typeof BONUS_CATEGORIES_CONFIG}
                                onClick={() => router.push(`/${locale}/category/${category}`)}
                                className={`flex justify-center items-center transition-all duration-300 ease-in-out transform md:hover:scale-105 md:hover:shadow-xl md:hover:rotate-1 ${color} shrink-0`}>
                                <CardContent className="w-56 flex flex-col justify-center items-center h-64 gap-6 cursor-pointer p-4">
                                    {Icon && (
                                        <div className="p-4 rounded-full bg-opacity-20 transition-all duration-300 ease-in-out md:transform md:group-hover:scale-110">
                                            <Icon className="w-16 h-16 text-white" />
                                        </div>
                                    )}
                                    <Typography
                                        as="h2"
                                        variant="h2"
                                        className="text-center text-white font-bold transition-all duration-300 ease-in-out transform group-hover:scale-105">
                                        {t(category)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}

export default BonusCategories
