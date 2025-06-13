import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'

import React from 'react'

import { BestBonusesOfTheMonth, BonusCategories } from '@/features/bonus'
import { CasinoCategories, CasinoTop } from '@/features/casino'

import {
    PageContentRenderer as HomePageContent,
    fetchPageContentBySlug,
} from '@/entities/page-content'

import Typography from '@/shared/components/typography/typography'
import { Locale } from '@/shared/lib/i18n/routing'

const ReviewProcessSection = dynamic(() => import('./review-process-section'))
const NewsletterForm = dynamic(
    () => import('../../../features/newsletter/ui/newsletter-section')
)

const HomePage = async ({ locale }: { locale: Locale }) => {
    const t = await getTranslations('mainPage')
    const { pageContent } = await fetchPageContentBySlug('/', locale)

    return (
        <>
            <section className="space-y-7 flex-1 bento-block">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-primary">
                    {t('title')} 2024
                </h1>
                <CasinoTop byCountry="Germany" />
            </section>
            <NewsletterForm />
            <BestBonusesOfTheMonth />
            <section className="space-y-5 flex-1 bento-block relative">
                <Typography as="h2" variant="h1" className="text-primary">
                    {t('categories-block')}
                </Typography>
                <BonusCategories />
            </section>
            <ReviewProcessSection />
            <section className="space-y-7 flex-1 bento-block relative">
                <Typography as="h2" variant="h1" className="text-primary">
                    {t('casino-categories')}
                </Typography>
                <CasinoCategories />
            </section>
            {pageContent && <HomePageContent pageContent={pageContent} />}
        </>
    )
}

export default HomePage
// export const runtime = 'edge'
