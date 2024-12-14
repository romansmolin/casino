import React from 'react'
import { cookies } from 'next/headers'
import { CasinoReviewPage } from '@/views/casino-review'

const CasinoReview = async ({ searchParams }: { searchParams: { id: string } }) => {
    const { id } = searchParams
    return <CasinoReviewPage uuid={id}/>
}

export default CasinoReview
