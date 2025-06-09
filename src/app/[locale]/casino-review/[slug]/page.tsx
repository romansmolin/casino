import React, { Suspense } from 'react'
import { CasinoReviewPage } from '@/views/casino-review'
import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'
import { getCasinoSeoInfoBySlug } from '@/entities/casino/api/casino.api'

export async function generateMetadata({ params }: { params: { slug: string; locale: string } }) {
    // const post = await fetchPostData(params.slug); // Fetch data dynamically
    const { slug } = await params
    const { locale } = await params

    const { title, description } = await getCasinoSeoInfoBySlug(slug, locale)
    const year = new Date().getFullYear()

    return {
        title: `${title} | ${year}`,
        description,
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
