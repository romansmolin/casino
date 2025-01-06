import { getLocale } from 'next-intl/server'
import React from 'react'
import CasinoReviewCard from './casino-review-card'
import CasinoReviewHighlights from './casino-review-highlights'
import { TableContent as CasinoTableContent } from '@/shared/components/table-content'
import CasinoReviewFaq from './casino-review-faq'
import CasinoMainBonus from './casino-main-bonus'
import { fetchCasinoByUuid } from '@/entities/casino'
import { strapiTextRenderer as CasinoReviewRenderer } from '@/entities/page-content'
import { cn } from '@/shared/lib/css'
import { Card, CardContent } from '@/shared/ui/card'

const CasinoReviewPage = async ({ uuid }: { uuid: string }) => {
    const locale = await getLocale()
    const { casino, error } = await fetchCasinoByUuid<CasinoReview>(uuid, locale)

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
            <CasinoMainBonus casinoName={casino.name} mainBonus={casino.mainBonus} />
            <div className="flex flex-col lg:flex-row gap-4">
                <div className='lg:w-1/3'>
                    <CasinoTableContent content={casino.review} />
                </div>
                <div className='lg:w-2/3'>
                    <Card>
                        <CardContent className='space-y-8 bento-block'>
                            <CasinoReviewRenderer contentData={casino.review} />
                        </CardContent>
                    </Card>
                </div>
            </div>
            <CasinoReviewFaq faq={casino.faq} casinoName={casino.name} />
        </>
    )
}

export default CasinoReviewPage
