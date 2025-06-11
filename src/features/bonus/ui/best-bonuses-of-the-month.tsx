import { getLocale, getTranslations } from 'next-intl/server'

import React from 'react'

import { BonusGrid, fetchBonusesByType } from '@/entities/bonus'

import Typography from '@/shared/components/typography/typography'
import { Locale } from '@/shared/lib/i18n/routing'
import { ScrollArea, ScrollBar } from '@/shared/ui/scroll-area'

const BestBonusesOfTheMonth = async () => {
    const locale = await getLocale()
    const { bonuses } = await fetchBonusesByType(1, 6, 'best-of-the-month', locale as Locale)
    const t = await getTranslations('bonuses')

    return (
        <section className="relative space-y-5 bento-block border border-border">
            <Typography as="h2" variant="h1">
                {t('best-bonuses-of-the-month')}
            </Typography>
            <ScrollArea className="relative w-[calc(100%+1.25rem)] md:w-[unset]">
                <BonusGrid bonuses={bonuses} horizontalyScrollable />
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </section>
    )
}

export default BestBonusesOfTheMonth
