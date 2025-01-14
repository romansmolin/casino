import { BonusGrid, fetchBonusesByType } from '@/entities/bonus'
import Typography from '@/shared/components/typography/typography'
import React from 'react'

const BestBonusesOfTheMonth = async () => {
    const { bonuses } = await fetchBonusesByType(1, 6, 'best-of-the-month')

    return (
        <section className="animate-bento-block-lg space-y-8 bento-block border border-border">
            <Typography as='h1' variant="h1">Best Bonuses of the Month</Typography>
            <BonusGrid bonuses={bonuses} horizontalyScrollable/>
        </section>
    )
}

export default BestBonusesOfTheMonth
