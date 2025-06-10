import { BonusCategoryType } from '@/entities/bonus/model/bonus.types'
import { fetchPageSeoInfoBySlug } from '@/entities/page-content'
import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'
import { Locale } from '@/shared/lib/i18n/routing'
import { BonusCategoryPage } from '@/views/bonus-category'
import React, { Suspense } from 'react'

interface BonusCategoryProps {
    params: Promise<{ bonusCategory: BonusCategoryType }>
    searchParams: Promise<{ [key: string]: string | undefined }>
}

export async function generateMetadata({ params }: { params: { bonusCategory: string; locale: Locale } }) {
    const { bonusCategory } = await params
    const { locale } = await params

    const { title, description, keywords } = await fetchPageSeoInfoBySlug(bonusCategory.trim(), locale)
    const year = new Date().getFullYear()

    return {
        title: `${title} | ${year}`,
        description,
        keywords,
    }
}

const BonusCategory: React.FC<BonusCategoryProps> = async ({ params, searchParams }) => {
    const { bonusCategory } = await params
    const sp = await searchParams
    const { page } = sp

    return (
        <Suspense fallback={<LoadingIndicator />}>
            <BonusCategoryPage bonusCategory={bonusCategory} currentPage={page ? parseInt(page) : 1} />
        </Suspense>
    )
}

export default BonusCategory
