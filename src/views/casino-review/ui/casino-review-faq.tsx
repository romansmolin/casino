import { Accardion } from '@/shared/components/accardion'
import Typography from '@/shared/components/typography/typography'
import { Card, CardContent } from '@/shared/ui/card'
import React from 'react'

const CasinoReviewFaq = ({ faq, casinoName }: { faq: CasinoReviewFaq[], casinoName: string }) => {
    return (
        <Card>
            <CardContent className="flex-1 space-y-8 bento-block">
                <Typography as="h2" variant='h2'>Frequantly Asked Questions: <span className="text-primary">{casinoName}</span></Typography>
                <Accardion items={faq} />
            </CardContent>
        </Card>
    )
}

export default CasinoReviewFaq
