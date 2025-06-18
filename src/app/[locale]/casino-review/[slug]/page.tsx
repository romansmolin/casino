import React, { Suspense } from 'react'

import { CasinoReviewPage } from '@/views/casino-review'

import { getCasinoSeoInfoBySlug } from '@/entities/casino/api/casino.api'

import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'
import { Locale } from '@/shared/lib/i18n/routing'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string; locale: Locale }>
}) {
    const { slug, locale } = await params

    const { title, description, keywords } = await getCasinoSeoInfoBySlug(slug, locale)
    const year = new Date().getFullYear()

    return {
        title: `${title} | ${year}`,
        description,
        keywords,
    }
}

const CasinoReview = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <CasinoReviewPage slug={slug} />
        </Suspense>
    )
}

export default CasinoReview
