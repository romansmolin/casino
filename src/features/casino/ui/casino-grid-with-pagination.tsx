import { getLocale } from 'next-intl/server'

import React from 'react'

import { fetchCasinoByType } from '@/entities/casino'
import CasinoGrid from '@/entities/casino/ui/casino-grid'

import PaginationControl from '@/shared/components/pagination-control/pagination-control'
import Typography from '@/shared/components/typography/typography'
import { Locale } from '@/shared/lib/i18n/routing'
import { formatCasinoType } from '@/shared/utils/text-formaters'

interface CasinoGridWithPaginationProps {
    casinosCategory: string
    currentPage: number
    title: string
}

const CasinoGridWithPagination: React.FC<CasinoGridWithPaginationProps> = async ({
    currentPage,
    casinosCategory,
    title,
}) => {
    const locale = await getLocale()
    const { casinos, totalPages } = await fetchCasinoByType({
        page: currentPage,
        number: 6,
        casinoType: casinosCategory,
        locale: locale as Locale,
    })

    return (
        <section className="bento-block space-y-7">
            <Typography as="h2" variant="h1">
                {title}
            </Typography>
            {casinos && <CasinoGrid casinos={casinos} />}
            <PaginationControl totalPages={totalPages} currentPage={currentPage} />
        </section>
    )
}

export default CasinoGridWithPagination
