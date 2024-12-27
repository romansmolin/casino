import { BestBonusesOfTheMonth } from '@/features/bonus'
import { CasinoTop } from '@/features/casino'
import { getLocale, getTranslations } from 'next-intl/server'
import React from 'react'

const HomePage = async () => {
    const t = await getTranslations('mainPage')
    return (
        <>
            <div className=" px-5 py-7 pr-0 md:pr-5  space-y-8 flex-1 rounded-xl bg-muted/50 md:min-h-min">
                <h1 className='text-4xl font-extrabold tracking-tight lg:text-5xl'>
                    {t('title')} 2024
                </h1>
                <CasinoTop byCountry='Germany'/>
            </div>
            <BestBonusesOfTheMonth />
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
        </>
    )
}

export default HomePage