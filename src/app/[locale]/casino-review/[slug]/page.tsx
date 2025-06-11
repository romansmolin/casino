import React, { Suspense } from 'react'

import { CasinoReviewPage } from '@/views/casino-review'

import { getCasinoSeoInfoBySlug } from '@/entities/casino/api/casino.api'

import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'

export async function generateMetadata({
    params,
}: {
    params: { slug: string; locale: string }
}) {
    const { slug } = await params
    const { locale } = await params

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
