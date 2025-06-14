import { getLocale, getTranslations } from 'next-intl/server'

import React from 'react'

import { BonusFreeSpinsSection, BonusGridWithPagination } from '@/features/bonus'

import { FREE_SPINS_TYPES } from '@/entities/bonus'
import { BonusCategoryType } from '@/entities/bonus/model/bonus.types'
import { StrapiContent } from '@/entities/casino/model/casino.types'
import { PageContentRenderer, fetchPageContentBySlug } from '@/entities/page-content'

import { Locale } from '@/shared/lib/i18n/routing'

const BonusCategoryPage = async ({
    bonusCategory,
    currentPage,
}: {
    bonusCategory: string
    currentPage: number
}) => {
    const t = await getTranslations('free-spins-page')
    const locale = await getLocale()
    const { pageContent } = await fetchPageContentBySlug(bonusCategory, locale as Locale)

    return (
        <>
            <BonusGridWithPagination bonusCategory={bonusCategory} currentPage={currentPage} />
            {(bonusCategory === 'free-spins-bonuses' ||
                FREE_SPINS_TYPES.some((item) => item.label === bonusCategory)) && (
                <section className="space-y-5 flex-1 bento-block">
                    <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        {t('title')}
                    </h2>
                    <BonusFreeSpinsSection />
                </section>
            )}

            {pageContent && <PageContentRenderer pageContent={pageContent} />}
        </>
    )
}

export default BonusCategoryPage
