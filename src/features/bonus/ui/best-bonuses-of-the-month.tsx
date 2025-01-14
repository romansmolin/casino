import { BonusGrid, fetchBonusesByType } from '@/entities/bonus'
import React from 'react'

const BestBonusesOfTheMonth = async () => {
    const { bonuses } = await fetchBonusesByType(1, 10, 'best-of-the-month')

    return (
        <section className="flex-1 space-y-8 bento-block border border-border">
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Best Bonuses of the Month</h2>
            <BonusGrid bonuses={bonuses}/>
        </section>
    )
}

export default BestBonusesOfTheMonth
