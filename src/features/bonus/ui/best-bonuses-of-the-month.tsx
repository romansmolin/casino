import { BonusCard, fetchBonusesByType } from '@/entities/bonus'
import React from 'react'

const BestBonusesOfTheMonth = async () => {
    const { bonuses, error } = await fetchBonusesByType(1, 10, 'best-of-the-month')
    return (
        <section className="flex-1 space-y-8 bento-block border border-border">
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Best Bonuses of the Month</h2>
            <div className="grid grid-cols-3 gap-4">
                {bonuses?.map((bonus) => (
                    <div key={bonus.uuid}>
                        <BonusCard
                            casinoName={bonus.casinoName}
                            bonusSubtitle={bonus.bonusSubtitle}
                            bonusTitle={bonus.bonusTitle}
                            casinoLogo={bonus.casinoLogo}
                            info={bonus.info}
                            casinoUuid={bonus.casinoUuid}
                            uuid={bonus.uuid}
                            mainBonusTypeForUrl={bonus.bonusTypeForUrl}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BestBonusesOfTheMonth
