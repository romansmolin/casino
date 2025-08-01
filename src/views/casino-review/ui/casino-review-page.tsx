import { CircleHelp, Coins, Currency, Gamepad, GamepadIcon } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

import React from 'react'

import { CasinoAvailability } from '@/features/casino'

import { getCasinoBySlug } from '@/entities/casino/api/casino.api'
import { GameProviderCard } from '@/entities/game-provider'
import { strapiTextRenderer as CasinoReviewRenderer } from '@/entities/page-content'
import { StrapiContent } from '@/entities/page-content/model/types'
import { PaymentProviderCard } from '@/entities/payment-provider'

import AllowedCountriesSection from '@/shared/components/allowed-countries-section/allowed-countries-section'
import { TableContent as CasinoTableContent } from '@/shared/components/table-content'
import Typography from '@/shared/components/typography/typography'
import { Locale } from '@/shared/lib/i18n/routing'
import { Card, CardContent, CardTitle } from '@/shared/ui/card'

import CasinoMainBonus from './casino-main-bonus'
import CasinoReviewCard from './casino-review-card'
import CasinoReviewFaq from './casino-review-faq'
import CasinoReviewHighlights from './casino-review-highlights'

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
                    bonusTitle={casino.bonusTitle}
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
                            {casino.review &&
                            Array.isArray(casino.review) &&
                            casino.review.length > 0 ? (
                                <CasinoReviewRenderer
                                    contentData={casino.review as StrapiContent[]}
                                />
                            ) : (
                                <div className="text-center text-muted-foreground">
                                    No review content available
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>

            {casino.gameProviders.length > 0 && (
                <Card className="bento-block space-y-5">
                    <CardTitle className="flex items-center gap-2">
                        <GamepadIcon className="mr-2 h-8 w-8" />
                        <Typography as="h2" variant="h2">
                            Game Providers
                        </Typography>
                    </CardTitle>
                    <CardContent className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5">
                        {casino.gameProviders.map((provider) => (
                            <GameProviderCard key={provider.name} provider={provider} />
                        ))}
                    </CardContent>
                </Card>
            )}

            {casino.paymentProviders.length > 0 && (
                <Card className="bento-block space-y-5">
                    <CardTitle className="flex items-center gap-2">
                        <GamepadIcon className="mr-2 h-8 w-8" />
                        <Typography as="h2" variant="h2">
                            Payment Providers
                        </Typography>
                    </CardTitle>
                    <CardContent className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5">
                        {casino.paymentProviders.map((provider) => (
                            <PaymentProviderCard key={provider.name} provider={provider} />
                        ))}
                    </CardContent>
                </Card>
            )}

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
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5">
                            {casino.allowedCurrencies.map((currency) => (
                                <div
                                    key={currency}
                                    className="flex items-center justify-center gap-2 p-2 rounded-md border border-primary bg-primary/10"
                                >
                                    <span className="text-sm font-medium">{currency}</span>
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
