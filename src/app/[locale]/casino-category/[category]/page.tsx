import React, { Suspense } from 'react'
import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'

const CasinoCategory = async ({ params }: { params: { category: string } }) => {
    const { category } = await params
    
    return (
        <Suspense fallback={<LoadingIndicator />}>
        </Suspense>
    )
}

export default CasinoCategory
