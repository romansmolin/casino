import { BestBonusesOfTheMonth, BonusCategories } from '@/features/bonus'

import { fetchPageContentBySlug, PageContentRenderer as HomePageContent } from '@/entities/page-content'
import { CasinoTop } from '@/features/casino'
import { Locale } from '@/shared/lib/i18n/routing'
import { getTranslations } from 'next-intl/server'
import React from 'react'

const HomePage = async ({ locale }: { locale: Locale }) => {
    console.log('HomePage: ', locale)
    
    const t = await getTranslations('mainPage')
    const { pageContent } = await fetchPageContentBySlug('/', locale)

    return (
        <>
            <section className="space-y-5 flex-1 bento-block">
                <h1 className='text-4xl font-extrabold tracking-tight lg:text-5xl'>
                    {t('title')} 2024
                </h1>
                <CasinoTop byCountry='Germany' />
            </section>
            <BestBonusesOfTheMonth />

            <section className="space-y-5 animate-bento-block flex-1 bento-block">
                <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {t('categories-block')}
                </h2>
                <BonusCategories />
            </section>
            <HomePageContent pageContent={pageContent} />


            {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
            </div> */}
        </>
    )
}

export default HomePage