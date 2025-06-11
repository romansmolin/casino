import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import React, { Suspense } from 'react'

import { BonusReviewPage } from '@/views/bonus-review'

import { fetchBonusById } from '@/entities/bonus'
import { fetchSeoInfoByBonusSlug } from '@/entities/bonus/api/bonus.api'

import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'
import { Locale } from '@/shared/lib/i18n/routing'

type Props = {
    params: Promise<{ locale: Locale; slug: string }>
    searchParams: Promise<{ [key: string]: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params
    const { title, description, keywords } = await fetchSeoInfoByBonusSlug(slug, locale)
    const year = new Date().getFullYear()

    return {
        title: `${title} | ${year}`,
        description,
        keywords,
    }
}

const BonusReview = async ({
    params,
}: {
    params: Promise<{ locale: Locale; slug: string }>
}) => {
    const { slug } = await params
    console.log('SLUG: ', slug)

    return (
        <Suspense fallback={<LoadingIndicator />}>
            <BonusReviewPage slug={slug} />
        </Suspense>
    )
}

export default BonusReview
