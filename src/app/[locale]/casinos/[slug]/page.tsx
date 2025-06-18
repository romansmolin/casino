import { notFound } from 'next/navigation'

import React, { Suspense } from 'react'

import { CasinoCategoryPage } from '@/views/casino-category'

import { fetchCasinoCategoryBySlug } from '@/entities/casino'

import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'
import { Locale } from '@/shared/lib/i18n/routing'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string; locale: Locale }>
}) {
    const { slug, locale } = await params
    const { title, description, keywords } = await fetchCasinoCategoryBySlug(slug, locale)

    return {
        title: `${title} | ${new Date().getFullYear()}`,
        description,
        keywords,
        openGraph: {
            title,
            description,
        },
    }
}

const CasinoCategory = async ({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string; locale: Locale }>
    searchParams: Promise<{ page: string }>
}) => {
    const [{ slug, locale }, { page }] = await Promise.all([params, searchParams])
    const { categoryCasinoType, pageTitle } = await fetchCasinoCategoryBySlug(slug, locale)
    const currentPage = page ? parseInt(page, 10) : 1

    if (!categoryCasinoType) notFound()

    return (
        <Suspense fallback={<LoadingIndicator />}>
            <CasinoCategoryPage
                category={categoryCasinoType}
                currentPage={currentPage}
                title={pageTitle || ''}
            />
        </Suspense>
    )
}

export default CasinoCategory
