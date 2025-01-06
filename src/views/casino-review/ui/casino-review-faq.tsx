import { Accardion } from '@/shared/components/accardion'
import { Card, CardContent } from '@/shared/ui/card'
import React from 'react'

const CasinoReviewFaq = ({ faq, casinoName }: { faq: CasinoReviewFaq[], casinoName: string }) => {
    return (
        <Card>
            <CardContent className="flex-1 space-y-8 bento-block">
                <h2 className="text-4xl font-extrabold tracking-tight">Frequantly Asked Questions: <span className="text-primary">{casinoName}</span></h2>
                <Accardion items={faq} />
            </CardContent>
        </Card>
    )
}

export default CasinoReviewFaq
