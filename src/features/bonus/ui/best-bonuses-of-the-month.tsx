import { BonusGrid, fetchBonusesByType } from '@/entities/bonus'
import Typography from '@/shared/components/typography/typography'
import { Locale } from '@/shared/lib/i18n/routing'
import { getLocale, getTranslations } from 'next-intl/server'
import React from 'react'

const BestBonusesOfTheMonth = async () => {
    const locale = await getLocale()
    const { bonuses } = await fetchBonusesByType(1, 6, 'best-of-the-month', locale as Locale)
    const t = await getTranslations('bonuses')

    return (
        <section className="animate-bento-block-lg space-y-8 bento-block border border-border">
            <Typography as='h1' variant="h1">{t('best-bonuses-of-the-month')}</Typography>
            <div className='relative w-[calc(100%+1.25rem)] md:w-[unset]'>
                <BonusGrid bonuses={bonuses} horizontalyScrollable/>
                <div className='pointer-events-none absolute top-1/2 transform -translate-y-1/2 h-[99%] right-0 w-5 bg-gradient-to-r from-transparent to-white dark:to-black md:hidden'>
                </div>
            </div>
        </section>
    )
}

export default BestBonusesOfTheMonth
