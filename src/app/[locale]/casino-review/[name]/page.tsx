import React, { Suspense } from 'react'
import { CasinoReviewPage } from '@/views/casino-review'
import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'

const CasinoReview = async ({ searchParams }: { searchParams: { id: string } }) => {
    const { id } = searchParams
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <CasinoReviewPage uuid={id}/>
        </Suspense>
    )
}

export default CasinoReview
