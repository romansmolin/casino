import React, { Suspense } from 'react'

import { AboutUsPage } from '@/views/about-us'

import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'

const AboutUs = () => {
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <AboutUsPage />
        </Suspense>
    )
}

export default AboutUs
