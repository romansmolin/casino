import { BonusDetailsCard, fetchBonusById } from '@/entities/bonus'
import StrapiTextRenderer from '@/entities/page-content/ui/strapi-text-renderer'
import { Accardion } from '@/shared/components/accardion'
import { Card, CardContent, CardTitle } from '@/shared/ui/card'
import { CheckCircleIcon, CircleHelp, InfoIcon } from 'lucide-react'
import React from 'react'

const BonusReviewPage = ({ bonus }: { bonus: Bonus }) => {
    console.log(bonus)

    return (
        <>
            <BonusDetailsCard
                bonusLogo={bonus.casinoLogo}
                bonusTitle={bonus.bonusTitle}
                bonusSubtitle={bonus.bonusSubtitle}
                casinoName={bonus.casinoName}
                bonusStatus={bonus.info.bonusStatus}
            />

            <Card className='bento-block'>
                <CardTitle className='flex items-center gap-2'>
                    <CheckCircleIcon className="mr-2 h-8 w-8" />
                    <h2 className='text-3xl lg:text-5xl font-bold break-words'>Review</h2>
                </CardTitle>
                <CardContent className='space-y-5'>
                    <StrapiTextRenderer contentData={bonus.bonusReview} />
                </CardContent>
            </Card>

            <Card className='bento-block'>
                <CardTitle className='flex items-center gap-2'>
                    <CircleHelp className="mr-2 h-8 w-8" />
                    <h2 className='text-3xl lg:text-5xl font-bold break-words'>Frequently Asked Questions</h2>
                </CardTitle>
                <CardContent className='space-y-5'>
                    <Accardion items={bonus.faqInfo} />
                </CardContent>
            </Card>
        </>
    )
}

export default BonusReviewPage