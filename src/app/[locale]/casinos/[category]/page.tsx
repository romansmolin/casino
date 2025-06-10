import React, { Suspense } from 'react'
import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'
import { CasinoCategoryPage } from '@/views/casino-category'

const CasinoCategory = async ({
    params,
    searchParams,
}: {
    params: Promise<{ category: string }>
    searchParams: Promise<{ page: string }>
}) => {
    const { category } = await params
    const { page } = await searchParams

    return (
        <Suspense fallback={<LoadingIndicator />}>
            <CasinoCategoryPage category={category.trim()} currentPage={parseInt(page)} />
        </Suspense>
    )
}

export default CasinoCategory
