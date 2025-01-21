import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'
import React, { Suspense } from 'react'

const BestCasinos = () => {
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <LoadingIndicator />
        </Suspense>
    )
}

export default BestCasinos
