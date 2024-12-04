import React from 'react'
import { cookies } from 'next/headers'

const CasinoReview = async () => {
    const cookiesStore = await cookies()
    console.log('store: ', cookiesStore.get('CASINO_REVIEW_UUID'))
    return <div>CasinoReview</div>
}

export default CasinoReview
