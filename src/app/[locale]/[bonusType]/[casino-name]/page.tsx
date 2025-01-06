import { fetchBonusById } from '@/entities/bonus'
import { BonusReviewPage } from '@/views/bonus-review'
import React from 'react'

const BonusReview = async ({ searchParams }: { searchParams: { uuid: string } }) => {
    const { uuid } = searchParams
    const { bonus } = await fetchBonusById(uuid)

    console.log(bonus)

    return <BonusReviewPage bonus={bonus} />
}

export default BonusReview
