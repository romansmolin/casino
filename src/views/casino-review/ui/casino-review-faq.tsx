import React from 'react'

import type { CasinoReviewFaq as CasinoReviewFaqType } from '@/entities/casino'

import { Accardion } from '@/shared/components/accardion'
import Typography from '@/shared/components/typography/typography'
import { Card, CardContent } from '@/shared/ui/card'

const CasinoReviewFaq = ({
    faq,
    casinoName,
}: {
    faq: CasinoReviewFaqType[]
    casinoName: string
}) => {
    return (
        <Card>
            <CardContent className="flex-1 space-y-5 bento-block">
                <Typography as="h2" variant="h2">
                    Frequantly Asked Questions:{' '}
                    <span className="text-primary">{casinoName}</span>
                </Typography>
                <Accardion items={faq} />
            </CardContent>
        </Card>
    )
}

export default CasinoReviewFaq
