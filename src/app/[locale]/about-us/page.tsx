import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'
import { AboutUsPage } from '@/views/about-us'
import { getLocale } from 'next-intl/server'
import React, { Suspense } from 'react'

const AboutUs = () => {    
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <AboutUsPage />
        </Suspense>
    )
}

export default AboutUs