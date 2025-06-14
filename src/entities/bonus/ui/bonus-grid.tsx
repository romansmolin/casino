import React from 'react'

import { BonusCard } from '@/entities/bonus'

import { cn } from '@/shared/lib/css'

import { Bonus } from '../model/bonus.types'

const BonusGrid = ({
    bonuses,
    horizontalyScrollable = false,
    bonusCardClass = '',
}: {
    bonuses: Bonus[]
    horizontalyScrollable?: boolean
    bonusCardClass?: string
}) => {
    const horizontalyScrollableClass =
        'flex overflow-x-scroll lg:overflow-auto md:flex-col gap-5 mt-5'

    return (
        <div
            className={cn(
                'grid grid-cols-1 md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 no-scrollbar',
                horizontalyScrollable ? horizontalyScrollableClass : ''
            )}
        >
            {bonuses?.map((bonus) => (
                <div key={bonus.uuid}>
                    <BonusCard
                        casinoName={bonus.casinoName}
                        bonusSubtitle={bonus.bonusSubtitle}
                        bonusTitle={bonus.bonusTitle}
                        casinoLogo={bonus.casinoLogo}
                        info={bonus.info}
                        casinoUuid={bonus.casinoUuid}
                        bonusCardClass={bonusCardClass}
                        slug={bonus.slug}
                    />
                </div>
            ))}
        </div>
    )
}

export default BonusGrid
