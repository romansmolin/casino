import { fetchBonusById } from '@/entities/bonus'
import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'
import { BonusReviewPage } from '@/views/bonus-review'
import React, { Suspense } from 'react'

// @ts-ignore
const BonusReview = async ({ searchParams }: { searchParams: Promise<{ uuid: string }> }) => {
    const { uuid } = await searchParams
    const { bonus } = await fetchBonusById(uuid)
    
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <BonusReviewPage bonus={bonus} />
        </Suspense>
    )
}

export default BonusReview
