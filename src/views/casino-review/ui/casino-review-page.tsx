import { getLocale } from 'next-intl/server'
import React from 'react'
import CasinoReviewCard from './casino-review-card'
import CasinoReviewHighlights from './casino-review-highlights'
import { TableContent as CasinoTableContent } from '@/shared/components/table-content'
import CasinoReviewFaq from './casino-review-faq'
import CasinoMainBonus from './casino-main-bonus'
import { CasinoAvailability, fetchCasinoByUuid } from '@/entities/casino'
import { strapiTextRenderer as CasinoReviewRenderer } from '@/entities/page-content'
import { Card, CardContent, CardTitle } from '@/shared/ui/card'
import { notFound } from 'next/navigation'
import AllowedCountriesSection from '@/shared/components/allowed-countries-section/allowed-countries-section'
import Typography from '@/shared/components/typography/typography'
import { CircleHelp, Coins, Currency } from 'lucide-react'
import { StrapiContent } from '@/entities/page-content/model/types'

const CasinoReviewPage = async ({ uuid }: { uuid: string }) => {
    const locale = await getLocale()
    const { casino, error } = await fetchCasinoByUuid<CasinoReview>(uuid, locale)

    console.log('casino: ', casino)

    if (!casino || error) notFound()

    return (
        <>
            <CasinoAvailability allowedCountries={casino.allowedCountries} />
            <div className="flex flex-col lg:flex-row gap-4">
                <CasinoReviewCard
                    casinoName={casino.name}
                    bonusTitle={casino.bonus_title}
                    logo={casino.logoUrl}
                    casinoType={casino.casinoType}
                />
                <CasinoReviewHighlights
                    casinoName={casino.name}
                    rating={casino.rating}
                    features={casino.features}
                />
            </div>
            <CasinoMainBonus casinoName={casino.name} mainBonus={casino.mainBonus} />

            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/3">
                    <CasinoTableContent content={casino.review} />
                </div>
                <div className="lg:w-2/3">
                    <Card>
                        <CardContent className="space-y-5 bento-block">
                            <CasinoReviewRenderer contentData={casino.review as StrapiContent[]} />
                        </CardContent>
                    </Card>
                </div>
            </div>

            {casino.allowedCountries?.length > 0 && (
                <Card className="bento-block space-y-5">
                    <CardTitle className="flex items-center gap-2">
                        <CircleHelp className="mr-2 h-8 w-8" />
                        <Typography as="h2" variant="h2">
                            Allowed Countries
                        </Typography>
                    </CardTitle>
                    <CardContent>
                        <AllowedCountriesSection allowedCountries={casino.allowedCountries} />
                    </CardContent>
                </Card>
            )}

            {casino.allowedCurrencies?.length > 0 && (
                <Card className="bento-block space-y-5">
                    <CardTitle className="flex items-center gap-2">
                        <Coins className="mr-2 h-8 w-8" />
                        <Typography as="h2" variant="h2">
                            Accepted Currencies
                        </Typography>
                    </CardTitle>
                    <CardContent>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                            {casino.allowedCurrencies.map((currency) => (
                                <div key={currency} className="flex items-center gap-2 p-2 border rounded-md">
                                    <span className="text-sm font-medium text-green-500">{currency}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            <CasinoReviewFaq faq={casino.faq} casinoName={casino.name} />
        </>
    )
}

export default CasinoReviewPage
