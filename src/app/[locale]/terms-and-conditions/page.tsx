import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'
import { TermsAndConditionsPage } from '@/views/terms-and-conditions'
import React, { Suspense } from 'react'

const TermsAndConditions = () => {
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <TermsAndConditionsPage />
        </Suspense>
    )
}

export default TermsAndConditions