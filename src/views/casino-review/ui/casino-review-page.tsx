import { fetchCasinoByUuid } from '@/entities/casino/model/casino.api'
import { getLocale } from 'next-intl/server'
import React from 'react'
import CasinoReviewCard from './casino-review-card'
import CasinoReviewHighlights from './casino-review-highlights'
import { StrapiTextRenderer as CasinoReviewRenderer } from '@/features/strapi'
import { TableContent as CasinoTableContent } from '@/shared/components/table-content'

const CasinoReviewPage = async ({ uuid }: { uuid: string }) => {
    const locale = await getLocale()
    const { casino, error } = await fetchCasinoByUuid<CasinoReview>(uuid, locale)

    console.log('casino: ', casino)
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
            <div className='flex gap-2'>
                <div className='flex-1 px-5 py-7 pr-0 md:pr-5 space-y-8 rounded-xl bg-muted/50 md:min-h-min'>
                    <CasinoReviewRenderer contentData={casino.review} />
                </div>
                <div className='bg-muted/50 px-5 py-7 lg:sticky lg:top-[15px] rounded-xl md:min-h-min border-0 flex-3 h-[calc(100vh-20px)]'>
                    <CasinoTableContent content={casino.review}/>
                </div>
            </div>
            <div className='flex-1 px-5 py-7 pr-0 md:pr-5 space-y-8 rounded-xl bg-muted/50 md:min-h-min'>
                    <CasinoReviewRenderer 
                        contentData={casino.review} 
                    />
            </div>
        </>
    )
}

export default CasinoReviewPage