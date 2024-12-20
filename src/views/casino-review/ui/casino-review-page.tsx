import { fetchCasinoByUuid } from '@/entities/casino/model/casino.api'
import { getLocale } from 'next-intl/server'
import React from 'react'
import CasinoReviewCard from './casino-review-card'
import CasinoReviewHighlights from './casino-review-highlights'
import { StrapiTextRenderer as CasinoReviewRenderer } from '@/features/strapi'
import { TableContent as CasinoTableContent } from '@/shared/components/table-content'
import CasinoReviewFaq from './casino-review-faq'
import CasinoMainBonus from './casino-main-bonus'

const CasinoReviewPage = async ({ uuid }: { uuid: string }) => {
    const locale = await getLocale()
    const { casino, error } = await fetchCasinoByUuid<CasinoReview>(uuid, locale)

    console.log('casino: ', casino.mainBonus)
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-4">
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
            <div className="flex-1 px-5 py-7 lg:pr-5 space-y-8 rounded-xl bg-muted/50 md:min-h-min">
                <CasinoMainBonus casinoName={casino.name} mainBonus={casino.mainBonus} />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="bg-muted/50 lg:w-1/3 px-5 py-7 lg:sticky lg:top-[15px] rounded-xl lg:min-h-min border-0 flex-3 lg:h-[calc(100vh-20px)]">
                    <CasinoTableContent content={casino.review}/>
                </div>
                <div className="flex-1 px-5 py-7 md:pr-5 space-y-8 rounded-xl bg-muted/50 md:min-h-min">
                    <CasinoReviewRenderer contentData={casino.review} />
                </div>
            </div>
            <div className="flex-1 px-5 py-7 md:pr-5 space-y-8 rounded-xl bg-muted/50 md:min-h-min">
                <CasinoReviewFaq faq={casino.faq} casinoName={casino.name} />
            </div>
        </>
    )
}

export default CasinoReviewPage
