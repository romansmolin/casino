import { fetchBonusById } from '@/entities/bonus'
import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'
import { Locale } from '@/shared/lib/i18n/routing'
import { BonusReviewPage } from '@/views/bonus-review'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import React, { Suspense } from 'react'

type Props = {
    params: Promise<{ locale: Locale }>
    searchParams: Promise<{ [key: string]: string }>
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const { locale } = await params
    const { uuid } = await searchParams
    const { bonus } = await fetchBonusById(uuid, locale as Locale)
    const t = await getTranslations('seo')

    const year = new Date().getFullYear()

    const { casinoName, bonusTitle } = bonus
    
    return {
        title: t('single-bonus.seo-title', { casinoName, bonusTitle, year }),
        description: t('single-bonus.seo-description', { casinoName, bonusTitle, year })
    }
}

const BonusReview = async ({ searchParams }: { searchParams: Promise<{ uuid: string }> }) => {
    const { uuid } = await searchParams

    return (
        <Suspense fallback={<LoadingIndicator />}>
            <BonusReviewPage uuid={uuid} />
        </Suspense>
    )
}

export default BonusReview
