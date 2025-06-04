import { BonusDetailsCard, fetchBonusById } from '@/entities/bonus'
import StrapiTextRenderer from '@/entities/page-content/ui/strapi-text-renderer'
import { StrapiContent } from '@/entities/page-content/model/types'
import { Accardion } from '@/shared/components/accardion'
import Typography from '@/shared/components/typography/typography'
import { Locale } from '@/shared/lib/i18n/routing'
import { Card, CardContent, CardTitle } from '@/shared/ui/card'
import { CheckCircleIcon, CircleHelp, HandMetal } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import React from 'react'
import { notFound } from 'next/navigation'
import AllowedCountriesSection from '@/shared/components/allowed-countries-section/allowed-countries-section'

const BonusReviewPage = async ({ uuid }: { uuid: string }) => {
    const locale = await getLocale()
    const { bonus, error } = await fetchBonusById(uuid, locale as Locale)

    if (!bonus || error) notFound()

    return (
        <>
            <BonusDetailsCard
                bonusLogo={bonus.casinoLogo}
                bonusTitle={bonus.bonusTitle}
                bonusSubtitle={bonus.bonusSubtitle}
                casinoName={bonus.casinoName}
                bonusStatus={bonus.info.bonusStatus}
                casinoUuid={bonus.casinoUuid}
                bonusTypes={bonus.info.bonusType}
            />

            <Card className="bento-block space-y-5">
                <CardTitle className="flex items-center gap-2">
                    <CheckCircleIcon className="mr-2 h-8 w-8" />
                    <Typography as="h2" variant="h2">
                        Review
                    </Typography>
                </CardTitle>
                <CardContent>
                    <StrapiTextRenderer contentData={bonus.bonusReview as StrapiContent[]} />
                </CardContent>
            </Card>

            {bonus.info.availableFor?.length > 0 && (
                <Card className="bento-block space-y-5">
                    <CardTitle className="flex items-center gap-2">
                        <HandMetal className="mr-2 h-8 w-8" />
                        <Typography as="h2" variant="h2">
                            Allowed Countries
                        </Typography>
                    </CardTitle>
                    <CardContent>
                        <AllowedCountriesSection allowedCountries={bonus.info.availableFor} />
                    </CardContent>
                </Card>
            )}

            <Card className="bento-block space-y-5">
                <CardTitle className="flex items-center gap-2">
                    <CircleHelp className="mr-2 h-8 w-8" />
                    <Typography as="h2" variant="h2">
                        Frequently Asked Questions
                    </Typography>
                </CardTitle>
                <CardContent>
                    <Accardion items={bonus.faqInfo} />
                </CardContent>
            </Card>
        </>
    )
}

export default BonusReviewPage
