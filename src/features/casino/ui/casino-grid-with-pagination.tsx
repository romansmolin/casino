import { fetchCasinoByType } from '@/entities/casino'
import CasinoGrid from '@/entities/casino/ui/casino-grid'
import PaginationControl from '@/shared/components/pagination-control/pagination-control'
import Typography from '@/shared/components/typography/typography'
import { formatCasinoType } from '@/shared/utils/text-formaters'
import { getLocale } from 'next-intl/server'
import React from 'react'
import { Locale } from '@/shared/lib/i18n/routing'


interface CasinoGridWithPaginationProps {
    casinosCategory: string
    currentPage: number
}

const CasinoGridWithPagination: React.FC<CasinoGridWithPaginationProps> = async ({ currentPage, casinosCategory }) => {
    const locale = await getLocale()
    const { casinos, totalPages } = await fetchCasinoByType({ page: currentPage, number: 6, casinoType: casinosCategory, locale: locale as Locale })

    return (
        <section className='bento-block space-y-8'>
            <Typography as="h2" variant='h1'>{formatCasinoType(casinosCategory)}</Typography>
            <CasinoGrid casinos={casinos} />
            <PaginationControl totalPages={totalPages} currentPage={currentPage} />
        </section>
    )
}

export default CasinoGridWithPagination