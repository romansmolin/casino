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
import { getCasinoBySlug } from '@/entities/casino/api/casino.api'
import { Locale } from '@/shared/lib/i18n/routing'

const CasinoReviewPage = async ({ slug }: { slug: string }) => {
    const locale = await getLocale()
    const { casino, error } = await getCasinoBySlug(slug, locale as Locale)

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
                    affiliateLink={casino.affiliateLink}
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
                            {casino.review && Array.isArray(casino.review) && casino.review.length > 0 ? (
                                <CasinoReviewRenderer contentData={casino.review as StrapiContent[]} />
                            ) : (
                                <div className="text-center text-muted-foreground">
                                    No review content available
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>

            {casino.allowedCountries.length > 0 && (
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
