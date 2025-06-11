import React, { Suspense } from 'react'

import { TermsAndConditionsPage } from '@/views/terms-and-conditions'

import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'

const TermsAndConditions = () => {
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <TermsAndConditionsPage />
        </Suspense>
    )
}

export default TermsAndConditions
