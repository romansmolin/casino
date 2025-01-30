import { BonusDetailsCard, fetchBonusById } from '@/entities/bonus'
import StrapiTextRenderer from '@/entities/page-content/ui/strapi-text-renderer'
import { Accardion } from '@/shared/components/accardion'
import Typography from '@/shared/components/typography/typography'
import { Locale } from '@/shared/lib/i18n/routing'
import { Card, CardContent, CardTitle } from '@/shared/ui/card'
import { CheckCircleIcon, CircleHelp, InfoIcon } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import React from 'react'

const BonusReviewPage = async ({ uuid }: { uuid: string }) => {
    const locale = await getLocale()
    const { bonus } = await fetchBonusById(uuid, locale as Locale)

    return (
        <>
            <BonusDetailsCard
                bonusLogo={bonus.casinoLogo}
                bonusTitle={bonus.bonusTitle}
                bonusSubtitle={bonus.bonusSubtitle}
                casinoName={bonus.casinoName}
                bonusStatus={bonus.info.bonusStatus}
                casinoUuid={bonus.casinoUuid}
            />

            <Card className='bento-block'>
                <CardTitle className='flex items-center gap-2'>
                    <CheckCircleIcon className="mr-2 h-8 w-8" />
                    <Typography as="h2" variant='h2'>Review</Typography>
                </CardTitle>
                <CardContent className='space-y-5'>
                    <StrapiTextRenderer contentData={bonus.bonusReview} />
                </CardContent>
            </Card>

            <Card className='bento-block'>
                <CardTitle className='flex items-center gap-2'>
                    <CircleHelp className="mr-2 h-8 w-8" />
                    <Typography as="h2" variant='h2'>Frequently Asked Questions</Typography>
                </CardTitle>
                <CardContent className='space-y-5'>
                    <Accardion items={bonus.faqInfo} />
                </CardContent>
            </Card>
        </>
    )
}

export default BonusReviewPage