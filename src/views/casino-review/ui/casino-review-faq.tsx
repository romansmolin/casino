import { Accardion } from '@/shared/components/accardion'
import React from 'react'

const CasinoReviewFaq = ({ faq , casinoName}: { faq: CasinoReviewFaq[], casinoName: string }) => {
    return (
        <>
            <h2 className="text-4xl font-extrabold tracking-tight">Frequantly Asked Questions: <span className="text-primary">{casinoName}</span></h2>
            <Accardion items={faq} />
        </>
    )
}

export default CasinoReviewFaq
