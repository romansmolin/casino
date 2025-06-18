import { notFound, redirect } from 'next/navigation'

import React, { Suspense } from 'react'

import { BonusCategoryPage } from '@/views/bonus-category'

import { fetchBonusCategoryBySlug } from '@/entities/bonus'

import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'
import { Locale } from '@/shared/lib/i18n/routing'

interface BonusCategoryProps {
    params: Promise<{ slug: string; locale: Locale }>
    searchParams: Promise<{ [key: string]: string | undefined }>
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string; locale: Locale }>
}) {
    const { slug, locale } = await params
    const { title, description, keywords } = await fetchBonusCategoryBySlug(slug, locale)

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

const BonusCategory: React.FC<BonusCategoryProps> = async ({ params, searchParams }) => {
    const [{ slug, locale }, { page }] = await Promise.all([params, searchParams])
    const { categoryBonusType } = await fetchBonusCategoryBySlug(slug, locale)
    const currentPage = page ? parseInt(page, 10) : 1

    if (!categoryBonusType) notFound()

    return (
        <Suspense fallback={<LoadingIndicator />}>
            <BonusCategoryPage bonusCategory={categoryBonusType} currentPage={currentPage} />
        </Suspense>
    )
}

export default BonusCategory
