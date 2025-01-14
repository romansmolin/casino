import { BonusGrid, fetchBonusesByType } from '@/entities/bonus'
import PaginationControl from '@/shared/components/pagination-control/pagination-control'
import Typography from '@/shared/components/typography/typography'
import React from 'react'

interface BonusGridWithPaginationProps {
    currentPage: number
    bonusCategory: BonusCategoryType
}

const headings: Record<BonusCategoryType, string> = {
    'no-deposit-bonuses': 'No Deposit Bonuses',
    'free-spins-bonuses': 'Free Spins Bonuses',
    'real-money-bonuses': 'Real Money Bonuses',
    'cashback-bonuses': 'Cashback Bonuses',
    'best-of-the-month': 'Best of the Month',
}

const BonusGridWithPagination: React.FC<BonusGridWithPaginationProps> = async ({
    currentPage,
    bonusCategory
}) => {
    const { bonuses, totalPages } = await fetchBonusesByType(1, 6, bonusCategory)

    return (
        <section className='bento-block space-y-8'>
            <Typography as="h2" variant='h1'>{headings[bonusCategory]}</Typography>
            <BonusGrid bonuses={bonuses} />
            <PaginationControl totalPages={totalPages} currentPage={currentPage}/>
        </section>
    )
}

export default BonusGridWithPagination