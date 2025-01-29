import React, { Suspense } from 'react'
import { CasinoReviewPage } from '@/views/casino-review'
import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'

const CasinoReview = async ({ searchParams }: { searchParams: Promise<{ id: string }> }) => {
    const { id } = await searchParams
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <CasinoReviewPage uuid={id}/>
        </Suspense>
    )
}

export default CasinoReview
