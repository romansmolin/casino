import { fetchCasinoByUuid } from '@/entities/casino/model/casino.api'
import { getLocale } from 'next-intl/server'
import React from 'react'
import CasinoReviewCard from './casino-review-card'
import CasinoReviewHighlights from './casino-review-highlights'

const CasinoReviewPage = async ({ uuid }: { uuid: string }) => {
    const locale = await getLocale()
    const { casino, error } = await fetchCasinoByUuid<CasinoReview>(uuid, locale)

    return (
        <>
            <div className='flex gap-2'>
                <CasinoReviewCard
                    casinoName={casino.name}
                    bonusTitle={casino.bonus_title}
                    logo={casino.logoUrl}
                />
                <CasinoReviewHighlights 
                    casinoName={casino.name}
                    rating={casino.rating}
                    features={casino.features}
                />
            </div>
        </>
    )
}

export default CasinoReviewPage