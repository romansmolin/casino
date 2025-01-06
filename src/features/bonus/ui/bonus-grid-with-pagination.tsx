import { fetchBonusesByType } from '@/entities/bonus'
import React from 'react'

interface BonusGridWithPaginationProps {
    totalPages: number
    totalItems: number
    itemsPerPage: number
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
    totalPages,
    totalItems,
    itemsPerPage,
    bonusCategory
}) => {
    const { bonuses, error } = await fetchBonusesByType(1, 10, bonusCategory)

    return (
        <section className='bento-block'>
            <h2 className='text-5xl text-center lg:text-left font-bold lg:text-nowrap'>{headings[bonusCategory]}</h2>
        </section>
    )
}

export default BonusGridWithPagination