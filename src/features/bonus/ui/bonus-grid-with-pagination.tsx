import { BonusGrid, fetchBonusesByType } from '@/entities/bonus'
import PaginationControl from '@/shared/components/pagination-control/pagination-control'
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
            <h2 className='text-5xl text-center lg:text-left font-bold lg:text-nowrap'>{headings[bonusCategory]}</h2>
            <BonusGrid bonuses={bonuses} />
            <PaginationControl totalPages={totalPages} currentPage={currentPage}/>
        </section>
    )
}

export default BonusGridWithPagination