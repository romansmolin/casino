import { fetchCasinoByType } from '@/entities/casino'
import CasinoGrid from '@/entities/casino/ui/casino-grid'
import PaginationControl from '@/shared/components/pagination-control/pagination-control'
import Typography from '@/shared/components/typography/typography'
import { formatCasinoType } from '@/shared/utils/text-formaters'
import React from 'react'

interface CasinoGridWithPaginationProps {
    casinosCategory: string
    currentPage: number
}

const CasinoGridWithPagination: React.FC<CasinoGridWithPaginationProps> = async ({ currentPage, casinosCategory }) => {
    const { casinos, totalPages } = await fetchCasinoByType({ page: currentPage, number: 6, casinoType: casinosCategory })

    return (
        <section className='bento-block space-y-8'>
            <Typography as="h2" variant='h1'>{formatCasinoType(casinosCategory)}</Typography>
            <CasinoGrid casinos={casinos} />
            <PaginationControl totalPages={totalPages} currentPage={currentPage} />
        </section>
    )
}

export default CasinoGridWithPagination